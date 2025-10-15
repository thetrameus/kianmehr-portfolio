import "./App.css";import CareerClipPath from "./Section/Unused/Career";
import ScrollGallery from "./Section/Unused/Items";
import PortfolioCard3D from "./Section/Unused/Portfolio";
import ContactAbout from "./Section/Unused/Contact";
import CreativeFooter from "./Section/Footer";
import QuickCart from "./Section/Unused/Carts";
import BrandShowcase3D from "./Section/Unused/Brands";

import FeedbackHeaderStrip from "./Section/Unused/Feedback";
import ProjectsTimelinePage from "./Section/Unused/CareerList";
import RealisticWaveVoiceSync from "./Section/Unused/Voice";
import EntrepreneurPricingPage from "./Section/Unused/Entrepreneur";
import UnifiedNav from "./Section/UnifiedNav";
import HeroSection from "./Section/HeroSection";
import GlobalServicesLight from "./Section/Unused/Global";
import UltraCreativePricing from "./Section/Unused/Pricing";
import CountdownRevealPage from "./Section/Unused/Countdown";

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
