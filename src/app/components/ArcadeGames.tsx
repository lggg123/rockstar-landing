'use client';

import { motion } from 'framer-motion';

export default function ArcadeGames() {
  return (
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
  );
}
