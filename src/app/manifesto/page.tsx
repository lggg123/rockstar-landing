'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaChevronLeft, FaUmbrellaBeach, FaMoon, FaBuilding, FaCar, FaCity } from 'react-icons/fa';
import { GiPalmTree } from 'react-icons/gi';

// Dynamically import the CriminalEmpire component to avoid SSR issues with the terminal
const CriminalEmpire = dynamic(
  () => import('../components/CriminalEmpire'),
  { ssr: false }
);

export default function ManifestoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#4A148C] to-[#311B92] text-white relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* City Skyline */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-black/50">
          <div className="relative w-full h-full">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 bg-black/80"
                style={{
                  left: `${i * 10}%`,
                  width: '40px',
                  height: `${Math.random() * 100 + 100}px`
                }}
                animate={{
                  height: [`${Math.random() * 100 + 100}px`, `${Math.random() * 100 + 150}px`],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  yoyo: true,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full relative">
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={j}
                      className="absolute w-2 h-2 bg-yellow-400/50"
                      style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                        animation: `flicker ${Math.random() * 2 + 1}s infinite`
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Palm Trees */}
        <motion.div 
          className="absolute bottom-0 left-10 text-black/20 text-[200px]"
          animate={{ 
            rotate: [0, 2, 0], 
            y: [0, -2, 0] 
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <GiPalmTree />
        </motion.div>
        <motion.div 
          className="absolute bottom-0 right-10 text-black/20 text-[180px]"
          animate={{ 
            rotate: [0, -2, 0],
            y: [0, -3, 0]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <GiPalmTree />
        </motion.div>

        {/* Moving Cars */}
        <div className="relative w-full overflow-hidden h-8">
          <motion.div 
            className="absolute bottom-16 text-red-500/30 text-2xl"
            animate={{ 
              x: [-100, 2000]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaCar />
          </motion.div>
          <motion.div 
            className="absolute bottom-20 text-white/30 text-2xl"
            animate={{ 
              x: [2000, -100]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaCar />
          </motion.div>
        </div>

        {/* Neon Signs */}
        <motion.div 
          className="absolute top-20 right-40 text-pink-500/40 text-4xl"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaCity />
        </motion.div>
      </div>

      {/* Neon Grid Effect */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 z-0" />
      
      {/* Back to Home Button */}
      <motion.div 
        className="fixed top-4 left-4 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/"
          className="px-6 py-2 rounded-full bg-black/30 backdrop-blur-sm
            font-audiowide text-base text-purple-400
            hover:scale-105 transition-all duration-300
            border-2 border-purple-500/30 hover:border-purple-500
            flex items-center gap-2 group"
        >
          <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to the Streets</span>
        </Link>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20"
        >
          <CriminalEmpire />
        </motion.div>
      </div>

      {/* Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none z-20 bg-scanlines opacity-5" />
    </main>
  );
}
