
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import LogicSection from './components/LogicSection';
import SolutionSection from './components/SolutionSection';
import VideoSection from './components/VideoSection';
import DemoSection from './components/DemoSection';
import JourneySection from './components/JourneySection';
import ImpactSection from './components/ImpactSection';
import TargetAudience from './components/TargetAudience';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <LogicSection />
        <SolutionSection />
        <VideoSection />
        <DemoSection />
        <JourneySection />
        <ImpactSection />
        <TargetAudience />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
