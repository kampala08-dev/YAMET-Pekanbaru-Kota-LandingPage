import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, waLink } from "../data/site";

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
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-soft"
                    : "bg-transparent"
            }`}
            data-testid="site-navbar"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
                <a href="#hero" data-testid="navbar-logo-link" className="shrink-0">
                    <Logo />
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

                <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="navbar-cta-whatsapp"
                    className="hidden items-center gap-2 rounded-full bg-yamet-teal px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-yamet-teal-700 hover:shadow-lg lg:inline-flex"
                >
                    <MessageCircle className="h-4 w-4" />
                    Konsultasi Gratis
                </a>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Buka menu"
                    data-testid="navbar-mobile-toggle"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-yamet-ink shadow-soft backdrop-blur-md lg:hidden"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
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
                                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-yamet-teal px-5 py-3 text-sm font-bold text-white shadow-glow"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Konsultasi Gratis
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
