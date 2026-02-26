import React from "react";
import Link from "next/link";

const team = [
  { name: "Elena Solis", role: "CEO & Co-founder", bg: "#071952", initials: "ES" },
  { name: "Riku Tanaka", role: "CTO & Co-founder", bg: "#0B666A", initials: "RT" },
  { name: "Amara Diallo", role: "Head of Design", bg: "#35A29F", initials: "AD" },
  { name: "James Park", role: "Head of Engineering", bg: "#97FEED", initials: "JP" },
  { name: "Sofia Andrade", role: "Head of Product", bg: "#071952", initials: "SA" },
  { name: "Marcus Webb", role: "Head of Growth", bg: "#0B666A", initials: "MW" },
];

const values = [
  { icon: "🏎️", title: "Real-time Priority", description: "Speed is a feature. In audio, every millisecond counts." },
  { icon: "🎨", title: "Artist-Centric AI", description: "Our AI is built to augment human creativity, not replace it." },
  { icon: "⚛️", title: "Scientific Rigor", description: "We treat audio as data, applying physics-based neural networks." },
  { icon: "🔊", title: "Uncompromising Quality", description: "If it doesn't sound studio-grade, it doesn't leave our engine." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-primary text-[13px] font-semibold uppercase tracking-widest mb-4"
          >
            About SoniqFlow
          </p>
          <h1
            className="text-[52px] sm:text-[72px] font-bold text-foreground mb-6 leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The future of audio
            <br />
            <span className="gradient-text">is algorithmic</span>
          </h1>
          <p className="text-foreground/50 text-[18px] leading-relaxed max-w-2xl mx-auto">
            SoniqFlow was founded to bridge the gap between heavy-compute AI research
            and the practical needs of audio engineers and media studios.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-3xl p-10">
              <h2
                className="text-[28px] font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our mission
              </h2>
              <p className="text-foreground/50 text-[16px] leading-relaxed">
                To provide the world's most intelligent audio orchestration layer.
                We empower studios to automate complex sound workflows, ensuring peak output quality at any scale.
              </p>
            </div>
            <div className="glass rounded-3xl p-10">
              <h2
                className="text-[28px] font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our story
              </h2>
              <p className="text-foreground/50 text-[16px] leading-relaxed">
                Founded in 2023 by a team of audio engineers and AI researchers with a single goal:
                harness the power of GPU acceleration to solve fragmentation in audio production.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { value: "500+", label: "Studio Partners" },
              { value: "0.8ms", label: "Processing Latency" },
              { value: "128PB", label: "Processed Monthly" },
              { value: "2023", label: "Founded" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center">
                <div
                  className="text-[36px] font-bold text-primary mb-1"
                >
                  {stat.value}
                </div>
                <div className="text-foreground/40 text-[13px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 pt-24">
          <h2
            className="text-[36px] font-bold text-foreground mb-12 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What we stand for
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-7 card-hover">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3
                  className="text-foreground font-bold text-[18px] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {v.title}
                </h3>
                <p className="text-foreground/50 text-[14px] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-[36px] font-bold text-foreground mb-12 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Meet the team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {team.map((member) => (
              <div key={member.name} className="glass rounded-2xl p-6 text-center card-hover">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-[18px] mx-auto mb-4"
                  style={{ background: member.bg }}
                >
                  {member.initials}
                </div>
                <p
                  className="text-foreground font-semibold text-[15px] mb-1"
                >
                  {member.name}
                </p>
                <p className="text-foreground/40 text-[12px]">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/40 text-[15px] mb-4">We&apos;re a team of 32 across San Francisco, London, and Tokyo.</p>
            <Link
              href="/contact"
              className="inline-block glass text-white text-[14px] font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              View open roles →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
