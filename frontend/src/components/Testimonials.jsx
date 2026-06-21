import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
    {
        id: "t1",
        quote:
            "[Testimoni segera hadir — akan kami isi dengan foto & video orang tua asli setelah persetujuan.]",
        parent: "Bunda P.",
        child: "Orang tua dari pasien YAMET",
        location: "Palembang",
    },
    {
        id: "t2",
        quote:
            "[Testimoni segera hadir — akan kami isi dengan foto & video orang tua asli setelah persetujuan.]",
        parent: "Ayah R.",
        child: "Orang tua dari pasien YAMET",
        location: "Palembang",
    },
    {
        id: "t3",
        quote:
            "[Testimoni segera hadir — akan kami isi dengan foto & video orang tua asli setelah persetujuan.]",
        parent: "Bunda D.",
        child: "Orang tua dari pasien YAMET",
        location: "Palembang",
    },
];

export default function Testimonials() {
    const [idx, setIdx] = useState(0);
    const total = TESTIMONIALS.length;

    useEffect(() => {
        const t = setInterval(() => setIdx((p) => (p + 1) % total), 6000);
        return () => clearInterval(t);
    }, [total]);

    const next = () => setIdx((p) => (p + 1) % total);
    const prev = () => setIdx((p) => (p - 1 + total) % total);

    return (
        <section
            id="testimoni"
            data-testid="testimonials-section"
            className="relative py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-5xl px-5 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-yamet-teal/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-yamet-teal shadow-sm">
                        Cerita Orang Tua
                    </div>
                    <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-yamet-ink sm:text-4xl lg:text-5xl">
                        Kepercayaan keluarga{" "}
                        <span className="text-yamet-teal">jadi semangat kami.</span>
                    </h2>
                </motion.div>

                <div className="relative mt-12">
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative mx-auto max-w-3xl rounded-[28px] bg-white p-8 shadow-glow ring-1 ring-yamet-teal/10 sm:p-12"
                        data-testid={`testimonial-card-${idx}`}
                    >
                        <Quote className="h-10 w-10 text-yamet-peach" />
                        <p className="mt-5 font-heading text-xl leading-relaxed text-yamet-ink sm:text-2xl">
                            “{TESTIMONIALS[idx].quote}”
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yamet-teal-50 font-heading text-base font-extrabold text-yamet-teal">
                                {TESTIMONIALS[idx].parent.charAt(0)}
                            </div>
                            <div>
                                <div className="font-heading text-base font-extrabold text-yamet-ink">
                                    {TESTIMONIALS[idx].parent}
                                </div>
                                <div className="text-xs text-yamet-ink-muted">
                                    {TESTIMONIALS[idx].child} · {TESTIMONIALS[idx].location}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <button
                            type="button"
                            onClick={prev}
                            data-testid="testimonial-prev"
                            aria-label="Testimoni sebelumnya"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-yamet-teal shadow-soft ring-1 ring-yamet-teal/15 transition-all hover:-translate-y-0.5 hover:shadow-glow"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <div className="flex items-center gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    type="button"
                                    key={i}
                                    onClick={() => setIdx(i)}
                                    data-testid={`testimonial-dot-${i}`}
                                    aria-label={`Testimoni ${i + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        i === idx
                                            ? "w-8 bg-yamet-teal"
                                            : "w-2 bg-yamet-teal/30 hover:bg-yamet-teal/50"
                                    }`}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={next}
                            data-testid="testimonial-next"
                            aria-label="Testimoni berikutnya"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-yamet-teal shadow-soft ring-1 ring-yamet-teal/15 transition-all hover:-translate-y-0.5 hover:shadow-glow"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
