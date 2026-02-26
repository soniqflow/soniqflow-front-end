"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted/declined cookies
        const consent = localStorage.getItem("soniqflow-cookie-consent");
        if (!consent) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("soniqflow-cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("soniqflow-cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] max-w-sm w-full"
                >
                    <div className="bg-[#071952]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                        {/* Subtle Gradient Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />

                        <div className="flex items-start gap-4 relative z-10">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Cookie className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold text-sm">Cookie Policy</h3>
                                    <button
                                        onClick={() => setIsVisible(false)}
                                        className="text-white/40 hover:text-white transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                                <p className="text-white/60 text-xs leading-relaxed mb-4">
                                    We use cookies to enhance your experience, analyze site traffic, and personalize content. By clicking "Accept", you agree to our use of cookies.
                                </p>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={handleAccept}
                                        className="flex-1 px-4 py-2 bg-primary text-[#071952] font-bold text-xs rounded-lg hover:bg-highlight transition-all duration-300 shadow-[0_0_15px_rgba(151,254,237,0.3)] hover:shadow-[0_0_20px_rgba(151,254,237,0.5)]"
                                    >
                                        Accept
                                    </button>
                                    <button
                                        onClick={handleDecline}
                                        className="flex-1 px-4 py-2 bg-white/5 text-white/80 font-medium text-xs rounded-lg hover:bg-white/10 border border-white/10 transition-all duration-300"
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
