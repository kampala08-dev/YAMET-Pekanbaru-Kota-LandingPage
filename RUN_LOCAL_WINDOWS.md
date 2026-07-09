# Menjalankan YAMET Pekanbaru Kota Landing Page di Windows (Lokal)

Aplikasi terdiri dari **backend** (FastAPI + MongoDB) dan **frontend** (React/CRA).
Jalankan keduanya di dua jendela terminal (PowerShell) terpisah.

## Prasyarat (install sekali)
- **Node.js 18+** dan **Yarn** — https://nodejs.org , lalu `npm install -g yarn`
- **Python 3.11+** — https://www.python.org/downloads/ (centang "Add Python to PATH")
- **MongoDB Community Server** — https://www.mongodb.com/try/download/community
  - Pilih opsi "Install as a Service" supaya MongoDB otomatis jalan di `localhost:27017`.

File `.env` sudah saya buatkan:
- `backend\.env`  → `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`
- `frontend\.env` → `REACT_APP_BACKEND_URL=http://localhost:8001`

---

## 1) Backend (Terminal 1)

```powershell
cd C:\YAMET-Pekanbaru-Kota-LandingPage\backend

# buat & aktifkan virtual environment
python -m venv venv
.\venv\Scripts\Activate.ps1

# install dependency
# (catatan: paket 'emergentintegrations' tidak ada di PyPI dan TIDAK dipakai server.py)
pip install fastapi==0.110.1 "uvicorn==0.25.0" "pymongo==4.6.3" "motor==3.3.1" "pydantic>=2.6.4" python-dotenv "email-validator>=2.2.0"

# jalankan API di port 8001
python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Cek berhasil: buka http://localhost:8001/docs (dokumentasi API muncul).

> Jika `Activate.ps1` ditolak, jalankan sekali:
> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

---

## 2) Frontend (Terminal 2)

```powershell
cd C:\YAMET-Pekanbaru-Kota-LandingPage\frontend

yarn install
yarn start
```

Browser otomatis terbuka di **http://localhost:3000**.

---

## Urutan jalan
1. Pastikan MongoDB service aktif (services.msc → MongoDB → Running).
2. Start backend (Terminal 1) → tunggu sampai "Application startup complete".
3. Start frontend (Terminal 2).
4. Buka http://localhost:3000 — form kontak akan mengirim ke `http://localhost:8001/api/leads`.

## Masalah umum
- **Form kontak gagal kirim** → backend belum jalan atau MongoDB mati. Cek Terminal 1.
- **Port 3000/8001 dipakai** → tutup proses lama, atau ubah port (frontend: `set PORT=3001 && yarn start`).
- **`MONGO_URL` KeyError** → `backend\.env` tidak terbaca; pastikan jalankan uvicorn dari folder `backend`.
