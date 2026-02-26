"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Scale, ShieldCheck, Gavel, Calendar, Mail, Globe, Phone, MapPin, ArrowUp } from "lucide-react";

const sections = [
  { id: "ack", title: "Acknowledgment", icon: <ShieldCheck className="w-5 h-5" /> },
  { id: "defs", title: "Definitions", icon: <Scale className="w-5 h-5" /> },
  { id: "links", title: "Links to Other Websites", icon: <Globe className="w-5 h-5" /> },
  { id: "termination", title: "Termination", icon: <Gavel className="w-5 h-5" /> },
  { id: "liability", title: "Limitation of Liability", icon: <ShieldCheck className="w-5 h-5" /> },
  { id: "as-is", title: "AS IS Disclaimer", icon: <Scale className="w-5 h-5" /> },
  { id: "law", title: "Governing Law", icon: <Gavel className="w-5 h-5" /> },
  { id: "contact", title: "Contact Us", icon: <Mail className="w-5 h-5" /> },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("ack");

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
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#071952] blur-[150px] rounded-full opacity-30" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#0B666A] blur-[140px] rounded-full opacity-20" />
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
            Terms and <span className="mix-text">Conditions</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
            Please read these terms and conditions carefully before using our AI-powered orchestration engine.
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
            {/* Acknowledgment */}
            <section id="ack" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><ShieldCheck className="w-6 h-6" /></span>
                  Acknowledgment
                </h2>
                <div className="prose prose-invert prose-p:text-white/50 prose-p:leading-relaxed prose-strong:text-white max-w-none space-y-6">
                  <p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                  <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                  <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                  <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                  <p>Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.</p>
                </div>
              </div>
            </section>

            {/* Interpretation and Definitions */}
            <section id="defs" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><Scale className="w-6 h-6" /></span>
                  Interpretation and Definitions
                </h2>
                <div className="prose prose-invert prose-p:text-white/50 prose-p:leading-relaxed prose-strong:text-white max-w-none space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Interpretation</h3>
                    <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Definitions</h3>
                    <ul className="grid md:grid-cols-2 gap-6 list-none p-0">
                      {[
                        { term: "Affiliate", desc: "An entity that controls, is controlled by, or is under common control with a party (50%+ ownership)." },
                        { term: "Country", desc: "Refers to: Alaska, United States." },
                        { term: "Company", desc: "Refers to soniqflow, 548 Market Street, San Francisco, CA 94104." },
                        { term: "Device", desc: "Any device that can access the Service (computer, cell phone, tablet)." },
                        { term: "Service", desc: "Refers to the Website." },
                        { term: "Terms", desc: "The agreement between You and the Company regarding the Service." },
                        { term: "Third-Party Service", desc: "Any services or content provided by a third party displayed on the Service." },
                        { term: "Website", desc: "Accessible from soniqflow.com" },
                      ].map((def) => (
                        <li key={def.term} className="p-5 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.08] transition-all">
                          <strong className="block text-primary text-xs uppercase tracking-widest mb-2 font-bold">{def.term}</strong>
                          <span className="text-sm text-white/50 leading-relaxed">{def.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Links to Other Websites */}
            <section id="links" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><Globe className="w-6 h-6" /></span>
                  Links to Other Websites
                </h2>
                <div className="prose prose-invert max-w-none space-y-6 text-white/50 leading-relaxed">
                  <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
                  <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services.</p>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <p className="text-white/70 italic text-sm m-0">
                      We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section id="termination" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><Gavel className="w-6 h-6" /></span>
                  Termination
                </h2>
                <div className="prose prose-invert max-w-none space-y-6 text-white/50 leading-relaxed">
                  <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                  <p>Upon termination, Your right to use the Service will cease immediately.</p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section id="liability" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><ShieldCheck className="w-6 h-6" /></span>
                  Limitation of Liability
                </h2>
                <div className="prose prose-invert max-w-none space-y-6 text-white/50 leading-relaxed">
                  <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything.</p>
                  <p>To the maximum extent permitted by applicable law, in no event shall the Company be liable for any special, incidental, indirect, or consequential damages whatsoever (including loss of profits, data, business interruption, or personal injury).</p>
                </div>
              </div>
            </section>

            {/* AS IS Disclaimer */}
            <section id="as-is" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><Scale className="w-6 h-6" /></span>
                  "AS IS" and "AS AVAILABLE"
                </h2>
                <div className="prose prose-invert max-w-none space-y-6 text-white/50 leading-relaxed">
                  <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company disclaims all warranties, whether express, implied, statutory or otherwise.</p>
                  <p>Neither the Company nor any provider makes any representation or warranty: (i) as to the operation or availability of the Service; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy or reliability of content; or (iv) that the Service is free of harmful components.</p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section id="law" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-white/5 hover:border-white/10 transition-colors">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/10 rounded-2xl text-primary"><Gavel className="w-6 h-6" /></span>
                  Governing Law
                </h2>
                <div className="prose prose-invert max-w-none space-y-6 text-white/50 leading-relaxed">
                  <p>The laws of the Country (Alaska, United States), excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                </div>
              </div>
            </section>

            {/* Contact Us */}
            <section id="contact" className="scroll-mt-32">
              <div className="glass-box p-8 md:p-12 rounded-[32px] border-[#97FEED]/20 bg-[#97FEED]/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
                
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="p-3 bg-primary/20 rounded-2xl text-primary"><Mail className="w-6 h-6" /></span>
                  Contact Us
                </h2>
                <p className="text-white/60 mb-10 max-w-xl">
                  If you have any questions about these Terms and Conditions, feel free to reach out to our legal department.
                </p>
                
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
