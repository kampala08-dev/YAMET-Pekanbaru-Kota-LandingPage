"""Backend API tests for YAMET Palembang Dempo landing page."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
if not BASE_URL:
    # Fallback - read from frontend .env
    with open('/app/frontend/.env') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
                break

API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_message(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("message") == "YAMET Palembang Dempo API"


# ---------- Leads CRUD ----------
class TestLeads:
    def test_create_lead_valid(self, client):
        payload = {
            "parent_name": "TEST_Bunda Ayu",
            "whatsapp": "+62 812-3456-7890",
            "child_age": "2 tahun",
            "concern": "Anak belum bisa bicara dengan jelas, butuh konsultasi.",
        }
        r = client.post(f"{API}/leads", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        # Structure
        for k in ("id", "parent_name", "whatsapp", "concern", "created_at", "source"):
            assert k in data, f"missing key {k} in {data}"
        # Values
        assert data["parent_name"] == "TEST_Bunda Ayu"
        # whatsapp sanitised
        assert data["whatsapp"] == "+6281234567890", f"whatsapp not sanitised: {data['whatsapp']}"
        assert data["source"] == "landing_page"
        assert isinstance(data["id"], str) and len(data["id"]) > 0
        # Stash id
        pytest.created_lead_id = data["id"]
        pytest.created_lead_whatsapp = data["whatsapp"]

    def test_get_leads_persisted_and_sorted(self, client):
        r = client.get(f"{API}/leads")
        assert r.status_code == 200, r.text
        items = r.json()
        assert isinstance(items, list)
        # Newly created lead present
        ids = [it.get("id") for it in items]
        assert getattr(pytest, "created_lead_id", None) in ids
        # Required fields
        sample = next(it for it in items if it["id"] == pytest.created_lead_id)
        for k in ("id", "parent_name", "whatsapp", "concern", "created_at"):
            assert k in sample
        # Sorted newest first - check first two if at least 2
        if len(items) >= 2:
            assert items[0]["created_at"] >= items[1]["created_at"]

    def test_create_lead_missing_parent_name(self, client):
        payload = {"parent_name": "", "whatsapp": "081234567890", "concern": "Konsultasi anak"}
        r = client.post(f"{API}/leads", json=payload)
        assert r.status_code == 422, f"expected 422 got {r.status_code}: {r.text}"

    def test_create_lead_missing_whatsapp(self, client):
        payload = {"parent_name": "Ibu Test", "whatsapp": "", "concern": "Konsultasi anak"}
        r = client.post(f"{API}/leads", json=payload)
        assert r.status_code == 422

    def test_create_lead_concern_too_short(self, client):
        payload = {"parent_name": "Ibu Test", "whatsapp": "081234567890", "concern": "abc"}
        r = client.post(f"{API}/leads", json=payload)
        assert r.status_code == 422

    def test_create_lead_missing_concern(self, client):
        payload = {"parent_name": "Ibu Test", "whatsapp": "081234567890"}
        r = client.post(f"{API}/leads", json=payload)
        assert r.status_code == 422

    def test_whatsapp_sanitisation_explicit(self, client):
        payload = {
            "parent_name": "TEST_Sanitize",
            "whatsapp": "+62 812-3456-7890",
            "concern": "Test sanitisation untuk nomor WA.",
        }
        r = client.post(f"{API}/leads", json=payload)
        assert r.status_code == 201, r.text
        assert r.json()["whatsapp"] == "+6281234567890"
