"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnalyticsSection() {
    return (
        <section id="how-it-works" className="py-32 bg-black relative overflow-hidden border-t border-[#0B666A]/20">

            {/* Use Case Section BG SVG */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/use-case-bg.svg"
                    alt=""
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            </div>

            {/* Dot grid */}
            <div className="absolute inset-0 bg-black dot-grid opacity-20 pointer-events-none z-0" />

            {/* Atmospheric Glows — full palette */}
            <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-[#071952]/30 blur-[150px] rounded-full pointer-events-none z-0" />
            <div className="absolute top-[50%] right-[-8%] w-[500px] h-[500px] bg-[#0B666A]/15 blur-[130px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-[5%] left-[30%] w-[700px] h-[700px] bg-[#35A29F]/8 blur-[160px] rounded-full pointer-events-none z-0" />

            {/* Scan lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[25, 55, 85].map((pct) => (
                    <div
                        key={pct}
                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B666A]/15 to-transparent animate-scan-line"
                        style={{ top: `${pct}%`, animationDelay: `${pct / 30}s` }}
                    />
                ))}
            </div>

            {/* ── Content ──────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#0B666A]/40 bg-[#071952]/30 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
                        <span className="text-[11px] font-bold text-[#97FEED] uppercase tracking-[0.25em]">How It Works</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
                    </div>
                    <h2
                        className="text-[48px] sm:text-[68px] font-bold text-white mb-6 tracking-tight leading-[1.05]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Intelligent Audio Orchestration <br />
                        Systems — in <span className="mix-text italic font-serif">three vectors</span>
                    </h2>
                    <p className="text-white/40 text-[18px] max-w-2xl mx-auto leading-relaxed">
                        Deploy smart audio automation at scale. Our infrastructure manages,
                        generates, and optimizes multi-step workflows with <span className="text-[#97FEED]">real-time AI processing</span>.
                    </p>

                    {/* Color accent bar */}
                    <div className="flex items-center justify-center gap-3 mt-10">
                        <div className="h-1 w-12 rounded-full bg-[#071952]" />
                        <div className="h-1 w-16 rounded-full bg-[#0B666A]" />
                        <div className="h-1 w-20 rounded-full bg-[#35A29F]" />
                        <div className="h-1 w-12 rounded-full bg-[#97FEED]" />
                    </div>
                </div>

                {/* 3-Column Vector Grid */}
                <div className="grid md:grid-cols-3 gap-px rounded-[32px] overflow-hidden border border-[#0B666A]/30 bg-[#071952]/10">

                    {/* ── Vector 01: Input ──────────────────── */}
                    <div className="p-10 flex flex-col h-full bg-black/40 backdrop-blur-sm relative group overflow-hidden">
                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#071952]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex-1 flex items-center justify-center mb-10 min-h-[300px] relative z-10">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full border border-[#0B666A]/20 animate-[pulse_4s_ease-in-out_infinite]" />
                                <div className="absolute w-64 h-64 rounded-full border border-[#071952]/20" />
                            </div>

                            <div className="relative z-10 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#071952] to-[#0B666A] flex items-center justify-center shadow-[0_0_30px_rgba(11,102,106,0.4)] mb-4 mx-auto border border-[#35A29F]/30">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#97FEED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                                </div>
                                <div className="bg-[#071952]/60 text-[#97FEED] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[#0B666A]/40 animate-pulse inline-block">Streaming Data...</div>
                            </div>

                            {/* Orbiting icons */}
                            {[
                                { icon: "⚡", x: -80, y: -40 },
                                { icon: "🎵", x: 80, y: -40 },
                                { icon: "📡", x: -60, y: 80 },
                                { icon: "🔊", x: 60, y: 80 }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="absolute w-10 h-10 rounded-xl bg-[#071952]/60 border border-[#0B666A]/30 flex items-center justify-center text-sm animate-float"
                                    style={{
                                        transform: `translate(${item.x}px, ${item.y}px)`,
                                        animationDelay: `${i * 0.5}s`
                                    }}
                                >
                                    {item.icon}
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto relative z-10">
                            <div className="text-[11px] font-bold text-[#97FEED] uppercase tracking-[0.2em] mb-4 bg-[#071952]/60 border border-[#0B666A]/30 w-fit px-3 py-1 rounded-full">Vector — 01</div>
                            <h3 className="text-xl font-bold text-white mb-3">Input Vector</h3>
                            <p className="text-white/40 text-[14px] leading-relaxed">
                                Seamlessly upload audio files or connect live audio streams directly into the <span className="text-[#35A29F]">orchestration engine</span>.
                            </p>
                        </div>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B666A]/40 to-transparent" />
                    </div>

                    {/* ── Vector 02: AI Process ────────────── */}
                    <div className="p-10 flex flex-col h-full bg-[#071952]/10 backdrop-blur-sm relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0B666A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex-1 flex items-center justify-center mb-10 min-h-[300px] relative z-10">
                            <div className="w-full max-w-[280px] space-y-3">
                                {[
                                    { label: "Orchestration Engine", status: "Active Processing", active: true, color: "#35A29F" },
                                    { label: "Waveform Synthesis", status: "Active Processing", active: false, color: "#0B666A" },
                                    { label: "Automated Workflow", status: "Active Processing", active: false, color: "#0B666A" },
                                    { label: "Orchestration Queue", status: "Active Processing", active: false, color: "#071952" }
                                ].map((item, i) => (
                                    <div key={i} className={`p-4 rounded-xl border transition-all duration-300 ${item.active ? 'bg-[#071952]/50 border-[#35A29F]/40 shadow-[0_0_20px_rgba(53,162,159,0.15)]' : 'bg-black/30 border-[#0B666A]/20 hover:border-[#0B666A]/40'}`}>
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-white font-medium text-sm">{item.label}</span>
                                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${item.active ? 'border-[#35A29F]' : 'border-white/10'}`} style={{ backgroundColor: item.active ? item.color : 'transparent' }}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={item.active ? "#97FEED" : "rgba(255,255,255,0.2)"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </div>
                                        </div>
                                        <div className="text-[10px] uppercase tracking-widest font-bold" style={{ color: item.active ? item.color : 'rgba(255,255,255,0.2)' }}>{item.status}</div>
                                        {/* Mini progress bar */}
                                        <div className="mt-2 h-0.5 w-full rounded-full bg-white/5 overflow-hidden">
                                            <div className="h-full rounded-full" style={{ width: `${85 - i * 15}%`, backgroundColor: item.color }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto relative z-10">
                            <div className="text-[11px] font-bold text-[#97FEED] uppercase tracking-[0.2em] mb-4 bg-[#071952]/60 border border-[#0B666A]/30 w-fit px-3 py-1 rounded-full">Vector — 02</div>
                            <h3 className="text-xl font-bold text-white mb-3">The AI Process</h3>
                            <p className="text-white/40 text-[14px] leading-relaxed">
                                The AI processes : Visualize and manage automation flows, waveform synthesis, and live audio processing in real time.
                            </p>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#35A29F]/40 to-transparent" />
                    </div>

                    {/* ── Vector 03: Health ─────────────────── */}
                    <div className="p-10 flex flex-col h-full bg-black/40 backdrop-blur-sm relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#35A29F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex-1 flex flex-col justify-center mb-10 min-h-[300px] relative z-10">
                            {/* Metrics header */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-3 h-3 rounded-full bg-[#35A29F] shadow-[0_0_10px_rgba(53,162,159,0.8)] animate-pulse" />
                                <div className="text-[36px] font-bold text-white font-mono">67</div>
                                <div className="text-[#0B666A] text-[10px] uppercase tracking-widest pt-2 font-bold">Active Workflows</div>
                            </div>

                            {/* Live graph */}
                            <div className="relative h-48 w-full">
                                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                                    <path
                                        d="M0 150 Q50 140 100 120 Q150 100 200 130 Q250 160 300 80 Q350 0 400 120 V200 H0 Z"
                                        fill="url(#graphGradientEnhanced)"
                                        className="animate-[pulse_4s_ease-in-out_infinite]"
                                    />
                                    <path
                                        d="M0 150 Q50 140 100 120 Q150 100 200 130 Q250 160 300 80 Q350 0 400 120"
                                        stroke="url(#lineGradient)"
                                        strokeWidth="2.5"
                                        fill="none"
                                    />
                                    <circle cx="280" cy="75" r="5" fill="#97FEED" className="animate-ping" />
                                    <circle cx="280" cy="75" r="3" fill="#35A29F" />
                                    <defs>
                                        <linearGradient id="graphGradientEnhanced" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#35A29F" stopOpacity="0.2" />
                                            <stop offset="50%" stopColor="#0B666A" stopOpacity="0.1" />
                                            <stop offset="100%" stopColor="#071952" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#071952" />
                                            <stop offset="40%" stopColor="#0B666A" />
                                            <stop offset="70%" stopColor="#35A29F" />
                                            <stop offset="100%" stopColor="#97FEED" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                {/* Peak tooltip */}
                                <div className="absolute top-8 right-4 bg-[#071952]/80 backdrop-blur-md border border-[#0B666A]/40 px-3 py-1.5 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#97FEED] shadow-[0_0_6px_rgba(151,254,237,0.8)]" />
                                        <span className="text-[#97FEED] font-bold text-[12px]">4.2 TB/s Flux</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto relative z-10">
                            <div className="text-[11px] font-bold text-[#97FEED] uppercase tracking-[0.2em] mb-4 bg-[#071952]/60 border border-[#0B666A]/30 w-fit px-3 py-1 rounded-full">Vector — 03</div>
                            <h3 className="text-xl font-bold text-white mb-3">Infrastructure Health</h3>
                            <p className="text-white/40 text-[14px] leading-relaxed">
                                Monitor <span className="text-[#0B666A]">GPU usage</span>, system latency, and workflow throughput with precise technical telemetry.
                            </p>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#97FEED]/30 to-transparent" />
                    </div>
                </div>

                {/* Bottom metrics strip */}
                <div className="mt-16 grid grid-cols-3 gap-px bg-[#0B666A]/10 rounded-2xl overflow-hidden border border-[#0B666A]/20">
                    {[
                        { value: "Input", desc: "Raw audio ingested via GPU Direct", color: "#35A29F" },
                        { value: "Process", desc: "Real time optimization", color: "#0B666A" },
                        { value: "Monitor", desc: "Health telemetry & flux tracking", color: "#97FEED" },
                    ].map((step) => (
                        <div key={step.value} className="flex flex-col items-center justify-center py-6 px-4 bg-black/40 hover:bg-[#071952]/30 transition-colors group">
                            <div className="text-[20px] font-bold mb-1 font-mono transition-colors duration-300" style={{ color: step.color }}>
                                {step.value}
                            </div>
                            <div className="text-white/30 text-[11px] uppercase tracking-wider text-center">{step.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
