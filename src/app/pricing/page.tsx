"use client";
import React, { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Hobbyist",
    price: { monthly: 0, annual: 0 },
    description: "For creators getting started with AI-assisted audio.",
    cta: "Get Started",
    ctaHref: "/signup",
    featured: false,
    features: [
      "Up to 5 active workflows",
      "Basic AI Noise Reduction",
      "Standard Ingestion (MP3/WAV)",
      "2GB Audio Storage",
      "Community Support",
      "Web & Mobile Access",
    ],
    missing: ["Pro Neural Mastering", "API Access", "Priority Support"],
  },
  {
    name: "Professional",
    price: { monthly: 49, annual: 39 },
    description: "For professional producers and audio engineers.",
    cta: "Get Started",
    ctaHref: "/signup",
    featured: true,
    features: [
      "Unlimited Audio Workflows",
      "Full Neural Orchestration Suite",
      "Spectral Balancing Engine",
      "20GB Audio Storage",
      "Priority 24/7 Support",
      "Full API Access",
      "Advanced Format Support",
    ],
    missing: ["SLA Guarantee", "Custom Data Retention", "Dedicated Media CSM"],
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    description: "Dedicated high-performance infrastructure and bespoke AI modeling for global scale.",
    cta: "Contact us",
    ctaHref: "/contact",
    featured: false,
    features: [
      "Everything in Pro",
      "Custom Neural Training",
      "Dedicated GPU Processing",
      "On-Premise Deployment",
      "SLA Guarantee",
      "Audit Logs & SSO",
      "Unlimited Storage",
      "Dedicated Support Lead",
    ],
    missing: [],
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-primary text-[13px] font-semibold uppercase tracking-widest mb-4"
          >
            Pricing
          </p>
          <h1
            className="text-[52px] sm:text-[68px] font-bold text-foreground mb-5 leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Simple,
            <br />
            <span className="gradient-text">transparent pricing</span>
          </h1>
          <p className="text-foreground/50 text-[17px] mb-10">
            Start free. Scale as you grow. No surprise fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 glass rounded-full px-5 py-2.5">
            <button
              onClick={() => setAnnual(false)}
              className={`text-[14px] font-medium transition-colors ${!annual ? "text-foreground" : "text-foreground/40"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-10 h-5 rounded-full transition-colors relative flex-shrink-0 ${annual ? "bg-primary" : "bg-foreground/20"
                }`}
            >
              <div
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${annual ? "translate-x-5" : "translate-x-0.5"
                  }`}
              />
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`text-[14px] font-medium transition-colors ${annual ? "text-foreground" : "text-foreground/40"
                }`}
            >
              Annual{" "}
              <span className="text-primary text-[12px] font-bold ml-1">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl overflow-hidden ${plan.featured
                  ? "border-2 border-primary bg-primary/10 relative"
                  : "glass"
                  }`}
              >
                {plan.featured && (
                  <div className="bg-primary text-primary-foreground text-[12px] font-bold text-center py-2 uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3
                    className="text-[20px] font-bold text-foreground mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-foreground/40 text-[13px] mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.price.monthly === null ? (
                      <div
                        className="text-[40px] font-bold text-foreground"
                      >
                        Custom
                      </div>
                    ) : (
                      <div className="flex items-end gap-2">
                        <span
                          className="text-[48px] font-bold text-foreground leading-none"
                        >
                          ${annual ? plan.price.annual : plan.price.monthly}
                        </span>
                        {plan.price.monthly! > 0 && (
                          <span className="text-foreground/40 text-[14px] mb-2">/mo per user</span>
                        )}
                      </div>
                    )}
                    {annual && plan.price.monthly !== null && plan.price.monthly! > 0 && (
                      <p className="text-foreground/30 text-[12px] mt-1">
                        Billed annually (${(plan.price.annual! * 12)}/yr per user)
                      </p>
                    )}
                  </div>

                  <Link
                    href={plan.ctaHref}
                    className={`block text-center py-3.5 rounded-xl text-[14px] font-bold mb-8 transition-colors ${plan.featured
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "glass text-foreground hover:bg-white/10"
                      }`}
                  >
                    {plan.cta}
                  </Link>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <svg
                          className="text-primary flex-shrink-0 mt-0.5"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2 7l3.5 3.5L12 3"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-foreground/70 text-[13px]">{f}</span>
                      </div>
                    ))}
                    {plan.missing.map((f) => (
                      <div key={f} className="flex items-start gap-3 opacity-30">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="flex-shrink-0 mt-0.5"
                        >
                          <path
                            d="M3 3l8 8M11 3l-8 8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="text-foreground/50 text-[13px]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ-style comparison note */}
          <div className="mt-20 text-center">
            <p className="text-foreground/40 text-[14px]">
              All plans include a 14-day free trial.{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              for volume discounts or educational pricing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
