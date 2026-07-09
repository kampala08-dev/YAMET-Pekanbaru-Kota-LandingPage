/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                heading: ["Nunito", "system-ui", "sans-serif"],
                body: ["DM Sans", "system-ui", "sans-serif"],
                sans: ["DM Sans", "system-ui", "sans-serif"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 4px)",
                sm: "calc(var(--radius) - 8px)",
                "4xl": "2rem",
                "5xl": "2.5rem",
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                /* YAMET brand — Pekanbaru Kota (seafoam mint, match feed IG) */
                yamet: {
                    teal: "#1F9385",
                    "teal-50": "#E1F5F0",
                    "teal-100": "#BDE8DE",
                    "teal-700": "#166B61",
                    mint: "#7CCCBE",
                    mist: "#E8F6F1",
                    peach: "#FFC9A3",
                    "peach-50": "#FFF1E6",
                    orange: "#F58220",
                    cream: "#FDFBF7",
                    ink: "#1F333E",
                    "ink-muted": "#5B707B",
                },
                whatsapp: "#25D366",
                /* YAMET logo brand primaries — hijau / oranye / kuning (dipakai sebagai aksen) */
                brand: {
                    red: "#F26A2E",
                    orange: "#F58220",
                    yellow: "#F4C20D",
                    green: "#5BB431",
                    blue: "#2FA1A8",
                },
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in-up": {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.25s ease-out",
                "accordion-up": "accordion-up 0.25s ease-out",
                "fade-in-up": "fade-in-up 0.6s ease-out forwards",
            },
            boxShadow: {
                soft: "0 4px 18px -6px rgba(31, 147, 133, 0.16)",
                glow: "0 8px 30px -8px rgba(31, 147, 133, 0.30)",
                peach: "0 8px 30px -8px rgba(255, 201, 163, 0.55)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
