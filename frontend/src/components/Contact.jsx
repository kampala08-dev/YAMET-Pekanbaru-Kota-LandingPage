import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram, Loader2, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import {
    ADDRESS,
    OPENING_HOURS,
    INSTAGRAM_HANDLE,
    INSTAGRAM_URL,
    MAPS_EMBED_URL,
    MAPS_LINK,
    WHATSAPP_NUMBER,
    waLink,
} from "../data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
    const [form, setForm] = useState({ parent_name: "", whatsapp: "", child_age: "", concern: "" });
    const [submitting, setSubmitting] = useState(false);
    const [done, setDone] = useState(false);

    const handle = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        if (submitting) return;
        if (!form.parent_name.trim() || !form.whatsapp.trim() || !form.concern.trim()) {
            toast.error("Mohon lengkapi nama, nomor WhatsApp, dan kebutuhan Anda.");
            return;
        }
        setSubmitting(true);
        try {
            await axios.post(`${API}/leads`, form);
            setDone(true);
            toast.success("Terima kasih! Tim YAMET akan menghubungi Anda segera.");
            setForm({ parent_name: "", whatsapp: "", child_age: "", concern: "" });
        } catch (err) {
            const msg = err?.response?.data?.detail || "Gagal mengirim. Mohon coba lagi atau hubungi via WhatsApp.";
            toast.error(typeof msg === "string" ? msg : "Gagal mengirim. Mohon coba lagi.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="kontak"
            data-testid="contact-section"
            className="relative py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-yamet-teal/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-yamet-teal shadow-sm">
                        Kontak & Lokasi
                    </div>
                    <h2 className="mt-6 font-heading text-4xl font-black leading-[1.08] tracking-tight text-yamet-ink sm:text-5xl">
                        Mari{" "}
                        <span className="text-yamet-teal">bertemu</span> & berbagi cerita.
                    </h2>
                </motion.div>

                <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <form
                            onSubmit={submit}
                            noValidate
                            data-testid="contact-form"
                            className="rounded-[28px] bg-white p-6 border border-yamet-ink/10 shadow-soft sm:p-8"
                        >
                            <h3 className="font-heading text-xl font-extrabold text-yamet-ink sm:text-2xl">
                                Konsultasi — Tinggalkan Pesan
                            </h3>
                            <p className="mt-1.5 text-sm text-yamet-ink-muted">
                                Isi singkat, tim kami akan menghubungi Anda lewat WhatsApp.
                            </p>

                            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-wider text-yamet-ink-muted" htmlFor="parent_name">
                                        Nama Orang Tua *
                                    </label>
                                    <input
                                        id="parent_name"
                                        type="text"
                                        required
                                        value={form.parent_name}
                                        onChange={handle("parent_name")}
                                        data-testid="form-parent-name"
                                        placeholder="Misal: Ibu Siti"
                                        className="mt-1.5 block w-full rounded-2xl border border-yamet-teal/15 bg-yamet-teal-50/50 px-4 py-3 text-sm font-medium text-yamet-ink placeholder-yamet-ink-muted/60 outline-none transition-all focus:border-yamet-teal focus:bg-white focus:ring-2 focus:ring-yamet-teal/20"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-wider text-yamet-ink-muted" htmlFor="whatsapp">
                                        Nomor WhatsApp *
                                    </label>
                                    <input
                                        id="whatsapp"
                                        type="tel"
                                        required
                                        value={form.whatsapp}
                                        onChange={handle("whatsapp")}
                                        data-testid="form-whatsapp"
                                        placeholder="08xxxxxxxxxx"
                                        className="mt-1.5 block w-full rounded-2xl border border-yamet-teal/15 bg-yamet-teal-50/50 px-4 py-3 text-sm font-medium text-yamet-ink placeholder-yamet-ink-muted/60 outline-none transition-all focus:border-yamet-teal focus:bg-white focus:ring-2 focus:ring-yamet-teal/20"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-yamet-ink-muted" htmlFor="child_age">
                                        Usia Anak (opsional)
                                    </label>
                                    <input
                                        id="child_age"
                                        type="text"
                                        value={form.child_age}
                                        onChange={handle("child_age")}
                                        data-testid="form-child-age"
                                        placeholder="Misal: 2 tahun 6 bulan"
                                        className="mt-1.5 block w-full rounded-2xl border border-yamet-teal/15 bg-yamet-teal-50/50 px-4 py-3 text-sm font-medium text-yamet-ink placeholder-yamet-ink-muted/60 outline-none transition-all focus:border-yamet-teal focus:bg-white focus:ring-2 focus:ring-yamet-teal/20"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-yamet-ink-muted" htmlFor="concern">
                                        Keluhan / Kebutuhan *
                                    </label>
                                    <textarea
                                        id="concern"
                                        required
                                        rows={4}
                                        value={form.concern}
                                        onChange={handle("concern")}
                                        data-testid="form-concern"
                                        placeholder="Ceritakan singkat kondisi anak atau kebutuhan terapinya..."
                                        className="mt-1.5 block w-full resize-none rounded-2xl border border-yamet-teal/15 bg-yamet-teal-50/50 px-4 py-3 text-sm font-medium text-yamet-ink placeholder-yamet-ink-muted/60 outline-none transition-all focus:border-yamet-teal focus:bg-white focus:ring-2 focus:ring-yamet-teal/20"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    data-testid="form-submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-yamet-teal px-7 py-3.5 text-sm font-extrabold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-yamet-teal-700 disabled:opacity-70"
                                >
                                    {submitting ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : done ? (
                                        <CheckCircle2 className="h-4 w-4" />
                                    ) : (
                                        <Send className="h-4 w-4" />
                                    )}
                                    {done ? "Pesan Terkirim" : "Kirim Pesan"}
                                </button>
                                <a
                                    href={waLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="form-whatsapp-alt"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-yamet-teal/20 bg-white px-6 py-3 text-sm font-bold text-yamet-teal hover:border-yamet-teal hover:shadow-soft"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    Atau Chat WhatsApp
                                </a>
                            </div>
                            <p className="mt-4 text-xs text-yamet-ink-muted">
                                Dengan mengirim pesan ini, Anda setuju dihubungi oleh tim YAMET
                                untuk keperluan konsultasi.
                            </p>
                        </form>
                    </motion.div>

                    {/* Contact info + map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 lg:col-span-5"
                    >
                        <div className="rounded-[28px] bg-white p-6 border border-yamet-ink/10 shadow-soft sm:p-8">
                            <h3 className="font-heading text-lg font-extrabold text-yamet-ink">
                                YAMET Pekanbaru Kota
                            </h3>
                            <ul className="mt-5 space-y-4 text-sm">
                                <li className="flex items-start gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yamet-teal-50 text-yamet-teal">
                                        <MapPin className="h-4 w-4" />
                                    </span>
                                    <a
                                        href={MAPS_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid="contact-address"
                                        className="leading-relaxed text-yamet-ink hover:text-yamet-teal"
                                    >
                                        {ADDRESS}
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yamet-teal-50 text-yamet-teal">
                                        <Phone className="h-4 w-4" />
                                    </span>
                                    <a
                                        href={waLink()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid="contact-whatsapp"
                                        className="font-semibold text-yamet-ink hover:text-yamet-teal"
                                    >
                                        +{WHATSAPP_NUMBER} (WhatsApp)
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yamet-teal-50 text-yamet-teal">
                                        <Instagram className="h-4 w-4" />
                                    </span>
                                    <a
                                        href={INSTAGRAM_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid="contact-instagram"
                                        className="font-semibold text-yamet-ink hover:text-yamet-teal"
                                    >
                                        {INSTAGRAM_HANDLE}
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yamet-teal-50 text-yamet-teal">
                                        <Clock className="h-4 w-4" />
                                    </span>
                                    <div className="flex-1">
                                        <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-yamet-ink-muted">
                                            Jam Operasional
                                        </div>
                                        <ul className="space-y-1">
                                            {OPENING_HOURS.map((h) => (
                                                <li
                                                    key={h.day}
                                                    className="flex items-center justify-between gap-2"
                                                >
                                                    <span className="text-yamet-ink-muted">{h.day}</span>
                                                    <span
                                                        className={`text-xs font-bold ${
                                                            h.closed ? "text-yamet-ink-muted/70" : "text-yamet-ink"
                                                        }`}
                                                    >
                                                        {h.hours}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="overflow-hidden rounded-[28px] bg-white border border-yamet-ink/10 shadow-soft"
                            data-testid="contact-map"
                        >
                            <iframe
                                src={MAPS_EMBED_URL}
                                title="Peta YAMET Pekanbaru Kota"
                                width="100%"
                                height="280"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
