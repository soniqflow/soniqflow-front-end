"use client";
import React from "react";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                    <div>
                        <h1 className="text-[32px] font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>
                            Command Center
                        </h1>
                        <p className="text-white/40 text-[14px]">Orchestrating AI Audio Workflows across 12 active clusters.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="glass px-4 py-2 rounded-xl text-[13px] font-semibold text-white/70 hover:bg-white/5 transition-colors">
                            Export Logs
                        </button>
                        <button className="bg-primary hover:opacity-90 transition-opacity text-white text-[13px] font-bold px-5 py-2 rounded-xl">
                            New Workflow +
                        </button>
                    </div>
                </div>

                {/* Top Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: "Active Nodes", value: "342", sub: "Operational", color: "text-primary" },
                        { label: "Process Latency", value: "1.24ms", sub: "Ultra-low", color: "text-accent" },
                        { label: "Throughput", value: "1.8 TB/h", sub: "Peak Efficiency", color: "text-amber" },
                        { label: "GPU Load", value: "78%", sub: "AI Optimization Active", color: "text-primary" },
                    ].map((stat) => (
                        <div key={stat.label} className="glass rounded-2xl p-6 border-white/5">
                            <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-2">{stat.label}</p>
                            <h3 className="text-[28px] font-bold text-foreground leading-none mb-2">{stat.value}</h3>
                            <div className="flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full bg-current ${stat.color} animate-pulse`} />
                                <span className="text-white/40 text-[11px] font-medium">{stat.sub}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left: Active Workflows */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass rounded-3xl p-6 border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-foreground font-bold text-[18px]">Active Audio Workflows</h3>
                                <span className="text-[11px] text-white/30 font-mono">12 RUNNING</span>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { name: "Podcast_Master_v2", type: "Neural Mastering", status: "Running", progress: 75, cluster: "US-EAST-1" },
                                    { name: "Studio_Denoise_Main", type: "Signal Cleaning", status: "Running", progress: 42, cluster: "EU-WEST-2" },
                                    { name: "Global_LUFS_Normalize", type: "Compliance", status: "Pending", progress: 0, cluster: "AS-SOUTH-1" },
                                    { name: "Vocal_Isolation_Hifi", type: "De-reverb", status: "Running", progress: 89, cluster: "US-WEST-2" },
                                ].map((wf) => (
                                    <div key={wf.name} className="bg-white/[0.03] rounded-2xl p-4 flex items-center gap-4 hover:bg-white/[0.05] transition-colors border border-white/5">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl">🔊</div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span className="text-foreground font-semibold text-[14px]">{wf.name}</span>
                                                <span className="text-[10px] text-primary font-bold uppercase tracking-widest">{wf.status}</span>
                                            </div>
                                            <p className="text-white/30 text-[11px] mb-3">{wf.type} • {wf.cluster}</p>
                                            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-primary animate-glow-pulse" style={{ width: `${wf.progress}%` }} />
                                            </div>
                                        </div>
                                        <div className="text-right ml-4">
                                            <span className="text-[13px] font-mono text-white/60">{wf.progress}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Telemetry & Health */}
                    <div className="space-y-6">
                        {/* GPU Visualizer */}
                        <div className="glass rounded-3xl p-6 border-white/5">
                            <h3 className="text-foreground font-bold text-[16px] mb-6">GPU Telemetry</h3>
                            <div className="flex items-end gap-1 h-32 mb-4">
                                {Array.from({ length: 24 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-t-sm"
                                        style={{
                                            height: `${30 + Math.random() * 70}%`,
                                            backgroundColor: i > 18 ? 'var(--color-accent)' : 'var(--color-primary)',
                                            opacity: 0.2 + (i / 24) * 0.8
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 rounded-xl bg-white/5">
                                    <span className="block text-[10px] text-white/20 uppercase tracking-widest mb-1">Fan Speed</span>
                                    <span className="block text-foreground font-bold text-[14px]">62%</span>
                                </div>
                                <div className="text-center p-3 rounded-xl bg-white/5">
                                    <span className="block text-[10px] text-white/20 uppercase tracking-widest mb-1">Temp</span>
                                    <span className="block text-accent font-bold text-[14px]">68°C</span>
                                </div>
                            </div>
                        </div>

                        {/* System Notifications */}
                        <div className="glass rounded-3xl p-6 border-white/5">
                            <h3 className="text-foreground font-bold text-[16px] mb-4">System Alerts</h3>
                            <div className="space-y-4">
                                {[
                                    { msg: "Node US-EAST-1 scaling up", time: "2m ago", type: "info" },
                                    { msg: "High throughput detected", time: "14m ago", type: "warning" },
                                    { msg: "Workflow completed", time: "1h ago", type: "success" },
                                ].map((log, i) => (
                                    <div key={i} className="flex gap-3 text-[12px] border-l border-white/10 pl-3">
                                        <div className="flex-1">
                                            <p className="text-white/70">{log.msg}</p>
                                            <span className="text-white/20 text-[10px]">{log.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
