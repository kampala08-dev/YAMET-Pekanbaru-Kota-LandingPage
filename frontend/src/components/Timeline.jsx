import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, MessageSquare, Activity, Heart, Lightbulb, ShieldCheck } from "lucide-react";
import { MILESTONES } from "../data/milestones";
import { waLink } from "../data/site";
import StageIllustration from "./StageIllustration";

const CATEGORY_META = {
    bahasa: { icon: MessageSquare, color: "bg-yamet-teal/10 text-yamet-teal", ring: "ring-yamet-teal/20" },
    motorik: { icon: Activity, color: "bg-yamet-peach/30 text-yamet-orange", ring: "ring-yamet-peach/40" },
    sosial: { icon: Heart, color: "bg-yamet-peach/20 text-yamet-orange", ring: "ring-yamet-peach/30" },
    kognitif: { icon: Lightbulb, color: "bg-yamet-teal/10 text-yamet-teal", ring: "ring-yamet-teal/20" },
};

function StageCard({ stage, index }) {
    const reversed = index % 2 === 1;
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            id={`stage-${stage.id}`}
            data-testid={`timeline-stage-${stage.id}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative pb-20 lg:pb-28"
        >
            {/* Timeline node (desktop) */}
            <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 lg:block">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15, type: "spring", stiffness: 200, damping: 18 }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-glow ring-4 ring-yamet-teal"
                >
                    <div className="h-4 w-4 rounded-full bg-yamet-teal" />
                    <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-yamet-teal/30" />
                </motion.div>
            </div>

            <div
                className={`mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-1 lg:grid-cols-2 lg:gap-20 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
                {/* Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: reversed ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="relative">
                        {/* Age sticker */}
                        <div className="absolute -top-3 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-yamet-teal px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-glow">
                            <span>{stage.ageLabel}</span>
                        </div>
                        <div className="aspect-[16/14] w-full overflow-hidden rounded-[28px] bg-white shadow-soft ring-1 ring-yamet-teal/10">
                            <StageIllustration stageId={stage.id} />
                        </div>
                    </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                    initial={{ opacity: 0, x: reversed ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                    <div className="rounded-[28px] bg-white p-6 shadow-soft ring-1 ring-yamet-teal/10 sm:p-8">
                        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-yamet-teal">
                            Tahap {index + 1} dari {MILESTONES.length}
                        </div>
                        <h3 className="font-heading text-2xl font-extrabold text-yamet-ink sm:text-3xl">
                            {stage.ageLabel}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-yamet-ink-muted sm:text-lg">
                            {stage.intro}
                        </p>

                        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {stage.categories.map((cat) => {
                                const meta = CATEGORY_META[cat.key];
                                const Icon = meta.icon;
                                return (
                                    <li
                                        key={cat.key}
                                        data-testid={`stage-${stage.id}-cat-${cat.key}`}
                                        className={`group rounded-2xl bg-yamet-cream/60 p-4 ring-1 ${meta.ring} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-white`}
                                    >
                                        <div className="mb-2 flex items-center gap-2">
                                            <span
                                                className={`flex h-8 w-8 items-center justify-center rounded-xl ${meta.color} transition-transform group-hover:scale-110`}
                                            >
                                                <Icon className="h-4 w-4" />
                                            </span>
                                            <h4 className="font-heading text-sm font-extrabold text-yamet-ink">
                                                {cat.title}
                                            </h4>
                                        </div>
                                        <ul className="ml-1 space-y-1.5 text-sm leading-relaxed text-yamet-ink-muted">
                                            {cat.points.map((p, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yamet-teal" />
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>

                        <a
                            href={waLink(
                                `Halo YAMET Palembang Dempo, saya ingin berkonsultasi mengenai tumbuh kembang anak saya di usia ${stage.ageLabel}.`,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`stage-${stage.id}-cta`}
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-yamet-peach/30 px-5 py-3 text-sm font-bold text-yamet-ink ring-1 ring-yamet-peach/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yamet-peach/60 hover:shadow-peach"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Ada pertanyaan soal usia ini? Konsultasi Gratis
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function Timeline() {
    const sectionRef = useRef(null);
    const railRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: railRef,
        offset: ["start 30%", "end 80%"],
    });

    const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // Sticky age indicator for mobile
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        const observers = [];
        MILESTONES.forEach((m, i) => {
            const el = document.getElementById(`stage-${m.id}`);
            if (!el) return;
            const ob = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting && e.intersectionRatio > 0.25) {
                            setActiveIdx(i);
                        }
                    });
                },
                { threshold: [0.25, 0.5, 0.75], rootMargin: "-30% 0px -40% 0px" },
            );
            ob.observe(el);
            observers.push(ob);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <section
            id="tumbuh-kembang"
            ref={sectionRef}
            data-testid="timeline-section"
            className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
        >
            {/* Background decorative */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-yamet-peach/20 blur-3xl" />
                <div className="absolute -right-12 top-1/3 h-64 w-64 rounded-full bg-yamet-teal-50 blur-3xl" />
            </div>

            <div className="mx-auto max-w-6xl px-5 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-yamet-teal/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yamet-teal shadow-sm backdrop-blur">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Fitur Edukatif
                    </div>
                    <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-yamet-ink sm:text-4xl lg:text-5xl">
                        Perjalanan{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-yamet-teal">Tumbuh Kembang</span>
                            <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-yamet-peach/50" />
                        </span>{" "}
                        Anak
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-yamet-ink-muted sm:text-lg">
                        Telusuri tahap-tahap penting dari usia 0 bulan sampai 6 tahun. Setiap anak
                        unik — gunakan panduan ini sebagai gambaran umum, bukan diagnosis.
                    </p>
                </motion.div>

                {/* Sticky mobile indicator */}
                <div className="sticky top-16 z-20 -mx-5 mt-10 mb-6 lg:hidden">
                    <div className="mx-5 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2.5 shadow-glow backdrop-blur-md ring-1 ring-yamet-teal/15">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yamet-teal text-xs font-extrabold text-white">
                            {activeIdx + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-yamet-ink-muted">
                                Tahap saat ini
                            </div>
                            <div className="truncate text-sm font-extrabold text-yamet-ink" data-testid="timeline-sticky-age">
                                {MILESTONES[activeIdx].ageLabel}
                            </div>
                        </div>
                        <div className="flex h-1.5 w-20 overflow-hidden rounded-full bg-yamet-teal-50">
                            <div
                                className="bg-yamet-teal transition-all duration-500"
                                style={{ width: `${((activeIdx + 1) / MILESTONES.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Timeline rail container */}
                <div ref={railRef} className="relative mt-10 lg:mt-16">
                    {/* Vertical rail (desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-10 hidden w-1.5 -translate-x-1/2 lg:block">
                        <div className="h-full w-full rounded-full bg-yamet-teal/10" />
                        <motion.div
                            style={{ scaleY: railScale, transformOrigin: "top" }}
                            className="absolute inset-0 timeline-rail rounded-full"
                            data-testid="timeline-rail"
                        />
                    </div>

                    {/* Vertical rail (mobile, left) */}
                    <div className="absolute left-4 top-0 bottom-10 w-1.5 lg:hidden">
                        <div className="h-full w-full rounded-full bg-yamet-teal/10" />
                        <motion.div
                            style={{ scaleY: railScale, transformOrigin: "top" }}
                            className="absolute inset-0 timeline-rail rounded-full"
                        />
                    </div>

                    {/* Stages */}
                    <div className="space-y-2 pl-10 lg:pl-0">
                        {MILESTONES.map((s, i) => (
                            <StageCard key={s.id} stage={s} index={i} />
                        ))}
                    </div>
                </div>

                {/* Medical note */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mt-12 max-w-3xl rounded-3xl bg-yamet-teal-50/60 p-6 text-sm leading-relaxed text-yamet-ink-muted ring-1 ring-yamet-teal/15 sm:p-8 sm:text-base"
                    data-testid="timeline-medical-note"
                >
                    <div className="mb-2 flex items-center gap-2 font-bold text-yamet-teal">
                        <ShieldCheck className="h-5 w-5" />
                        Catatan untuk Orang Tua
                    </div>
                    Informasi di atas adalah <strong>panduan edukatif</strong>, bukan diagnosis.
                    Setiap anak berkembang dengan kecepatan yang berbeda — ini bukan patokan kaku.
                    Bila Anda memiliki kekhawatiran terhadap tumbuh kembang si kecil, mari{" "}
                    <a
                        href={waLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-yamet-teal underline-offset-2 hover:underline"
                    >
                        konsultasi gratis bersama tim YAMET
                    </a>{" "}
                    untuk asesmen yang lebih menyeluruh.
                </motion.div>
            </div>
        </section>
    );
}
