import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowDownCircle, Sparkles, Users, BadgeCheck, HeartHandshake } from "lucide-react";
import { waLink } from "../data/site";

const trustBadges = [
    { icon: Users, label: "Ratusan anak terbantu" },
    { icon: BadgeCheck, label: "Tim terapis bersertifikat" },
    { icon: HeartHandshake, label: "Program individual" },
];

export default function Hero() {
    return (
        <section
            id="hero"
            data-testid="hero-section"
            className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
        >
            {/* Decorative background blobs */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-yamet-teal/15 blur-3xl" />
                <div className="absolute top-32 right-0 h-80 w-80 rounded-full bg-yamet-peach/30 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-yamet-teal-50 blur-3xl" />
                <div className="absolute inset-0 grain-bg opacity-50" />
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-12 lg:gap-10 lg:px-8">
                {/* Left: text */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 rounded-full border border-yamet-teal/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yamet-teal shadow-sm backdrop-blur"
                        data-testid="hero-eyebrow"
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        Pusat Tumbuh Kembang Anak — Palembang Dempo
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="mt-6 font-heading text-4xl font-black leading-[1.1] tracking-tight text-yamet-ink sm:text-5xl lg:text-6xl"
                        data-testid="hero-headline"
                    >
                        Bantu si Kecil Mencapai
                        <span className="relative inline-block px-2">
                            <span className="relative z-10 text-yamet-teal">Potensi Terbaiknya</span>
                            <svg
                                aria-hidden="true"
                                className="absolute inset-x-0 bottom-1 -z-0 w-full"
                                viewBox="0 0 300 18"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M2 14 C 80 4, 220 4, 298 14"
                                    stroke="#FFB5A7"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                            </svg>
                        </span>
                        <br />
                        Lewat Intervensi Dini.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="mt-6 max-w-xl text-base leading-relaxed text-yamet-ink-muted sm:text-lg"
                        data-testid="hero-subheadline"
                    >
                        Terapi wicara, fisioterapi, terapi okupasi, dan psikologi anak — disusun
                        secara individual oleh tim terapis berpengalaman untuk mendampingi
                        perjalanan tumbuh kembang anak Anda.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                    >
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-cta-whatsapp"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-yamet-teal px-7 py-4 text-base font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-yamet-teal-700 hover:shadow-xl"
                        >
                            <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-[-6deg]" />
                            Konsultasi Gratis
                        </a>
                        <a
                            href="#tumbuh-kembang"
                            data-testid="hero-cta-timeline"
                            className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-yamet-teal/30 bg-white/70 px-7 py-3.5 text-base font-bold text-yamet-teal shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-yamet-teal hover:shadow-md"
                        >
                            <ArrowDownCircle className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                            Lihat Tahap Tumbuh Kembang
                        </a>
                    </motion.div>

                    {/* Trust badges */}
                    <motion.ul
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.08, delayChildren: 0.4 },
                            },
                        }}
                        className="mt-10 flex flex-wrap gap-3"
                        data-testid="hero-trust-badges"
                    >
                        {trustBadges.map((b) => (
                            <motion.li
                                key={b.label}
                                variants={{
                                    hidden: { opacity: 0, y: 12 },
                                    show: { opacity: 1, y: 0 },
                                }}
                                className="flex items-center gap-2 rounded-full border border-yamet-teal/15 bg-white/80 px-4 py-2 text-xs font-semibold text-yamet-ink shadow-sm backdrop-blur sm:text-sm"
                            >
                                <b.icon className="h-4 w-4 text-yamet-teal" />
                                {b.label}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                {/* Right: image with floating accents */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative lg:col-span-5"
                    data-testid="hero-visual"
                >
                    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
                        {/* Soft blob behind */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-4 -z-10 animate-blob bg-yamet-peach/40"
                            style={{ filter: "blur(0.5px)" }}
                        />
                        <div className="absolute inset-0 -z-10 animate-floaty-slow rounded-[42%_58%_70%_30%/45%_30%_70%_55%] bg-yamet-teal-50" />

                        <div className="relative h-full w-full overflow-hidden rounded-[40%_60%_55%_45%/55%_45%_55%_45%] shadow-glow ring-8 ring-white">
                            <img
                                src="https://images.unsplash.com/photo-1730389658656-36aaa19513fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxoYXBweSUyMGNoaWxkJTIwcGFyZW50cyUyMHBsYXl8ZW58MHx8fHwxNzgyMDM0MzMyfDA&ixlib=rb-4.1.0&q=85"
                                alt="Anak ceria bermain bersama orang tua"
                                className="h-full w-full animate-floaty object-cover"
                                loading="eager"
                            />
                        </div>

                        {/* Floating chip 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, rotate: -6 }}
                            animate={{ opacity: 1, y: 0, rotate: -6 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-glow ring-1 ring-yamet-teal/10"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yamet-teal-50">
                                <HeartHandshake className="h-5 w-5 text-yamet-teal" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-yamet-ink-muted">
                                    Program
                                </div>
                                <div className="text-sm font-bold text-yamet-ink">Individual</div>
                            </div>
                        </motion.div>

                        {/* Floating chip 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, rotate: 4 }}
                            animate={{ opacity: 1, y: 0, rotate: 4 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            className="absolute -right-2 bottom-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-glow ring-1 ring-yamet-peach/40"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yamet-peach/40">
                                <Sparkles className="h-5 w-5 text-yamet-orange" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-yamet-ink-muted">
                                    Intervensi
                                </div>
                                <div className="text-sm font-bold text-yamet-ink">Dini & Terstruktur</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
