'use client';

import { motion } from 'framer-motion';
import { FaCube, FaGamepad, FaPalette } from 'react-icons/fa6';
import { useState } from 'react';
import WhitelistModal from './WhitelistModal';

export default function FutureVision() {
  const [showWhitelistModal, setShowWhitelistModal] = useState(false);

  return (
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

        {/* Whitelist Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl md:text-4xl font-audiowide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 mb-6">
            Join the Revolution
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Be among the first to access our revolutionary gaming platform and exclusive rewards
          </p>
          <button 
            onClick={() => setShowWhitelistModal(true)}
            className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-900 via-black to-purple-900 rounded-full text-lg sm:text-xl font-orbitron font-bold tracking-wider text-white hover:scale-105 transition-all duration-300 border-2 border-cyan-400 shadow-lg shadow-purple-500/50 hover:shadow-cyan-400/50 relative group"
          >
            <span className="relative z-10">JOIN WHITELIST</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </button>
        </div>
      </div>

      <WhitelistModal 
        isOpen={showWhitelistModal}
        onClose={() => setShowWhitelistModal(false)}
      />
    </section>
  );
}
