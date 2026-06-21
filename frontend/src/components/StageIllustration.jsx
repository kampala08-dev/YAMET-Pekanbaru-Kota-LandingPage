import React from "react";

// Lightweight illustrated scenes per age stage.
// Pure SVG with soft CSS animations -> reliable, no network deps, on-brand colors.

const palette = {
    teal: "#3A868F",
    tealLight: "#C9E6EC",
    teal50: "#E3F2F6",
    peach: "#FFB5A7",
    peachLight: "#FFE9E3",
    orange: "#F4A261",
    cream: "#FDFBF7",
    ink: "#1F333E",
};

function Bubble({ delay = 0, ...props }) {
    return (
        <circle
            {...props}
            style={{
                animation: `floaty ${4 + delay}s ease-in-out ${delay * 0.3}s infinite`,
                transformOrigin: "center",
            }}
        />
    );
}

// 0–12 months: baby in a soft cradle
function Stage0to12() {
    return (
        <svg viewBox="0 0 320 280" className="h-full w-full" role="img" aria-label="Bayi 0-12 bulan">
            <defs>
                <radialGradient id="bg0" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor={palette.peachLight} />
                    <stop offset="100%" stopColor={palette.cream} />
                </radialGradient>
            </defs>
            <rect width="320" height="280" rx="36" fill="url(#bg0)" />
            <Bubble cx="48" cy="60" r="9" fill={palette.tealLight} delay={1} />
            <Bubble cx="270" cy="48" r="6" fill={palette.peach} delay={2} />
            <Bubble cx="280" cy="220" r="10" fill={palette.teal50} delay={0.6} />
            {/* Cradle / mat */}
            <g style={{ animation: "floaty 6s ease-in-out infinite" }}>
                <ellipse cx="160" cy="210" rx="120" ry="22" fill={palette.tealLight} />
                <path d="M50 200 Q160 250 270 200 L270 215 Q160 265 50 215 Z" fill={palette.teal} opacity="0.85" />
                {/* Baby head */}
                <circle cx="160" cy="148" r="46" fill="#FFE3D5" />
                {/* Cheeks */}
                <circle cx="138" cy="158" r="6" fill={palette.peach} opacity="0.65" />
                <circle cx="182" cy="158" r="6" fill={palette.peach} opacity="0.65" />
                {/* Eyes (sleeping smile) */}
                <path d="M142 148 q5 5 10 0" stroke={palette.ink} strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M170 148 q5 5 10 0" stroke={palette.ink} strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Mouth */}
                <path d="M152 168 q8 6 16 0" stroke={palette.ink} strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Tuft of hair */}
                <path d="M158 100 q4 -10 8 -2" stroke={palette.ink} strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Body bundle */}
                <path d="M118 190 Q160 175 202 190 L208 210 Q160 222 112 210 Z" fill={palette.peach} />
            </g>
            {/* Twinkle stars */}
            <g style={{ animation: "floatySlow 7s ease-in-out infinite" }}>
                <path d="M68 110 l4 8 8 4 -8 4 -4 8 -4-8 -8-4 8-4 z" fill={palette.orange} />
                <path d="M260 130 l3 6 6 3 -6 3 -3 6 -3-6 -6-3 6-3 z" fill={palette.teal} />
            </g>
        </svg>
    );
}

// 1–2 years: toddler with blocks, walking
function Stage1to2() {
    return (
        <svg viewBox="0 0 320 280" className="h-full w-full" role="img" aria-label="Balita 1-2 tahun">
            <defs>
                <radialGradient id="bg1" cx="50%" cy="40%" r="65%">
                    <stop offset="0%" stopColor={palette.teal50} />
                    <stop offset="100%" stopColor={palette.cream} />
                </radialGradient>
            </defs>
            <rect width="320" height="280" rx="36" fill="url(#bg1)" />
            <Bubble cx="40" cy="50" r="8" fill={palette.peach} delay={0.5} />
            <Bubble cx="280" cy="60" r="10" fill={palette.tealLight} delay={1.5} />
            <Bubble cx="60" cy="230" r="7" fill={palette.peach} delay={1} />
            {/* Blocks */}
            <g style={{ animation: "floatySlow 5s ease-in-out infinite" }}>
                <rect x="50" y="200" width="40" height="38" rx="6" fill={palette.peach} />
                <rect x="92" y="200" width="40" height="38" rx="6" fill={palette.teal} />
                <rect x="70" y="160" width="40" height="38" rx="6" fill={palette.orange} />
            </g>
            {/* Toddler */}
            <g style={{ animation: "floaty 5s ease-in-out infinite" }}>
                <circle cx="210" cy="120" r="34" fill="#FFE3D5" />
                {/* Hair */}
                <path d="M180 108 q30 -40 60 0" fill={palette.ink} />
                {/* Eyes */}
                <circle cx="200" cy="120" r="3" fill={palette.ink} />
                <circle cx="222" cy="120" r="3" fill={palette.ink} />
                {/* Smile */}
                <path d="M198 132 q12 10 24 0" stroke={palette.ink} strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Body */}
                <path d="M178 158 Q210 150 244 158 L246 220 Q210 232 174 220 Z" fill={palette.teal} />
                {/* Arms */}
                <path d="M178 170 q-20 8 -18 30" stroke={palette.teal} strokeWidth="14" strokeLinecap="round" fill="none" />
                <path d="M244 170 q22 6 22 26" stroke={palette.teal} strokeWidth="14" strokeLinecap="round" fill="none" />
                {/* Legs */}
                <rect x="188" y="220" width="14" height="34" rx="6" fill={palette.peach} />
                <rect x="218" y="220" width="14" height="34" rx="6" fill={palette.peach} />
            </g>
        </svg>
    );
}

// 2–3 years: child pointing & playing imagination
function Stage2to3() {
    return (
        <svg viewBox="0 0 320 280" className="h-full w-full" role="img" aria-label="Anak 2-3 tahun">
            <defs>
                <radialGradient id="bg2" cx="50%" cy="40%" r="65%">
                    <stop offset="0%" stopColor={palette.peachLight} />
                    <stop offset="100%" stopColor={palette.cream} />
                </radialGradient>
            </defs>
            <rect width="320" height="280" rx="36" fill="url(#bg2)" />
            <Bubble cx="56" cy="60" r="9" fill={palette.tealLight} delay={0.8} />
            <Bubble cx="270" cy="220" r="9" fill={palette.peach} delay={1.7} />
            {/* Speech bubble */}
            <g style={{ animation: "floatySlow 6s ease-in-out infinite" }}>
                <path d="M50 60 q0 -20 22 -20 h70 q22 0 22 20 v22 q0 20 -22 20 h-35 l-14 14 v-14 h-21 q-22 0 -22 -20 z" fill={palette.teal} />
                <text x="92" y="78" textAnchor="middle" fill="white" fontFamily="Nunito" fontWeight="900" fontSize="22">A B C</text>
            </g>
            {/* Child */}
            <g style={{ animation: "floaty 5s ease-in-out infinite" }}>
                <circle cx="200" cy="150" r="36" fill="#FFE3D5" />
                <path d="M168 140 q32 -42 64 -2" fill={palette.orange} />
                <circle cx="190" cy="152" r="3" fill={palette.ink} />
                <circle cx="214" cy="152" r="3" fill={palette.ink} />
                <path d="M188 165 q12 10 24 0" stroke={palette.ink} strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M168 190 Q200 180 232 190 L236 250 Q200 262 164 250 Z" fill={palette.peach} />
                {/* Pointing arm */}
                <path d="M168 200 q-30 -10 -50 -30" stroke={palette.peach} strokeWidth="14" strokeLinecap="round" fill="none" />
                <circle cx="120" cy="170" r="9" fill="#FFE3D5" />
            </g>
        </svg>
    );
}

// 3–4 years: child painting / drawing
function Stage3to4() {
    return (
        <svg viewBox="0 0 320 280" className="h-full w-full" role="img" aria-label="Anak 3-4 tahun">
            <defs>
                <radialGradient id="bg3" cx="50%" cy="40%" r="65%">
                    <stop offset="0%" stopColor={palette.teal50} />
                    <stop offset="100%" stopColor={palette.cream} />
                </radialGradient>
            </defs>
            <rect width="320" height="280" rx="36" fill="url(#bg3)" />
            <Bubble cx="270" cy="50" r="9" fill={palette.peach} delay={1.2} />
            <Bubble cx="48" cy="220" r="7" fill={palette.tealLight} delay={0.7} />
            {/* Easel/canvas */}
            <g style={{ animation: "floatySlow 6s ease-in-out infinite" }}>
                <rect x="40" y="60" width="120" height="120" rx="10" fill="white" stroke={palette.teal} strokeWidth="4" />
                {/* Drawing */}
                <circle cx="100" cy="110" r="22" fill={palette.orange} />
                <path d="M70 150 q30 20 60 0" stroke={palette.peach} strokeWidth="6" fill="none" strokeLinecap="round" />
                <path d="M55 70 l8 12 12 8 -12 8 -8 12 -8-12 -12-8 12-8 z" fill={palette.peach} />
            </g>
            {/* Child painting */}
            <g style={{ animation: "floaty 5s ease-in-out infinite" }}>
                <circle cx="220" cy="140" r="34" fill="#FFE3D5" />
                <path d="M192 130 q28 -38 56 0" fill={palette.ink} />
                <circle cx="210" cy="142" r="3" fill={palette.ink} />
                <circle cx="232" cy="142" r="3" fill={palette.ink} />
                <path d="M208 155 q12 8 22 0" stroke={palette.ink} strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M190 178 Q220 170 252 178 L254 238 Q220 252 186 238 Z" fill={palette.teal} />
                {/* Brush arm */}
                <path d="M192 188 q-30 -10 -40 -30" stroke={palette.teal} strokeWidth="14" strokeLinecap="round" fill="none" />
                <rect x="138" y="148" width="20" height="8" rx="3" fill={palette.orange} transform="rotate(-30 148 152)" />
            </g>
        </svg>
    );
}

// 4–5 years: child running/jumping with a ball
function Stage4to5() {
    return (
        <svg viewBox="0 0 320 280" className="h-full w-full" role="img" aria-label="Anak 4-5 tahun">
            <defs>
                <radialGradient id="bg4" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor={palette.peachLight} />
                    <stop offset="100%" stopColor={palette.cream} />
                </radialGradient>
            </defs>
            <rect width="320" height="280" rx="36" fill="url(#bg4)" />
            <Bubble cx="50" cy="50" r="9" fill={palette.tealLight} delay={0.9} />
            <Bubble cx="270" cy="60" r="7" fill={palette.peach} delay={1.4} />
            {/* Ball */}
            <g style={{ animation: "floaty 2.5s ease-in-out infinite" }}>
                <circle cx="80" cy="200" r="26" fill={palette.orange} />
                <path d="M58 200 q22 -22 44 0" stroke="white" strokeWidth="4" fill="none" />
                <path d="M58 200 q22 22 44 0" stroke="white" strokeWidth="4" fill="none" />
            </g>
            {/* Running kid */}
            <g style={{ animation: "floaty 3s ease-in-out infinite" }}>
                <circle cx="200" cy="120" r="34" fill="#FFE3D5" />
                <path d="M170 108 q32 -42 60 -2" fill={palette.peach} />
                <circle cx="190" cy="122" r="3" fill={palette.ink} />
                <circle cx="214" cy="122" r="3" fill={palette.ink} />
                <path d="M188 134 q12 12 24 0" stroke={palette.ink} strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M168 158 Q200 148 234 158 L240 218 Q200 230 162 218 Z" fill={palette.teal} />
                {/* Arms */}
                <path d="M170 170 q-22 10 -16 32" stroke={palette.teal} strokeWidth="14" strokeLinecap="round" fill="none" />
                <path d="M232 170 q26 -2 32 20" stroke={palette.teal} strokeWidth="14" strokeLinecap="round" fill="none" />
                {/* Legs running */}
                <path d="M188 218 q-6 18 -22 26" stroke={palette.peach} strokeWidth="14" strokeLinecap="round" fill="none" />
                <path d="M214 218 q14 12 26 8" stroke={palette.peach} strokeWidth="14" strokeLinecap="round" fill="none" />
            </g>
        </svg>
    );
}

// 5–6 years: school-ready child with book
function Stage5to6() {
    return (
        <svg viewBox="0 0 320 280" className="h-full w-full" role="img" aria-label="Anak 5-6 tahun">
            <defs>
                <radialGradient id="bg5" cx="50%" cy="40%" r="65%">
                    <stop offset="0%" stopColor={palette.teal50} />
                    <stop offset="100%" stopColor={palette.cream} />
                </radialGradient>
            </defs>
            <rect width="320" height="280" rx="36" fill="url(#bg5)" />
            <Bubble cx="50" cy="60" r="8" fill={palette.peach} delay={0.6} />
            <Bubble cx="270" cy="220" r="10" fill={palette.tealLight} delay={1.6} />
            {/* Cap */}
            <g style={{ animation: "floatySlow 6s ease-in-out infinite" }}>
                <path d="M80 70 l60 -22 60 22 -60 22 z" fill={palette.teal} />
                <path d="M80 70 l60 22 60 -22" stroke={palette.peach} strokeWidth="4" fill="none" />
                <circle cx="200" cy="98" r="5" fill={palette.orange} />
                <path d="M205 100 q8 30 -10 50" stroke={palette.orange} strokeWidth="3" fill="none" />
            </g>
            {/* Child reading */}
            <g style={{ animation: "floaty 5s ease-in-out infinite" }}>
                <circle cx="180" cy="160" r="36" fill="#FFE3D5" />
                <path d="M148 150 q32 -42 62 -2" fill={palette.ink} />
                <circle cx="170" cy="162" r="3" fill={palette.ink} />
                <circle cx="192" cy="162" r="3" fill={palette.ink} />
                <path d="M168 175 q12 10 24 0" stroke={palette.ink} strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M148 196 Q180 188 214 196 L216 252 Q180 264 144 252 Z" fill={palette.peach} />
                {/* Book */}
                <g transform="translate(140 220)">
                    <rect x="0" y="0" width="80" height="40" rx="4" fill="white" stroke={palette.teal} strokeWidth="3" />
                    <line x1="40" y1="4" x2="40" y2="36" stroke={palette.teal} strokeWidth="2" />
                    <line x1="8" y1="14" x2="34" y2="14" stroke={palette.teal} strokeWidth="2" />
                    <line x1="8" y1="22" x2="32" y2="22" stroke={palette.teal} strokeWidth="2" />
                    <line x1="46" y1="14" x2="72" y2="14" stroke={palette.teal} strokeWidth="2" />
                    <line x1="46" y1="22" x2="70" y2="22" stroke={palette.teal} strokeWidth="2" />
                </g>
            </g>
        </svg>
    );
}

const STAGE_MAP = {
    "0-12-bulan": Stage0to12,
    "1-2-tahun": Stage1to2,
    "2-3-tahun": Stage2to3,
    "3-4-tahun": Stage3to4,
    "4-5-tahun": Stage4to5,
    "5-6-tahun": Stage5to6,
};

export default function StageIllustration({ stageId, className = "" }) {
    const Comp = STAGE_MAP[stageId] || Stage1to2;
    return (
        <div className={`relative h-full w-full ${className}`} data-testid={`stage-illustration-${stageId}`}>
            <Comp />
        </div>
    );
}
