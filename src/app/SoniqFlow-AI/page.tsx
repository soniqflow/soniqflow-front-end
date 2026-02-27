"use client";

import React from "react";
import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";
import { ArrowRight, Zap, Brain, Cpu, Radio, Layers, BarChart3 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

const nvidiaSDKs = [
  {
    icon: Radio,
    title: "NVIDIA DeepStream SDK",
    subtitle: "High-Performance Orchestration Engine",
    description:
      "GPU-accelerated streaming analytics pipeline engineered for real-time audio processing with sub-millisecond latency.",
    features: [
      "Multi-step audio chain execution",
      "Direct GPU ingress for raw audio streams",
      "4.2 TB/s peak throughput",
      "0.2ms latency guarantee",
    ],
    capabilities: "Orchestration Flux",
  },
  {
    icon: Brain,
    title: "NVIDIA NeMo Framework",
    subtitle: "AI Sound Engineer Model Factory",
    description:
      "Enterprise-grade framework for building custom proprietary audio deep learning models with studio-quality results.",
    features: [
      "Denoising & audio restoration",
      "Genre-specific equalization & mastering",
      "Source separation algorithms",
      "Custom audio processing models",
    ],
    capabilities: "Model Innovation",
  },
  {
    icon: Cpu,
    title: "NVIDIA Triton Inference Server",
    subtitle: "Scalable Deployment Platform",
    description:
      "Open-source inference serving for deploying entire audio pipelines at enterprise scale with auto-scaling.",
    features: [
      "Single API endpoint deployment",
      "GPU cluster auto-scaling",
      "High availability & reliability",
      "Dynamic batching & concurrent execution",
    ],
    capabilities: "Enterprise Scale",
  },
];

const performanceMetrics = [
  { label: "Peak Throughput", value: "4.2 TB/s", icon: Zap },
  { label: "Latency", value: "0.2ms", icon: Zap },
  { label: "GPU Efficiency", value: "99.8%", icon: Cpu },
  { label: "Processing Chains", value: "Unlimited", icon: Layers },
];

const audioFeatures = [
  {
    icon: Radio,
    title: "Real-time Audio Chains",
    description:
      "Design unlimited multi-step signal processing chains with GPU acceleration",
  },
  {
    icon: Brain,
    title: "Neural Enhancement",
    description: "AI-powered noise reduction, mastering, and audio optimization",
  },
  {
    icon: Zap,
    title: "Sub-millisecond Latency",
    description: "Studio-grade responsiveness for live production environments",
  },
  {
    icon: BarChart3,
    title: "Workflow Intelligence",
    description: "Automatic parameter optimization based on audio analysis",
  },
  {
    icon: Layers,
    title: "Parallel GPU Processing",
    description: "Handle massive workloads across distributed GPU clusters",
  },
  {
    icon: Cpu,
    title: "Raw PCM Support",
    description: "Native 32-bit float uncompressed audio throughout pipeline",
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#97FEED]/15 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[#97FEED] text-[13px] font-semibold uppercase tracking-widest mb-4"
          >
            Audio Workflow & Sound Automation Platform
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[56px] sm:text-[72px] md:text-[82px] font-bold text-white mb-6 leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SoniqFlow AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground/60 text-[18px] md:text-[20px] leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Enterprise-grade audio orchestration powered by NVIDIA's most advanced AI SDKs. Process unlimited audio chains with sub-millisecond latency and GPU-accelerated precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://app.soniqflow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#97FEED] via-[#35A29F] to-[#0B666A] text-black font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:shadow-[0_0_40px_rgba(151,245,237,0.4)] hover:scale-105 transition-all group"
            >
              Access Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-bold text-white border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Schedule Demo
            </Link>
          </motion.div>

          {/* Performance Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {performanceMetrics.map((metric, i) => (
              <div key={i} className="glass-subtle rounded-2xl p-6">
                <div className="text-[#97FEED] text-2xl mb-2">
                  <metric.icon className="w-6 h-6" />
                </div>
                <p className="text-white font-bold text-2xl">{metric.value}</p>
                <p className="text-white/50 text-sm">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack - NVIDIA SDKs */}
      <section className="pb-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#35A29F]/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#97FEED] text-[13px] font-semibold uppercase tracking-widest mb-4">
              Built on NVIDIA's Finest
            </p>
            <h2
              className="text-[48px] sm:text-[56px] font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Core 3 Pillars of Your AI Engine
            </h2>
            <p className="text-foreground/50 text-[18px] max-w-2xl mx-auto">
              Orchestrated around NVIDIA's most advanced AI frameworks to deliver unmatched performance
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {nvidiaSDKs.map((sdk, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative glass rounded-3xl p-8 hover:border-[#97FEED]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#97FEED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#97FEED]/20 to-[#35A29F]/10 flex items-center justify-center mb-4">
                    <sdk.icon className="w-6 h-6 text-[#97FEED]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{sdk.title}</h3>
                  <p className="text-[#97FEED] text-sm font-semibold mb-3">
                    {sdk.subtitle}
                  </p>
                  <p className="text-foreground/50 text-sm mb-6">{sdk.description}</p>

                  <div className="space-y-3 mb-6">
                    {sdk.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#97FEED] mt-2 flex-shrink-0" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <span className="text-[#97FEED] text-xs font-semibold uppercase tracking-widest">
                      {sdk.capabilities}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="pb-32 relative">
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#97FEED] text-[13px] font-semibold uppercase tracking-widest mb-4">
              The Pipeline
            </p>
            <h2
              className="text-[48px] sm:text-[56px] font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Complete SoniqFlow Architecture
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#97FEED]/5 via-transparent to-[#35A29F]/5" />

            <div className="relative z-10 space-y-8">
              {[
                {
                  step: "1",
                  title: "NVIDIA NeMo - R&D Lab",
                  description:
                    "Build and train proprietary AI models for audio processing with enterprise-grade deep learning",
                },
                {
                  step: "2",
                  title: "Model Optimization",
                  description:
                    "Optimize trained models for speed using NVIDIA TensorRT to achieve maximum GPU efficiency",
                },
                {
                  step: "3",
                  title: "NVIDIA DeepStream - Orchestration",
                  description:
                    "Arrange optimized models into multi-step pipelines with sub-millisecond latency and full GPU control",
                },
                {
                  step: "4",
                  title: "NVIDIA Triton - Global Scale Deployment",
                  description:
                    "Deploy entire pipelines at global scale with auto-scaling, high availability, and enterprise reliability",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#97FEED] to-[#35A29F] flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-foreground/50">{item.description}</p>
                    {i < 3 && (
                      <div className="mt-4 ml-6 h-8 border-l-2 border-dashed border-[#97FEED]/20" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audio Processing Capabilities */}
      <section className="pb-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-[#0B666A]/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#97FEED] text-[13px] font-semibold uppercase tracking-widest mb-4">
              Capabilities
            </p>
            <h2
              className="text-[48px] sm:text-[56px] font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What SoniqFlow Can Do
            </h2>
            <p className="text-foreground/50 text-[18px] max-w-2xl mx-auto">
              Enterprise-grade audio processing features powered by GPU acceleration and AI
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {audioFeatures.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass rounded-2xl p-8 hover:border-[#97FEED]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#97FEED]/20 to-[#35A29F]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-[#97FEED]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-foreground/50 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#97FEED]/5 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[48px] sm:text-[56px] font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to orchestrate
            <br />
            <span className="bg-gradient-to-r from-[#97FEED] via-[#35A29F] to-[#0B666A] bg-clip-text text-transparent">
              your audio workflow?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground/50 text-[18px] mb-10 max-w-2xl mx-auto"
          >
            Join studios worldwide leveraging SoniqFlow's GPU-accelerated audio intelligence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://app.soniqflow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#97FEED] via-[#35A29F] to-[#0B666A] text-black font-bold px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(151,245,237,0.4)] hover:scale-105 transition-all group"
            >
              Launch SoniqFlow Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-bold text-white border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-all"
            >
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
