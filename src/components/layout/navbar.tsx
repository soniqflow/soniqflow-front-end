"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Solution", href: "/#solution" },
  { label: "Features", href: "/#features" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Performance", href: "/#performance" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Testimonials", href: "/#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer for Scroll Spy
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is in the middle of the viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "solution", "features", "how-it-works", "performance", "pricing", "testimonials"];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "py-2 bg-black/40 backdrop-blur-md" : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div
          className={`relative flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 overflow-hidden ${scrolled
            ? "bg-[#071952]/40 border-[#0B666A]/30 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            : "bg-white/[0.03] border-white/10 backdrop-blur-sm"
            }`}
        >
          {/* Subtle Scan Line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#35A29F]/40 to-transparent animate-scan-line" />

          {/* Left: Brand & Status */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center group relative z-10">
              <Image src="/logo.svg" alt="SoniqFlow Logo" width={160} height={44} className="object-contain" style={{ mixBlendMode: "screen" }} />
            </Link>

            {/* System Status - Removed as requested */}
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-white/[0.02] border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("/#", "");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 rounded-full group ${isActive ? "text-[#97FEED]" : "text-white/40 hover:text-white/70"
                    }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <>
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#97FEED]/10 border border-[#97FEED]/20 rounded-full z-0"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                      <motion.div
                        layoutId="nav-glow"
                        className="absolute inset-0 bg-[#97FEED]/5 blur-[8px] rounded-full z-0"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    </>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 mr-2">
              {/* Encrypted Badge Removed as requested */}
            </div>

            <Link
              href="/contact"
              className="hidden sm:block text-[12px] font-bold text-white/70 uppercase tracking-widest px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/5 hover:text-white transition-all"
            >
              Contact
            </Link>
            <div
              className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-[#071952] via-[#0B666A] to-[#35A29F] border border-[#35A29F]/30 group transition-all overflow-hidden cursor-default"
            >
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-[12px] font-bold text-white uppercase tracking-widest">Connect Hub</span>
                <span className="text-[#97FEED]">→</span>
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>

            {/* Mobile Hamburger */}
            <button
              className="xl:hidden text-white w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-white/10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden mt-3 p-4 rounded-3xl bg-[#071952]/90 border border-[#0B666A]/30 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#35A29F]/10 blur-[50px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#97FEED]/5 blur-[50px] rounded-full" />

            <div className="relative z-10 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("/#", "");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`relative flex items-center justify-between px-5 py-4 text-[13px] font-bold transition-all rounded-2xl group overflow-hidden ${isActive
                      ? "text-[#97FEED]"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="mobile-active-bg"
                        className="absolute inset-0 bg-gradient-to-r from-[#97FEED]/10 to-transparent border-l-2 border-[#97FEED] z-0"
                      />
                    )}
                    <span className="relative z-10 uppercase tracking-[0.2em]">{link.label}</span>
                    <span className={`relative z-10 text-[#35A29F] transition-transform duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`}>
                      →
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 px-4 flex flex-col gap-3 relative z-10">
              {/* Mobile Status - Removed as requested */}

              <div
                className="w-full h-14 bg-gradient-to-r from-[#071952] to-[#35A29F] rounded-2xl flex items-center justify-center text-[13px] font-bold text-white uppercase tracking-widest cursor-default"
              >
                Connect to Command Hub
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

