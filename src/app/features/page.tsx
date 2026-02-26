import React from "react";
import Link from "next/link";

const allFeatures = [
  {
    category: "Audio Orchestration",
    icon: "🔊",
    items: [
      { name: "Multi-Step Signal Chain", description: "Design complex audio processing chains with drag-and-drop ease." },
      { name: "AI-Driven Balancing", description: "Automatically adjust levels and spectral balance across thousands of tracks." },
      { name: "Real-time Node Processing", description: "Process audio data through individual nodes or entire workflow blocks." },
      { name: "Parallel Processing", description: "Leverage GPU-acceleration for massive throughput across large projects." },
      { name: "Global Asset Sync", description: "Keep your audio library synchronized across all production studios." },
    ],
  },
  {
    category: "Sound Automation",
    icon: "🎹",
    items: [
      { name: "Neural Noise Reduction", description: "Isolate voices and instruments with studio-grade neural filters." },
      { name: "Auto-Mastering Engine", description: "Get consistent, release-ready masters for every genre instantly." },
      { name: "Dynamic Resonance Fix", description: "Identify and eliminate harsh frequencies automatically in real-time." },
      { name: "Loudness Compliance", description: "Ensure every output meets platform-specific LUFS standards automatically." },
      { name: "AI Pitch & Time", description: "Crystal-clear time stretching and pitch shifting powered by deep learning." },
    ],
  },
  {
    category: "Infrastructure",
    icon: "⚡",
    items: [
      { name: "GPU Infrastructure", description: "Ultra-fast neural processing powered by high-performance GPU clusters." },
      { name: "Sub-1ms Latency", description: "Engineered for real-time live-streaming and production environments." },
      { name: "Edge Audio Ingestion", description: "Ingest high-bitrate raw audio from any global source with low jitter." },
      { name: "Raw PCM Processing", description: "Native support for uncompressed 32-bit float audio throughout the pipeline." },
      { name: "SoniqFlow API", description: "Integrate our audio intelligence into any existing third-party tool." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-primary text-[13px] font-semibold uppercase tracking-widest mb-4"
          >
            Features
          </p>
          <h1
            className="text-[52px] sm:text-[72px] font-bold text-foreground mb-6 leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for audio
            <br />
            <span className="gradient-text">professionals</span>
          </h1>
          <p className="text-foreground/50 text-[18px] leading-relaxed max-w-2xl mx-auto mb-10">
            Every feature in SoniqFlow is designed to optimize sound quality,
            automate the technical mundane, and help you focus on the art of audio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-primary text-primary-foreground text-[15px] font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-colors"
            >
              Start free trial
            </Link>
            <Link
              href="/pricing"
              className="glass text-foreground text-[15px] font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {allFeatures.map((category, ci) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">{category.icon}</span>
                <h2
                  className="text-[28px] font-bold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {category.category}
                </h2>
                <div className="flex-1 h-px bg-border ml-4" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="glass rounded-2xl p-6 card-hover"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <h3
                      className="text-foreground font-semibold text-[15px] mb-2"
                    >
                      {item.name}
                    </h3>
                    <p className="text-foreground/40 text-[13px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="glass rounded-3xl p-12 border border-border/10">
            <h2
              className="text-[36px] font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Start using all features
              <br />
              <span className="gradient-text">free for 14 days</span>
            </h2>
            <p className="text-foreground/50 mb-8">No credit card required.</p>
            <Link
              href="/signup"
              className="inline-block bg-primary text-primary-foreground text-[15px] font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-colors"
            >
              Get started free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
