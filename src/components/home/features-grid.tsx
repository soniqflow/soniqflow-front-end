"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Modal data for each module ───────────────────────────── */
const moduleData = [
  {
    id: "ingestion",
    badge: "Soniq 01",
    title: "Orchestration Ingestion Engine",
    accent: "#35A29F",
    apiEndpoint: "POST /v1/audio/ingest",
    apiKey: "sfx_live_ING_4a8f2c9d1b3e7f5a",
    description:
      "Enterprise-grade audio ingestion pipeline that transforms raw audio streams into optimized data frames for GPU-accelerated processing.",
    features: [
      { name: "Multi-Format Ingestion", desc: "Accepts WAV, FLAC, MP3, AAC, Opus, and raw PCM with automatic codec detection." },
      { name: "Real-Time Stream Capture", desc: "Ingest live audio feeds via WebSocket, RTMP, or SRT protocols with sub-ms buffering." },
      { name: "GPU Direct Ingress", desc: "Bypass CPU overhead with high-speed GPU data transfer technology for zero-copy orchestration." },
      { name: "Batch Upload Pipeline", desc: "Upload up to 10,000 audio files simultaneously with parallel processing queues." },
      { name: "Auto-Normalization", desc: "Automatic loudness normalization (LUFS) and sample rate conversion on ingestion." },
      { name: "Metadata Extraction", desc: "AI-powered extraction of BPM, key, mood, genre, and spectral fingerprints." },
    ],
    stats: [
      { label: "Ingestion Speed", value: "4.2 TB/s" },
      { label: "Supported Formats", value: "12+" },
      { label: "Max Batch Size", value: "10K files" },
      { label: "Latency", value: "< 0.3ms" },
    ],
  },
  {
    id: "sdk-engine",
    badge: "Soniq 02",
    title: "Effortless Audio Automation Engine",
    accent: "#0B666A",
    apiEndpoint: "POST /v1/sdk/process",
    apiKey: "sfx_live_SDK_7e2b9d4f1a6c8h3k",
    description:
      "Automate repetitive sound engineering tasks with intelligence audio workflow, allowing production teams to focus on creative vision while our AI handles optimization.",
    features: [
      { name: "Automated complex, multi-step audio chains with reliability", desc: "" },
      { name: "Real-time frequency and waveform optimization", desc: "" },
      { name: "Adaptive workflows that scale with production demand", desc: "" },
    ],
    stats: [
      { label: "Engine Version", value: "v4.2" },
      { label: "Pipeline Nodes", value: "32 max" },
      { label: "Frequency Match", value: "94%" },
      { label: "Parallel Flows", value: "14" },
    ],
  },
  {
    id: "architecture",
    badge: "Soniq 03",
    title: "Scalable Architecture Platform",
    accent: "#97FEED",
    apiEndpoint: "GET /v1/cluster/status",
    apiKey: "sfx_live_ARC_3f8a1d6e9b2c7k5m",
    description:
      "Enterprise-scale distributed architecture with auto-scaling GPU clusters, global edge delivery, and zero-downtime deployments.",
    features: [
      { name: "Auto-Scaling Clusters", desc: "GPU nodes scale from 2 to 1,240+ based on real-time demand with zero configuration." },
      { name: "Global Edge Network", desc: "Audio delivery from 42 edge locations worldwide with sub-10ms regional latency." },
      { name: "Rolling Deployments", desc: "Zero-downtime updates with automatic canary releases and instant rollback." },
      { name: "Multi-Region Sync", desc: "Cross-region data synchronization with conflict resolution and eventual consistency." },
      { name: "Load Balancing", desc: "Intelligent traffic routing across GPU clusters based on capacity, latency, and cost." },
      { name: "Disaster Recovery", desc: "Automated failover with < 30s recovery time and 3-region redundancy." },
    ],
    stats: [
      { label: "Edge Locations", value: "42" },
      { label: "Max Nodes", value: "1,240+" },
      { label: "Failover Time", value: "< 30s" },
      { label: "Global Uptime", value: "99.99%" },
    ],
  },
  {
    id: "infrastructure",
    badge: "Soniq 04",
    title: "Infrastructure Quality Monitor",
    accent: "#071952",
    apiEndpoint: "GET /v1/telemetry/health",
    apiKey: "sfx_live_INF_9c4e2a7b1d5f8g3j",
    description:
      "Comprehensive infrastructure monitoring with real-time telemetry, GPU health tracking, and predictive alerting across your entire audio stack.",
    features: [
      { name: "GPU Telemetry", desc: "Real-time monitoring of GPU utilization, memory, temperature, and clock speeds per node." },
      { name: "Latency Tracking", desc: "End-to-end latency measurement across every pipeline stage with P99 percentile tracking." },
      { name: "Predictive Alerts", desc: "AI-driven anomaly detection that predicts failures 30 minutes before they occur." },
      { name: "Throughput Analytics", desc: "Live throughput dashboards showing TB/s flux capacity across all active clusters." },
      { name: "Security Monitoring", desc: "SOC2/HIPAA compliance monitoring with real-time threat detection and audit logging." },
      { name: "Cost Optimization", desc: "GPU utilization insights with recommendations to reduce infrastructure spend by up to 40%." },
    ],
    stats: [
      { label: "Latency Floor", value: "0.2ms" },
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Throughput", value: "4.2 Tbps" },
      { label: "Security Tier", value: "Tier 4" },
    ],
  },
];

export default function FeaturesGrid() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activeModule = moduleData.find((m) => m.id === openModal);

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const accentMap: Record<string, string> = {
    ingestion: "#35A29F",
    "sdk-engine": "#0B666A",
    architecture: "#97FEED",
    infrastructure: "#071952",
  };

  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">

      {/* Feature Section BG SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/feature-bg.svg"
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      <div className="absolute inset-0 bg-black dot-grid opacity-20 pointer-events-none z-0" />

      {/* Scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[15, 45, 75].map((pct) => (
          <div
            key={pct}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B666A]/20 to-transparent animate-scan-line"
            style={{ top: `${pct}%`, animationDelay: `${pct / 25}s` }}
          />
        ))}
      </div>


      {/* ── Content ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#0B666A]/40 bg-[#071952]/30 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
            <span className="text-[11px] font-bold text-[#97FEED] uppercase tracking-[0.25em]">Features</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] sm:text-[72px] font-bold text-white mb-8 tracking-tight leading-[1.0] max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            All the tools your team needs <br />
            for <span className="bg-gradient-to-r from-[#97FEED] via-[#35A29F] to-[#0B666A] bg-clip-text text-transparent italic font-serif">audio automation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-[20px] max-w-2xl mx-auto leading-relaxed"
          >
            High-performance GPU features engineered for enterprise sound workflows,
            real-time orchestration, and reliable audio delivery.
          </motion.p>

          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="h-1 w-12 rounded-full bg-[#071952]" />
            <div className="h-1 w-16 rounded-full bg-[#0B666A]" />
            <div className="h-1 w-20 rounded-full bg-[#35A29F]" />
            <div className="h-1 w-12 rounded-full bg-[#97FEED]" />
          </div>
        </div>

        <div className="space-y-32">

          {/* ── Feature 1: Orchestration Ingestion ──────── */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071952]/50 border border-[#0B666A]/30 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35A29F]" />
                <span className="text-[10px] font-bold text-[#97FEED] uppercase tracking-[0.2em]">Soniq 01</span>
              </div>
              <h3 className="text-[38px] font-bold text-white mb-6 leading-tight">
                High-fidelity data <br />
                <span className="text-[#35A29F]">orchestration</span> ingestion
              </h3>
              <p className="text-white/40 text-[17px] mb-10 leading-relaxed">
                Connect your existing audio streams and production tools into
                a unified orchestration engine designed for <span className="text-[#97FEED]">GPU-accelerated</span> processing.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  "Transform raw audio frames into automated content",
                  "Direct GPU ingress for sub-millisecond data handling",
                  "Support for multi-track enterprise-grade production"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/60">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#0B666A]/30 border border-[#35A29F]/40 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#97FEED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setOpenModal("ingestion")}
                className="px-8 py-3.5 rounded-full bg-[#071952] text-[#97FEED] text-[14px] font-bold border border-[#0B666A]/40 hover:bg-[#0B666A]/40 hover:border-[#35A29F]/60 transition-all duration-300 shadow-[0_0_20px_rgba(7,25,82,0.6)]"
              >
                Explore Ingestion →
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#071952]/40 via-[#35A29F]/20 to-transparent blur-[50px] rounded-[40px] pointer-events-none" />
              <div className="relative rounded-[32px] border border-[#35A29F]/20 bg-black/40 backdrop-blur-xl p-10 overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#35A29F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="space-y-5 relative z-10">
                  {[
                    { label: "Orchestration Flux", status: "Nominal", active: true, color: "#35A29F" },
                    { label: "Pipeline Sync", status: "Active", active: true, color: "#97FEED" },
                    { label: "Jitter Correction", status: "Stable", active: true, color: "#0B666A" },
                    { label: "Direct Ingress", status: "Connected", active: true, color: "#35A29F" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                      className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#35A29F]/30 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }} />
                        </div>
                        <span className="text-white/90 font-bold text-[15px] tracking-tight">{item.label}</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-[#35A29F]/20">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: item.color }}>{item.status}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[40%] h-px bg-gradient-to-r from-transparent via-[#35A29F]/50 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* ── Feature 2: SDK Automation ──────────────── */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0B666A]/30 via-[#35A29F]/10 to-transparent blur-[50px] rounded-[40px] pointer-events-none" />
              <div className="relative rounded-[32px] border border-[#0B666A]/30 bg-black/40 backdrop-blur-xl p-10 overflow-hidden flex flex-col items-center justify-center min-h-[420px] group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#35A29F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-10 text-center relative z-10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#071952] to-[#0B666A] flex items-center justify-center mx-auto mb-5 shadow-[0_0_40px_rgba(11,102,106,0.4)] border border-[#35A29F]/30 transition-all group-hover:border-[#97FEED]/50">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#97FEED" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="text-[#97FEED] font-bold text-sm tracking-[0.2em] uppercase">SoniqFlow AI</div>
                  <div className="text-white/30 text-[10px] mt-2 tracking-widest uppercase">Pipeline Sync Active</div>
                </motion.div>

                <div className="relative w-full max-w-[340px] z-10 space-y-4">
                  <div className="flex justify-between gap-2">
                    {['Ingestion', 'Analysis', 'Synthesis'].map((tag) => (
                      <div key={tag} className="flex-1 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-[#97FEED] text-[9px] uppercase tracking-widest font-bold text-center transition-colors group-hover:bg-[#35A29F]/5">{tag}</div>
                    ))}
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-black/40 border border-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#071952] via-[#0B666A] to-[#35A29F]"
                    />
                  </div>
                  <div className="px-5 py-4 rounded-xl bg-[#0B666A]/5 border border-[#0B666A]/20 text-center backdrop-blur-sm group-hover:border-[#35A29F]/40 transition-colors">
                    <span className="text-white font-bold text-[14px] tracking-tight">Automated Production Pipeline</span>
                    <span className="flex items-center justify-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#35A29F] animate-pulse" />
                      <span className="text-[#35A29F] text-[10px] font-bold uppercase tracking-wider">Active</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071952]/50 border border-[#0B666A]/30 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B666A]" />
                <span className="text-[10px] font-bold text-[#97FEED] uppercase tracking-[0.2em]">Soniq 02</span>
              </div>
              <h3 className="text-[38px] font-bold text-white mb-6 leading-tight">
                Effortless Audio <br />
                <span className="text-[#0B666A]">Automation Engine</span>
              </h3>
              <p className="text-white/40 text-[17px] mb-10 leading-relaxed">
                Automate repetitive sound engineering tasks with <span className="text-[#35A29F]">intelligent AI orchestration</span>,
                allowing production teams to focus on creative vision while our AI handles optimization.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  "Automate complex, multi-step audio chains with reliability",
                  "Real-time frequency and waveform optimization",
                  "Adaptive workflows that scale with production demand"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/60">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#071952]/50 border border-[#0B666A]/40 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#35A29F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setOpenModal("sdk-engine")}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#071952] to-[#0B666A] text-[#97FEED] text-[14px] font-bold border border-[#0B666A]/50 hover:border-[#35A29F]/60 transition-all duration-300 shadow-[0_0_25px_rgba(11,102,106,0.4)]"
              >
                Explore Engine →
              </button>
            </div>
          </div>

          {/* ── Feature 3: Scalable Architecture ───────── */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071952]/50 border border-[#0B666A]/30 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED]" />
                <span className="text-[10px] font-bold text-[#97FEED] uppercase tracking-[0.2em]">Soniq 03</span>
              </div>
              <h3 className="text-[38px] font-bold text-white mb-6 leading-tight">
                <span className="text-[#97FEED]">Scalable</span> architecture <br />
                for enterprise media
              </h3>
              <p className="text-white/40 text-[17px] mb-10 leading-relaxed">
                Move from localized production to <span className="text-[#0B666A]">global delivery</span> with structured
                orchestration that handles massive audio loads without quality degradation.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  "Add nodes and pipelines without added complexity",
                  "Maintain fidelity as throughput scales across regions",
                  "GPU cluster auto-scaling for peak demand cycles"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/60">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#0B666A]/30 border border-[#35A29F]/40 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#97FEED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setOpenModal("architecture")}
                className="px-8 py-3.5 rounded-full bg-[#071952] text-white text-[14px] font-bold border border-[#0B666A]/40 hover:bg-[#0B666A]/30 hover:border-[#35A29F]/50 transition-all duration-300 shadow-[0_0_20px_rgba(7,25,82,0.5)]"
              >
                View Architecture →
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#071952]/30 via-[#0B666A]/15 to-[#97FEED]/5 blur-[40px] rounded-3xl pointer-events-none" />
              <div className="relative rounded-[28px] border border-[#0B666A]/30 bg-[#071952]/20 backdrop-blur-md p-10 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#35A29F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]" />

                <div className="flex justify-between items-start mb-10 relative z-10">
                  <div className="space-y-2">
                    <div className="text-[32px] font-bold text-white font-mono">4.2 TB/s <span className="text-[#97FEED] text-xs ml-2">+Flux Peak</span></div>
                    <div className="text-[#0B666A] text-xs uppercase tracking-widest font-bold">Global Throughput</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#071952] to-[#0B666A] flex items-center justify-center border border-[#35A29F]/30">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#97FEED" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                  </div>
                </div>

                <div className="flex items-end gap-3 h-48 relative z-10">
                  {[
                    { h: 40, color: "#071952" }, { h: 60, color: "#0B666A" }, { h: 45, color: "#071952" },
                    { h: 80, color: "#0B666A" }, { h: 55, color: "#35A29F" }, { h: 100, color: "#35A29F" }, { h: 70, color: "#0B666A" }
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 relative">
                      <div
                        className={`w-full rounded-t-lg transition-all duration-700 ${i === 5 ? 'opacity-100' : 'opacity-40'}`}
                        style={{ height: `${bar.h}%`, background: `linear-gradient(to top, ${bar.color}, ${i === 5 ? '#97FEED' : '#35A29F'})` }}
                      >
                        {i === 5 && (
                          <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-[#071952]/80 backdrop-blur-md border border-[#0B666A]/40 px-3 py-1.5 rounded-lg whitespace-nowrap">
                            <div className="text-[#97FEED] font-bold text-[13px]">4.2 TB/s</div>
                            <div className="text-white/30 text-[10px]">Peak Hour</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-6 text-[#0B666A] text-xs font-bold uppercase tracking-wider relative z-10">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#97FEED]/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* ── Feature 4: Infrastructure Quality ──────── */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0B666A]/30 via-[#35A29F]/10 to-transparent blur-[50px] rounded-[40px] pointer-events-none" />
              <div className="relative rounded-[32px] border border-[#0B666A]/30 bg-black/40 backdrop-blur-xl p-8 overflow-hidden group min-h-[420px] flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#35A29F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]" />
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm relative z-10">
                  {[
                    { title: "Latency", value: "0.2ms", trend: "-12%", color: "#35A29F" },
                    { title: "Uptime", value: "99.99%", trend: "+0.01%", color: "#97FEED" },
                    { title: "Throughput", value: "4.2 Tbps", trend: "+24%", color: "#0B666A" },
                    { title: "Security", value: "99.9%", trend: "Stable", color: "#071952" }
                  ].map((node, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 rounded-2xl bg-black/30 border border-white/[0.06] hover:border-[#0B666A]/40 transition-all duration-300 group/card"
                    >
                      <div className="text-white/30 text-[10px] uppercase tracking-widest mb-2 font-bold">{node.title}</div>
                      <div className="text-xl font-bold text-white mb-2 font-mono">{node.value}</div>
                      <div className="text-[11px] font-bold" style={{ color: node.color }}>{node.trend}</div>
                      <div className="mt-3 h-1 w-full rounded-full bg-black/30 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${65 + i * 10}%` }}
                          className="h-full rounded-full transition-all duration-700"
                          style={{ backgroundColor: node.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071952]/50 border border-[#0B666A]/30 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35A29F]" />
                <span className="text-[10px] font-bold text-[#97FEED] uppercase tracking-[0.2em]">Soniq 04</span>
              </div>
              <h3 className="text-[38px] font-bold text-white mb-6 leading-tight">
                Infrastructure <span className="text-[#0B666A]">quality</span> <br />
                at <span className="text-[#97FEED]">global</span> scale
              </h3>
              <p className="text-white/40 text-[17px] mb-10 leading-relaxed">
                Connect your entire ecosystem through our <span className="text-[#35A29F]">high-fidelity distributed infrastructure</span>,
                designed for maximum uptime and minimum latency with enterprise-grade security.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  "Global edge network with sub-millisecond sync",
                  "Enterprise-grade security and data isolation",
                  "Instant failover for mission-critical paths"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/60">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#071952]/50 border border-[#35A29F]/40 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#35A29F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setOpenModal("infrastructure")}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#071952] via-[#0B666A] to-[#35A29F] text-white text-[14px] font-bold border border-[#35A29F]/30 hover:shadow-[0_0_30px_rgba(53,162,159,0.4)] transition-all duration-300"
              >
                Explore Infrastructure →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          FEATURE DETAIL MODAL
          ══════════════════════════════════════════════════ */}
      {activeModule && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={() => setOpenModal(null)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[28px] border bg-black/95 backdrop-blur-xl p-0"
            style={{ borderColor: `${activeModule.accent}40` }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal glow */}
            <div className="absolute top-0 left-[20%] w-[60%] h-[200px] blur-[100px] rounded-full pointer-events-none z-0" style={{ backgroundColor: `${activeModule.accent}15` }} />

            {/* Close button */}
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-20 border transition-all hover:bg-white/10"
              style={{ borderColor: `${activeModule.accent}40`, backgroundColor: `${activeModule.accent}10` }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>

            {/* Header */}
            <div className="p-8 pb-0 relative z-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border bg-[#071952]/30 mb-6" style={{ borderColor: `${activeModule.accent}40` }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeModule.accent }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: activeModule.accent }}>{activeModule.badge}</span>
              </div>
              <h3 className="text-[32px] font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                {activeModule.title}
              </h3>
              <p className="text-white/50 text-[16px] leading-relaxed max-w-2xl">
                {activeModule.description}
              </p>
            </div>

            {/* Stats strip */}
            <div className="mx-8 mt-8 grid grid-cols-4 gap-px rounded-xl overflow-hidden border relative z-10" style={{ borderColor: `${activeModule.accent}30` }}>
              {activeModule.stats.map((stat) => (
                <div key={stat.label} className="py-4 px-3 bg-[#071952]/20 text-center hover:bg-[#071952]/40 transition-colors">
                  <div className="text-[18px] font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mt-1" style={{ color: `${activeModule.accent}99` }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features grid */}
            <div className="p-8 relative z-10">
              <h4 className="text-white font-bold text-lg mb-6">Capabilities</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {activeModule.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-black/30 border hover:bg-[#071952]/20 transition-all duration-300 group"
                    style={{ borderColor: `${activeModule.accent}20` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center border" style={{ backgroundColor: `${activeModule.accent}15`, borderColor: `${activeModule.accent}30` }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={activeModule.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      <div>
                        <div className="text-white font-bold text-[14px] mb-1">{feat.name}</div>
                        <div className="text-white/40 text-[13px] leading-relaxed">{feat.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* API Key Section */}
            <div className="mx-8 mb-8 rounded-2xl border p-6 relative z-10" style={{ borderColor: `${activeModule.accent}30`, background: `linear-gradient(135deg, ${activeModule.accent}08, transparent)` }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${activeModule.accent}20`, border: `1px solid ${activeModule.accent}40` }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={activeModule.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>
                </div>
                <div>
                  <div className="text-white font-bold text-[15px]">API Access</div>
                  <div className="text-white/30 text-[12px]">Use this key to connect to the {activeModule.title}</div>
                </div>
              </div>

              <div className="space-y-3">
                {/* Endpoint */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded" style={{ backgroundColor: `${activeModule.accent}20`, color: activeModule.accent }}>Endpoint</span>
                  <code className="text-white/70 text-[13px] font-mono flex-1">{activeModule.apiEndpoint}</code>
                </div>

                {/* API Key */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded" style={{ backgroundColor: `${activeModule.accent}20`, color: activeModule.accent }}>API Key</span>
                  <code className="text-white/70 text-[13px] font-mono flex-1 select-all">{activeModule.apiKey}</code>
                  <button
                    onClick={() => handleCopyKey(activeModule.apiKey)}
                    className="px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all duration-300 border"
                    style={{
                      backgroundColor: copiedKey === activeModule.apiKey ? `${activeModule.accent}30` : `${activeModule.accent}10`,
                      borderColor: `${activeModule.accent}40`,
                      color: activeModule.accent
                    }}
                  >
                    {copiedKey === activeModule.apiKey ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Quick code example */}
              <div className="mt-5 p-4 rounded-xl bg-black/50 border border-white/5 overflow-x-auto">
                <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: activeModule.accent }}>Quick Start</div>
                <pre className="text-[13px] font-mono text-white/60 leading-relaxed whitespace-pre">
                  {`curl -X ${activeModule.apiEndpoint.split(' ')[0]} \\
  https://api.soniqflow.com${activeModule.apiEndpoint.split(' ')[1]} \\
  -H "Authorization: Bearer ${activeModule.apiKey}" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
