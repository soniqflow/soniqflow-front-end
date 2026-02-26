"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const productLinks = [
    { title: "Designer", href: "https://webflow.com/designer?utm_source=marketplace" },
    { title: "CMS", href: "https://webflow.com/cms?utm_source=marketplace" },
    { title: "Ecommerce", href: "https://webflow.com/ecommerce?utm_source=marketplace" },
    { title: "Interactions", href: "https://webflow.com/interactions-animations?utm_source=marketplace" },
    { title: "Localization", href: "https://webflow.com/localization?utm_source=marketplace" },
    { title: "Edit mode", href: "https://webflow.com/edit-mode?utm_source=marketplace" },
    { title: "SEO", href: "https://webflow.com/seo?utm_source=marketplace" },
    { title: "Security", href: "https://webflow.com/security?utm_source=marketplace" },
    { title: "Hosting", href: "https://webflow.com/hosting?utm_source=marketplace" },
  ];

  const marketplaceLinks = [
    { title: "Overview", href: "https://webflow.com/marketplace" },
    { title: "Apps", href: "https://webflow.com/apps?utm_source=marketplace" },
    { title: "Libraries", href: "https://webflow.com/libraries?utm_source=marketplace" },
    { title: "Hire a Certified Partner", href: "https://experts.webflow.com/?utm_source=marketplace" },
    { title: "Templates", href: "https://webflow.com/templates?utm_source=marketplace" },
    { title: "Made in Webflow", href: "https://webflow.com/made-in-webflow?utm_source=marketplace" },
  ];

  const resourcesLinks = [
    { title: "Community", href: "https://webflow.com/community?utm_source=marketplace" },
    { title: "Ebooks", href: "https://ebooks.webflow.com/?utm_source=marketplace" },
    { title: "Forum", href: "https://forum.webflow.com/?utm_source=marketplace" },
    { title: "Blog", href: "https://webflow.com/blog?utm_source=marketplace" },
    { title: "Support", href: "https://support.webflow.com/" },
  ];

  return (
    <header className="w-full bg-white border-b border-[#e6e6e6] sticky top-0 z-[1000]">
      <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center justify-between">
        {/* Left Section: Logo and Nav Items */}
        <div className="flex items-center gap-[32px]">
          <a href="https://webflow.com/?r=0" className="flex items-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/svgs/67193a88ae92358f7954ff32_Marketplace-7.svg"
              alt="Webflow Logo"
              width={80}
              height={32}
              className="h-[18px] w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center list-none p-0 m-0">
              <li>
                <a
                  href="https://webflow.com/dashboard"
                  className="px-[16px] py-[22px] text-[14px] font-medium text-black hover:text-[#146ef5] transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li className="relative group">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "product" ? null : "product")}
                  className="flex items-center gap-[4px] px-[16px] py-[22px] text-[14px] font-medium text-black hover:text-[#146ef5] transition-colors"
                >
                  Product
                  <ChevronDown size={14} className="mt-[1px]" />
                </button>
                {/* Dropdown would be implemented here, simplified for this section scope */}
              </li>
              <li className="relative group">
                <button
                  className="flex items-center gap-[4px] px-[16px] py-[22px] text-[14px] font-medium text-black hover:text-[#146ef5] transition-colors"
                >
                  Marketplace
                  <ChevronDown size={14} className="mt-[1px]" />
                </button>
              </li>
              <li>
                <a
                  href="https://university.webflow.com/?utm_source=marketplace"
                  className="px-[16px] py-[22px] text-[14px] font-medium text-black hover:text-[#146ef5] transition-colors"
                >
                  Learn
                </a>
              </li>
              <li className="relative group">
                <button
                  className="flex items-center gap-[4px] px-[16px] py-[22px] text-[14px] font-medium text-black hover:text-[#146ef5] transition-colors"
                >
                  Resources
                  <ChevronDown size={14} className="mt-[1px]" />
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section: CTA Button */}
        <div className="flex items-center">
          <a
            href="https://webflow.com/signup"
            className="hidden sm:inline-block bg-[#146ef5] text-white px-[20px] py-[10px] rounded-[4px] text-[14px] font-semibold hover:bg-[#4353ff] transition-colors leading-[1]"
          >
            Get started <span className="hidden md:inline">— it&apos;s free</span>
          </a>
          
          {/* Mobile Menu Icon */}
          <button className="lg:hidden ml-[16px] p-[8px]">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;