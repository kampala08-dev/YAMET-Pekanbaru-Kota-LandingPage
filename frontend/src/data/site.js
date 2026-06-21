// Site-wide constants for YAMET Palembang Dempo

export const WHATSAPP_NUMBER = "6281372394004";

export const WA_DEFAULT_MESSAGE =
    "Halo YAMET Palembang Dempo, saya ingin berkonsultasi mengenai tumbuh kembang anak saya.";

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
    "Jl. Dempo Luar No.558, 17 Ilir, Kec. Ilir Tim. I, Kota Palembang, Sumatera Selatan 30125";

export const OPENING_HOURS = [
    { day: "Minggu", hours: "Tutup", closed: true },
    { day: "Senin", hours: "08.00 – 18.00" },
    { day: "Selasa", hours: "08.00 – 18.00" },
    { day: "Rabu", hours: "08.00 – 18.00" },
    { day: "Kamis", hours: "08.00 – 18.00" },
    { day: "Jumat", hours: "08.00 – 18.00" },
    { day: "Sabtu", hours: "08.00 – 15.00" },
];

export const INSTAGRAM_HANDLE = "@yametpalembang";
export const INSTAGRAM_URL = "https://instagram.com/yametpalembang";

export const MAPS_EMBED_URL =
    "https://www.google.com/maps?q=Jl.+Dempo+Luar+No.558,+17+Ilir,+Kec.+Ilir+Tim.+I,+Kota+Palembang,+Sumatera+Selatan+30125&output=embed";

export const MAPS_LINK =
    "https://www.google.com/maps?q=Jl.+Dempo+Luar+No.558,+17+Ilir,+Kec.+Ilir+Tim.+I,+Kota+Palembang,+Sumatera+Selatan+30125";
