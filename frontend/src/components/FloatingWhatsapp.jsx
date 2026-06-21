import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { waLink } from "../data/site";

export default function FloatingWhatsapp() {
    const [showTip, setShowTip] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShowTip(true), 2500);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3 sm:bottom-6 sm:right-6" data-testid="floating-whatsapp-wrap">
            <AnimatePresence>
                {showTip && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, y: 10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="hidden max-w-[260px] rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-yamet-ink shadow-glow ring-1 ring-yamet-teal/15 sm:block"
                        data-testid="floating-whatsapp-tip"
                    >
                        <button
                            type="button"
                            onClick={() => setShowTip(false)}
                            aria-label="Tutup tip"
                            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-yamet-ink-muted shadow ring-1 ring-yamet-teal/10 hover:text-yamet-ink"
                        >
                            <X className="h-3 w-3" />
                        </button>
                        <div className="text-yamet-teal">Halo Bunda & Ayah 👋</div>
                        <div className="text-yamet-ink-muted">
                            Butuh konsultasi tumbuh kembang? Chat kami sekarang — gratis.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="floating-whatsapp-button"
                aria-label="Hubungi via WhatsApp"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 14 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-glow animate-pulse-ring sm:h-16 sm:w-16"
            >
                <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
            </motion.a>
        </div>
    );
}
