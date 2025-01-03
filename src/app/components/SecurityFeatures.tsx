'use client';

import React from 'react';
import { FaLock, FaRobot, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const SecurityFeatures = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="security">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      
      <div className="container mx-auto px-4 relative">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-audiowide text-transparent bg-clip-text 
            bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 mb-4">
            Security Features
          </h2>
          <p className="text-gray-400 text-lg font-orbitron max-w-3xl mx-auto mb-4">
            Our comprehensive security measures are designed to protect our community and ensure 
            sustainable growth. No rug pulls here – we&apos;re building a lasting criminal empire together.
          </p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl
              border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500">
            <FaLock className="text-4xl text-pink-500 mb-4" />
            <h3 className="text-xl font-audiowide text-cyan-400 mb-4">Liquidity Locked</h3>
            <p className="text-gray-400">
              70% of liquidity locked for 6 months, ensuring stable trading and long-term growth.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl
              border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500">
            <FaRobot className="text-4xl text-pink-500 mb-4" />
            <h3 className="text-xl font-audiowide text-cyan-400 mb-4">Anti-Bot Measures</h3>
            <p className="text-gray-400">
              Advanced protection against bots and snipers to ensure fair trading for all holders.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl
              border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500">
            <FaChartLine className="text-4xl text-pink-500 mb-4" />
            <h3 className="text-xl font-audiowide text-cyan-400 mb-4">Growth Metrics</h3>
            <p className="text-gray-400">
              Real-time tracking and transparent reporting of key performance indicators.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl
              border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500">
            <FaShieldAlt className="text-4xl text-pink-500 mb-4" />
            <h3 className="text-xl font-audiowide text-cyan-400 mb-4">Max Transaction Limit</h3>
            <p className="text-gray-400">
              Transaction size limits prevent large dumps and protect against market manipulation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;