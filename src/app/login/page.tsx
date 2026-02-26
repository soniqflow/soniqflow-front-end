"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative w-full max-w-[400px]">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-white" />
            </div>
            <span className="text-foreground font-semibold text-[18px]">
              SoniqFlow
            </span>
          </Link>
          <h1
            className="text-[28px] font-bold text-foreground mt-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Welcome back
          </h1>
          <p className="text-foreground/40 text-[14px] mt-2">Sign in to your workspace</p>
        </div>

        <div className="glass rounded-3xl p-8">
          {/* Social buttons */}
          <div className="space-y-3 mb-6">
            {[
              { label: "Continue with Google", icon: "G" },
              { label: "Continue with GitHub", icon: "⚙" },
            ].map((btn) => (
              <button
                key={btn.label}
                className="w-full flex items-center gap-3 justify-center glass rounded-xl py-3 text-white text-[14px] font-medium hover:bg-white/10 transition-colors"
              >
                <span className="font-bold text-[15px]">{btn.icon}</span>
                {btn.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-[12px]">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div>
              <label className="block text-foreground/50 text-[12px] uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className="w-full bg-foreground/5 border border-border/10 rounded-xl px-4 py-3 text-foreground text-[14px] placeholder:text-foreground/20 outline-none focus:border-primary/40 transition-colors"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-foreground/50 text-[12px] uppercase tracking-wider">
                  Password
                </label>
                <Link href="#" className="text-primary text-[12px] hover:underline">
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className="w-full bg-foreground/5 border border-border/10 rounded-xl px-4 py-3 text-foreground text-[14px] placeholder:text-foreground/30 outline-none focus:border-primary/40 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground text-[15px] font-bold py-3.5 rounded-xl hover:opacity-90 transition-colors mt-2"
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-foreground/30 text-[13px] mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
