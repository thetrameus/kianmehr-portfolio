import "./App.css";
import CareerClipPath from "./components/Section/Unused/Career";
import ScrollGallery from "./components/Section/Unused/Items";
import PortfolioCard3D from "./components/Section/Unused/Portfolio";
import ContactAbout from "./components/Section/Unused/Contact";
import CreativeFooter from "./components/Section/Footer";
import QuickCart from "./components/Section/Unused/Carts";
import BrandShowcase3D from "./components/Section/Unused/Brands";

import FeedbackHeaderStrip from "./components/Section/Unused/Feedback";
import ProjectsTimelinePage from "./components/Section/Unused/CareerList";
import RealisticWaveVoiceSync from "./components/Section/Unused/Voice";
import EntrepreneurPricingPage from "./components/Section/Unused/Entrepreneur";
import UnifiedNav from "./components/Section/UnifiedNav";
import HeroSection from "./components/Section/HeroSection";
import GlobalServicesLight from "./components/Section/Unused/Global";
import UltraCreativePricing from "./components/Section/Unused/Pricing";
import CountdownRevealPage from "./components/Section/Unused/Countdown";

export default function Home() {
  return (
    <>
      <UnifiedNav />

      <HeroSection />

      <CareerClipPath />

      <ScrollGallery />

      <PortfolioCard3D
        photo="https://picsum.photos/id/1027/800/800"
        name="Jane Doe"
        role="Senior Product Manager"
        bio="12+ years turning complex data into elegant business solutions."
      />

      <UltraCreativePricing />

      <ContactAbout />

      <GlobalServicesLight />

      <BrandShowcase3D />

      <ProjectsTimelinePage />

      <EntrepreneurPricingPage />

      <RealisticWaveVoiceSync />

      <FeedbackHeaderStrip />

      <CountdownRevealPage />

      <QuickCart />

      <CreativeFooter />
    </>
  );
}
