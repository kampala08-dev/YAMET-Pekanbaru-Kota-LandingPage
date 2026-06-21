# PRD — YAMET Palembang Dempo Landing Page

## Original Problem Statement (verbatim)
Build a modern, interactive Bahasa-Indonesia landing page for YAMET Palembang Dempo — a child development center offering speech therapy, physiotherapy, occupational therapy and child psychology. The page must feel alive and animated, with a featured "Perjalanan Tumbuh Kembang Anak" timeline showing milestones per age (0–12 months through 5–6 years). Warm/trustworthy tone, soft teal + peach palette, mobile-first, smooth animations and scroll-reveal. WhatsApp CTAs throughout (number: 6281372394004). Lead-capture form that saves to backend. Embedded Google Maps. SEO keywords: terapi anak Palembang, terapi wicara Palembang, tumbuh kembang anak Palembang.

## User Personas
- **Orang tua kelas menengah-atas di Palembang** dengan anak yang mengalami speech delay, autisme/ASD, gangguan artikulasi, atau keterlambatan tumbuh kembang — butuh kepercayaan, harapan, dan kejelasan langkah berikutnya.

## Architecture
- **Frontend**: React 19 + CRA + craco, Tailwind, shadcn/ui, Framer Motion, Sonner toasts.
- **Backend**: FastAPI + Motor (Mongo). Endpoints: `POST /api/leads`, `GET /api/leads`, plus legacy `/status` health.
- **DB collections**: `leads` (id, parent_name, whatsapp, child_age?, concern, source, created_at).

## Implemented (2026-06-21)
- Sticky animated navbar with smooth-scroll nav and WA CTA.
- Hero with floating illustration, trust badges, dual CTAs (WhatsApp + scroll to timeline).
- **Perjalanan Tumbuh Kembang timeline** — 6 stages, vertical rail that "draws" via Framer Motion `useScroll`, custom SVG illustrations per stage with floaty animations, milestone categories (Bahasa & Bicara · Motorik · Sosial & Emosi · Kognitif & Kemandirian), per-stage WhatsApp CTA, mobile sticky age indicator that follows scroll, medical-note disclaimer.
- Layanan (4 service cards), Mengapa YAMET (5 differentiators), Kondisi yang Ditangani (6 chips), Alur Layanan (4-step process), Testimonials carousel (placeholder copy), FAQ accordion (5 items), Closing CTA, Contact (lead form -> POST /api/leads, address, opening hours, Instagram, embedded Google Maps), Footer.
- Floating WhatsApp button with pulse + speech-bubble tip.
- SEO meta tags + Indonesian keywords.

## What's NOT done yet (backlog)
- **P1**: Logo upload (currently wordmark placeholder).
- **P1**: Real testimonials (foto/video assets pending from owner).
- **P2**: Lottie illustrations (currently using custom animated SVG — looks great but Lottie can elevate further once we pick branded files).
- **P2**: Simple admin/dashboard for `/api/leads` (currently public read for MVP — needs auth before production).
- **P2**: Email/WhatsApp notification on new lead submission (Resend or Twilio).
- **P2**: Analytics (GA4 / Meta pixel).

## Test artefacts
- `/app/backend/tests/test_leads_api.py` (8/8 pass)
- `/app/test_reports/iteration_1.json`, `/app/test_reports/iteration_2.json` (final: backend 100%, frontend 100%)
