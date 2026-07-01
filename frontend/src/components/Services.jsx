import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Activity, HandHelping, Brain, Blocks, Star, ListChecks, Lightbulb, ArrowUpRight } from "lucide-react";
import { waLink } from "../data/site";

const SERVICES = [
    { id: "sensori", n: "01", icon: Blocks, title: "Terapi Sensori Integrasi", desc: "Membantu anak mengolah informasi sensorik — gerak, sentuh, dan keseimbangan — agar lebih fokus, tenang, dan siap belajar.", color: "blue" },
    { id: "aba", n: "02", icon: Star, title: "Terapi Perilaku ABA VB", desc: "Pendekatan ABA & Verbal Behavior untuk membangun perilaku positif, kemandirian, dan kemampuan komunikasi anak.", color: "green" },
    { id: "wicara", n: "03", icon: MessageSquare, title: "Terapi Wicara", desc: "Membantu kemampuan bicara, bahasa, dan komunikasi — termasuk speech delay dan gangguan artikulasi.", color: "red" },
    { id: "okupasi", n: "04", icon: HandHelping, title: "Terapi Okupasi", desc: "Mengasah motorik halus, sensori, dan kemandirian sehari-hari — makan, berpakaian, hingga fokus belajar.", color: "yellow" },
    { id: "fisioterapi", n: "05", icon: Activity, title: "Fisioterapi", desc: "Melatih kekuatan, koordinasi, dan motorik kasar agar anak bergerak lebih percaya diri.", color: "blue" },
    { id: "braingym", n: "06", icon: Brain, title: "Brain Gym", desc: "Gerakan sederhana yang menstimulasi otak untuk meningkatkan fokus, koordinasi, dan kesiapan belajar anak.", color: "green" },
    { id: "executive", n: "07", icon: ListChecks, title: "Executive Function", desc: "Melatih kemampuan merencanakan, mengatur, fokus, dan mengendalikan diri yang penting untuk belajar & keseharian.", color: "red" },
    { id: "cbt", n: "08", icon: Lightbulb, title: "Cognitive Behavioral Therapy", desc: "Membantu anak mengenali dan mengelola pikiran serta emosinya (CBT) agar lebih percaya diri dan adaptif.", color: "yellow" },
];

const C = {
    blue: { icon: "bg-brand-blue text-white", num: "text-brand-blue/10", link: "text-brand-blue", hover: "hover:border-brand-blue/40" },
    green: { icon: "bg-brand-green text-white", num: "text-brand-green/10", link: "text-brand-green", hover: "hover:border-brand-green/40" },
    red: { icon: "bg-brand-red text-white", num: "text-brand-red/10", link: "text-brand-red", hover: "hover:border-brand-red/40" },
    yellow: { icon: "bg-brand-yellow text-yamet-ink", num: "text-brand-yellow/25", link: "text-yamet-ink", hover: "hover:border-brand-yellow/50" },
};

export default function Services() {
    return (
        <section id="layanan" data-testid="services-section" className="relative py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-yamet-teal/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-yamet-teal shadow-sm">
                            Layanan Kami
                        </div>
                        <h2 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight text-yamet-ink sm:text-5xl lg:text-6xl">
                            Pendampingan menyeluruh,
                            <span className="text-yamet-teal"> dari hati ke hati.</span>
                        </h2>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-5 lg:pb-2">
                        <p className="text-base leading-relaxed text-yamet-ink-muted sm:text-lg">
                            Rangkaian layanan terapi YAMET yang bekerja bersama untuk mendukung perkembangan si kecil secara utuh — disusun individual sesuai kebutuhan tiap anak.
                        </p>
                        <a href={waLink("Halo YAMET, saya ingin konsultasi soal tumbuh kembang anak.")} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-yamet-teal px-5 py-3 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:gap-3 hover:bg-yamet-ink">
                            Konsultasi
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </motion.div>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICES.map((s, i) => {
                        const Icon = s.icon;
                        const c = C[s.color];
                        return (
                            <motion.div key={s.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }} data-testid={`service-card-${s.id}`} className={`group relative flex flex-col rounded-2xl border border-yamet-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft ${c.hover}`}>
                                <span className={`pointer-events-none absolute right-5 top-3 font-heading text-5xl font-black leading-none ${c.num}`}>{s.n}</span>
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.icon}`}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 font-heading text-lg font-extrabold text-yamet-ink">{s.title}</h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-yamet-ink-muted">{s.desc}</p>
                                <a href={waLink(`Halo YAMET, saya ingin tahu lebih lanjut soal ${s.title}.`)} target="_blank" rel="noopener noreferrer" data-testid={`service-card-${s.id}-link`} className={`mt-6 inline-flex items-center gap-1.5 border-t border-yamet-ink/10 pt-4 text-sm font-bold ${c.link} transition-all duration-300 group-hover:gap-2.5`}>
                                    Selengkapnya
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
