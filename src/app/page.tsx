'use client';

import Instructions from "@/app/components/Instructions";
import Navbar from "@/app/components/Navbar";
import Roadmap from "@/app/components/Roadmap";
import Tokenomics from "@/app/components/Tokenomics";
import SecurityFeatures from "@/app/components/SecurityFeatures";
import WantedFooter from "@/app/components/WantedFooter";
import { FaXTwitter, FaTelegram, FaDiscord, FaCopy } from 'react-icons/fa6';
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
          networ: 'sui'
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
          <div className="relative h-screen fixed inset-0 -mt-16 pt-16">
            {/* Logo */}
            <div className="absolute top-20 left-4">
              <Image
                src="/rockstar-gta-logo.jpg" 
                alt="Logo" 
                width={100}
                height={100}
                className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] animate-pulse rounded-xl shadow-lg
                  border-2 border-cyan-400/30 hover:border-cyan-400 transition-colors duration-300" 
              />
            </div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center text-center text-white h-full">
              {/* Rockstar Title */}
              <div className="relative mb-4 sm:mb-8">
                <h1 className="font-orbitron text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wider
                  text-white relative z-10 text-glow animate-pulse">
                  ROCKSTAR
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600
                    opacity-70 blur-lg -z-10"></span>
              </h1>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1 
                  bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              </div>
              
              <p className="mt-2 sm:mt-4 text-xl sm:text-2xl max-w-2xl font-orbitron text-cyan-400 tracking-wide px-4">
                Unleash Your Street Legacy
              </p>

              {/* Token Address Box */}
              <div className="mt-6 w-full max-w-lg mx-auto px-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg border-2 border-cyan-400/30 
                  hover:border-cyan-400 transition-all duration-300 p-2 flex items-center gap-4">
                  <p className="text-gray-400 text-sm font-orbitron whitespace-nowrap">Token Address:</p>
                  <p className="text-[#00FFFF] font-orbitron text-base flex-1 text-center">
                    {tokenAddress}
                  </p>
                  <CopyToClipboard text={tokenAddress} onCopy={handleCopy}>
                    <button className="text-[#00FFFF] hover:text-[#FF007F] transition-colors p-2 relative group">
                      <FaCopy className="text-xl" />
                      {copied && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[#00FFFF] 
                          text-black px-2 py-1 rounded font-orbitron">
                          Copied!
                        </span>
                      )}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>

              <button className="mt-8 sm:mt-12 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-900 via-black to-purple-900
                rounded-full text-lg sm:text-xl font-orbitron font-bold tracking-wider text-white
                hover:scale-105 transition-all duration-300
                border-2 border-cyan-400 shadow-lg shadow-purple-500/50
                hover:shadow-cyan-400/50 relative group">
                <span className="relative z-10">COMING SOON!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </button>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8">
                <div className="flex justify-center gap-6 sm:gap-8 items-center">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl text-cyan-400 hover:text-pink-500 transition-colors duration-300
                      hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
                  <FaXTwitter />
                </a>
                  <a href="https://t.me/+aavM_REWCCowNWE0" target="_blank" rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl text-cyan-400 hover:text-pink-500 transition-colors duration-300
                      hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
                  <FaTelegram />
                </a>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl text-cyan-400 hover:text-pink-500 transition-colors duration-300
                      hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
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

          {/* Tokenomics Section */}
          <Tokenomics />

          {/* Roadmap Section */}
          <Roadmap />

        {/* Mini-Games Preview Section */}
        {/* <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
          <div className="absolute inset-0 bg-[url('/arcade-bg.jpg')] bg-cover opacity-20" />
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-audiowide text-transparent bg-clip-text 
                  bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 mb-6">
                  Play2Earn Arcade
                </h2>
                <p className="text-gray-400 text-xl font-orbitron max-w-3xl mx-auto">
                  Experience the thrill of the criminal underworld through our arcade collection
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                // Heist Planner Card 
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-400/30
                    hover:border-cyan-400 transition-all duration-500 group"
                >
                  <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    <div className="absolute inset-0 bg-[url('/heist-preview.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-pink-500 text-black text-xs font-audiowide rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-audiowide text-cyan-400 mb-2">Heist Planner</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Strategic heist planning game with daily challenges and token rewards
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-orbitron">
                    <span>Daily Prizes</span>
                    <span>•</span>
                    <span>Leaderboard</span>
                  </div>
                </motion.div>

                 // Street Racing Card
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-pink-500/30
                    hover:border-pink-500 transition-all duration-500 group"
                >
                  <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    <div className="absolute inset-0 bg-[url('/racing-preview.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-cyan-400 text-black text-xs font-audiowide rounded-full">
                        Q1 2025
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-audiowide text-pink-500 mb-2">Street Racing</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    High-stakes racing with NFT cars and weekly tournaments
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-orbitron">
                    <span>NFT Rewards</span>
                    <span>•</span>
                    <span>Tournaments</span>
                  </div>
                </motion.div>

                // Territory Wars Card
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-purple-600/30
                    hover:border-purple-600 transition-all duration-500 group"
                >
                  <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    <div className="absolute inset-0 bg-[url('/territory-preview.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-purple-600 text-black text-xs font-audiowide rounded-full">
                        Q2 2025
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-audiowide text-purple-600 mb-2">Territory Wars</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Strategic territory control with alliance system
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-orbitron">
                    <span>Team Play</span>
                    <span>•</span>
                    <span>Weekly Wars</span>
                  </div>
                </motion.div>

                // Underground Casino Card
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-400/30
                    hover:border-cyan-400 transition-all duration-500 group"
                >
                  <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    <div className="absolute inset-0 bg-[url('/casino-preview.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-cyan-400 text-black text-xs font-audiowide rounded-full">
                        Q3 2025
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-audiowide text-cyan-400 mb-2">Underground Casino</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Cyberpunk-themed casino games with daily rewards
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-orbitron">
                    <span>Daily Spins</span>
                    <span>•</span>
                    <span>Token Prizes</span>
                  </div>
                </motion.div>
              </div>

              // Coming Soon Banner
              <div className="mt-12 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500/10 to-cyan-400/10
                    rounded-full border-2 border-cyan-400/30 backdrop-blur-sm"
                >
                  <p className="text-cyan-400 font-audiowide">
                    More games coming soon...
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section> 
        */}
          {/* Future Vision Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
            <div className="absolute inset-0 bg-[url('/city-grid.jpg')] bg-cover opacity-30" />
            
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-audiowide text-transparent bg-clip-text 
                    bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 mb-6">
                    The Future of Crime is Digital
                  </h2>
                  <p className="text-gray-400 text-xl font-orbitron max-w-3xl mx-auto">
                    Step into a revolutionary criminal metaverse where digital meets danger
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Metaverse Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border-2 border-pink-500/30
                      hover:border-pink-500 transition-all duration-500"
                  >
                    <div className="h-16 w-16 bg-gradient-to-br from-pink-500/20 to-pink-500/40 
                      rounded-xl flex items-center justify-center mb-6">
                      <span className="text-3xl text-pink-500">🌆</span>
                    </div>
                    <h3 className="text-xl font-audiowide text-pink-500 mb-4">
                      Criminal Metaverse
                    </h3>
                    <p className="text-gray-400">
                      Own virtual territories, run digital operations, and build your criminal empire in a 
                      fully immersive 3D world.
                    </p>
                  </motion.div>

                  {/* Gaming Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border-2 border-cyan-400/30
                      hover:border-cyan-400 transition-all duration-500"
                  >
                    <div className="h-16 w-16 bg-gradient-to-br from-cyan-400/20 to-cyan-400/40 
                      rounded-xl flex items-center justify-center mb-6">
                      <span className="text-3xl">🎮</span>
                    </div>
                    <h3 className="text-xl font-audiowide text-cyan-400 mb-4">
                      Play2Earn Gaming
                    </h3>
                    <p className="text-gray-400">
                      Plan heists, compete in underground races, and earn real rewards in our 
                      action-packed gaming ecosystem.
                    </p>
                  </motion.div>

                  {/* NFT Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border-2 border-purple-600/30
                      hover:border-purple-600 transition-all duration-500"
                  >
                    <div className="h-16 w-16 bg-gradient-to-br from-purple-600/20 to-purple-600/40 
                      rounded-xl flex items-center justify-center mb-6">
                      <span className="text-3xl">💎</span>
                    </div>
                    <h3 className="text-xl font-audiowide text-purple-600 mb-4">
                      Digital Assets
                    </h3>
                    <p className="text-gray-400">
                      Collect exclusive NFT weapons, vehicles, and properties. Trade them in our 
                      underground marketplace.
                    </p>
                  </motion.div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <h4 className="text-3xl font-audiowide text-transparent bg-clip-text 
                      bg-gradient-to-r from-pink-500 to-purple-600">
                      100K+
                    </h4>
                    <p className="text-gray-400 font-orbitron">Expected Players</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-audiowide text-transparent bg-clip-text 
                      bg-gradient-to-r from-cyan-400 to-pink-500">
                      $10M+
                    </h4>
                    <p className="text-gray-400 font-orbitron">Projected Market Cap</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-audiowide text-transparent bg-clip-text 
                      bg-gradient-to-r from-purple-600 to-cyan-400">
                      5000+
                    </h4>
                    <p className="text-gray-400 font-orbitron">NFT Collection</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-audiowide text-transparent bg-clip-text 
                      bg-gradient-to-r from-pink-500 to-purple-600">
                      Q1 2026
                    </h4>
                    <p className="text-gray-400 font-orbitron">Metaverse Launch</p>
                  </div>
                </div>

                {/* Enhanced Metaverse Description */}
                <div className="mt-16 bg-black/40 backdrop-blur-sm p-8 rounded-xl border-2 border-cyan-400/30">
                  <h3 className="text-2xl font-audiowide text-cyan-400 mb-6 text-center">Metaverse Features Preview</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-pink-500 font-audiowide mb-3">Territory Control</h4>
                      <ul className="text-gray-400 space-y-2">
                        <li>• Own and control virtual districts</li>
                        <li>• Establish protection rackets</li>
                        <li>• Engage in territory wars</li>
                        <li>• Build criminal operations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-purple-600 font-audiowide mb-3">Criminal Operations</h4>
                      <ul className="text-gray-400 space-y-2">
                        <li>• Run underground casinos</li>
                        <li>• Establish smuggling routes</li>
                        <li>• Plan and execute heists</li>
                        <li>• Manage black markets</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-400 
                      rounded-full font-audiowide text-black shadow-lg shadow-pink-500/20
                      hover:shadow-cyan-400/20 transition-all duration-500"
                    onClick={() => setShowWhitelistModal(true)}
                  >
                    Join the Whitelist
                  </motion.button>
                </div>
                {/* Whitelist Modal */}
                <AnimatePresence>
                  {showWhitelistModal && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blue-sm z-50 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-black/90 p-8 rounded-xl border-2 border-cyan-400/30 max-w-md w-full mx-4">
                          <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font audiowide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
                              Access Granted
                            </h3>
                            <button 
                              onClick={() => setShowWhitelistModal(false)}
                              className="text-gray-400 hover:text-pink-500 transition-colors">
                                x
                              </button>
                          </div>
                          <form
                            onSubmit={handleWhitelistSubmit}
                            className="space-y-6">
                              <div>
                                <label className="block text-cyan-400 font-audiowide text-sm mb-2">
                                  Wallet Address
                                </label>
                                <input
                                  type="text"
                                  value={whitelistForm.wallet}
                                  onChange={(e) => setWhitelistForm({...whitelistForm, wallet: e.target.value})}
                                  className="w-full bg-black/60 border-2 border-cyan-400/30 rounded-lg px-4 py-2 text-gray-300 focus:border-pink-500 transition-colors focus: outline-none font-mono"
                                  placeholder="0x..."
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-cyan-400 font-audiowide text-sm mb-2">
                                  Telegram Handle
                                </label>
                                <input
                                  type="text"
                                  value={whitelistForm.telegram}
                                  onChange={(e) => setWhitelistForm({...whitelistForm, telegram: e.target.value})}
                                  className="w-full bg-black/60 border-2 border-cyan-400/30 rounded-lg px-4 py-2 text-gray-300 focus:border-pink-500 transition-colors focus: outline-none"
                                  placeholder="@username"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-cyan-400 font-audiowide text-sm mb-2">
                                  Twitter Handle
                                </label>
                                <input 
                                  type="text"
                                  value={whitelistForm.twitter}
                                  onChange={(e) => setWhitelistForm({...whitelistForm, twitter: e.target.value})}
                                  className="w-full bg-black/60 border-2 border-cyan-400/30 rounded-lg px-4 py-2 text-gray-300 focus:border-pink-500 transition-colors focus: outline-none"
                                  placeholder="@username"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-cyan-400 font-audiowide text-sm mb-2">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  value={whitelistForm.email}
                                  onChange={(e) => setWhitelistForm({...whitelistForm, email: e.target.value})}
                                  className="w-full bg-black/60 border-2 border-cyan-400/30 rounded-lg px-4 py-2 text-gray-300 focus:border-pink-500 transition-colors focus: outline-none"
                                  placeholder="Hc9L4@example.com"
                                  required
                                />
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-lg font-audiowide text-black shadow-lg shadow-pink 500/20 hover:shadow-cyan-400/20 transition-all duration-500">
                                  Submit Application
                              </motion.button>
                            </form>
                            <p className="text-gray-400 text-sm mt-4 text-center">
                              Your information will be reviewed by our syndicate
                            </p>
                        </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
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
                    className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-400/30
                      hover:border-cyan-400 transition-all duration-500 font-mono text-sm
                      cursor-pointer group order-2 md:order-1"
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
                      className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-xl 
                        flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
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
      </> 
  );
}
