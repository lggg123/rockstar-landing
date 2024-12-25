'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

interface Section {
  id: string;
  title: string;
  content: string[];
  locked: boolean;
  type: 'mission' | 'intel' | 'assets' | 'security';
}

const sections: Section[] = [
  {
    id: 'mission',
    title: 'MISSION DIRECTIVE',
    content: [
      'OBJECTIVE: Establish digital dominance through ($ tiker to be announced) token.',
      'STATUS: Active deployment phase',
      'CLEARANCE: Level 5 - Top Secret',
      'Building a decentralized empire that will revolutionize the crypto landscape.',
      'Our mission is to create a token that embodies the spirit of street culture and financial freedom.'
    ],
    locked: false,
    type: 'mission'
  },
  {
    id: 'intel',
    title: 'INTELLIGENCE REPORT',
    content: [
      'MARKET ANALYSIS:',
      '- Current crypto landscape shows high potential for community-driven projects',
      '- Target demographic: Crypto enthusiasts, gamers, and street culture advocates',
      '- Competitive analysis reveals gap in authentic street culture representation',
      'STRATEGIC ADVANTAGE:',
      '- Unique positioning in the intersection of gaming and crypto',
      '- Strong community focus with emphasis on holder benefits',
      '- Revolutionary tokenomics model designed for sustainable growth'
    ],
    locked: true,
    type: 'intel'
  },
  {
    id: 'assets',
    title: 'ASSET ALLOCATION',
    content: [
      'TOTAL SUPPLY: 1,000,000,000 $ROCKSTAR',
      'DISTRIBUTION:',
      '- 70% Liquidity Pool',
      '- 10% Public Sale',
      '- 8% Staking Rewards',
      '- 7% Marketing & Community',
      '- 3% Team (Vested)',
      '- 2% Reserve Fund'
    ],
    locked: true,
    type: 'assets'
  },
  {
    id: 'security',
    title: 'SECURITY PROTOCOLS',
    content: [
      'SMART CONTRACT SECURITY:',
      '- Multi-layered audit system',
      '- Real-time monitoring',
      '- Anti-bot measures',
      'HOLDER PROTECTION:',
      '- Liquidity locked',
      '- Team tokens vested',
      '- Emergency response system'
    ],
    locked: true,
    type: 'security'
  }
];

const CriminalEmpire = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    '> Initializing secure connection...',
    '> Accessing Criminal Empire database...',
    '> Decrypting files...',
    '> Type "help" for available commands'
  ]);
  const [unlockedSections, setUnlockedSections] = useState<string[]>(['mission']);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    const newLines = [...terminalLines, `> ${command}`];
    
    if (command.toLowerCase() === 'help') {
      newLines.push(
        '> Available commands:',
        '  - sections         : List all available sections',
        '  - unlock <section> : Unlock a specific section',
        '  - help            : Show this help message',
        '  - clear           : Clear terminal',
        '',
        '> Example: "unlock intel" to unlock the Intelligence Report'
      );
    } else if (command.toLowerCase() === 'sections') {
      newLines.push(
        '> Available sections:',
        ...sections.map(s => 
          `  - ${s.id.padEnd(8)} : ${s.title}${unlockedSections.includes(s.id) ? ' [UNLOCKED]' : ' [LOCKED]'}`
        )
      );
    } else if (command.toLowerCase() === 'clear') {
      setTerminalLines([]);
      return;
    } else if (command.toLowerCase().startsWith('unlock')) {
      const section = command.split(' ')[1];
      if (!section) {
        newLines.push(
          '> Error: Missing section name',
          '> Use "sections" to see available sections',
          '> Example: unlock intel'
        );
      } else if (sections.find(s => s.id === section)) {
        if (unlockedSections.includes(section)) {
          newLines.push(`> Section "${section}" is already unlocked`);
        } else {
          unlockSection(section);
          newLines.push(
            `> Attempting to unlock ${section}...`,
            '> Decrypting security protocols...',
            '> Bypassing firewalls...',
            `> Successfully unlocked ${section.toUpperCase()}`
          );
        }
      } else {
        newLines.push(
          '> Error: Invalid section name',
          '> Use "sections" to see available sections'
        );
      }
    } else {
      newLines.push(
        '> Unknown command',
        '> Type "help" for available commands'
      );
    }
    
    setTerminalLines(newLines);
  };

  const unlockSection = (sectionId: string) => {
    if (!unlockedSections.includes(sectionId)) {
      setUnlockedSections([...unlockedSections, sectionId]);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  return (
    <section className="py-20 relative overflow-hidden" id="manifesto">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      
      <div className="container mx-auto px-4 relative">
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            opacity: { duration: 1 }
          }}
        >
          <h2 className="text-4xl md:text-5xl font-audiowide text-transparent bg-clip-text 
            bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 mb-4">
            Criminal Empire Manifesto
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Custom Terminal Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              opacity: { duration: 1 }
            }}
            className="bg-black/60 backdrop-blur-sm p-4 rounded-xl border-2 border-cyan-400/30
              hover:border-cyan-400 transition-all duration-500"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="bg-black rounded-lg p-2 h-[400px] font-mono text-sm">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-cyan-400/30">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-cyan-400 ml-2">ROCKSTAR TERMINAL</span>
              </div>
              
              {/* Terminal Output */}
              <div ref={terminalRef} className="h-[320px] overflow-y-auto mb-2 text-gray-300">
                {terminalLines.map((line, index) => (
                  <div key={index} className="mb-1">
                    {line}
                  </div>
                ))}
              </div>
              
              {/* Terminal Input */}
              <div className="flex items-center gap-2 text-cyan-400">
                <span>{'>'}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputValue.trim()) {
                      handleCommand(inputValue.trim());
                      setInputValue('');
                    }
                  }}
                  className="bg-transparent flex-1 outline-none border-none text-cyan-400 placeholder-cyan-400/50"
                  placeholder="Type a command..."
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              opacity: { duration: 1 },
              delay: 0.2
            }}
            className="space-y-6"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: unlockedSections.includes(section.id) ? 1 : 0.5,
                  y: 0 
                }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1
                }}
                className={`bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 
                  ${unlockedSections.includes(section.id) 
                    ? 'border-cyan-400/30 hover:border-cyan-400' 
                    : 'border-gray-700/30 hover:border-gray-700'
                  } transition-all duration-500`}
              >
                <h3 className="text-xl font-audiowide text-[#00FFFF] mb-4 flex items-center gap-2">
                  {section.title}
                  {!unlockedSections.includes(section.id) && (
                    <span className="text-red-500 text-sm">LOCKED</span>
                  )}
                </h3>
                <AnimatePresence>
                  {unlockedSections.includes(section.id) ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 font-orbitron text-gray-300"
                    >
                      {section.content.map((line, index) => (
                        <p key={index} className="leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 font-mono"
                    >
                      <TypeAnimation
                        sequence={[
                          'ACCESS DENIED - CLICK TO HACK',
                          1000,
                          'SECURITY LEVEL: MAXIMUM',
                          1000,
                        ]}
                        repeat={Infinity}
                        style={{ fontSize: '14px' }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CriminalEmpire;
