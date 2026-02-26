import React from 'react';
import Image from 'next/image';
import { ShoppingBag, ChevronDown } from 'lucide-react';

/**
 * IframePreview Section
 * 
 * Clones the interactive template preview section of the Sirene template.
 * Theme: Light (marketplace frame), but the interior template content is the "Immersive Dark" theme.
 */

export default function IframePreview() {
  const heroBackgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/images/6915d588222732eaac2f8b0d_1763038572715_204001543_I-9.webp";

  return (
    <section className="w-full bg-[#FFFFFF] py-[40px] md:py-[80px]">
      <div className="container mx-auto px-6 max-w-[1248px]">
        {/* The simulated browser / iframe container */}
        <div className="relative w-full rounded-[12px] overflow-hidden bg-black shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-[#E6E6E6]">
          
          {/* Inner Template Content - Start "Immersive Dark" Theme */}
          <div className="relative min-h-[600px] md:min-h-[800px] overflow-hidden flex flex-col font-display">
            
            {/* Template Background Image with specific styles from design instructions */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={heroBackgroundImage}
                alt="Sirene Template Background"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Template Navigation */}
            <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-8 bg-transparent">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" fill="white" />
                  </svg>
                </div>
                <span className="text-white text-[20px] font-semibold tracking-tight">Sirene</span>
              </div>
              
              <div className="hidden md:flex items-center gap-8 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                <a href="#" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">Home</a>
                <a href="#" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">Feature</a>
                <button className="flex items-center gap-1 text-white text-sm font-medium hover:opacity-80 transition-opacity">
                  Pages <ChevronDown size={14} />
                </button>
                <a href="#" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">Company</a>
                <a href="#" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">Pricing</a>
              </div>

              <button className="w-10 h-10 flex items-center justify-center bg-white rounded-lg text-black hover:opacity-90 transition-opacity">
                <ShoppingBag size={20} />
              </button>
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 flex-1 flex flex-col items-start justify-center px-6 md:px-12 max-w-[800px] mt-12 mb-20">
              <h1 className="text-white text-[48px] md:text-[64px] font-semibold leading-[1.1] mb-6 tracking-[-0.03em] text-balance">
                Serene at work.<br />
                Calm And faster<br />
                Productivity
              </h1>
              
              <p className="text-white/70 text-lg mb-8 font-medium">
                Get Faster and Earlier access
              </p>

              {/* Email Signup Form */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px] p-2 bg-white/10 backdrop-blur-lg rounded-[12px] border border-white/20">
                <input 
                  type="email" 
                  placeholder="Type your mail here" 
                  className="flex-1 bg-transparent border-none text-white px-4 py-3 focus:outline-none placeholder:text-white/40 text-sm"
                />
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-[8px] hover:bg-opacity-90 transition-all text-sm">
                  Free Access
                </button>
              </div>

              {/* Trusted By Section */}
              <div className="mt-16 w-full">
                <p className="text-white/60 text-[12px] font-medium uppercase tracking-wider mb-8">
                  Trusted by thousands of startups
                </p>
                
                {/* Logo Carousel Simulation */}
                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 opacity-60">
                   <div className="flex items-center gap-2 text-white font-bold text-xl grayscale hover:grayscale-0 transition-all">
                    <span>Fence</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold text-xl grayscale hover:grayscale-0 transition-all">
                    <span>LOᗡO</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold text-xl grayscale hover:grayscale-0 transition-all">
                    <span>Nectar</span>
                  </div>
                  {/* Shield/Badge Logo */}
                  <div className="w-10 h-10 border-2 border-white rounded-md flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Glow Effects */}
            <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-[#4353FF]/20 blur-[120px] rounded-full z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full z-0 pointer-events-none" />
          </div>
          {/* Inner Template Content - End */}

        </div>
      </div>
    </section>
  );
}