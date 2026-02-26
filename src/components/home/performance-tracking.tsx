import React from "react";

export default function PerformanceTracking() {
    const metrics = [
        { label: "Flux Capacity", value: "4.2 Tbps", change: "+12.5%", color: "#35A29F", barWidth: "85%" },
        { label: "Active Nodes", value: "1,240", change: "+8.2%", color: "#97FEED", barWidth: "72%" },
        { label: "Optimization Rate", value: "98.2%", change: "+4.1%", color: "#0B666A", barWidth: "98%" },
        { label: "Processing Latency", value: "1.2ms", change: "-15.6%", color: "#071952", barWidth: "45%" },
    ];

    const activities = [
        { title: "Audio Batch Processing Completed", desc: "2,400 frames optimized via AI Node 04", latency: "0.8ms", color: "#35A29F" },
        { title: "Waveform Synthesis — Track #812", desc: "Engine v4.2 frequency match at 97.3%", latency: "1.1ms", color: "#0B666A" },
        { title: "GPU Cluster Auto-Scale Event", desc: "Nodes 12–18 provisioned for peak demand", latency: "0.3ms", color: "#97FEED" },
        { title: "Orchestration Queue Flush", desc: "14 parallel flows completed successfully", latency: "0.6ms", color: "#071952" },
        { title: "Infrastructure Health Check", desc: "All 1,240 nodes reporting nominal status", latency: "0.2ms", color: "#35A29F" },
    ];

    return (
        <section id="performance" className="py-32 bg-black relative overflow-hidden border-t border-[#0B666A]/20">

            {/* Performance Section BG SVG */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/solution-bg.svg"
                    alt=""
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            </div>

            {/* Hex Grid pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none hex-grid opacity-20" />

            {/* Dot grid */}
            <div className="absolute inset-0 bg-black dot-grid opacity-30 pointer-events-none z-0" />

            {/* Atmospheric Glows */}
            <div className="absolute top-[5%] right-[-8%] w-[500px] h-[500px] bg-[#071952]/40 blur-[150px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-[#0B666A]/25 blur-[140px] rounded-full pointer-events-none z-0" />
            <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-[#35A29F]/15 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Scan lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[20, 60].map((pct) => (
                    <div key={pct} className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B666A]/25 to-transparent animate-scan-line" style={{ top: `${pct}%` }} />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#0B666A]/40 bg-[#071952]/30 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
                    <span className="text-[11px] font-bold text-[#97FEED] uppercase tracking-[0.25em]">Performance</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
                </div>

                <h2 className="text-[48px] sm:text-[68px] font-bold text-white mb-6 tracking-tight leading-[1.05]" style={{ fontFamily: "var(--font-display)" }}>
                    Monitor audio workflow <span className="mix-text">efficiency</span>
                    <br />in one single view.
                </h2>
                <p className="text-white/40 text-[18px] max-w-2xl mx-auto leading-relaxed mb-6">
                    Real-time telemetry across your entire <span className="text-[#97FEED]">GPU-accelerated</span> audio infrastructure.
                </p>

                {/* Color bar */}
                <div className="flex items-center justify-center gap-3 mb-16">
                    <div className="h-1 w-12 rounded-full bg-[#071952]" />
                    <div className="h-1 w-16 rounded-full bg-[#0B666A]" />
                    <div className="h-1 w-20 rounded-full bg-[#35A29F]" />
                    <div className="h-1 w-12 rounded-full bg-[#97FEED]" />
                </div>

                {/* Main dashboard card */}
                <div className="rounded-[32px] border border-[#0B666A]/30 bg-[#071952]/10 backdrop-blur-md overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#071952]/20 to-transparent pointer-events-none" />

                    {/* Metrics strip */}
                    <div className="grid md:grid-cols-4 border-b border-[#0B666A]/20 relative z-10">
                        {metrics.map((m) => (
                            <div key={m.label} className="p-8 border-r border-[#0B666A]/20 last:border-r-0 text-left group hover:bg-[#071952]/20 transition-colors">
                                <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: m.color }}>{m.label}</div>
                                <div className="text-[28px] font-bold text-white mb-2 font-mono">{m.value}</div>
                                <div className="text-[13px] font-bold" style={{ color: m.color }}>{m.change}</div>
                                <div className="mt-3 h-1 w-full rounded-full bg-black/30 overflow-hidden">
                                    <div className="h-full rounded-full transition-all duration-700" style={{ width: m.barWidth, backgroundColor: m.color }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Activity log */}
                    <div className="p-8 text-left relative z-10">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-white font-bold text-lg">Recent Activity</h3>
                            <button className="text-[#97FEED] text-[13px] font-bold px-4 py-1.5 rounded-full border border-[#0B666A]/30 bg-[#071952]/40 hover:bg-[#0B666A]/20 transition-all">
                                View All →
                            </button>
                        </div>

                        <div className="space-y-3">
                            {activities.map((a, i) => (
                                <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-black/30 border border-[#0B666A]/15 hover:border-[#0B666A]/40 transition-all duration-300 group">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0" style={{ backgroundColor: `${a.color}15`, borderColor: `${a.color}40` }}>
                                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: a.color, boxShadow: `0 0 8px ${a.color}` }} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-white font-bold text-[14px] truncate">{a.title}</div>
                                        <div className="text-[11px] uppercase tracking-widest" style={{ color: `${a.color}99` }}>{a.desc}</div>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <div className="text-white font-mono font-bold text-[14px]">{a.latency}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: a.color }}>Latency</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#35A29F]/30 to-transparent" />
                </div>
            </div>
        </section>
    );
}
