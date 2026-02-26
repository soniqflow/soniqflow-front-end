"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send, Phone, CheckCircle2, AlertCircle, Globe, Shield } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setFormState("submitting");
    const formData = new FormData(e.currentTarget);
    formData.append("turnstile-token", turnstileToken);

    try {
      const response = await fetch("https://formspree.io/f/mojnyron", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-32 pb-20 selection:bg-primary/30">
      {/* Dynamic Background Elements */}
      {/* Contact Section BG SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/contact-bg.svg"
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">Communication Uplink Established</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            DIGITAL NODE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#97FEED] to-accent italic">
              CONFLUENCE
            </span>
          </h1>

          <p className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Initialize high-bandwidth connection with SoniqFlow architects.
            Deploying intelligent audio infrastructure across global enterprise nodes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.8fr_1.24fr] gap-16 items-start">
          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Mail className="text-primary" />,
                  label: "Data Packet Link",
                  value: "support@soniqflow.com",
                  href: "mailto:support@soniqflow.com"
                },
                {
                  icon: <Phone className="text-primary" />,
                  label: "Voice Frequency",
                  value: "+1 231 550 1090",
                  href: "tel:+12315501090"
                },
                {
                  icon: <MapPin className="text-primary" />,
                  label: "Global Node HQ",
                  value: "548 Market Street, PMB 67291",
                  detail: "San Francisco, CA 94104, United States"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.4 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="glass-box rounded-3xl p-8 border-white/5 transition-all cursor-default"
                >
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-2">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-xl font-medium hover:text-primary transition-colors block leading-tight">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-xl font-medium leading-tight">
                          {item.value}
                          <div className="text-sm text-white/30 mt-1">{item.detail}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual KPI Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="glass-box rounded-[40px] p-10 border-white/5 bg-primary/5 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
              <h4 className="font-bold text-sm mb-8 flex items-center gap-3 tracking-widest uppercase text-white/40">
                <Globe size={14} className="text-primary animate-spin-slow" />
                Network Latency MAP
              </h4>

              <div className="space-y-6">
                {[
                  { label: "US-WEST-NODE-1", val: "0.4ms", color: "bg-primary" },
                  { label: "EU-CENTRAL-ALPHA", val: "12ms", color: "bg-accent" },
                  { label: "ASIA-PACIFIC-NODE", val: "24ms", color: "bg-white" }
                ].map((node, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end text-[10px] font-mono tracking-tighter">
                      <span className="text-white/30">{node.label}</span>
                      <span className="text-primary font-bold">{node.val}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
                        className={`h-full ${node.color} opacity-40`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-box rounded-[48px] p-10 md:p-16 border-white/5 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-primary/5 blur-[120px] group-hover:bg-primary/10 transition-colors pointer-events-none" />

            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center h-full text-center py-20"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                    <CheckCircle2 size={48} className="text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Transmission Successful</h3>
                  <p className="text-white/40 max-w-sm mb-10 leading-relaxed">
                    Requirement parameters have been uploaded to the command hub. A systems architect will respond on your designated frequency.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-sm font-bold text-primary hover:text-white uppercase tracking-widest transition-colors"
                  >
                    Send New Transmission
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                  <div className="mb-12">
                    <h3 className="text-3xl font-bold mb-4">Initialize Transmission</h3>
                    <p className="text-white/30 text-sm">Designate your operational parameters and technical brief.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] ml-1">Operator Identity</label>
                        <input
                          name="name"
                          required
                          type="text"
                          placeholder="Personnel Name"
                          className="w-full bg-white/[0.02] border-b border-white/10 px-1 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] ml-1">Enterprise Link</label>
                        <input
                          name="email"
                          required
                          type="email"
                          placeholder="name@nexus.com"
                          className="w-full bg-white/[0.02] border-b border-white/10 px-1 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] ml-1">Transmission Vector</label>
                      <div className="relative group">
                        <select
                          name="subject"
                          className="w-full bg-white/[0.02] border-b border-white/10 px-1 py-4 text-white focus:outline-none focus:border-primary transition-all cursor-pointer appearance-none relative z-10"
                        >
                          <option value="infrastructure" className="bg-black text-white">Content Integration</option>

                          <option value="optimization" className="bg-black text-white">Batch Audio Optimization</option>
                          <option value="licensing" className="bg-black text-white">Enterprise Licensing</option>
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none group-focus-within:text-primary transition-colors">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] ml-1">Operational Brief</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Define mission requirements..."
                        className="w-full bg-white/[0.02] border-b border-white/10 px-1 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none placeholder:text-white/10"
                      ></textarea>
                    </div>

                    <div className="flex flex-col gap-8 md:flex-row md:items-center justify-between pt-6">
                      <div className="opacity-80 scale-90 md:scale-100 origin-left">
                        <Turnstile
                          siteKey="0x4AAAAAACiAtCDEUZmqDir6"
                          onSuccess={(token) => setTurnstileToken(token)}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formState === "submitting" || !turnstileToken}
                        className="bg-gradient-to-r from-primary via-[#97FEED] to-accent text-black font-bold h-16 px-12 rounded-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.03] disabled:opacity-50 disabled:grayscale disabled:hover:scale-100 relative overflow-hidden group shadow-[0_10px_40px_rgba(151,254,237,0.2)]"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          {formState === "submitting" ? "TRANSMITTING..." : "DEPLOY PACKET"}
                          <Send size={18} className={formState === "submitting" ? "animate-bounce" : "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"} />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </button>
                    </div>

                    {formState === "error" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest mt-6"
                      >
                        <AlertCircle size={14} />
                        Transmission Failure. Verify data link and retry.
                      </motion.div>
                    )}
                  </form>

                  <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 items-center text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                      <Shield size={12} className="text-primary" />
                      AES-256 ENCRYPTED
                    </div>
                    <div>SECURE-PROTOCOL-V4.2</div>
                    <div className="ml-auto text-primary animate-pulse">Soniq-Pulse Active</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
