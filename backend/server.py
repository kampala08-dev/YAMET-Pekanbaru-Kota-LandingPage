from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import re
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, field_validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="YAMET Palembang Dempo API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ============================================================
# Models
# ============================================================
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class LeadCreate(BaseModel):
    """Lead form: Nama Orang Tua, No. WhatsApp, Keluhan/Kebutuhan."""
    parent_name: str = Field(..., min_length=2, max_length=120)
    whatsapp: str = Field(..., min_length=8, max_length=20)
    child_age: Optional[str] = Field(default=None, max_length=40)
    concern: str = Field(..., min_length=5, max_length=2000)

    @field_validator("parent_name")
    @classmethod
    def _validate_name(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Nama orang tua wajib diisi")
        return v

    @field_validator("whatsapp")
    @classmethod
    def _validate_whatsapp(cls, v: str) -> str:
        v = v.strip()
        # Keep only digits/plus to normalize
        cleaned = re.sub(r"[^\d+]", "", v)
        if len(cleaned) < 8:
            raise ValueError("Nomor WhatsApp tidak valid")
        return cleaned

    @field_validator("concern")
    @classmethod
    def _validate_concern(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 5:
            raise ValueError("Mohon ceritakan kebutuhan singkat (min 5 karakter)")
        return v


class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    parent_name: str
    whatsapp: str
    child_age: Optional[str] = None
    concern: str
    source: str = "landing_page"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ============================================================
# Routes
# ============================================================
@api_router.get("/")
async def root():
    return {"message": "YAMET Palembang Dempo API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/leads", response_model=Lead, status_code=201)
async def create_lead(payload: LeadCreate):
    lead = Lead(**payload.model_dump())
    doc = lead.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    try:
        await db.leads.insert_one(doc)
    except Exception as e:
        logger.exception("Failed to insert lead: %s", e)
        raise HTTPException(status_code=500, detail="Gagal menyimpan data. Coba lagi nanti.")
    return lead


@api_router.get("/leads", response_model=List[Lead])
async def list_leads(limit: int = 200):
    """List recent leads. Admin endpoint placeholder (no auth in MVP)."""
    cursor = db.leads.find({}, {"_id": 0}).sort("created_at", -1).limit(min(limit, 1000))
    items = await cursor.to_list(length=limit)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
