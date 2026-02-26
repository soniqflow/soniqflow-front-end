import HeroSection from "@/components/home/hero-section";
import LogoCloud from "@/components/home/logo-cloud";
import NetworkSection from "@/components/home/network-section";
import FeaturesGrid from "@/components/home/features-grid";
import AnalyticsSection from "@/components/home/analytics-section";
import PerformanceTracking from "@/components/home/performance-tracking";
import PricingSection from "@/components/home/pricing-section";
import Testimonials from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <NetworkSection />
      <FeaturesGrid />
      <AnalyticsSection />
      <PerformanceTracking />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
