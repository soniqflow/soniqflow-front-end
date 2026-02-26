import React from "react";

export default function BrainVisual() {
    return (
        <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center translate-y-[-10%]">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />

            {/* SVG Brain Visual - Replaced with central-icon.svg */}
            <div className="relative w-4/5 h-4/5 flex items-center justify-center z-10 group">
                <img
                    src="/central-icon.svg"
                    alt="SoniqFlow AI Core"
                    className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(151,254,237,0.6)] group-hover:scale-110 transition-transform duration-700 animate-pulse"
                />

                {/* Tech overlay effect */}
                <div className="absolute inset-0 border border-[#97FEED]/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
                <div className="absolute inset-[-20px] border border-[#97FEED]/10 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />
            </div>
        </div>
    );
}
