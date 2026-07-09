// Site-wide constants for YAMET Pekanbaru Kota

export const WHATSAPP_NUMBER = "6281374999954";

// Nomor untuk ditampilkan (format lokal)
export const PHONE_DISPLAY = "0813-7499-9954";

export const WA_DEFAULT_MESSAGE =
    "Halo YAMET Pekanbaru Kota, saya ingin berkonsultasi mengenai tumbuh kembang anak saya.";

export const waLink = (message = WA_DEFAULT_MESSAGE) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
    { label: "Layanan", href: "#layanan" },
    { label: "Tumbuh Kembang", href: "#tumbuh-kembang" },
    { label: "Tentang", href: "#mengapa-yamet" },
    { label: "Metode", href: "#alur" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" },
];

export const ADDRESS =
    "Jl. Taskurun Gg. Cempedak III Ruko No.15 A, Wonorejo, Marpoyan Damai, Kota Pekanbaru, Riau 28125";

export const OPENING_HOURS = [
    { day: "Minggu", hours: "Tutup", closed: true },
    { day: "Senin", hours: "08.00 – 18.00" },
    { day: "Selasa", hours: "08.00 – 18.00" },
    { day: "Rabu", hours: "08.00 – 18.00" },
    { day: "Kamis", hours: "08.00 – 18.00" },
    { day: "Jumat", hours: "08.00 – 18.00" },
    { day: "Sabtu", hours: "08.00 – 15.00" },
];

export const INSTAGRAM_HANDLE = "@yametpekanbaru.kota";
export const INSTAGRAM_URL = "https://instagram.com/yametpekanbaru.kota";

// Direct ke tempat YAMET (bukan query alamat teks). Embed pakai nama bisnis
// + koordinat asli; tautan pakai short-link resmi Google Maps.
export const MAPS_EMBED_URL =
    "https://www.google.com/maps?q=Yamet+CDC+Pekanbaru+Kota&center=0.5075083,101.4456889&z=16&output=embed";

// Semua tautan alamat & ulasan mengarah ke link Google resmi berikut.
export const MAPS_LINK = "https://share.google/iXTVJMxxyj5ObNQoe";

// Google Business / Maps reviews (label "Google" & jumlah ulasan tidak ditampilkan
// di UI — data lama Palembang; tautan tetap mengarah ke Google saat diklik).
export const GOOGLE_REVIEW_URL = "https://share.google/iXTVJMxxyj5ObNQoe";
