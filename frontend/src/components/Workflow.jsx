import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, FileText, HeartHandshake, LineChart } from "lucide-react";

const STEPS = [
    {
        n: "01",
        icon: ClipboardCheck,
        title: "Konsultasi & Asesmen Awal",
        desc: "Diskusi awal dengan terapis & psikolog untuk memahami kondisi dan kebutuhan anak.",
    },
    {
        n: "02",
        icon: FileText,
        title: "Penyusunan Program Individual",
        desc: "Program terapi disusun khusus berdasarkan asesmen — bukan satu solusi untuk semua.",
    },
    {
        n: "03",
        icon: HeartHandshake,
        title: "Sesi Terapi Rutin",
        desc: "Pendampingan rutin yang hangat, terstruktur, dan menyenangkan untuk anak.",
    },
    {
        n: "04",
        icon: LineChart,
        title: "Evaluasi & Laporan Perkembangan",
        desc: "Update berkala untuk orang tua — transparan, terukur, dan komunikatif.",
    },
];

export default function Workflow() {
    return (
        <section
            id="alur"
            data-testid="workflow-section"
            className="relative bg-gradient-to-b from-yamet-teal-50/30 to-transparent py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-yamet-teal/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-yamet-teal shadow-sm">
                        Alur Layanan
                    </div>
                    <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-yamet-ink sm:text-4xl lg:text-5xl">
                        Empat langkah,{" "}
                        <span className="text-yamet-teal">satu tujuan</span>.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-yamet-ink-muted sm:text-lg">
                        Proses sederhana yang dirancang agar Anda dan si kecil merasa didampingi
                        dari awal hingga progres terlihat.
                    </p>
                </motion.div>

                <div className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                    {/* Connecting line (desktop) */}
                    <div className="absolute left-0 right-0 top-14 hidden h-0.5 lg:block" aria-hidden="true">
                        <div className="mx-12 h-full rounded-full border-t-2 border-dashed border-yamet-teal/30" />
                    </div>

                    {STEPS.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div
                                key={s.n}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.55, delay: i * 0.1 }}
                                whileHover={{ y: -6 }}
                                data-testid={`workflow-step-${i + 1}`}
                                className="relative rounded-3xl bg-white p-6 shadow-soft ring-1 ring-yamet-teal/10 transition-shadow hover:shadow-glow"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-yamet-teal text-white shadow-md">
                                        <Icon className="h-6 w-6" />
                                        <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-yamet-peach text-[10px] font-extrabold text-yamet-ink ring-2 ring-white">
                                            {s.n}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="mt-5 font-heading text-base font-extrabold text-yamet-ink sm:text-lg">
                                    {s.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-yamet-ink-muted">
                                    {s.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
