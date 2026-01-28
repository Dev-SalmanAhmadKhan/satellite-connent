import Banner from "@/components/about-us/banner";
import AboutUsHero from "@/components/about-us/hero";
import VisionSection from "@/components/about-us/vision";
import ContactSection from "@/components/contact-us";
import PageWrapper from "@/components/homePageObserver";

export default function AboutUs() {
  return (
    <>
      <PageWrapper>
        <AboutUsHero />
        <VisionSection />
        <Banner />
        <ContactSection />
      </PageWrapper>
    </>
  );
}
