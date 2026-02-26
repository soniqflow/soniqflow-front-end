"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Youtube, Instagram, Mail, Shield, ExternalLink, ArrowRight } from "lucide-react";

// Custom Pinterest Icon since it's not in Lucide by default
const PinterestIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.397 2.966 7.397 6.93 0 4.135-2.607 7.462-6.223 7.462-1.215 0-2.358-.63-2.75-1.37l-.749 2.853c-.271 1.033-1.003 2.324-1.492 3.12 1.12.348 2.311.535 3.546.535 6.621 0 12-5.378 12-12S18.638 0 12.017 0z" />
  </svg>
);

// Custom X (Twitter) Icon
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

const navLinkGroups = [
  {
    title: "Platform",
    links: [
      { label: "Solutions", href: "#solutions" },
      { label: "Features", href: "#features" },
      { label: "How it Works", href: "#how-it-works" },
      { label: "Performance", href: "#performance" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/soniqflow.io/", icon: <Facebook size={18} /> },
  { label: "X", href: "https://x.com/SoniqFlow", icon: <XIcon size={18} /> },
  { label: "Pinterest", href: "https://www.pinterest.com/soniq_flow/", icon: <PinterestIcon size={18} /> },
  { label: "YouTube", href: "https://www.youtube.com/@Soniq_Flow", icon: <Youtube size={20} /> },
];

export default function Footer() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/maqdvogv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-[#040F1F] relative pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Visual Design Elements - Creatively Intensified */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full dot-grid opacity-[0.05]" />

        {/* Dynamic Secondary Color Layer: Radial Accents */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#0B666A3d,transparent_70%)]" />

        {/* Creative Visual Layer: Shimmering Animated Glows */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[#0B666A] blur-[200px] rounded-full"
        />
        <motion.div
          animate={{
            translateY: [0, 80, 0],
            translateX: [0, 40, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-15%] w-[800px] h-[800px] bg-[#35A29F] blur-[180px] rounded-full"
        />

        {/* Central Brand Glow */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#97FEED] blur-[240px] rounded-full opacity-10" />

        {/* Pulse Wave / Sound Topology SVG Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-screen overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <path d="M0,200 Q150,150 250,200 T500,200 T750,200 T1000,200" fill="none" stroke="#97FEED" strokeWidth="1" />
            <path d="M0,220 Q150,170 250,220 T500,220 T750,220 T1000,220" fill="none" stroke="#35A29F" strokeWidth="1" />
            <path d="M0,240 Q150,190 250,240 T500,240 T750,240 T1000,240" fill="none" stroke="#0B666A" strokeWidth="1" />
          </svg>
        </div>

        {/* Deep Contrast Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040F1F] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 pb-20 border-b border-white/5">
          {/* Logo-Only Branding & Newsletter Section */}
          <div className="lg:col-span-12 xl:col-span-5">
            <div className="mb-12">
              <Link href="/" className="inline-block group">
                <div className="relative">
                  {/* Decorative Backglow for Logo */}
                  <div className="absolute -inset-8 bg-[#97FEED]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="">
                    {/* Glass Shine Effect */}
                    <div className="" />

                    <Image
                      src="/logo.svg"
                      alt="SoniqFlow"
                      width={100}
                      height={100}
                      className=""
                    />
                  </div>
                </div>
              </Link>
              <p className="mt-10 text-white/50 text-lg leading-relaxed max-w-sm">
                Next-generation GPU-accelerated audio workflow automation.
                Deploying intelligent sound infrastructure at scale.
              </p>
            </div>

            <div className="max-w-md">
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-[0.2em]">Subscribe to Updates</h4>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-2xl bg-[#97FEED]/10 border border-[#97FEED]/20 text-[#97FEED] flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#97FEED]/20 flex items-center justify-center">
                      <ArrowRight size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Thank You!</p>
                      <p className="text-xs opacity-70">Transmission received. You are now on the update list.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubscribe}
                    className="flex gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl focus-within:border-[#97FEED]/50 transition-all shadow-inner"
                  >
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@enterprise.com"
                      className="flex-1 bg-transparent px-4 py-2 text-sm text-white focus:outline-none placeholder:text-white/20"
                    />
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="bg-[#97FEED] text-[#071952] text-xs font-bold px-6 py-2.5 rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_15px_rgba(151,254,237,0.3)] disabled:opacity-50"
                    >
                      {status === "submitting" ? "Linking..." : "Join"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-[#97FEED] hover:bg-[#97FEED]/10 hover:border-[#97FEED]/30 transition-all shadow-lg"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            {navLinkGroups.map((group) => (
              <div key={group.title}>
                <h5 className="text-white font-bold text-xs mb-8 uppercase tracking-[0.3em] opacity-40">{group.title}</h5>
                <ul className="space-y-5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/40 text-sm hover:text-[#97FEED] transition-all flex items-center group/link"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#97FEED] group-hover/link:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Legal / Meta */}
            <div>
              <h5 className="text-white font-bold text-xs mb-8 uppercase tracking-[0.3em] opacity-40">Legal</h5>
              <ul className="space-y-5">
                <li>
                  <Link href="/terms" className="text-white/40 text-sm hover:text-[#97FEED] transition-all flex items-center gap-2">
                    Terms <ExternalLink size={12} />
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white/40 text-sm hover:text-[#97FEED] transition-all flex items-center gap-2">
                    Privacy <Shield size={12} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
            &copy; 2026 SONIQFLOW ARCHITECTS. ALL SYSTEMS NOMINAL.
          </div>
          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
              Mainnet Status: Active
            </span>
            <span className="hidden sm:block">US-WEST-NODE-01</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
