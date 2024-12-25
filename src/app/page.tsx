'use client';

import Instructions from "@/app/components/Instructions";
import Navbar from "@/app/components/Navbar";
import Roadmap from "@/app/components/Roadmap";
import Tokenomics from "@/app/components/Tokenomics";
import SecurityFeatures from "@/app/components/SecurityFeatures";
import WantedFooter from "@/app/components/WantedFooter";
import { FaXTwitter, FaTelegram, FaDiscord, FaCopy, FaCube, FaGamepad, FaPalette } from 'react-icons/fa6';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { isValidSuiAddress } from "@mysten/sui.js/utils";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "To Be Announced"; // Replace with actual token address
  const [showWhitelistModal, setShowWhitelistModal] = useState(false);
  const [whitelistForm, setWhitelistForm] = useState({
    wallet: '',
    telegram: '',
    twitter: '',
    email: ''
  });
  
  const handleWhitelistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Show loading toast
    const loadingToast = toast.loading(
      <div className="font-audiowide">
        Encrypting data for transmission...
      </div>
    );

    try {
      // Validate SUI address
      if (!isValidSuiAddress(whitelistForm.wallet)) {
        toast.error(
          <div className="font-audiowide">
            Invalid SUI wallet address detected
          </div>
        );
        return;
      }

      const response = await fetch('/api/whitelist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...whitelistForm,
          timestamp: new Date().toISOString(),
          network: 'sui'
        })
      });
      
      const data = await response.json();

      if (data.success) {
        toast.dismiss(loadingToast);
        toast.success(
          <div className="space-y-2">
            <p className="font-audiowide text-cyan-400">Access Granted</p>
            <p className="text-sm">Welcome to the syndicate, operative</p>
            <p className="text-xs text-gray-400">IPFS Hash: {data.hash.slice(0, 10)}...</p>
          </div>
        );
        setShowWhitelistModal(false);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(
        <div className="space-y-2">
          <p className="font audiowide text-pink-500">Access Denied</p>
          <p className="text-sm">{error instanceof Error ? error.message : 'Operation failed. Try again later.'}</p>
        </div>
      );
      console.error('Whitelist submission error:', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <div className="absolute inset-0 bg-hero-bg bg-cover bg-center bg-no-repeat opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <Navbar />
          
          {/* Hero Section */}
          <div className="relative h-screen fixed inset-0 -mt-16 pt-16">
            {/* Logo */}
            <div className="absolute top-20 left-4">
              <Image
                src="/rockstar-gta-logo.jpg" 
                alt="Logo" 
                width={100}
                height={100}
                className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] animate-pulse rounded-xl shadow-lg border-2 border-cyan-400/30 hover:border-cyan-400 transition-colors duration-300" 
              />
            </div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center text-center text-white h-full">
              {/* Rockstar Title */}
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-orbitron text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wider text-white text-glow animate-pulse"
              >
                ROCKSTAR
              </motion.h1>

              {/* Token Address Box */}
              <div className="mt-6 w-full max-w-lg mx-auto px-4">
                <div className={`bg-black/60 backdrop-blur-sm rounded-lg border-2 border-cyan-400/30 
                  hover:border-cyan-400 transition-all duration-300 p-2 flex items-center gap-4`}>
                  <p className="text-gray-400 text-sm font-orbitron whitespace-nowrap">Token Address:</p>
                  <p className="text-[#00FFFF] font-orbitron text-base flex-1 text-center">
                    {tokenAddress}
                  </p>
                  <CopyToClipboard text={tokenAddress} onCopy={handleCopy}>
                    <button className="text-[#00FFFF] hover:text-[#FF007F] transition-colors p-2 relative group">
                      <FaCopy className="text-xl" />
                      {copied && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[#00FFFF] text-black px-2 py-1 rounded font-orbitron">
                          Copied!
                        </span>
                      )}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>

              <button className="mt-8 sm:mt-12 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-900 via-black to-purple-900 rounded-full text-lg sm:text-xl font-orbitron font-bold tracking-wider text-white hover:scale-105 transition-all duration-300 border-2 border-cyan-400 shadow-lg shadow-purple-500/50 hover:shadow-cyan-400/50 relative group">
                <span className="relative z-10">COMING SOON!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </button>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8">
                <div className="flex justify-center gap-6 sm:gap-8 items-center">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl text-cyan-400 hover:text-pink-500 transition-colors duration-300 hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
                  <FaXTwitter />
                </a>
                  <a href="https://t.me/+aavM_REWCCowNWE0" target="_blank" rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl text-cyan-400 hover:text-pink-500 transition-colors duration-300 hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
                  <FaTelegram />
                </a>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl text-cyan-400 hover:text-pink-500 transition-colors duration-300 hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
                  <FaDiscord />
                </a>
              </div>
              </div>
            </div>
          </div>

          {/* Security Features Section */}
          <SecurityFeatures />

          {/* Instructions Section */}
          <section className="bg-gradient-to-b from-black/80 via-purple-900/90 to-black text-white py-12 sm:py-16 relative z-20">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="relative py-8 mb-12">
                <h2 className="text-4xl md:text-5xl font-audiowide text-center cyber-heading bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600">
                  How to Buy
                </h2>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
              </div>
              <Instructions />
            </div>
          </section>

          {/* Tokenomics Section */}
          <Tokenomics />

          {/* Roadmap Section */}
          <Roadmap />

        {/* Mini-Games Preview Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
          <div className="absolute inset-0 bg-[url('/arcade-bg.jpg')] bg-cover opacity-20" />
          
          <div className="container mx-auto px-4 relative">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-audiowide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600">Arcade Games</h2>
              <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">Experience the thrill of the criminal underworld through our arcade collection</p>
            </div>

            {/* Game Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* Heist Planner Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 group cursor-pointer"
              >
                <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                  <div className="absolute inset-0 bg-[url('/heist-preview.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-audiowide text-[#00FFFF]">Heist Planner</h3>
                  <span className="text-sm font-audiowide text-cyan-400 bg-cyan-400/10 px-4 py-1 rounded-full whitespace-nowrap">Coming Soon</span>
                </div>
                <p className="text-gray-400">Plan and execute the perfect heist in this strategic game.</p>
              </motion.div>

              {/* Mystery Game 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-pink-500/30 hover:border-pink-500 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                  <div className="absolute inset-0 bg-[url('/mystery-game-1.jpg')] bg-cover bg-center opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="px-4 py-2 bg-pink-500 text-black text-sm font-audiowide rounded-full">Coming Q1 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-audiowide text-pink-500 mb-2">Mystery Game #1</h3>
                <p className="text-gray-400">A thrilling new addition to our criminal empire...</p>
              </motion.div>

              {/* Mystery Game 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-purple-600/30 hover:border-purple-600 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                  <div className="absolute inset-0 bg-[url('/mystery-game-2.jpg')] bg-cover bg-center opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="px-4 py-2 bg-purple-600 text-black text-sm font-audiowide rounded-full">Coming Q2 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-audiowide text-purple-600 mb-2">Mystery Game #2</h3>
                <p className="text-gray-400">Another exciting chapter in our criminal saga...</p>
              </motion.div>

              {/* Mystery Game 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                  <div className="absolute inset-0 bg-[url('/mystery-game-3.jpg')] bg-cover bg-center opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="px-4 py-2 bg-cyan-400 text-black text-sm font-audiowide rounded-full">Coming Q3 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-audiowide text-[#00FFFF] mb-2">Mystery Game #3</h3>
                <p className="text-gray-400">The next evolution of criminal entertainment...</p>
              </motion.div>
            </div>
          </div>
        </section> 
          {/* Future Vision Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
            <div className="absolute inset-0 bg-[url('/future-bg.jpg')] bg-cover opacity-20" />
            
            <div className="container mx-auto px-4 relative">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-audiowide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600">Future Vision</h2>
                <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">Building the future of decentralized gaming and entertainment</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Metaverse Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border-2 border-pink-500/30 hover:border-pink-500 transition-all duration-500"
                >
                  <div className="h-16 w-16 bg-gradient-to-br from-pink-500/20 to-pink-500/40 rounded-xl flex items-center justify-center mb-6">
                    <FaCube className="text-pink-500 text-2xl" />
                  </div>
                  <h3 className="text-xl font-audiowide text-pink-500 mb-3">Metaverse Integration</h3>
                  <p className="text-gray-400">Experience our games in immersive virtual environments</p>
                </motion.div>

                {/* Gaming Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500"
                >
                  <div className="h-16 w-16 bg-gradient-to-br from-cyan-400/20 to-cyan-400/40 rounded-xl flex items-center justify-center mb-6">
                    <FaGamepad className="text-cyan-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-audiowide text-cyan-400 mb-3">Play2Earn Gaming</h3>
                  <p className="text-gray-400">Earn rewards while enjoying our immersive gaming experiences</p>
                </motion.div>

                {/* NFT Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border-2 border-purple-600/30 hover:border-purple-600 transition-all duration-500"
                >
                  <div className="h-16 w-16 bg-gradient-to-br from-purple-600/20 to-purple-600/40 rounded-xl flex items-center justify-center mb-6">
                    <FaPalette className="text-purple-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-audiowide text-purple-600 mb-3">NFT Integration</h3>
                  <p className="text-gray-400">Own and trade unique in-game assets as NFTs</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Criminal Empire Teaser */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
            
            {/* Animated Background Effect */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[url('/rockst_back.png')] bg-cover bg-center animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-cyan-400/10" />
            </div>

            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
              >
                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left Column: Terminal Preview */}
                  <motion.div 
                    className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 font-mono text-sm cursor-pointer group order-2 md:order-1"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-cyan-400/30">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-cyan-400 ml-2">CLASSIFIED TERMINAL</span>
                    </div>
                    <div className="text-left space-y-2">
                      <p className="text-pink-500">{">"} Initializing secure connection...</p>
                      <p className="text-cyan-400">{">"} Accessing criminal database...</p>
                      <p className="text-gray-400">{">"} Heist plans: AVAILABLE</p>
                      <p className="text-gray-400">{">"} Crew assignments: PENDING</p>
                      <p className="text-gray-400">{">"} Territory expansion: IN PROGRESS</p>
                      <motion.div 
                        className="flex items-center gap-2 text-pink-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                      >
                        {">"} Ready for new recruits
                        <span className="inline-block w-2 h-4 bg-pink-500 animate-pulse" />
                      </motion.div>
                    </div>

                    {/* Hidden Preview on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <div className="text-center p-6">
                        <p className="text-cyan-400 font-audiowide mb-2">SECURITY CLEARANCE REQUIRED</p>
                        <p className="text-gray-400 text-sm">Click to access full terminal</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Right Column: Content */}
                  <div className="text-center md:text-left order-1 md:order-2">
                    <h2 className="text-4xl md:text-5xl font-audiowide text-transparent bg-clip-text 
                      bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 mb-6">
                      Join The Criminal Empire
                    </h2>
                    
                    <div className="space-y-6">
                      <p className="text-gray-400 text-lg font-orbitron">
                        Ready to make your mark in the criminal underworld? Access classified intel,
                        plan elaborate heists, and build your empire.
                      </p>

                      {/* Feature List */}
                      <ul className="space-y-3 text-gray-400 font-orbitron text-sm">
                        <li className="flex items-center gap-2">
                          <span className="text-pink-500">→</span>
                          Exclusive access to operation plans
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-pink-500">→</span>
                          Real-time territory expansion updates
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-pink-500">→</span>
                          Direct communication with crime bosses
                        </li>
                      </ul>

                      {/* CTA Button */}
                      <Link 
                        href="/manifesto"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r 
                          from-pink-500/10 to-cyan-400/10 rounded-full border-2 border-cyan-400/30 
                          hover:border-cyan-400 transition-all duration-500"
                      >
                        <span className="text-cyan-400 font-audiowide group-hover:text-pink-500 transition-colors">
                          Access Terminal
                        </span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-cyan-400 group-hover:text-pink-500"
                        >
                          →
                        </motion.span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/0 via-cyan-400/5 
                          to-pink-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <WantedFooter />
        </div>
      </main>
    </> 
  );
}
