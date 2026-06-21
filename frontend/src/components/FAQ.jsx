import React from "react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

const FAQS = [
    {
        q: "Usia berapa anak sudah bisa mulai terapi?",
        a: "Terapi di YAMET dapat dimulai sejak dini, bahkan untuk bayi yang terdeteksi memiliki keterlambatan perkembangan. Semakin dini intervensi dilakukan, semakin baik hasilnya. Kami melayani anak dari usia 0 bulan sampai usia sekolah.",
    },
    {
        q: "Berapa durasi dan frekuensi sesi terapinya?",
        a: "Umumnya satu sesi terapi berlangsung 45–60 menit. Frekuensi sesi ditentukan setelah asesmen awal berdasarkan kebutuhan anak — bisa 1–3 kali per minggu, dan akan dievaluasi secara berkala.",
    },
    {
        q: "Apakah perlu rujukan dari dokter?",
        a: "Tidak wajib. Anda dapat langsung datang untuk konsultasi awal. Namun, jika sudah memiliki hasil pemeriksaan dokter spesialis anak atau psikiater, kami akan dengan senang hati menjadikan itu sebagai referensi tambahan.",
    },
    {
        q: "Bagaimana cara mendaftar?",
        a: "Cukup hubungi WhatsApp kami untuk konsultasi gratis. Tim YAMET akan membantu menjadwalkan asesmen awal sesuai ketersediaan Anda.",
    },
    {
        q: "Berapa estimasi biaya dan paketnya?",
        a: "Biaya disesuaikan dengan jenis layanan dan jumlah sesi. Kami memiliki paket fleksibel — mulai dari asesmen awal, sesi terapi reguler, hingga paket bulanan. Hubungi kami via WhatsApp untuk informasi paket terbaru.",
    },
];

export default function FAQ() {
    return (
        <section
            id="faq"
            data-testid="faq-section"
            className="relative bg-yamet-teal-50/30 py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-4xl px-5 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-yamet-teal/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-yamet-teal shadow-sm">
                        Pertanyaan Umum
                    </div>
                    <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-yamet-ink sm:text-4xl lg:text-5xl">
                        Hal yang sering{" "}
                        <span className="text-yamet-teal">ditanyakan orang tua.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-12 rounded-3xl bg-white p-3 shadow-soft ring-1 ring-yamet-teal/10 sm:p-5"
                >
                    <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
                        {FAQS.map((f, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="border-b border-yamet-teal/10 last:border-0"
                                data-testid={`faq-item-${i}`}
                            >
                                <AccordionTrigger
                                    data-testid={`faq-trigger-${i}`}
                                    className="px-3 py-5 text-left font-heading text-base font-extrabold text-yamet-ink hover:no-underline sm:px-4 sm:text-lg"
                                >
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent
                                    data-testid={`faq-content-${i}`}
                                    className="px-3 pb-5 text-sm leading-relaxed text-yamet-ink-muted sm:px-4 sm:text-base"
                                >
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
