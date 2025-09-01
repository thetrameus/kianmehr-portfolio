import "./App.css";
import Navbar from "./components/NewVersion/Navbar";
import HeroSection from "./components/NewVersion/Hero";
import About from "./components/NewVersion/About";
import Services from "./components/NewVersion/Services";
import Solutions from "./components/NewVersion/Solution";
import Biography from "./components/NewVersion/Biography";
import HeritageJourney from "./components/NewVersion/HeritageJourney";
import Contact from "./components/NewVersion/Contact";
import Footer from "./components/NewVersion/Footer";
import BrandShowcase from "./components/NewVersion/BrandShowcase";
import Pricing from "./components/NewVersion/Pricing";
import JourneyMap from "./components/NewVersion/JourneyMap";
import {
  JourneyCards,
  JourneyRoadmap,
} from "./components/NewVersion/JourneyRoadmap";
import { MicroJourney, NanoJourney } from "./components/NewVersion/Nano";

function AppMinimal() {
  return (
    <div>
      {/* <Home /> */}
      <div className="App">
        <Navbar />

        {/* Minimalled */}
        <HeroSection />
        <Services />
        <About />
        <Solutions />
        <Biography />
        <HeritageJourney />
        <BrandShowcase />

        {/* <Pricing /> */}
        <Pricing />

        {/* <QuickContactWidget /> */}

        {/* <TeamCulture /> */}

        {/* <JourneyCards /> */}
        {/* <JourneyRoadmap /> */}

        {/* <NanoJourney /> */}
        {/* <MicroJourney /> */}
        {/* <JourneyMap /> */}
        <Contact />
      </div>
    </div>
  );
}

export default AppMinimal;
