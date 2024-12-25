'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaXTwitter, FaTelegram, FaDiscord, FaCopy } from 'react-icons/fa6';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "To Be Announced"; // Replace with actual token address

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
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

        <button 
          className="mt-8 sm:mt-12 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-900 via-black to-purple-900 rounded-full text-lg sm:text-xl font-orbitron font-bold tracking-wider text-white hover:scale-105 transition-all duration-300 border-2 border-cyan-400 shadow-lg shadow-purple-500/50 hover:shadow-cyan-400/50 relative group"
        >
          <span className="relative z-10">COMING SOON!</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        </button>

        {/* Social Links */}
        <div className="mt-6 sm:mt-8">
          <div className="flex justify-center gap-6 sm:gap-8 items-center">
            <a href="https://x.com/rockstarcoin0" target="_blank" rel="noopener noreferrer"
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
  );
}
