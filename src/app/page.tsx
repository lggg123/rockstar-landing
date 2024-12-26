'use client';

import Instructions from "@/app/components/Instructions";
import Navbar from "@/app/components/Navbar";
import Roadmap from "@/app/components/Roadmap";
import Tokenomics from "@/app/components/Tokenomics";
import SecurityFeatures from "@/app/components/SecurityFeatures";
import WantedFooter from "@/app/components/WantedFooter";
import HeroSection from "@/app/components/HeroSection";
import Terminal from "@/app/components/Terminal";
import ArcadeGames from "@/app/components/ArcadeGames";
import FutureVision from "@/app/components/FutureVision";
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#000',
              color: '#fff',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              backdropFilter: 'blur(10px)',
            },
            success: {
              iconTheme: {
                primary: '#06b6d4',
                secondary: '#000',
              },
            },
            error: {
              iconTheme: {
                primary: '#ec4899',
                secondary: '#000',
              },
            },
          }}
        />
        
        {/* Background Image and Gradient */}
        <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-hero-bg bg-[length:200%_auto] sm:bg-cover bg-center bg-no-repeat opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-custom-purple/30 to-custom-black"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          {/* Main Content */}
          <section>
            {/* Security Features Section */}
            <SecurityFeatures />
            {/* Instructions Section */}
            <Instructions />
            {/*Tokenomics Section*/}
            <Tokenomics />
            {/* Roadmap Section */}
            <Roadmap />
            {/* Mini Games Section */}
            <ArcadeGames />
            {/** Future Vision Section */}
            <FutureVision />
            {/* Join Criminal Empire Section */}
            {/* Terminal Section */}
            <Terminal />
          </section>
          {/* Footer */}
          <WantedFooter />
        </div>
      </main>
    </> 
  );
}