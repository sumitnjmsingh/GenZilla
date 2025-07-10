import Gradient from "@/components/common/gradient";
import HeroSection from "@/components/LandingComponent/hero-section";
import FeatureSection from "@/components/LandingComponent/feature-section";
import PricingSection from "@/components/LandingComponent/pricing-section";
import TestimonialSection from "@/components/LandingComponent/testimonial-section";
import FooterSection from "@/components/LandingComponent/footer-section";
import StatsHighlights from "@/components/LandingComponent/StatsHighlights";
import AIWorkflowSteps from "@/components/LandingComponent/AIWorkflowSteps";
import LatestBlogs from "@/components/LandingComponent/LatestBlogs";

export default function Home() {
  return (
    <div className="relative w-full bg-white text-gray-800 brightness-150">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.03)_0%,transparent_60%)] pointer-events-none z-0" />
      <Gradient />
      <main className="flex flex-col min-h-screen relative z-10">
        <HeroSection />
        <FeatureSection />
        <PricingSection />
        <StatsHighlights />
        <TestimonialSection />
        <LatestBlogs />
        <AIWorkflowSteps />
        <FooterSection />
      </main>
    </div>
  );
}
