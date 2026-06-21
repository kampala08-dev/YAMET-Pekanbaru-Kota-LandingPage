import React from "react";
import { motion } from "framer-motion";

const CONDITIONS = [
    { title: "Speech delay", desc: "Keterlambatan bicara" },
    { title: "Autisme / ASD", desc: "Spektrum autisme pada anak" },
    { title: "Gangguan artikulasi", desc: "Pelafalan kurang jelas" },
    { title: "Keterlambatan tumbuh kembang", desc: "Milestone yang belum tercapai" },
    { title: "Kesulitan motorik", desc: "Motorik kasar / halus" },
    { title: "Kesulitan fokus & perilaku", desc: "Atensi, regulasi emosi" },
];

export default function Conditions() {
    return (
        <section
            id="kondisi"
            data-testid="conditions-section"
            className="relative py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-6xl px-5 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-yamet-teal/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-yamet-teal shadow-sm">
                        Kondisi yang Kami Tangani
                    </div>
                    <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-yamet-ink sm:text-4xl lg:text-5xl">
                        Kami hadir untuk{" "}
                        <span className="text-yamet-teal">setiap perjalanan</span> tumbuh kembang.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-yamet-ink-muted sm:text-lg">
                        Bila Anda mengenali salah satu hal berikut pada si kecil, jangan ragu untuk
                        bertanya — kami siap mendengarkan.
                    </p>
                </motion.div>

                <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                    {CONDITIONS.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            whileHover={{ y: -3 }}
                            data-testid={`condition-${i}`}
                            className="group rounded-2xl bg-white p-5 shadow-soft ring-1 ring-yamet-teal/10 transition-shadow hover:shadow-glow"
                        >
                            <div className="flex items-center gap-2.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-yamet-peach transition-transform group-hover:scale-150" />
                                <h3 className="font-heading text-sm font-extrabold text-yamet-ink sm:text-base">
                                    {c.title}
                                </h3>
                            </div>
                            <p className="mt-1.5 text-xs leading-relaxed text-yamet-ink-muted sm:text-sm">
                                {c.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
