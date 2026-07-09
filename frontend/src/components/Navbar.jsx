import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Phone, Clock, MapPin, Instagram } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, waLink, PHONE_DISPLAY, INSTAGRAM_URL, MAPS_LINK } from "../data/site";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-50"
            data-testid="site-navbar"
        >
            {/* Tier 1 — top utility bar (desktop; menyusut saat scroll) */}
            <div
                className={`hidden overflow-hidden border-b border-yamet-teal/10 bg-yamet-teal-50/80 backdrop-blur transition-all duration-300 lg:block ${
                    scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
                }`}
                data-testid="navbar-topbar"
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
                    <div className="flex items-center gap-7">
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="topbar-whatsapp"
                            className="group flex items-center gap-2.5"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-yamet-teal shadow-sm">
                                <Phone className="h-4 w-4" />
                            </span>
                            <span className="leading-tight">
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-yamet-ink-muted">
                                    WhatsApp
                                </span>
                                <span className="block text-sm font-extrabold text-yamet-ink transition-colors group-hover:text-yamet-teal">
                                    {PHONE_DISPLAY}
                                </span>
                            </span>
                        </a>
                        <a
                            href={MAPS_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="topbar-location"
                            className="group flex items-center gap-2.5"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-yamet-teal shadow-sm">
                                <MapPin className="h-4 w-4" />
                            </span>
                            <span className="leading-tight">
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-yamet-ink-muted">
                                    Lokasi
                                </span>
                                <span className="block text-sm font-extrabold text-yamet-ink transition-colors group-hover:text-yamet-teal">
                                    Pekanbaru Kota
                                </span>
                            </span>
                        </a>
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-yamet-teal shadow-sm">
                                <Clock className="h-4 w-4" />
                            </span>
                            <span className="leading-tight">
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-yamet-ink-muted">
                                    Jam Operasional
                                </span>
                                <span className="block text-sm font-extrabold text-yamet-ink">
                                    Senin–Sabtu · 08.00–18.00
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-yamet-ink-muted">
                            Follow Us
                        </span>
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram YAMET Pekanbaru"
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-yamet-teal shadow-sm transition-all hover:-translate-y-0.5 hover:bg-yamet-teal hover:text-white"
                        >
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp YAMET Pekanbaru"
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-yamet-teal shadow-sm transition-all hover:-translate-y-0.5 hover:bg-whatsapp hover:text-white"
                        >
                            <MessageCircle className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Tier 2 — main nav bar */}
            <div
                className={`transition-all duration-300 ${
                    scrolled
                        ? "bg-white/90 shadow-soft backdrop-blur-xl"
                        : "bg-white/85 backdrop-blur-md"
                }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
                    <a href="#hero" data-testid="navbar-logo-link" className="shrink-0">
                        <Logo className="h-11" />
                    </a>

                    <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
                        {NAV_LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                data-testid={`nav-link-${l.href.replace("#", "")}`}
                                className="group relative text-sm font-semibold text-yamet-ink/80 transition-colors hover:text-yamet-teal"
                            >
                                {l.label}
                                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-yamet-teal transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="navbar-cta-whatsapp"
                            className="hidden items-center gap-2 rounded-full bg-yamet-teal px-6 py-3 text-sm font-extrabold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-yamet-teal-700 hover:shadow-lg lg:inline-flex"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Konsultasi Sekarang
                        </a>

                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Buka menu"
                            data-testid="navbar-mobile-toggle"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yamet-teal-50 text-yamet-ink shadow-soft lg:hidden"
                        >
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden border-t border-yamet-teal/10 bg-white/95 backdrop-blur-xl lg:hidden"
                        data-testid="navbar-mobile-menu"
                    >
                        <div className="space-y-1 px-5 py-4">
                            {NAV_LINKS.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    data-testid={`nav-link-mobile-${l.href.replace("#", "")}`}
                                    className="block rounded-xl px-3 py-3 text-base font-semibold text-yamet-ink hover:bg-yamet-teal-50 hover:text-yamet-teal"
                                >
                                    {l.label}
                                </a>
                            ))}

                            <a
                                href={waLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="navbar-mobile-cta-whatsapp"
                                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-yamet-teal px-5 py-3 text-sm font-extrabold text-white shadow-glow"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Konsultasi Sekarang
                            </a>

                            {/* Kontak & sosial */}
                            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-yamet-teal/10 pt-3">
                                <a
                                    href={waLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-bold text-yamet-ink"
                                >
                                    <Phone className="h-4 w-4 text-yamet-teal" />
                                    {PHONE_DISPLAY}
                                </a>
                                <div className="flex items-center gap-2">
                                    <a
                                        href={INSTAGRAM_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram YAMET Pekanbaru"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-yamet-teal-50 text-yamet-teal transition-colors hover:bg-yamet-teal hover:text-white"
                                    >
                                        <Instagram className="h-4 w-4" />
                                    </a>
                                    <a
                                        href={waLink()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="WhatsApp YAMET Pekanbaru"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-yamet-teal-50 text-yamet-teal transition-colors hover:bg-whatsapp hover:text-white"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
