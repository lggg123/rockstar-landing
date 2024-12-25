'use client';

import { GiCarKey } from 'react-icons/gi';
import { FaCity, FaMoneyBillWave, FaGamepad } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';
import TypewriterText from './TypewriterText';

interface RoadmapPhaseProps {
  phase: string;
  title: string;
  items: string[];
  icon: React.ReactNode;
  alignment: 'left' | 'right';
  index: number;
}

const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ phase, title, items, icon, alignment, index }) => {
  const containerClasses = `flex ${alignment === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-4 group`;
  const contentClasses = `w-full md:w-[calc(50%-2rem)] p-6 bg-black/40 rounded-xl border-2 border-cyan-400/30 
    backdrop-blur-sm transition-all duration-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20
    ${alignment === 'left' ? 'ml-auto' : 'mr-auto'}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div className={containerClasses}>
        {/* Icon Container */}
        <div 
          className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
            items-center justify-center text-3xl text-white shadow-lg
            group-hover:shadow-cyan-400/50 transition-all duration-500
            border-2 border-cyan-400/30 group-hover:border-cyan-400"
        >
          {icon}
        </div>
        
        {/* Content */}
        <div className={contentClasses}>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <TypewriterText 
                text={phase}
                className="text-cyan-400 font-audiowide whitespace-nowrap text-lg sm:text-xl
                  drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]"
                delay={0.3 + index * 0.1}
              />
              <div className="flex-grow h-0.5 bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600" />
            </div>
            <TypewriterText 
              text={title}
              className="text-xl sm:text-2xl font-audiowide text-cyan-400 mb-4
                drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]"
              delay={0.4 + index * 0.1}
            />
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-300 font-orbitron">
                  <span className="text-pink-500 mt-1">⬢</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Roadmap: React.FC = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "The Heist Setup",
      icon: <GiCarKey className="transform group-hover:rotate-12 transition-transform duration-300" />,
      items: [
        "Website Launch & Social Media Presence",
        "Community Building & Marketing Campaign",
        "Smart Contract Audit & KYC",
        "Presale Launch on Major Platform"
      ]
    },
    {
      phase: "Phase 2",
      title: "The Grand Score",
      icon: <FaMoneyBillWave className="transform group-hover:scale-110 transition-transform duration-300" />,
      items: [
        "Token Launch on DEX",
        "CoinGecko & CMC Listings",
        "Marketing Partnerships",
        "Community Events & Competitions"
      ]
    },
    {
      phase: "Phase 3",
      title: "City Takeover",
      icon: <FaCity className="transform group-hover:-translate-y-1 transition-transform duration-300" />,
      items: [
        "CEX Listings",
        "NFT Collection Launch",
        "Staking Platform Development",
        "Expansion of Utility Ecosystem"
      ]
    },
    {
      phase: "Phase 4",
      title: "The Underground",
      icon: <FaGamepad className="transform group-hover:rotate-180 transition-transform duration-300" />,
      items: [
        "Play-to-Earn Game Development",
        "Cross-Chain Integration",
        "DAO Implementation",
        "Metaverse Integration Planning"
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="roadmap">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        {/* Title */}
        <motion.div 
          className="text-center mb-16 bg-black/80 backdrop-blur-md py-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <h2 className="text-4xl md:text-5xl font-audiowide text-transparent bg-clip-text 
            bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 mb-4">
            Roadmap
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* Phases */}
        <div className="space-y-16 max-w-4xl mx-auto overflow-x-hidden">
          {phases.map((phase, index) => (
            <RoadmapPhase
              key={index}
              phase={phase.phase}
              title={phase.title}
              items={phase.items}
              icon={phase.icon}
              alignment={index % 2 === 0 ? 'left' : 'right'}
              index={index}
            />
          ))}
        </div>

        {/* Decorative Lines */}
        <div className="absolute left-1/2 top-32 bottom-32 w-0.5 bg-gradient-to-b from-cyan-400/50 via-pink-500/50 to-purple-600/50
          hidden md:block" />
      </div>
    </section>
  );
};

export default Roadmap;
