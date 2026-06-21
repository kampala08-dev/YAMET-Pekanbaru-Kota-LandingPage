import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Activity, HandHelping, Brain, ArrowRight } from "lucide-react";
import { waLink } from "../data/site";

const SERVICES = [
    {
        id: "wicara",
        icon: MessageSquare,
        title: "Terapi Wicara",
        desc: "Membantu kemampuan bicara, bahasa, dan komunikasi anak — termasuk speech delay dan gangguan artikulasi.",
        bg: "bg-yamet-teal-50",
        accent: "text-yamet-teal",
        badge: "bg-yamet-teal text-white",
    },
    {
        id: "fisioterapi",
        icon: Activity,
        title: "Fisioterapi",
        desc: "Melatih kekuatan, koordinasi, dan kemampuan motorik kasar agar anak bergerak lebih percaya diri.",
        bg: "bg-yamet-peach/30",
        accent: "text-yamet-orange",
        badge: "bg-yamet-orange text-white",
    },
    {
        id: "okupasi",
        icon: HandHelping,
        title: "Terapi Okupasi",
        desc: "Mengasah motorik halus, sensori, dan kemandirian sehari-hari (makan, berpakaian, fokus belajar).",
        bg: "bg-yamet-teal-50",
        accent: "text-yamet-teal",
        badge: "bg-yamet-teal text-white",
    },
    {
        id: "psikologi",
        icon: Brain,
        title: "Psikologi Anak",
        desc: "Asesmen, intervensi perilaku, dan dukungan emosi untuk anak serta pendampingan orang tua.",
        bg: "bg-yamet-peach/30",
        accent: "text-yamet-orange",
        badge: "bg-yamet-orange text-white",
    },
];

export default function Services() {
    return (
        <section
            id="layanan"
            data-testid="services-section"
            className="relative py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-yamet-teal/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-yamet-teal shadow-sm">
                        Layanan Kami
                    </div>
                    <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-yamet-ink sm:text-4xl lg:text-5xl">
                        Pendampingan menyeluruh,
                        <span className="text-yamet-teal"> dari hati ke hati.</span>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-yamet-ink-muted sm:text-lg">
                        Empat pilar layanan YAMET yang bekerja bersama untuk mendukung perkembangan
                        si kecil secara utuh.
                    </p>
                </motion.div>

                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICES.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div
                                key={s.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                                whileHover={{ y: -8 }}
                                data-testid={`service-card-${s.id}`}
                                className={`group relative overflow-hidden rounded-3xl ${s.bg} p-6 shadow-soft ring-1 ring-yamet-teal/10 transition-shadow hover:shadow-glow`}
                            >
                                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/40 blur-2xl transition-all duration-500 group-hover:scale-150" />
                                <div
                                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${s.badge} shadow-md`}
                                >
                                    <Icon className="h-7 w-7" />
                                </div>
                                <h3 className="relative mt-5 font-heading text-xl font-extrabold text-yamet-ink">
                                    {s.title}
                                </h3>
                                <p className="relative mt-2 text-sm leading-relaxed text-yamet-ink-muted">
                                    {s.desc}
                                </p>
                                <a
                                    href={waLink(`Halo YAMET, saya ingin tahu lebih lanjut soal ${s.title}.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={`service-card-${s.id}-link`}
                                    className={`relative mt-5 inline-flex items-center gap-1.5 text-sm font-bold ${s.accent} hover:gap-2.5 transition-all duration-300`}
                                >
                                    Selengkapnya
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
