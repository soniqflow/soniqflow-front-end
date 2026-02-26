import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

/**
 * HeroHeader component
 * Clones the template header section featuring breadcrumb navigation, title, author, and primary action buttons.
 * Theme: Light
 */
const HeroHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-[#e6e6e6]">
      <div className="container mx-auto px-6 py-6 lg:py-8 max-w-[1200px]">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-1 mb-6" aria-label="Breadcrumb">
          <a 
            href="#" 
            className="flex items-center text-[#666666] hover:text-[#000000] transition-colors"
          >
            <div className="w-[16px] h-[16px] mr-2 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
          </a>
          <ChevronRight className="w-3 h-3 text-[#666666]" />
          <a 
            href="#" 
            className="text-[14px] font-medium text-[#666666] hover:text-[#000000] transition-colors"
          >
            Templates
          </a>
          <ChevronRight className="w-3 h-3 text-[#666666]" />
          <span className="text-[14px] font-medium text-[#666666]">
            Technology
          </span>
        </nav>

        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left: Title and Creator */}
          <div className="flex-1">
            <h1 className="text-[32px] font-semibold text-[#000000] leading-[1.2] mb-2 tracking-[-0.02em]">
              Sirene - Technology Website Template
            </h1>
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 rounded-full bg-[#146ef5] overflow-hidden flex items-center justify-center">
                {/* Fallback for the author icon if specific asset not provided */}
                <span className="text-[10px] text-white font-bold">S</span>
              </div>
              <a 
                href="#" 
                className="text-[14px] font-medium text-[#146ef5] hover:underline"
              >
                SaaS Serif
              </a>
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-5 py-[10px] rounded-[4px] border border-[#e6e6e6] bg-white text-[14px] font-semibold text-[#000000] hover:bg-[#f5f5f7] transition-colors h-[44px]"
            >
              Preview in browser
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-5 py-[10px] rounded-[4px] border border-[#e6e6e6] bg-white text-[14px] font-semibold text-[#000000] hover:bg-[#f5f5f7] transition-colors h-[44px]"
            >
              Preview in Webflow
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-[10px] rounded-[4px] bg-[#146ef5] text-[14px] font-semibold text-white hover:opacity-90 transition-opacity h-[44px]"
            >
              Buy $79 USD
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;