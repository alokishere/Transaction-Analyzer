import React from 'react';
import Navbar from '../componets/Navbar';
import LandingHero from '../componets/ui/LandingHero';
import PainPoints from '../componets/ui/PainPoints';
import HowItWorks from '../componets/ui/HowItWorks';
import Features from '../componets/ui/Features';
import Privacy from '../componets/ui/Privacy';
import CallToAction from '../componets/ui/CallToAction';
import Footer from '../componets/ui/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-sticky-yellow font-body text-foreground w-full overflow-x-hidden flex flex-col">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="grow">
        <LandingHero />
        <PainPoints />
        <HowItWorks />
        <Features />
        <Privacy />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;