'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the CriminalEmpire component to avoid SSR issues with the terminal
const CriminalEmpire = dynamic(
  () => import('../components/CriminalEmpire'),
  { ssr: false }
);

export default function ManifestoPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="fixed inset-0 bg-hero-bg bg-cover bg-center bg-no-repeat opacity-30 z-0" />
      
      {/* Back to Home Button */}
      <motion.div 
        className="fixed top-4 left-4 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/"
          className="px-6 py-2 rounded-full bg-black/60 backdrop-blur-sm
            font-audiowide text-base text-cyan-400
            hover:scale-105 transition-all duration-300
            border-2 border-cyan-400/30 hover:border-cyan-400
            flex items-center gap-2"
        >
          <span>← Back</span>
        </Link>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <CriminalEmpire />
      </div>
    </main>
  );
}
