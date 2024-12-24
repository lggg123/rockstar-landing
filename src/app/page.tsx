import Instructions from "@/app/components/Instructions";
import Navbar from "@/app/components/Navbar";
import Roadmap from "@/app/components/Roadmap";
import { FaXTwitter, FaTelegram, FaDiscord } from 'react-icons/fa6';

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      {/* Background Image and Gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-hero-bg bg-cover bg-center bg-no-repeat opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <div className="relative h-screen">
          {/* Logo */}
          <div className="absolute top-4 left-4">
            <img 
              src="/rockstar-gta-logo.jpg" 
              alt="Logo" 
              className="w-[30%] md:w-[20%] lg:w-[15%] animate-pulse rounded-xl shadow-lg
                border-2 border-cyan-400/30 hover:border-cyan-400 transition-colors duration-300" 
            />
          </div>

          {/* Content */}
          <div className="relative flex flex-col items-center justify-center text-center text-white h-full">
            {/* Rockstar Title */}
            <div className="relative mb-8">
              <h1 className="font-orbitron text-7xl md:text-8xl lg:text-9xl font-black tracking-wider
                text-white relative z-10 text-glow animate-pulse">
                ROCKSTAR
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600
                  opacity-70 blur-lg -z-10"></span>
              </h1>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1 
                bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </div>

            <p className="mt-4 text-2xl max-w-2xl font-orbitron text-cyan-400 tracking-wide">
              Unleash Your Street Legacy
            </p>
            
            <button className="mt-12 px-12 py-4 bg-gradient-to-r from-purple-900 via-black to-purple-900
              rounded-full text-xl font-orbitron font-bold tracking-wider text-white
              hover:scale-105 transition-all duration-300
              border-2 border-cyan-400 shadow-lg shadow-purple-500/50
              hover:shadow-cyan-400/50 relative group">
              <span className="relative z-10">BUY NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>

            {/* Social Links */}
            <div className="mt-8">
              <div className="flex justify-center gap-8 items-center">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                  className="text-3xl text-cyan-400 hover:text-pink-500 transition-colors duration-300
                    hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
                  <FaXTwitter />
                </a>
                <a href="https://t.me/+aavM_REWCCowNWE0" target="_blank" rel="noopener noreferrer"
                  className="text-3xl text-cyan-400 hover:text-pink-500 transition-colors duration-300
                    hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
                  <FaTelegram />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer"
                  className="text-3xl text-cyan-400 hover:text-pink-500 transition-colors duration-300
                    hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
                  <FaDiscord />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions Section */}
        <section className="bg-gradient-to-b from-black/80 via-purple-900/90 to-black text-white py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative py-8 mb-12">
              <h2 className="text-4xl md:text-5xl font-audiowide text-center cyber-heading
                bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600">
                How to Buy
              </h2>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 
                bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 
                bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            </div>
            <Instructions />
          </div>
        </section>

        {/* Roadmap Section */}
        <Roadmap />
      </div>
    </main>
  );
}
