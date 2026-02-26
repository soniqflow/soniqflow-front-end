"use client";
import { motion } from "framer-motion";

export default function PricingSection() {
    const tiers = [
        {
            name: "Creator Node",
            price: "$29.00",
            description: "Perfect for individual sound designers and experimental AI projects.",
            features: ["100k Audio Frames", "2 Dedicated AI Nodes", "Standard Orchestration", "Basic Telemetry"],
            cta: "Get Started",
            link: "https://buy.stripe.com/test_9B614m1MFcUsd2kfs8gQE01",
            featured: false,
            accent: "#0B666A",
        },
        {
            name: "Production Pipeline",
            price: "$99.00",
            description: "Advanced orchestration for scaling media teams and high-traffic apps.",
            features: ["Unlimited Frames", "12 AI processing nodes", "Automation Engine Access", "Enterprise Dashboard", "Custom API Bridge"],
            cta: "Get Started",
            link: "https://buy.stripe.com/test_14A5kCdvng6E9Q8fs8gQE00",
            featured: true,
            accent: "#35A29F",
        },
        {
            name: "Enterprise Cluster",
            price: "Custom",
            description: "Dedicated high-performance infrastructure and bespoke AI modeling for global scale.",
            features: ["Uncapped Flux Capacity", "Dedicated GPU Cluster", "L1 Infrastructure Support", "Fixed Latency SLAs", "On-premise Deployment"],
            cta: "Contact us",
            link: "/contact",
            featured: false,
            accent: "#97FEED",
        },
    ];

    return (
        <section id="pricing" className="py-32 bg-black relative overflow-hidden border-t border-[#0B666A]/20">

            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1640158615573-cd28f6d215fa?auto=format&fit=crop&q=80&w=2070"
                    alt="Technical Abstract"
                    className="w-full h-full object-cover opacity-[0.12] grayscale contrast-150 saturate-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            {/* Patterns Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none hex-grid opacity-20" />
            <div className="absolute inset-0 bg-black dot-grid opacity-35 pointer-events-none z-0" />

            {/* Atmospheric Glows */}
            <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-[#071952]/40 blur-[150px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-[15%] right-[-5%] w-[600px] h-[600px] bg-[#0B666A]/25 blur-[140px] rounded-full pointer-events-none z-0" />
            <div className="absolute top-[50%] left-[40%] w-[500px] h-[500px] bg-[#35A29F]/15 blur-[160px] rounded-full pointer-events-none z-0" />

            {/* Scan lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[30, 70].map((pct) => (
                    <div key={pct} className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B666A]/25 to-transparent animate-scan-line" style={{ top: `${pct}%` }} />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#0B666A]/40 bg-[#071952]/30 mb-8"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
                    <span className="text-[11px] font-bold text-[#97FEED] uppercase tracking-[0.25em]">Pricing</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#97FEED] animate-pulse" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[48px] sm:text-[68px] font-bold text-white mb-6 tracking-tight leading-[1.05]" style={{ fontFamily: "var(--font-display)" }}
                >
                    Enterprise GPU <span className="mix-text">Orchestration</span>
                    <br />at global scale.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-white/40 text-[18px] max-w-2xl mx-auto leading-relaxed mb-6"
                >
                    Transparent pricing for every scale of <span className="text-[#97FEED]">audio production</span> — from indie creators to enterprise clusters.
                </motion.p>

                {/* Color bar */}
                <div className="flex items-center justify-center gap-3 mb-16">
                    <div className="h-1 w-12 rounded-full bg-[#071952]" />
                    <div className="h-1 w-16 rounded-full bg-[#0B666A]" />
                    <div className="h-1 w-20 rounded-full bg-[#35A29F]" />
                    <div className="h-1 w-12 rounded-full bg-[#97FEED]" />
                </div>

                {/* Tier cards */}
                <div className="grid lg:grid-cols-3 gap-6 text-left">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className={`relative rounded-[28px] p-8 overflow-hidden flex flex-col transition-all duration-500 group ${tier.featured
                                ? 'border-2 scale-[1.03] z-10 bg-[#071952]/30 backdrop-blur-md'
                                : 'border bg-black/40 backdrop-blur-sm hover:bg-[#071952]/15'
                                }`}
                            style={{ borderColor: `${tier.accent}40` }}
                        >
                            {/* Card background glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]" style={{ background: `radial-gradient(ellipse at top, ${tier.accent}10, transparent 70%)` }} />

                            {tier.featured && (
                                <div className="absolute top-0 right-0 px-5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-bl-2xl" style={{ backgroundColor: tier.accent, color: '#000' }}>
                                    Most Popular
                                </div>
                            )}

                            <div className="relative z-10">
                                <div className="text-[12px] font-bold uppercase tracking-[0.2em] mb-6" style={{ color: tier.accent }}>{tier.name}</div>
                                <div className="text-[48px] font-bold text-white mb-1 font-mono">
                                    {tier.price}<span className="text-white/20 text-lg font-sans">/mo</span>
                                </div>
                                <p className="text-white/40 text-[14px] mb-8 leading-relaxed">{tier.description}</p>

                                <div className="space-y-3 mb-10 flex-1">
                                    {tier.features.map(f => (
                                        <div key={f} className="flex items-center gap-3 text-white/60 text-[14px]">
                                            <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${tier.accent}20`, border: `1px solid ${tier.accent}40` }}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={tier.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={tier.link}
                                    target={tier.link.startsWith('http') ? "_blank" : "_self"}
                                    rel={tier.link.startsWith('http') ? "noopener noreferrer" : ""}
                                    className={`w-full py-4 rounded-2xl font-bold text-[14px] transition-all duration-300 flex items-center justify-center ${tier.featured
                                        ? 'text-black hover:scale-[1.03]'
                                        : 'text-white hover:brightness-125'
                                        }`}
                                    style={{
                                        backgroundColor: tier.featured ? tier.accent : '#071952',
                                        border: `1px solid ${tier.accent}60`,
                                        boxShadow: tier.featured ? `0 0 30px ${tier.accent}40` : `0 0 15px ${tier.accent}15`
                                    }}
                                >
                                    {tier.cta}
                                </a>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${tier.accent}50, transparent)` }} />
                        </motion.div>
                    ))}
                </div>

                {/* Trust strip & Payment Section */}
                <div className="mt-20 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="flex items-center gap-12 opacity-40 grayscale contrast-125">
                            <img src="/stripe-logo.svg" alt="Stripe" className="h-8 w-auto invert" />
                            <div className="flex gap-4">
                                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
                                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">MC</div>
                                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">AMEX</div>
                            </div>
                        </div>
                        <p className="text-[#97FEED]/40 text-[11px] font-bold uppercase tracking-[0.3em]">
                            Secured by <span className="text-[#97FEED]">Stripe</span> Enterprise Encryption
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-[#0B666A]/20 bg-[#071952]/10"
                    >
                        {[
                            { label: "SECURE CLOUD", color: "#35A29F" },
                            { label: "HIPAA COMPLIANT", color: "#0B666A" },
                            { label: "SOC2 CERTIFIED", color: "#97FEED" },
                            { label: "PCI READY", color: "#071952" },
                        ].map((badge) => (
                            <div key={badge.label} className="py-5 px-4 bg-black/40 hover:bg-[#071952]/20 transition-colors flex items-center justify-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: badge.color, boxShadow: `0 0 6px ${badge.color}` }} />
                                <span className="font-bold text-[11px] tracking-widest" style={{ color: badge.color }}>{badge.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
