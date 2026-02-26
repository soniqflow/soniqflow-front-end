"use client";
import React from "react";
import BrainVisual from "./brain-visual";
import { motion } from "framer-motion";

export default function NetworkSection() {
    const features = [
        {
            title: "GPU-Direct Ingress",
            description: "Raw audio data streams bypass CPU bottlenecks and are ingested directly into GPU memory for zero-latency orchestration.",
            icon: (
                <img src="/gpu-direct-ingress-icon.svg" alt="" className="w-6 h-6" />
            ),
            metric: "0.8ms",
            metricLabel: "Avg Latency",
            position: "left-top"
        },
        {
            title: "Universal API Bridge",
            description: "Connect SoniqFlow directly to your DAW, broadcast system, or MAM via our high-bandwidth, studio-grade integration layer.",
            icon: (
                <img src="/adaptive-flux-engine-icon.svg" alt="" className="w-6 h-6" />
            ),
            metric: "100+",
            metricLabel: "Integrations",
            position: "right-top"
        },
        {
            title: "Real-Time AI Processing",
            description: "Continuously trained audio models analyze and adapt to frequency shifts in milliseconds, ensuring consistent sound quality without manual intervention.",
            icon: (
                <img src="/real-time-ai-processing-icon.svg" alt="" className="w-6 h-6" />
            ),
            metric: "98.2%",
            metricLabel: "Accuracy",
            position: "left-bottom"
        },
        {
            title: "High security",
            description: "Synchronize entire audio libraries and production assets across global nodes with automated versioning and checksum verification.",
            icon: (
                <img src="/distributed-node-mesh-icon.svg" alt="" className="w-6 h-6" />
            ),
            metric: "99.9%",
            metricLabel: "Security Tier",
            position: "right-bottom"
        }
    ];

    return (
        <section id="solutions" className="py-32 bg-black relative overflow-hidden">

            {/* Solution Section BG SVG */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/solution-bg.svg"
                    alt=""
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            </div>

            {/* Hex Grid Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none hex-grid opacity-25" />

            {/* Dot grid overlay */}
            <div className="absolute inset-0 bg-black dot-grid opacity-30 pointer-events-none" />

            {/* Animated horizontal scan lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[20, 40, 60, 80].map((pct) => (
                    <div
                        key={pct}
                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B666A]/20 to-transparent animate-scan-line"
                        style={{ top: `${pct}%`, animationDelay: `${pct / 30}s` }}
                    />
                ))}
            </div>

            {/* Large teal radial glow — center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 blur-[160px] rounded-full pointer-events-none z-0" />

            {/* Top-left accent glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Bottom-right accent glow */}
            <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none z-0" />


            {/* ── Content ──────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#0B666A]/40 bg-[#071952]/30 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
                        <span className="text-[11px] font-bold text-[#97FEED] uppercase tracking-[0.25em]">The Solution</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
                    </div>

                    <h2
                        className="text-[48px] sm:text-[68px] font-bold text-white mb-6 tracking-tight leading-[1.05]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Complete solutions for <br />
                        <span className="mix-text italic font-serif">professional audio workflows</span>
                    </h2>

                    <p className="text-white/40 text-[18px] max-w-2xl mx-auto leading-relaxed">
                        SoniqFlow AI’s orchestration engine transforms raw audio into optimized workflows in real time, powered by GPU acceleration at every stage.
                    </p>

                    {/* Color bar */}
                    <div className="flex items-center justify-center gap-3 mt-10">
                        <div className="h-1 w-12 rounded-full bg-[#071952]" />
                        <div className="h-1 w-16 rounded-full bg-[#0B666A]" />
                        <div className="h-1 w-20 rounded-full bg-[#35A29F]" />
                        <div className="h-1 w-12 rounded-full bg-[#97FEED]" />
                    </div>
                </motion.div>

                {/* 3-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* Left feature cards */}
                    <div className="space-y-6">
                        {features.filter(f => f.position.startsWith("left")).map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-6 rounded-2xl border border-[#0B666A]/30 bg-[#071952]/10 hover:bg-[#071952]/20 hover:border-[#35A29F]/40 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-md"
                            >
                                {/* Card glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#071952]/20 via-[#0B666A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#071952]/50 border border-[#0B666A]/40 flex items-center justify-center text-[#97FEED] group-hover:bg-[#0B666A]/40 transition-all duration-300 shadow-[0_0_15px_rgba(11,102,106,0.3)]">
                                            {feature.icon}
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[#35A29F] font-bold text-lg font-mono">{feature.metric}</div>
                                            <div className="text-white/20 text-[10px] uppercase tracking-widest font-bold">{feature.metricLabel}</div>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold text-[16px] mb-2">{feature.title}</h3>
                                    <p className="text-white/40 text-[13px] leading-relaxed">{feature.description}</p>
                                </div>

                                {/* Bottom scan line accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#35A29F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Brain Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:flex flex-col items-center justify-center relative"
                    >
                        <div className="absolute w-72 h-72 rounded-full border border-[#0B666A]/20 animate-[pulse_4s_ease-in-out_infinite]" />
                        <div className="absolute w-56 h-56 rounded-full border border-[#35A29F]/15 animate-[pulse_3s_ease-in-out_infinite_0.5s]" />

                        <div className="relative z-10">
                            <BrainVisual />
                        </div>

                        <div className="absolute w-32 h-32 bg-[#35A29F]/10 blur-[60px] rounded-full z-0" />

                        <div className="mt-6 px-4 py-2 rounded-full border border-[#0B666A]/30 bg-[#071952]/40 backdrop-blur-md">
                            <span className="text-[#97FEED] text-[11px] font-bold uppercase tracking-[0.2em]">SoniqFlow AI core</span>
                        </div>
                    </motion.div>

                    {/* Right feature cards */}
                    <div className="space-y-6">
                        {features.filter(f => f.position.startsWith("right")).map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
                                            {feature.icon}
                                        </div>
                                        <div className="text-right">
                                            <div className="text-primary font-bold text-lg font-mono">{feature.metric}</div>
                                            <div className="text-white/30 text-[10px] uppercase tracking-widest">{feature.metricLabel}</div>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold text-[16px] mb-2">{feature.title}</h3>
                                    <p className="text-white/40 text-[13px] leading-relaxed">{feature.description}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom metrics strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]"
                >
                    {[
                        { value: "< 1ms", label: "Processing Latency" },
                        { value: "99.99%", label: "Uptime SLA" },
                        { value: "200+", label: "Enterprise Clients" },
                        { value: "99.9%", label: "High security" },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center justify-center py-8 px-6 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group">
                            <div className="text-[28px] font-bold text-white mb-1 font-mono group-hover:text-primary transition-colors duration-300">
                                {stat.value}
                            </div>
                            <div className="text-white/30 text-[11px] uppercase tracking-widest text-center">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
