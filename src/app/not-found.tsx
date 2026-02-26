import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative text-center max-w-xl">
        <p
          className="text-[120px] font-bold leading-none mb-4"
          style={{
            fontFamily: "var(--font-display)",
            background: "linear-gradient(135deg, #ffffff 0%, #570010 50%, #DAD9D2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>
        <h1
          className="text-[32px] font-bold text-foreground mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Page not found
        </h1>
        <p className="text-foreground/40 text-[16px] mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-primary-foreground text-[14px] font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="glass text-foreground text-[14px] font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}
