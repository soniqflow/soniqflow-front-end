"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Lock, Database, UserCheck, Eye, RefreshCcw, Mail, Globe, Phone, MapPin, Calendar, Clock, ArrowUp } from "lucide-react";

const sections = [
  { id: "intro", title: "Introduction", icon: <Shield className="w-5 h-5" /> },
  { id: "defs", title: "Definitions", icon: <Database className="w-5 h-5" /> },
  { id: "collecting", title: "Collecting Data", icon: <Eye className="w-5 h-5" /> },
  { id: "using", title: "Use of Data", icon: <UserCheck className="w-5 h-5" /> },
  { id: "retention", title: "Retention", icon: <Clock className="w-5 h-5" /> },
  { id: "transfer", title: "Transfer of Data", icon: <Globe className="w-5 h-5" /> },
  { id: "security", title: "Security", icon: <Lock className="w-5 h-5" /> },
  { id: "children", title: "Children's Privacy", icon: <UserCheck className="w-5 h-5" /> },
  { id: "changes", title: "Policy Changes", icon: <RefreshCcw className="w-5 h-5" /> },
  { id: "contact", title: "Contact Us", icon: <Mail className="w-5 h-5" /> },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("intro");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setActiveSection(id);
  };

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 500) setVisible(true);
      else if (scrolled <= 500) setVisible(false);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-10 right-10 z-50 w-12 h-12 rounded-2xl bg-[#97FEED] text-[#071952] flex items-center justify-center shadow-[0_0_20px_rgba(151,254,237,0.3)] hover:scale-110 active:scale-95 transition-all"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
      <ScrollToTop />
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full dot-grid opacity-[0.15]" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#071952] blur-[150px] rounded-full opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0B666A] blur-[140px] rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            <Calendar className="w-3 h-3" />
            Last updated: February 26, 2026
          </div>
          <h1 className="text-[48px] md:text-[72px] font-bold tracking-tight leading-none mb-6">
            Privacy <span className="mix-text">Policy</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
            Your privacy is our priority. This policy outlines how SoniqFlow handles and protects your personal data.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Sticky Navigation */}
          <aside className="sticky top-32 hidden lg:block overflow-y-auto max-h-[calc(100vh-200px)] pr-4 scrollbar-hide">
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id 
                      ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.1)]" 
                      : "text-white/40 hover:text-white/60 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {section.icon}
                  {section.title}
                  {activeSection === section.id && (
                    <motion.div layoutId="activeRule" className="ml-auto">
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="space-y-20">
            {/* Introduction */}
            <section id="intro" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><Shield className="w-6 h-6" /></span>
                  Introduction
                </h2>
                <div className="prose prose-invert prose-p:text-white/50 prose-p:leading-relaxed prose-strong:text-white max-w-none space-y-6">
                  <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                  <p>We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
                </div>
              </div>
            </section>

            {/* Interpretation and Definitions */}
            <section id="defs" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><Database className="w-6 h-6" /></span>
                  Definitions
                </h2>
                <div className="prose prose-invert prose-p:text-white/50 prose-p:leading-relaxed prose-strong:text-white max-w-none space-y-8">
                  <div className="grid md:grid-cols-2 gap-6 list-none p-0">
                    {[
                      { term: "Account", desc: "A unique account created for You to access our Service." },
                      { term: "Company", desc: "Refers to soniqflow, San Francisco, CA 94104." },
                      { term: "Cookies", desc: "Small files placed on Your device to track browsing history." },
                      { term: "Personal Data", desc: "Any information that relates to an identified individual." },
                      { term: "Service Provider", desc: "Third-party companies that process data on our behalf." },
                      { term: "Usage Data", desc: "Data collected automatically from the Service infrastructure." },
                    ].map((def) => (
                      <li key={def.term} className="p-5 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.08] transition-all">
                        <strong className="block text-primary text-xs uppercase tracking-widest mb-2 font-bold">{def.term}</strong>
                        <span className="text-sm text-white/50 leading-relaxed">{def.desc}</span>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Collecting and Using Your Personal Data */}
            <section id="collecting" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><Eye className="w-6 h-6" /></span>
                  Collecting Data
                </h2>
                <div className="prose prose-invert max-w-none space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Personal Data</h3>
                    <p className="text-white/50 mb-4">While using Our Service, We may ask You to provide Us with certain personally identifiable information:</p>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-none p-0">
                      {["Email address", "Full name", "Phone number", "Mailing address"].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                          <CheckIcon /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 transition-colors">Usage Data</h3>
                    <p className="text-white/50">Usage Data is collected automatically when using the Service. This may include Your Device's IP address, browser type, the pages You visit, and diagnostic data.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Use of Your Personal Data */}
            <section id="using" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><UserCheck className="w-6 h-6" /></span>
                  Use of Data
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "To provide and maintain our Service",
                    "To manage Your User Account",
                    "For the performance of a contract",
                    "To contact You for updates/news",
                    "To manage Your legal requests",
                    "For business transfers and analysis"
                  ].map(use => (
                    <div key={use} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <p className="text-sm text-white/70 font-medium">{use}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Retention of Your Personal Data */}
            <section id="retention" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><Clock className="w-6 h-6" /></span>
                  Data Retention
                </h2>
                <div className="prose prose-invert max-w-none space-y-6 text-white/50 leading-relaxed">
                  <p>Account Information (User Accounts) is retained for the duration of your account relationship plus up to 24 months after account closure.</p>
                  <p>Customer Support Data and Website analytics are also retained for up to 24 months from the date of collection or ticket closure to resolve disputes and track service quality.</p>
                </div>
              </div>
            </section>

            {/* Transfer of Your Personal Data */}
            <section id="transfer" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><Globe className="w-6 h-6" /></span>
                  Transfer of Data
                </h2>
                <div className="prose prose-invert max-w-none space-y-6 text-white/50 leading-relaxed">
                  <p>Your information is processed at the Company's operating offices and in any other places where the parties involved are located. This means data may be transferred to computers outside Your governmental jurisdiction.</p>
                  <p>We take all steps reasonably necessary to ensure Your data is treated securely and in accordance with this Privacy Policy.</p>
                </div>
              </div>
            </section>

            {/* Security of Your Personal Data */}
            <section id="security" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-[#97FEED]/20 bg-[#97FEED]/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/20 rounded-2xl text-primary"><Lock className="w-6 h-6" /></span>
                  Security
                </h2>
                <p className="text-white/60 leading-relaxed">The security of Your Personal Data is important to Us. We strive to use commercially reasonable means to protect Your information, though no method of transmission is 100% secure.</p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section id="children" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-all">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><UserCheck className="w-6 h-6" /></span>
                  Children&apos;s Privacy
                </h2>
                <p className="text-white/50 leading-relaxed">Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under this age without verification of parental consent.</p>
              </div>
            </section>

            {/* Changes to this Privacy Policy */}
            <section id="changes" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-all">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><RefreshCcw className="w-6 h-6" /></span>
                  Policy Changes
                </h2>
                <p className="text-white/50 leading-relaxed">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.</p>
              </div>
            </section>

            {/* Contact Us */}
            <section id="contact" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-primary/20 bg-primary/5">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/20 rounded-2xl text-primary"><Mail className="w-6 h-6" /></span>
                  Contact Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-primary/30 transition-all">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-white font-medium">support@soniqflow.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-primary/30 transition-all">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-white font-medium">+12315501090</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-primary/30 transition-all md:col-span-2">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Mail</p>
                      <p className="text-white font-medium">548 Market Street, PMB 67291, San Francisco, CA 94104, United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}
