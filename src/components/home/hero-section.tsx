"use client";
import React, { useRef } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [inputText, setInputText] = React.useState("");
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [terminalLogs, setTerminalLogs] = React.useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const GROQ_API_KEY = "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";

  const handleGenerate = async () => {
    if (!inputText.trim() || isGenerating) return;

    setIsGenerating(true);
    setTerminalLogs(["[SYSTEM] Initializing audio orchestration sequence...", "[CORE] Connecting to AI Automation Engine...", "[AI] Booting Groq inference engine..."]);

    try {
      // Simulate technical delay for effect
      await new Promise(resolve => setTimeout(resolve, 800));
      setTerminalLogs(prev => [...prev, "[SYSTEM] Latency: 0.2ms | Throughput: 4.2 Tbps", "[AI] Analyzing audio workflow parameters..."]);

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: "You are the SoniqFlow Command Center AI. The user is defining an audio workflow. Respond like a high-end technical system. Be concise. Start your response with [SUCCESS] or [ANALYSIS]. Use technical terms like 'GPU Cluster', 'PCM Buffer', 'SDK Pipeline', 'Flux Level'."
            },
            {
              role: "user",
              content: inputText
            }
          ],
          max_tokens: 150
        })
      });

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || "[ERROR] Failed to stabilize flux sequence.";

      setTerminalLogs(prev => [...prev, "[SYSTEM] Processing complete.", `> ${aiResponse}`]);
    } catch (error) {
      setTerminalLogs(prev => [...prev, "[CRITICAL ERROR] Infrastructure breach detected or API failure."]);
    } finally {
      setIsGenerating(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black dot-grid">
      {/* Hero Section BG SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero-section-bg.svg"
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Hex Grid Overlay for added depth */}
      <div className="absolute inset-0 z-0 pointer-events-none hex-grid opacity-30" />

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[10%] w-32 h-32 border border-[#97FEED]/10 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] right-[10%] w-48 h-48 border border-[#35A29F]/10 rounded-full pointer-events-none"
      />

      {/* Background Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb),0.25)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-r from-accent via-primary to-highlight opacity-[0.15] blur-[140px] pointer-events-none rounded-full z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Headline */}
        <motion.h1 variants={itemVariants} className="text-[44px] md:text-[60px] lg:text-[68px] font-bold tracking-tight text-white mb-6 leading-tight flex flex-col items-center justify-center">
          <span className="flex items-center gap-4 flex-wrap justify-center">
            First GPU-Accelerated
            <div className="flex items-end gap-1.5 h-14 px-4 py-2.5 glass-box rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-500">
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {[4, 10, 6, 12, 8, 14, 5, 11].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-white/40 rounded-full animate-wave"
                  style={{
                    height: `${h * 2.5}px`,
                    animationDelay: `${i * 0.1}s`,
                    backgroundColor: i % 2 === 0 ? 'var(--color-primary)' : 'rgba(255,255,255,0.4)'
                  }}
                />
              ))}
            </div>
          </span>
          <span>Audio Automation with SoniqFlow AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-white/50 text-[16px] md:text-[18px] max-w-2xl mx-auto mb-10 leading-relaxed">
          A smart audio workflow orchestration solution that helps enterprises manage, <br className="hidden md:block" />
          automate, and optimize complex audio pipelines in real time.
        </motion.p>

        {/* Main CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link 
            href="/SoniqFlow-AI"
            className="bg-gradient-to-r from-primary via-[#97FEED] to-accent text-black font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.6)] hover:scale-105 transition-all group"
          >
            Initialize Orchestration
            <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-3 rounded-full font-bold text-white border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-all flex items-center justify-center"
          >
            Technical Brief
          </Link>
        </motion.div>

        {/* Category Pills */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { label: "Workflow Orchestration", href: "#how-it-works" },
            { label: "Sound Automation", href: "#features" },
            { label: "Real-time Optimization", href: "#performance" },
            { label: "Enterprise Media", href: "#pricing" },
            { label: "GPU-Accelerated", href: "#features" },
          ].map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] text-white/50 text-[13px] hover:border-primary/40 hover:text-white hover:bg-primary/5 transition-all duration-300"
            >
              {pill.label}
            </Link>
          ))}
        </motion.div>

        {/* Interactive Command Box */}
        <motion.div variants={itemVariants} className="relative max-w-4xl mx-auto">
          <div className="glass-box-vibrant rounded-[32px] p-1 shadow-2xl animate-pulse-teal backdrop-blur-3xl">
            <div className="bg-black/40 rounded-[31px] backdrop-blur-xl flex flex-col min-h-[220px]">
              <div className="p-8 pt-10 flex-1 flex flex-col">
                <AnimatePresence mode="wait">
                  {terminalLogs.length > 0 ? (
                    <motion.div
                      key="logs"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-1 font-mono text-[14px] text-left overflow-y-auto max-h-[120px] scrollbar-hide py-2"
                    >
                      {terminalLogs.map((log, i) => (
                        <div key={i} className={log.startsWith(">") ? "text-[#97FEED]" : log.startsWith("[ERROR") || log.startsWith("[CRITICAL") ? "text-red-400" : "text-white/40"}>
                          {log}
                        </div>
                      ))}
                      {isGenerating && <div className="text-[#35A29F] animate-pulse">_</div>}
                    </motion.div>
                  ) : (
                    <motion.textarea
                      key="input"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      ref={textareaRef}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Initialize audio workflow optimization sequence or define automation parameters..."
                      className="w-full bg-transparent border-none focus:ring-0 text-white/60 text-[18px] font-medium resize-none placeholder:text-white/20 h-full min-h-[100px]"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleGenerate();
                        }
                      }}
                    />
                  )}
                </AnimatePresence>

                {terminalLogs.length > 0 && !isGenerating && (
                  <button
                    onClick={() => { setTerminalLogs([]); setInputText(""); }}
                    className="text-[12px] text-white/20 hover:text-[#35A29F] mt-4 w-fit uppercase font-bold tracking-widest transition-colors"
                  >
                    Clear Sequence
                  </button>
                )}
              </div>

              {/* Toolbar */}
              <div className="p-4 flex items-center justify-between border-t border-white/5 bg-black/20 rounded-b-[31px]">
                <div className="flex items-center gap-4">
                  <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/5 hover:border-primary/40 transition-colors">
                    +
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 text-[13px] hover:bg-white/5 hover:border-primary/40 transition-colors">
                    <span className="text-[14px]">🔍</span> Search
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 text-[13px] hover:bg-white/5 hover:border-primary/40 transition-colors">
                    <span className="text-[14px]">🎹</span> Define Workflow
                  </button>
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !inputText.trim()}
                  className={`px-8 py-2 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.2)] ${isGenerating || !inputText.trim()
                    ? 'opacity-30 cursor-not-allowed border-white/10 text-white/30'
                    : 'border border-primary/30 bg-primary/10 text-white hover:bg-primary/20 hover:scale-105 active:scale-95'
                    }`}
                >
                  {isGenerating ? "Processing..." : "Generate"}
                </button>
              </div>
            </div>
          </div>

          {/* Box Bottom Accent Glow */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-[4px] bg-gradient-to-r from-transparent via-highlight/60 to-transparent blur-[2px]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
