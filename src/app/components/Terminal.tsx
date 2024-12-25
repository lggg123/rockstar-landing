'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Terminal() {
  return (
    <section className="py-20" id="join">
      <div className="container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Terminal Preview */}
          <Link href="/manifesto" className="block">
            <motion.div 
              className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 font-mono text-sm cursor-pointer group order-2 md:order-1 relative"
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
          </Link>

          {/* Right Column: Content */}
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-audiowide text-transparent bg-clip-text 
              bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 mb-6">
              Join The Criminal Empire
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-400 text-lg font-orbitron">
                Ready to make your mark in the criminal underworld? Join our syndicate and get
                access to exclusive opportunities, insider information, and the chance to be part
                of something bigger than yourself.
              </p>

              {/* Access Terminal Button */}
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
      </div>
    </section>
  );
}
