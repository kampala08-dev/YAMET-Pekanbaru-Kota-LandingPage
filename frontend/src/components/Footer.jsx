import React from "react";
import { Instagram, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import {
    NAV_LINKS,
    ADDRESS,
    INSTAGRAM_HANDLE,
    INSTAGRAM_URL,
    WHATSAPP_NUMBER,
    waLink,
} from "../data/site";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer data-testid="site-footer" className="relative border-t border-yamet-teal/10 bg-white pt-14 pb-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-12 lg:gap-8 lg:px-8">
                <div className="lg:col-span-5">
                    <Logo className="h-14" />
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-yamet-ink-muted">
                        Pusat tumbuh kembang anak yang hangat dan terpercaya di Pekanbaru. Kami
                        mendampingi anak Anda mencapai potensi terbaiknya melalui intervensi dini.
                    </p>
                    <div className="mt-5 flex items-center gap-2">
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-instagram"
                            aria-label="Instagram YAMET Pekanbaru"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-yamet-teal-50 text-yamet-teal transition-all hover:-translate-y-0.5 hover:bg-yamet-teal hover:text-white"
                        >
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-whatsapp"
                            aria-label="WhatsApp YAMET Pekanbaru"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-yamet-teal-50 text-yamet-teal transition-all hover:-translate-y-0.5 hover:bg-whatsapp hover:text-white"
                        >
                            <Phone className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <h4 className="font-heading text-sm font-extrabold uppercase tracking-wider text-yamet-ink">
                        Tautan Cepat
                    </h4>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {NAV_LINKS.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    data-testid={`footer-link-${l.href.replace("#", "")}`}
                                    className="text-yamet-ink-muted hover:text-yamet-teal"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-4">
                    <h4 className="font-heading text-sm font-extrabold uppercase tracking-wider text-yamet-ink">
                        Hubungi Kami
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li className="flex items-start gap-2.5 text-yamet-ink-muted">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yamet-teal" />
                            <span>{ADDRESS}</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-yamet-ink-muted">
                            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-yamet-teal" />
                            <a
                                href={waLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yamet-teal"
                            >
                                +{WHATSAPP_NUMBER}
                            </a>
                        </li>
                        <li className="flex items-start gap-2.5 text-yamet-ink-muted">
                            <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-yamet-teal" />
                            <a
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yamet-teal"
                            >
                                {INSTAGRAM_HANDLE}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-7xl border-t border-yamet-teal/10 px-5 pt-6 lg:px-8">
                <p className="text-center text-xs text-yamet-ink-muted">
                    © {year} YAMET Pekanbaru Kota. Semua hak dilindungi.
                </p>
            </div>
        </footer>
    );
}
