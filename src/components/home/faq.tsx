"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "What GPU infrastructure does SoniqFlow AI use?",
    a: "We use advanced GPU-accelerated compute layers to ensure ultra-low latency and seamless audio orchestration for large-scale production.",
  },
  {
    q: "Does SoniqFlow integrate with existing audio tools?",
    a: "Yes — the platform connects seamlessly with DAWs, broadcast systems, and custom production tools via a unified API bridge, enabling smooth integration with your existing workflows.",
  },
  {
    q: "Is this suitable for enterprise-scale production?",
    a: "Absolutely. Our infrastructure auto-scales from indie projects to petabyte-scale audio flux across global GPU clusters with 99.99% uptime SLA.",
  },
  {
    q: "What kind of audio processing is supported?",
    a: "Real-time synthesis, multi-track normalization, frequency optimization, waveform analysis, automated mastering, and AI-driven sound design.",
  },
  {
    q: "What support tiers are available?",
    a: "Creator Node includes community support. Production Pipeline includes priority response. Enterprise Cluster includes dedicated L1 infrastructure engineers.",
  },
  {
    q: "Can we run on-premise deployments?",
    a: "Yes — Enterprise Cluster tier supports full on-premise GPU deployment with dedicated high-performance hardware, custom SLAs, and isolated data processing.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, we offer a 14-day trial on Creator Node and Production Pipeline tiers so you can test orchestration with zero risk and full feature access.",
  },
  {
    q: "How is data security handled?",
    a: "All audio data is processed in SOC2-certified, HIPAA-compliant infrastructure with end-to-end encryption and isolated tenant environments.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accentColors = ["#35A29F", "#0B666A", "#97FEED", "#071952"];

  return (
    <section id="faq" className="py-32 bg-black relative overflow-hidden border-t border-[#0B666A]/20">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2070"
          alt="Technical Grid"
          className="w-full h-full object-cover opacity-[0.14] grayscale contrast-150 saturate-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Patterns Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none blueprint opacity-[0.12]" />
      <div className="absolute inset-0 bg-black dot-grid opacity-30 pointer-events-none z-0" />

      {/* Atmospheric Glows */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-[#071952]/40 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[-8%] w-[600px] h-[600px] bg-[#0B666A]/25 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[50%] left-[30%] w-[400px] h-[400px] bg-[#35A29F]/15 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[20, 70].map((pct) => (
          <div key={pct} className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B666A]/25 to-transparent animate-scan-line" style={{ top: `${pct}%` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#0B666A]/40 bg-[#071952]/30 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
            <span className="text-[11px] font-bold text-[#97FEED] uppercase tracking-[0.25em]">FAQs</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
          </div>
          <h2 className="text-[48px] sm:text-[68px] font-bold text-white tracking-tight leading-[1.05] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Got questions? We&apos;ve <br />
            got <span className="mix-text italic font-serif font-medium">answers.</span>
          </h2>
          <p className="text-white/40 text-[18px] max-w-2xl mx-auto leading-relaxed mb-6">
            Everything you need to know about <span className="text-[#97FEED]">SoniqFlow&apos;s GPU-accelerated</span> audio orchestration platform.
          </p>

          {/* Color bar */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 rounded-full bg-[#071952]" />
            <div className="h-1 w-16 rounded-full bg-[#0B666A]" />
            <div className="h-1 w-20 rounded-full bg-[#35A29F]" />
            <div className="h-1 w-12 rounded-full bg-[#97FEED]" />
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-px rounded-[28px] overflow-hidden border border-[#0B666A]/30 bg-[#071952]/10">
          {faqs.map((faq, i) => {
            const accent = accentColors[i % accentColors.length];
            return (
              <div
                key={i}
                className="relative bg-black/40 backdrop-blur-sm cursor-pointer group transition-all duration-300 hover:bg-[#071952]/20 overflow-hidden"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center border" style={{ backgroundColor: `${accent}15`, borderColor: `${accent}30` }}>
                        <span className="text-[10px] font-bold font-mono" style={{ color: accent }}>{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className={`text-[16px] font-bold transition-colors ${openIndex === i ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                        {faq.q}
                      </h3>
                    </div>
                    <div className="mt-1 flex-shrink-0">
                      {openIndex === i ? (
                        <div className="w-6 h-6 flex items-center justify-center rounded-full" style={{ backgroundColor: `${accent}20`, color: accent }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        </div>
                      ) : (
                        <div className="w-6 h-6 flex items-center justify-center text-white/20 group-hover:text-[#35A29F] transition-colors">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-[200px] mt-5 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-white/40 text-[15px] leading-relaxed max-w-lg pl-10">
                      {faq.a}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line on open */}
                {openIndex === i && (
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${accent}50, transparent)` }} />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-16 text-center">
          <p className="text-white/30 text-[14px] mb-6">Still have questions?</p>
          <a href="/contact" className="inline-block px-8 py-3.5 rounded-full bg-[#071952] text-[#97FEED] text-[14px] font-bold border border-[#0B666A]/40 hover:bg-[#0B666A]/30 hover:border-[#35A29F]/50 transition-all duration-300 shadow-[0_0_20px_rgba(7,25,82,0.5)]">
            Contact Our Team →
          </a>
        </div>
      </div>
    </section>
  );
}
