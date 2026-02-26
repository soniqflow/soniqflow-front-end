"use client";
import React, { useState } from "react";

const users = [
  {
    name: "Aeron Wells",
    handle: "@aeron.wells",
    role: "Lead Systems Architect",
    avatar: "/aeron-wells.svg",
    quote: "A game-changer for audio orchestration",
    text: "SoniqFlow helped our production team manage complex multi-track workflows in real-time. The GPU acceleration reduced our processing latency by 80%.",
    date: "Feb 09, 2026",
    accent: "#35A29F"
  },
  {
    name: "Silas Merton",
    handle: "@silas.merton",
    role: "Production Director",
    avatar: "/silas-merton.svg",
    quote: "Simplified our complex sound chain",
    text: "Visualizing our audio data flow with SoniqFlow changed how we approach automated optimization. It's now the backbone of our sound architecture.",
    date: "Jan 24, 2026",
    accent: "#0B666A"
  },
  {
    name: "Jace Dawson",
    handle: "@jace.dawson",
    role: "CTO, Media Group",
    avatar: "/jace-dawson.svg",
    quote: "The future of AI-driven sound",
    text: "We've reduced our sound normalization time by 60%. Our engineers can now orchestrate global-scale audio events in their first week.",
    date: "Feb 01, 2026",
    accent: "#97FEED"
  },
  {
    name: "Theo Lorin",
    handle: "@theo.lorin",
    role: "Technical Lead",
    avatar: "/theo-lorin.svg",
    quote: "Unbeatable processing throughput",
    text: "The AI engine integration was seamless. It's the first platform that actually handles petabyte-scale audio flux with zero jitter.",
    date: "Feb 12, 2026",
    accent: "#071952"
  }
];

import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeUser = users[activeIndex];

  return (
    <section id="testimonials" className="py-32 bg-black relative overflow-hidden border-t border-[#0B666A]/20">

      {/* Testimonials Section BG SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/cta-bg.svg"
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Patterns Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none hex-grid opacity-25" />
      <div className="absolute inset-0 bg-black dot-grid opacity-40 pointer-events-none z-0" />

      {/* Atmospheric Glows */}
      <div className="absolute top-[5%] right-[-5%] w-[600px] h-[600px] bg-[#071952]/40 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-[#0B666A]/25 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-[#35A29F]/15 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[25, 65].map((pct) => (
          <div key={pct} className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B666A]/25 to-transparent animate-scan-line" style={{ top: `${pct}%` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#0B666A]/40 bg-[#071952]/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
              <span className="text-[11px] font-bold text-[#97FEED] uppercase tracking-[0.25em]">Testimonials</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
            </div>
            <h2 className="text-[48px] sm:text-[68px] font-bold text-white tracking-tight leading-[1.05]" style={{ fontFamily: "var(--font-display)" }}>
              Trusted by <span className="text-[#35A29F]">systems architects</span> & <br />
              <span className="mix-text">production teams</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-md"
          >
            <p className="text-white/40 text-[17px] leading-relaxed">
              See how media enterprises use our AI for large-scale audio orchestration,
              <span className="text-[#97FEED]"> real-time optimization</span>, and automated sound excellence across global infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1.2fr_2fr] rounded-[32px] overflow-hidden border border-[#0B666A]/30 bg-[#071952]/10 backdrop-blur-md relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#071952]/20 to-transparent pointer-events-none rounded-[32px]" />

          {/* User List Sidebar */}
          <div className="border-b lg:border-b-0 lg:border-r border-[#0B666A]/20 flex flex-col divide-y divide-[#0B666A]/10 relative z-10">
            {users.map((user, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`p-8 flex items-center justify-between text-left transition-all duration-300 ${activeIndex === i ? 'bg-[#071952]/30' : 'hover:bg-[#071952]/15'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className={`w-12 h-12 rounded-full object-cover transition-all duration-500 ${activeIndex === i ? 'grayscale-0' : 'grayscale opacity-50'}`}
                      style={activeIndex === i ? { boxShadow: `0 0 0 2px ${user.accent}`, padding: '2px' } : {}}
                    />
                    {activeIndex === i && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-black flex items-center justify-center" style={{ backgroundColor: user.accent }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className={`font-bold text-[16px] leading-none mb-1 transition-colors ${activeIndex === i ? 'text-white' : 'text-white/40'}`}>
                      {user.name}
                    </div>
                    <div className="text-white/20 text-[13px]">{user.handle}</div>
                  </div>
                </div>
                <div
                  className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border transition-all duration-300"
                  style={activeIndex === i ? { backgroundColor: `${user.accent}20`, borderColor: `${user.accent}40`, color: user.accent } : { backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.2)' }}
                >
                  {user.role}
                </div>
              </button>
            ))}
          </div>

          {/* Active Quote */}
          <div className="p-12 lg:p-16 flex flex-col justify-center relative min-h-[480px] z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="absolute top-0 right-0 w-[350px] h-[350px] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ background: `radial-gradient(circle, ${activeUser.accent}15, transparent)` }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={activeUser.accent}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    ))}
                    <span className="ml-3 text-white/40 font-bold text-sm">5.0</span>
                  </div>

                  <h3 className="text-[28px] md:text-[36px] font-bold text-white mb-6 italic leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                    &ldquo;{activeUser.quote}&rdquo;
                  </h3>

                  <p className="text-white/50 text-[18px] leading-relaxed mb-10 max-w-2xl">
                    {activeUser.text}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-[#0B666A]/20">
                    <div className="flex-1" />
                    <div className="text-white/20 text-sm font-medium">{activeUser.date}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Brand logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-16 border-t border-[#0B666A]/15 text-center"
        >
          <div className="flex flex-wrap justify-center gap-16 items-center opacity-30 grayscale contrast-200">
            <svg className="h-8 w-auto" viewBox="0 0 60 25" fill="white">
              <path d="M59.64 14.28c0-4.59-2.29-6.87-6.87-6.87-4.08 0-6.75 2.49-6.75 6.63 0 4.32 2.49 6.75 6.84 6.75 1.71 0 3.39-.36 4.83-1.05l.03-3.03c-1.29.6-2.58.9-4.02.9-1.92 0-3-.87-3-2.91h11.97v-.42zm-8.88-1.56c0-1.89 1.14-2.73 2.1-2.73.99 0 2.1.84 2.1 2.73H50.76zm-13.89 8.16l-.03-2.61c-1.35.75-3.06 1.11-4.8 1.11-3.69 0-5.88-2.19-5.88-6.12 0-4.05 2.31-6.42 6-6.42a8.55 8.55 0 0 1 4.38 1.23l.03-2.49A10.11 10.11 0 0 0 31.98 6c-5.82 0-9.63 3.69-9.63 9.42 0 6 3.9 9.12 9.42 9.12 2.22 0 4.56-.45 6-1.56v.9h3.69v-3h-.6zm-17.16-5.28V9.33H16.8V6.45h2.91V.39h3.69v6.06h4.59v2.88h-4.59v8.31c0 1.95 1.11 2.37 2.19 2.16.84-.18 1.35-.42 2.1-.96l.03 2.91a7.29 7.29 0 0 1-3.69.96c-2.31 0-4.5-1.47-4.5-5.28zm-6.66 4.86l.03-12.03h-3.69V20.4h3.66zM2.82 4.14c0 .84.57 1.44 1.44 1.44s1.44-.6 1.44-1.44S5.13 2.7 4.26 2.7 2.82 3.3 2.82 4.14zM0 20.4h3.69V9.33H0V20.4z" />
            </svg>
            <svg className="h-6 w-auto" viewBox="0 0 116 100" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" />
            </svg>
            <svg className="h-7 w-auto" viewBox="0 0 24 24" fill="white">
              <path d="M12 0L12 8L20 8L12 0Z" />
              <path d="M4 8L12 8L12 16L4 16L4 8Z" />
              <path d="M12 16L20 16L12 24L12 16Z" />
              <path d="M4 0L12 0L12 8L4 8L4 0Z" />
              <path d="M12 8L20 8L20 16L12 16L12 8Z" />
            </svg>
            <svg className="h-7 w-auto" viewBox="0 0 24 24" fill="white">
              <path d="M12 0L12 10.6667H22.6667L12 24L12 13.3333H1.33333L12 0Z" />
            </svg>
            <svg className="h-7 w-auto" viewBox="0 0 24 24" fill="white">
              <path d="M1.5 3h21v18h-21v-18zm2 2v14h17v-14h-17zm15.5 1.5l-7 5-7-5v2l7 5 7-5v-2z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
