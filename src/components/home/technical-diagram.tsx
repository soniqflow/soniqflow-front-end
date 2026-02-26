"use client";
import React from "react";

export default function TechnicalDiagram() {
    return (
        <section id="infrastructure" className="py-32 relative overflow-hidden bg-black">
            {/* ── Background Layer ────────────────────────────── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-black dot-grid opacity-20" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0B666A]/30 to-transparent animate-scan-line" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#35A29F]/30 to-transparent animate-scan-line" style={{ animationDelay: '2s' }} />
            </div>

            {/* Atmospheric Glows */}
            <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#071952]/20 blur-[130px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#35A29F]/10 blur-[150px] rounded-full pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#0B666A]/40 bg-[#071952]/30 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
                        <span className="text-[11px] font-bold text-[#97FEED] uppercase tracking-[0.25em]">System Architecture</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
                    </div>
                    <h2
                        className="text-[48px] sm:text-[68px] font-bold text-white mb-8 tracking-tight leading-[1.05]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Complete solutions for <br />
                        <span className="mix-text italic font-serif">professional audio workflows</span>
                    </h2>
                    <p className="text-white/40 text-[18px] max-w-3xl mx-auto leading-relaxed">
                        SoniqFlow AI's orchestration engine transforms raw audio into optimized workflows in real time, powered by GPU acceleration at every stage.
                    </p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid lg:grid-cols-3 gap-8 relative">

                    {/* Node 1: GPU-Direct Ingress */}
                    <div className="relative group">
                        <div className="absolute -inset-px bg-gradient-to-b from-[#0B666A]/40 to-transparent rounded-[32px] pointer-events-none" />
                        <div className="bg-[#071952]/20 backdrop-blur-xl rounded-[32px] border border-white/5 p-8 h-full overflow-hidden">
                            <div className="relative h-48 mb-8 rounded-2xl overflow-hidden border border-[#0B666A]/30 bg-[#071952]/40 flex items-center justify-center">
                                <img
                                    src="/gpu-direct-ingress-icon.svg"
                                    alt="GPU-Direct Ingress"
                                    className="w-32 h-32 object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#35A29F] animate-pulse" />
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Ingest Node 01</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">GPU-Direct Ingress</h3>
                            <p className="text-white/40 text-[14px] leading-relaxed mb-6">
                                Raw audio data streams bypass CPU bottlenecks and are ingested directly into GPU memory for zero-latency orchestration.
                            </p>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                                <span className="text-[11px] text-[#0B666A] font-bold tracking-widest uppercase">Status</span>
                                <span className="text-[11px] text-[#97FEED] font-bold font-mono uppercase tracking-widest">Active / Nominal</span>
                            </div>
                        </div>
                    </div>

                    {/* Node 2: SoniqFlow AI Core — Center Card */}
                    <div className="relative group lg:scale-105 z-10">
                        <div className="absolute -inset-px bg-gradient-to-b from-[#35A29F]/40 to-[#071952]/40 rounded-[32px] pointer-events-none" />
                        <div className="bg-[#071952]/40 backdrop-blur-2xl rounded-[32px] border border-[#35A29F]/20 p-8 h-full overflow-hidden shadow-[0_0_50px_rgba(53,162,159,0.15)]">
                            <div className="relative h-64 mb-8 rounded-2xl overflow-hidden border border-[#35A29F]/50 bg-[#071952]/60 flex flex-col items-center justify-center gap-4">
                                {/* Central Icon */}
                                <img
                                    src="/central-icon.svg"
                                    alt="SoniqFlow AI Core"
                                    className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(151,254,237,0.4)]"
                                />
                                <div className="text-center">
                                    <div className="text-[10px] text-[#35A29F] font-bold uppercase tracking-[0.4em] mb-1 animate-pulse">Orchestration Active</div>
                                    <div className="text-[22px] font-bold text-white tracking-widest font-display">SoniqFlow AI core</div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">Real-Time AI Processing</h3>
                            <p className="text-white/50 text-[15px] leading-relaxed mb-8 text-center">
                                Continuously trained audio models analyze and adapt to frequency shifts in milliseconds, ensuring consistent sound quality without manual intervention.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-center">
                                    <span className="block text-[10px] text-white/20 uppercase mb-1">Cores</span>
                                    <span className="text-white font-mono font-bold">40,960</span>
                                </div>
                                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-center">
                                    <span className="block text-[10px] text-white/20 uppercase mb-1">Latency</span>
                                    <span className="text-[#97FEED] font-mono font-bold">0.8ms</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Node 3: Distributed Node Mesh */}
                    <div className="relative group">
                        <div className="absolute -inset-px bg-gradient-to-b from-[#97FEED]/20 to-transparent rounded-[32px] pointer-events-none" />
                        <div className="bg-[#071952]/20 backdrop-blur-xl rounded-[32px] border border-white/5 p-8 h-full overflow-hidden">
                            <div className="relative h-48 mb-8 rounded-2xl overflow-hidden border border-[#0B666A]/30 bg-[#071952]/40 flex items-center justify-center">
                                <img
                                    src="/distributed-node-mesh-icon.svg"
                                    alt="Distributed Node Mesh"
                                    className="w-32 h-32 object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#97FEED] animate-pulse" />
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Edge Global</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Global Edge Delivery</h3>
                            <p className="text-white/40 text-[14px] leading-relaxed mb-6">
                                42 distributed edge hubs ensuring studio-quality delivery to any production endpoint with zero degradation.
                            </p>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                                <span className="text-[11px] text-[#0B666A] font-bold tracking-widest uppercase">Flux</span>
                                <span className="text-[11px] text-[#97FEED] font-bold font-mono uppercase tracking-widest">4.2 TB/s Peak</span>
                            </div>
                        </div>
                    </div>

                    {/* Background Connection Line */}
                    <div className="absolute top-1/2 left-[30%] right-[30%] h-px bg-gradient-to-r from-[#0B666A]/0 via-[#35A29F]/50 to-[#97FEED]/0 hidden lg:block -z-10" />
                </div>

                {/* Technical Specs Strip */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/[0.06]">
                    {[
                        { label: "Content integration", value: "Automated Workflow Sync" },
                        { label: "Data Integrity", value: "End-to-End Encryption" },
                        { label: "Throughput", value: "4.2 Tbps Orchestration flux" },
                        { label: "Architecture", value: "GPU-Direct Audio Pipeline" },
                    ].map((spec) => (
                        <div key={spec.label} className="text-center md:text-left">
                            <span className="block text-[#0B666A] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{spec.label}</span>
                            <span className="block text-white/70 text-[13px] font-bold font-mono leading-tight">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

