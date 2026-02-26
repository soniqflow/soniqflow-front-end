import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

/**
 * Footer component for the Sirene template clone.
 * Pixel-perfect implementation based on computed styles and screenshots.
 */
const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#e6e6e6] pt-[80px] pb-[80px]">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8">
          
          {/* Column 1: Explore */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-semibold text-[#000000] uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://webflow.com/dashboard" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="https://webflow.com/marketplace" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="https://experts.webflow.com" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                  Designers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Learn & get help */}
          <div className="lg:col-span-4 lg:pl-10">
            <h4 className="text-[12px] font-semibold text-[#000000] uppercase tracking-wider mb-6">Learn & get help</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              <ul className="space-y-4">
                <li>
                  <a href="https://support.webflow.com" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Support
                  </a>
                </li>
                <li>
                  <a href="https://university.webflow.com" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    University
                  </a>
                </li>
                <li>
                  <a href="https://university.webflow.com/courses" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="https://webflow.com/blog" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://ebooks.webflow.com" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Ebooks
                  </a>
                </li>
              </ul>
              <ul className="space-y-4">
                <li>
                  <a href="https://forum.webflow.com" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="https://webflow.com/community" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Community
                  </a>
                </li>
                <li>
                  <a href="https://webflow.com/developers" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Developers
                  </a>
                </li>
                <li>
                  <a href="https://webflow.com/wishlist" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="https://status.webflow.com" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Company & Terms */}
          <div className="lg:col-span-4 lg:pl-10">
            <div className="mb-12">
              <h4 className="text-[12px] font-semibold text-[#000000] uppercase tracking-wider mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://webflow.com/about" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://webflow.com/careers" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://webflow.com/sitemap" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="https://webflow.com/affiliates" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Become an affiliate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-[#000000] uppercase tracking-wider mb-6">Terms & policies</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/terms" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <a href="https://webflow.com/legal/cookie-policy" className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200">
                    Cookie policy
                  </a>
                </li>
                <li>
                  <button className="text-[14px] text-[#666666] hover:text-[#000000] transition-colors duration-200 text-left">
                    Cookie preferences
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Social */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end">
            <h4 className="text-[12px] font-semibold text-[#000000] uppercase tracking-wider mb-6">Social</h4>
            <div className="flex flex-col space-y-4 items-start lg:items-end">
              <a href="https://webflow.com" className="text-[#666666] hover:text-[#000000] transition-opacity duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.5 14.5l-2.5-3.5-2.5 3.5h-2.5l3.75-5-3.75-5h2.5l2.5 3.5 2.5-3.5h2.5l-3.75 5 3.75 5h-2.5zm-14-10l-3.5 10h-2.5l-2.5-10h2.5l1.25 5.5 1.25-5.5h2.5l1.25 5.5 1.25-5.5h2.5z" />
                </svg>
              </a>
              <a href="https://youtube.com" className="text-[#666666] hover:text-[#000000] transition-opacity duration-200">
                <Youtube size={20} strokeWidth={1.5} />
              </a>
              <a href="https://twitter.com" className="text-[#666666] hover:text-[#000000] transition-opacity duration-200">
                <Twitter size={20} fill="currentColor" stroke="none" />
              </a>
              <a href="https://facebook.com" className="text-[#666666] hover:text-[#000000] transition-opacity duration-200">
                <Facebook size={20} fill="currentColor" stroke="none" />
              </a>
              <a href="https://instagram.com" className="text-[#666666] hover:text-[#000000] transition-opacity duration-200">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="https://tiktok.com" className="text-[#666666] hover:text-[#000000] transition-opacity duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.13 8.13 0 0 1-1.88-1.52c0 2.94.02 5.88-.01 8.82-.02 2.04-.57 4.11-1.89 5.67-1.41 1.76-3.7 2.66-5.91 2.37-2.18-.24-4.22-1.74-5.11-3.76-.87-1.92-.78-4.23.41-6 1.14-1.77 3.22-2.83 5.3-2.65v4.14c-1.12-.13-2.31.25-3.05 1.11-.79.88-.85 2.21-.29 3.23.51 1 1.62 1.6 2.73 1.55 1.17-.02 2.26-.81 2.6-1.92.17-.55.2-1.12.19-1.69V0l-.02.02z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;