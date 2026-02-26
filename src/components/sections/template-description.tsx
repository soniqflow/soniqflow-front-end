"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Plus } from "lucide-react";

const TemplateDescription = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "License", "Support", "FAQ"];

  const subcategories = ["Software & SaaS", "Startup"];
  const styles = ["Playful", "Dark"];

  const features = [
    { name: "Web fonts", description: "Uses fonts from Google's Web Font collection." },
    { name: "Responsive slider", description: "Display images and text elegantly on every device with our touch-friendly slider." },
    { name: "Responsive navigation", description: "Site navigation automatically collapses into a mobile-friendly menu on smaller devices." },
    { name: "Retina ready", description: "All graphics are optimized for devices with high DPI screens." },
    { name: "Custom 404 page", description: "Custom design for the 404 page of your website" },
    { name: "GSAP", description: "Comes with GSAP animations and interactions for additional polish and usability." },
    { name: "Media lightbox", description: "Showcase high-res photos and videos on a black backdrop." },
    { name: "CSS Grid", description: "Reposition and resize items anywhere within the grid to produce powerful, responsive layouts — faster and without code." },
    { name: "Ecommerce", description: "Shape your customer's experience and customize everything, from the home page to product page, cart to checkout." },
    { name: "Content management system", description: "Customize the built-in database for your project or just add new content." },
    { name: "Responsive design", description: "Displays perfectly on desktops, tablets, and phones." },
    { name: "Forms", description: "Build your lead lists and subscriber base with beautiful forms." },
    { name: "Interactions", description: "Comes with animations and interactions for additional polish and usability." },
    { name: "3D transforms", description: "Display 3D graphics elegantly on every device." },
  ];

  const checkIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/svgs/671927d6b28aa6f862583370_CheckDefault_20_Blue_-11.svg";
  const plusIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/svgs/66a2fe2870e548a4ca997bd3_accordionControl-8.svg";

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Description */}
          <div className="lg:w-[65%]">
            <p className="text-[14px] leading-[1.6] text-[#000000] mb-8">
              A clean and modern SaaS landing page template built for automation, marketing, and AI-powered tools. Perfect for startups and software products to showcase features, pricing, and benefits with clarity and style.
            </p>

            {/* Tabs */}
            <div className="border-b border-[#e6e6e6] mb-8 flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-[14px] font-semibold transition-colors relative ${
                    activeTab === tab ? "text-[#000000]" : "text-[#666666] hover:text-[#000000]"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#000000]" />
                  )}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="space-y-6">
              <h3 className="text-[18px] font-semibold text-[#000000] leading-[1.4]">
                Presenting Sirene — A Playful AI SaaS Webflow Template
              </h3>
              <p className="text-[14px] leading-[1.6] text-[#666666]">
                Meet Sirene, a bold and intelligent Webflow template built for modern SaaS startups, AI productivity tools, and task management platforms. Designed for teams that value both style and speed, Sirene combines sleek dark aesthetics with vibrant accents—perfect for showcasing your AI-driven workflow or automation product in an unforgettable way.
              </p>
              <p className="text-[14px] leading-[1.6] text-[#666666]">
                Sirene isn’t just visually stunning—it’s purpose-built to highlight your software’s smart capabilities. Whether you’re launching a productivity app, a collaboration platform, or an AI-based task assistant, Sirene gives you everything you need to turn visitors into loyal users.
              </p>

              <h4 className="text-[16px] font-bold text-[#000000] pt-4">Immersive Design</h4>
              <p className="text-[14px] leading-[1.6] text-[#666666]">
                Sirene’s dark, modern interface creates a captivating first impression. With its clean typography, dynamic motion effects, and fluid transitions, it offers a premium yet playful experience that keeps users engaged from the very first scroll. Every section is thoughtfully structured to tell your product’s story, build trust, and inspire action.
              </p>

              <h4 className="text-[16px] font-bold text-[#000000] pt-4">Effortless Customization</h4>
              <p className="text-[14px] leading-[1.6] text-[#666666]">
                Sirene gives you total creative freedom—no code required. Customize your brand colors, typography, and visuals to match your identity and bring your AI SaaS to life.
              </p>

              <ul className="space-y-2 list-none text-[14px] text-[#666666] pl-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#666666] rounded-full" />
                  Fully responsive across all devices
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#666666] rounded-full" />
                  Easy to edit colors, fonts, and layouts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#666666] rounded-full" />
                  Optimized for SEO and performance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#666666] rounded-full" />
                  CMS-powered blog and resources
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#666666] rounded-full" />
                  Smooth animations and micro-interactions
                </li>
              </ul>

              <h4 className="text-[16px] font-bold text-[#000000] pt-4">Ready-Made Pages</h4>
              <p className="text-[14px] leading-[1.6] text-[#666666]">
                Launch your product faster with Sirene’s collection of pre-built pages:
              </p>
              <div className="text-[14px] text-[#666666] space-y-2">
                <p className="font-semibold text-[#000000]">Main Pages</p>
                <ul className="pl-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#666666] rounded-full" />
                    Home
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button className="px-6 py-2.5 bg-white border border-[#e6e6e6] rounded-sm text-[14px] font-semibold text-[#000000] hover:bg-[#f5f5f7] transition-colors">
                  Show more
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Metadata Sidebar */}
          <div className="lg:w-[35%] flex flex-col gap-10">
            {/* Subcategories */}
            <div>
              <h5 className="text-[14px] font-bold text-[#000000] mb-4">Subcategories</h5>
              <div className="flex flex-wrap gap-2">
                {subcategories.map((cat) => (
                  <span key={cat} className="px-3 py-1.5 bg-[#f5f5f7] text-[#666666] text-[12px] font-medium rounded-[4px]">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Styles */}
            <div>
              <h5 className="text-[14px] font-bold text-[#000000] mb-4">Styles</h5>
              <div className="flex flex-wrap gap-2">
                {styles.map((style) => (
                  <span key={style} className="px-3 py-1.5 bg-[#f5f5f7] text-[#666666] text-[12px] font-medium rounded-[4px]">
                    {style}
                  </span>
                ))}
              </div>
            </div>

            {/* Features Accordion */}
            <div>
              <h5 className="text-[14px] font-bold text-[#000000] mb-4">Features</h5>
              <div className="border-t border-[#e6e6e6]">
                {features.map((feature, index) => (
                  <div key={index} className="border-b border-[#e6e6e6]">
                    <div className="flex items-center justify-between py-3.5 cursor-pointer group hover:bg-[#fafafa] transition-colors">
                      <div className="flex items-center gap-3">
                        <Image src={checkIcon} alt="Checkmark" width={18} height={18} />
                        <span className="text-[14px] font-medium text-[#000000]">{feature.name}</span>
                      </div>
                      <Image src={plusIcon} alt="Expand" width={14} height={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share */}
            <div>
              <h5 className="text-[14px] font-bold text-[#000000] mb-4">Share</h5>
              <div className="flex gap-4">
                {["X", "F", "I", "P"].map((icon, i) => (
                  <button key={i} className="text-[#666666] hover:text-[#000000] transition-colors">
                    {icon === "X" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                    {icon === "F" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    )}
                    {icon === "I" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {icon === "P" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592 0 12.017 0z" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateDescription;