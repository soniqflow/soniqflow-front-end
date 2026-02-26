import React from "react";

export default function LogoCloud() {
    const logos = [
        {
            name: "Hugging Face",
            logo: <img src="/hugging-face.svg" alt="Hugging Face" className="h-14 w-auto" />
        },
        {
            name: "Anthropic",
            logo: <img src="/anthropic.svg" alt="Anthropic" className="h-38 w-auto" />
        },
        {
            name: "AssemblyAI",
            logo: <img src="/assembly-ai.svg" alt="AssemblyAI" className="h-38 w-auto" />
        },
        {
            name: "Deepgram",
            logo: <img src="/deepgram.svg" alt="Deepgram" className="h-38 w-auto" />
        },
        {
            name: "Kubernetes",
            logo: <img src="/kubernetes.svg" alt="Kubernetes" className="h-38 w-auto" />
        },
        {
            name: "Slack",
            logo: <img src="/slack.svg" alt="Slack" className="h-38 w-auto" />
        },
    ];

    return (
        <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none hex-grid opacity-20" />

            {/* Creative Light Leak */}
            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-[120px] opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <p className="text-center text-[#97FEED]/40 text-[11px] font-bold uppercase tracking-[0.4em] mb-14 drop-shadow-[0_0_8px_rgba(151,254,237,0.3)]">
                    Integrated with enterprise GPU infrastructure & SDK architectures
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 opacity-30 hover:opacity-100 transition-opacity duration-500 grayscale brightness-200">
                    {logos.map((logo) => (
                        <div key={logo.name} className="flex items-center justify-center">
                            {logo.logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
