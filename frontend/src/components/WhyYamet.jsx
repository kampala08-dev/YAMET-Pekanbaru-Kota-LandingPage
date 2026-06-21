import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Users, Microscope, FileBarChart, Sparkles } from "lucide-react";

const POINTS = [
    {
        icon: ClipboardList,
        title: "Asesmen menyeluruh & program individual",
        desc: "Setiap anak dimulai dengan asesmen mendalam — programnya disusun khusus untuk kebutuhannya.",
    },
    {
        icon: Users,
        title: "Tim profesional berpengalaman",
        desc: "Terapis wicara, fisioterapis, terapis okupasi, dan psikolog anak yang berlisensi & ramah anak.",
    },
    {
        icon: Microscope,
        title: "Metode terstruktur berbasis bukti",
        desc: "Pendekatan klinis modern yang telah teruji, dipadukan dengan kehangatan dan permainan.",
    },
    {
        icon: FileBarChart,
        title: "Laporan perkembangan berkala",
        desc: "Orang tua mendapat update jelas tentang progres anak secara berkala — transparan dan terukur.",
    },
    {
        icon: Sparkles,
        title: "Lingkungan ramah anak",
        desc: "Ruang terapi yang lembut, aman, dan menyenangkan — supaya si kecil betah dan berkembang.",
    },
];

export default function WhyYamet() {
    return (
        <section
            id="mengapa-yamet"
            data-testid="why-yamet-section"
            className="relative bg-yamet-teal-50/40 py-20 sm:py-24 lg:py-28"
        >
            <div aria-hidden="true" className="absolute inset-0 grain-bg opacity-40" />
            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-yamet-teal/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-yamet-teal shadow-sm">
                            Mengapa YAMET
                        </div>
                        <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-yamet-ink sm:text-4xl lg:text-5xl">
                            Bukan sekadar terapi.
                            <span className="block text-yamet-teal">Pendampingan yang penuh hati.</span>
                        </h2>
                        <p className="mt-5 max-w-md text-base leading-relaxed text-yamet-ink-muted sm:text-lg">
                            Kami percaya intervensi dini yang dilakukan dengan sabar, terstruktur,
                            dan hangat akan membuka pintu terbaik untuk masa depan anak Anda.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                        {POINTS.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <motion.div
                                    key={p.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: i * 0.07 }}
                                    whileHover={{ y: -4 }}
                                    data-testid={`why-point-${i}`}
                                    className="group rounded-3xl bg-white p-5 shadow-soft ring-1 ring-yamet-teal/10 transition-shadow hover:shadow-glow"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yamet-teal-50 text-yamet-teal transition-transform group-hover:scale-110 group-hover:rotate-3">
                                            <Icon className="h-6 w-6" />
                                        </span>
                                        <div>
                                            <h3 className="font-heading text-base font-extrabold text-yamet-ink">
                                                {p.title}
                                            </h3>
                                            <p className="mt-1 text-sm leading-relaxed text-yamet-ink-muted">
                                                {p.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
