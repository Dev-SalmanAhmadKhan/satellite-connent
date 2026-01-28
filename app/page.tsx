"use client";

import AboutUsSection from "@/components/about";
import ContactSection from "@/components/contact-us";
import HeroSection from "@/components/hero";
import PageWrapper from "@/components/homePageObserver";
import ProcessSection from "@/components/process";
import SolutionsSection from "@/components/solutions";
import StatsSection from "@/components/stats";
import TechnologySection from "@/components/tech";

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <AboutUsSection />
      <StatsSection />
      <SolutionsSection />
      <TechnologySection />
      <ProcessSection />
      <ContactSection />
    </PageWrapper>
  );
}
