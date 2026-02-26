"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* CTA Section BG SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/cta-bg.svg"
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-gradient-to-r from-accent via-primary to-highlight blur-[140px] rounded-full opacity-[0.4]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Rating */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex items-center gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
            ))}
          </div>
          <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest">12K+ teams trust SoniqFlow AI</p>
        </div>

        <h2
          className="text-[48px] sm:text-[72px] font-bold text-white mb-8 leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ready to orchestrate your <span className="mix-text italic font-serif font-medium">audio workflow</span> <br />
          with GPU power?
        </h2>

        <p className="text-white/40 text-[18px] md:text-[20px] mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the next generation of sound automation. Deploy SoniqFlow AI's high-fidelity
          distributed infrastructure and optimize your production today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link 
            href="#pricing"
            className="bg-primary text-black font-bold px-10 py-5 rounded-full text-[18px] hover:scale-105 transition-all shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.4)] flex items-center justify-center"
          >
            Initialize Orchestration
          </Link>
          <Link 
            href="/contact"
            className="px-10 py-5 rounded-full text-[18px] font-bold text-white border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-all flex items-center justify-center"
          >
            Technical Brief
          </Link>
        </div>
      </div>

      {/* Decorative Line fade for transition to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
