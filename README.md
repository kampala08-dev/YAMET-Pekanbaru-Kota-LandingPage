# YAMET Pekanbaru Kota — Landing Page

Landing page interaktif untuk **YAMET Child Development Center — Pekanbaru Kota**, pusat tumbuh kembang & terapi anak. Dibangun untuk membantu orang tua mengenali kebutuhan si kecil dan mengajak mereka berkonsultasi lewat WhatsApp.

> 📍 Jl. Taskurun Gg. Cempedak III Ruko No.15 A, Wonorejo, Marpoyan Damai, Kota Pekanbaru, Riau 28125 · Dipercaya banyak orang tua.

---

## ✨ Fitur Utama

- **Header 2 tingkat** — top bar (WhatsApp, lokasi, jam operasional, "Follow Us") yang menyusut halus saat scroll, di atas nav bar (menu + tombol **"Konsultasi Sekarang"**).
- **Hero 3D "Ruang Sensori Integrasi"** — visualisasi WebGL (Three.js) berisi ayunan terapi, ball pit, perosotan, panjat tebing, terowongan, dll. + foto anak sebagai fokus. Bisa di-drag (inersia) & parallax mengikuti mouse.
- **Perjalanan Tumbuh Kembang (0–5 tahun)** — journey milestone berbasis **Denver II**, foto anak yang berganti per usia, plus **panel "Stimulasi Ayah & Bunda"** (saran yang bisa dilakukan orang tua di tiap tahap). Desktop = pinned scroll, mobile = stacked.
- **7 Jenis Layanan Terapi** — Terapi Perilaku (Behaviour Therapy), Terapi Okupasi, Terapi Wicara, Sensori Integrasi, Fisioterapi, Brain Gym, dan Remedial.
- **Kondisi yang Ditangani** — speech delay, autisme/ASD, gangguan artikulasi, keterlambatan tumbuh kembang, kesulitan motorik, kesulitan fokus & perilaku, **ADHD**, **Cerebral Palsy**, dan **Down Syndrome** (dengan penjelasan mendalam).
- **Alur Layanan 5 langkah** — Observasi Anak → Asesmen → Program Individual → Sesi Terapi → Evaluasi.
- **Testimoni orang tua** — kartu ulasan yang bisa diklik langsung ke halaman Google (tanpa menampilkan jumlah/atribusi ulasan).
- **WhatsApp-first** — semua CTA mengarah ke WhatsApp, plus form lead yang tersimpan ke backend.
- **Tema seafoam mint** — palet warna selaras dengan logo & feed Instagram (`@yametpekanbaru.kota`).
- **Mobile-first & cepat** — gambar WebP teroptimasi, `three.js` di-*code-split* (tidak diunduh di HP), smooth scroll (Lenis) khusus desktop, hormati `prefers-reduced-motion`.

## 🛠️ Teknologi

**Frontend**
- React 19 · Create React App + [CRACO](https://craco.js.org/)
- Tailwind CSS · shadcn/ui (Radix UI)
- Framer Motion (animasi) · Lenis (smooth scroll)
- Three.js (`three`) — scene 3D
- lucide-react (ikon) · sonner (toast)

**Backend**
- FastAPI + MongoDB — penyimpanan lead (`POST` / `GET` `/api/leads`)

**Tooling**
- Yarn · sharp (optimasi gambar)

## 📁 Struktur Proyek

```
YAMET-Pekanbaru-Kota-LandingPage/
├── frontend/                 # Aplikasi React (landing page)
│   ├── public/               # index.html, logo, foto anak (WebP)
│   ├── src/
│   │   ├── App.js            # root + smooth scroll (Lenis)
│   │   ├── components/       # Navbar, Hero, SensoryRoom3D, GrowthJourney, Services, dll.
│   │   ├── data/             # site.js (kontak/link), growth.js (milestone)
│   │   ├── hooks/            # useLenis.js
│   │   └── index.css         # tema (Tailwind + CSS variables)
│   ├── craco.config.js
│   └── tailwind.config.js
├── backend/                  # FastAPI + MongoDB (lead capture)
│   ├── server.py
│   └── requirements.txt
├── RUN_LOCAL_WINDOWS.md      # panduan menjalankan di Windows
└── START-LANDING-PAGE.bat    # shortcut menjalankan di Windows
```

## 🚀 Menjalankan Secara Lokal

**Prasyarat:** Node.js 18+, Yarn. (Backend opsional: Python 3.11+ & MongoDB.)

### Frontend
```bash
cd frontend
yarn install
yarn start          # http://localhost:3000
```
Buat file `frontend/.env`:
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend (opsional — untuk form lead)
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```
Buat file `backend/.env`:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=yamet
CORS_ORIGINS=http://localhost:3000
```

> 💡 Pengguna Windows bisa langsung memakai **`START-LANDING-PAGE.bat`** atau ikuti **`RUN_LOCAL_WINDOWS.md`**.

## 📦 Build Produksi

```bash
cd frontend
yarn build          # output ke frontend/build (static)
```
Hasil build bisa dideploy ke Vercel / Netlify / Cloudflare Pages / server statis mana pun.

## 🔐 Environment & Keamanan

Semua file `.env` **di-`.gitignore`** dan **tidak** disertakan di repo. Jangan pernah commit kredensial. Variabel yang dibutuhkan tercantum di bagian **Menjalankan Secara Lokal** di atas.

## 📝 Catatan

- Konten & UI dalam **Bahasa Indonesia**, ditujukan untuk orang tua di Pekanbaru.
- Milestone bersifat **panduan edukatif** (diadaptasi dari Denver II), bukan diagnosis.

---

© YAMET Pekanbaru Kota. Semua hak dilindungi.
