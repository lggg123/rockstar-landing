'use client';

import { GiCarKey, GiPoliceOfficerHead, GiPoliceCar, GiHandcuffs } from 'react-icons/gi';
import { FaCity, FaUserSecret, FaMoneyBillWave, FaGamepad } from 'react-icons/fa';
import { MdCasino, MdSecurity } from 'react-icons/md';
import { motion } from 'framer-motion';
import React from 'react';

interface RoadmapPhaseProps {
  phase: string;
  title: string;
  items: string[];
  icon: React.ReactNode;
  alignment: 'left' | 'right';
}

const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ phase, title, items, icon, alignment }) => {
  const containerClasses = `flex ${alignment === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-4 group`;
  const contentClasses = `w-full md:w-[calc(50%-2rem)] p-6 bg-black/40 rounded-xl border-2 border-cyan-400/30 
    backdrop-blur-sm transition-all duration-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20
    ${alignment === 'left' ? 'ml-auto' : 'mr-auto'}`;

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: alignment === 'left' ? 50 : -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const listItemVariants = {
    hidden: { 
      opacity: 0, 
      x: alignment === 'left' ? 20 : -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      }
    }
  };
  
  return (
    <div className={containerClasses}>
      {/* Icon Container */}
      <motion.div 
        className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
          items-center justify-center text-3xl text-white shadow-lg
          group-hover:shadow-cyan-400/50 transition-all duration-500
          border-2 border-cyan-400/30 group-hover:border-cyan-400"
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {icon}
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className={contentClasses}
        variants={slideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="space-y-4">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-pink-500 font-audiowide whitespace-nowrap">{phase}</span>
            <div className="flex-grow h-0.5 bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600"></div>
          </motion.div>
          <motion.h3 
            className="text-xl font-audiowide text-cyan-400 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {title}
          </motion.h3>
          <motion.ul 
            className="space-y-2"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {items.map((item, index) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-2 text-gray-300 font-orbitron"
                variants={listItemVariants}
              >
                <span className="text-pink-500 mt-1">⬢</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
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
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-audiowide text-transparent bg-clip-text 
            bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 mb-4">
            Roadmap
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </motion.div>

        {/* Phases */}
        <div className="space-y-16 max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <RoadmapPhase
              key={index}
              phase={phase.phase}
              title={phase.title}
              items={phase.items}
              icon={phase.icon}
              alignment={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>

        {/* Decorative Lines */}
        <motion.div 
          className="absolute left-1/2 top-32 bottom-32 w-0.5 bg-gradient-to-b from-cyan-400/50 via-pink-500/50 to-purple-600/50
            hidden md:block"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        />
      </div>
    </section>
  );
};

export default Roadmap;
