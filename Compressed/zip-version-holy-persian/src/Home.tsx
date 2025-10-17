import "./App.css";
import CareerClipPath from "./components/Career";
import ScrollGallery from "./components/Items";
import PortfolioCard3D from "./components/Portfolio";
import ContactAbout from "./components/Contact";
import CreativeFooter from "./components/Section/Footer";
import QuickCart from "./components/Carts";
import BrandShowcase3D from "./components/Brands";

import FeedbackHeaderStrip from "./components/Feedback";
import ProjectsTimelinePage from "./components/CareerList";
import RealisticWaveVoiceSync from "./components/Voice";
import EntrepreneurPricingPage from "./components/Entrepreneur";
import UnifiedNav from "./components/Section/UnifiedNav";
import HeroSection from "./components/Section/HeroSection";
import GlobalServicesLight from "./components/Global";
import UltraCreativePricing from "./components/Unused/Pricing";
import CountdownRevealPage from "./components/Countdown";

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
