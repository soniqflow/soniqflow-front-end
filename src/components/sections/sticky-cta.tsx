import React from 'react';
import Image from 'next/image';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1000] border-t border-[#e6e6e6] bg-white h-[72px] flex items-center shadow-[0_-4px_12px_rgba(0,0,0,0.05)] px-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Left Section: Logo and Name */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/icons/653949cd97969661bd928932_webclip-2.png"
              alt="Sirene Logo"
              width={32}
              height={32}
              className="rounded-sm"
            />
          </div>
          <span className="font-display text-[14px] font-semibold text-[#000000]">
            Sirene
          </span>
        </div>

        {/* Right Section: Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:inline-flex items-center justify-center px-[20px] h-[40px] text-[14px] font-semibold text-[#000000] border border-[#e6e6e6] rounded-[4px] bg-white hover:bg-[#f5f5f7] transition-colors duration-200"
          >
            Preview in browser
          </a>
          <a
            href="#"
            className="hidden md:inline-flex items-center justify-center px-[20px] h-[40px] text-[14px] font-semibold text-[#000000] border border-[#e6e6e6] rounded-[4px] bg-white hover:bg-[#f5f5f7] transition-colors duration-200"
          >
            Preview in Webflow
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-[20px] h-[40px] text-[14px] font-semibold text-white bg-[#146ef5] border border-[#146ef5] rounded-[4px] hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
          >
            Buy $79 USD
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;