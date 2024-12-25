'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaRobot, FaChartLine, FaCalendarAlt } from 'react-icons/fa';

const SecurityFeatures = () => {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const totalTokens = 30_000_000;
  const immediateUnlock = 6_000_000;
  const vestedTokens = 24_000_000;
  const monthlyRelease = vestedTokens / 12;

  const calculateReleasedTokens = (month: number) => {
    return immediateUnlock + (monthlyRelease * month);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const calculateProgress = (month: number) => {
    return (calculateReleasedTokens(month) / totalTokens) * 100;
  };

  return (
    <section className="py-20 relative overflow-hidden" id="security">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      
      <div className="container mx-auto px-4 relative">
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-audiowide text-transparent bg-clip-text 
            bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 mb-4">
            Security Features
          </h2>
          <p className="text-gray-400 text-lg font-orbitron max-w-3xl mx-auto mb-4">
            Our team&apos;s tokens are securely locked in a time-release vault, demonstrating our long-term commitment
            to the project. No rug pulls here – we&apos;re building a lasting criminal empire together.
          </p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* Vesting Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 bg-black/60 backdrop-blur-sm p-8 rounded-xl
            border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500"
        >
          <h3 className="text-2xl font-audiowide text-cyan-400 mb-6 flex items-center gap-2">
            <FaCalendarAlt className="text-pink-500" />
            Token Vesting Schedule
          </h3>

          {/* Initial Distribution */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-black/40 p-6 rounded-lg border border-cyan-400/30">
              <h4 className="font-audiowide text-pink-500 mb-2">Immediate Unlock</h4>
              <p className="text-2xl font-orbitron text-cyan-400">{formatNumber(immediateUnlock)}</p>
              <p className="text-sm text-gray-400 mt-2">20% for marketing and partnerships</p>
            </div>
            <div className="bg-black/40 p-6 rounded-lg border border-cyan-400/30">
              <h4 className="font-audiowide text-pink-500 mb-2">Vested Tokens</h4>
              <p className="text-2xl font-orbitron text-cyan-400">{formatNumber(vestedTokens)}</p>
              <p className="text-sm text-gray-400 mt-2">80% locked, released monthly over 12 months</p>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">Month 0</span>
              <span className="text-sm text-gray-400">Month 12</span>
            </div>
            <div className="grid grid-cols-12 gap-1">
              {Array.from({ length: 13 }).map((_, i) => (
                <motion.button
                  key={i}
                  className={`h-8 rounded ${
                    selectedMonth === i 
                      ? 'bg-pink-500' 
                      : 'bg-cyan-400/20 hover:bg-cyan-400/40'
                  } transition-colors relative group`}
                  onClick={() => setSelectedMonth(i)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-cyan-400
                    px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity
                    whitespace-nowrap pointer-events-none">
                    Month {i}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Selected Month Details */}
          {selectedMonth !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/40 p-6 rounded-lg border border-cyan-400/30"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-audiowide text-pink-500 mb-2">Month {selectedMonth}</h4>
                  <p className="text-sm text-gray-400">Total Released Tokens</p>
                  <p className="text-xl font-orbitron text-cyan-400">
                    {formatNumber(calculateReleasedTokens(selectedMonth))}
                  </p>
                </div>
                <div>
                  <h4 className="font-audiowide text-pink-500 mb-2">Release Progress</h4>
                  <div className="h-4 bg-black/60 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-pink-500 to-cyan-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${calculateProgress(selectedMonth)}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {calculateProgress(selectedMonth).toFixed(1)}% Released
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-sm p-8 rounded-xl
              border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500"
          >
            <FaLock className="text-4xl text-pink-500 mb-4" />
            <h3 className="text-xl font-audiowide text-cyan-400 mb-4">Liquidity Locked</h3>
            <p className="text-gray-400">
              70% of liquidity locked for 6 months, ensuring stable trading and long-term growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black/60 backdrop-blur-sm p-8 rounded-xl
              border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500"
          >
            <FaRobot className="text-4xl text-pink-500 mb-4" />
            <h3 className="text-xl font-audiowide text-cyan-400 mb-4">Anti-Bot Measures</h3>
            <p className="text-gray-400">
              Advanced protection against bots and snipers to ensure fair trading for all holders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-black/60 backdrop-blur-sm p-8 rounded-xl
              border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500"
          >
            <FaChartLine className="text-4xl text-pink-500 mb-4" />
            <h3 className="text-xl font-audiowide text-cyan-400 mb-4">Growth Metrics</h3>
            <p className="text-gray-400">
              Real-time tracking and transparent reporting of key performance indicators.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
