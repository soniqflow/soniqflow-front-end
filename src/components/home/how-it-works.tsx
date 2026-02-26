import React from "react";

const steps = [
  {
    step: "01",
    title: "Orchestration Engine",
    description:
      "Directly upload professional audio files or connect live studio streams via our high-speed ingestion API.",
    visual: (
      <div className="p-6 w-full h-full flex items-center justify-center">
        <div className="glass-box-vibrant rounded-3xl p-6 w-full relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent animate-pulse" />
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-xl shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.4)]">🎤</div>
            <div className="flex-1">
              <div className="h-1.5 bg-white/5 rounded-full relative overflow-hidden mb-2">
                <div className="absolute inset-0 bg-primary animate-data-packet-1" style={{ width: '40%' }} />
              </div>
              <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Receiving Stream...</span>
            </div>
          </div>
          <div className="flex gap-2 relative z-10">
            {[30, 70, 45, 90, 60].map((h, i) => (
              <div key={i} className="flex-1 h-12 bg-white/5 rounded-lg border border-white/5 flex items-end p-1">
                <div className="w-full bg-primary/20 rounded-sm animate-wave" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    step: "02",
    title: "Waveform Synthesis",
    description:
      "The AI processes : Visualize and manage automation flows, waveform synthesis, and live audio processing in real time.",
    visual: (
      <div className="p-6 w-full h-full flex items-center justify-center">
        <div className="w-full space-y-4">
          {[
            { label: "Neural Denoise", value: 98, color: "var(--color-primary)" },
            { label: "Waveform Synthesis", value: 92, color: "var(--color-highlight)" },
          ].map((item) => (
            <div key={item.label} className="glass-box rounded-2xl p-4 border-white/5 hover:border-primary/30 transition-colors">
              <div className="flex justify-between text-[11px] mb-2 uppercase tracking-widest">
                <span className="text-white/50 font-bold">{item.label}</span>
                <span className="text-primary font-mono">{item.value}%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full animate-pulse"
                  style={{ width: `${item.value}%`, background: item.color }}
                />
              </div>
            </div>
          ))}
          <div className="flex justify-center pt-2">
            <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
          </div>
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "Automated Workflow",
    description:
      "Process : Real time optimization",
    visual: (
      <div className="p-6 w-full h-full flex flex-col justify-center">
        <div className="text-center mb-6">
          <div className="text-[48px] font-bold text-white tracking-tighter mb-1">
            0.8<span className="text-primary">ms</span>
          </div>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Inference Speed</p>
        </div>
        <div className="flex items-end gap-2 h-20 px-4">
          {[40, 70, 50, 90, 60, 100, 80].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md relative group"
              style={{
                height: `${h}%`,
                background: i === 5 ? 'var(--color-primary)' : 'rgba(var(--color-primary-rgb), 0.1)',
              }}
            >
              {i === 5 && <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary blur-md animate-pulse" />}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    step: "04",
    title: "Orchestration Queue",
    description:
      "Manage parallel processing clusters and distribute optimized audio assets across your global infrastructure.",
    visual: (
      <div className="p-6 w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-2 gap-3 w-full">
          {[1, 2, 3, 4].map(idx => (
            <div key={idx} className="h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 gap-2 overflow-hidden">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <div className="h-1 px-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-data-packet-1" style={{ width: '60%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-[0.02] blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            The Process
          </div>
          <h2
            className="text-[48px] sm:text-[64px] font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Up and running in <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.2)]">minutes</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="glass-box rounded-[40px] overflow-hidden group hover:-translate-y-2 transition-all duration-500"
            >
              {/* Visual area */}
              <div className="bg-white/[0.02] border-b border-white/5 h-[280px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                {step.visual}
              </div>

              {/* Text */}
              <div className="p-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary text-[14px] font-bold font-mono tracking-tighter">/ {step.step}</span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <h3
                  className="text-[24px] font-bold text-white mb-4 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/40 text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
