'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXTwitter, FaTelegram, FaDiscord, FaLock, FaUsers, FaDiamond } from 'react-icons/fa6';

const WantedFooter = () => {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const badges = [
    {
      id: 'security',
      icon: <FaLock className="text-2xl" />,
      title: 'Security First',
      description: 'Audited & KYC Verified'
    },
    {
      id: 'community',
      icon: <FaUsers className="text-2xl" />,
      title: 'Community Driven',
      description: 'Built by Degens, for Degens'
    },
    {
      id: 'value',
      icon: <FaDiamond className="text-2xl" />,
      title: 'Diamond Hands',
      description: 'Long-term Value Creation'
    }
  ];

  // Easter egg sequence
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  const [konamiIndex, setKonamiIndex] = useState(0);

  React.useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === konami[konamiIndex]) {
        if (konamiIndex === konami.length - 1) {
          setShowEasterEgg(true);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(konamiIndex + 1);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [konamiIndex]);

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("/gta_back.png")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Wanted Poster Container */}
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#FFE5B4]/10 backdrop-blur-sm p-8 rounded-lg
            border-4 border-[#8B4513]/50 relative"
        >
          {/* Torn Paper Effect */}
          <div className="absolute top-0 left-0 w-full h-8 bg-[#FFE5B4]/10 
            [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]" />
          
          {/* Wanted Text with Glitch Effect */}
          <div className="text-center mb-8 relative group">
            <h2 className="font-audiowide text-4xl md:text-5xl mb-2 text-[#FFD700]
              drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] relative">
              WANTED
              <span className="absolute inset-0 text-pink-500 opacity-0 group-hover:opacity-100
                translate-x-[1px] translate-y-[1px] transition-opacity duration-100">WANTED</span>
              <span className="absolute inset-0 text-cyan-400 opacity-0 group-hover:opacity-100
                -translate-x-[1px] -translate-y-[1px] transition-opacity duration-100">WANTED</span>
            </h2>
            <p className="font-orbitron text-xl text-[#FFD700]/80">DEAD OR ALIVE</p>
          </div>

          {/* Reward Section with Counter */}
          <div className="text-center mb-8">
            <p className="font-audiowide text-2xl text-[#FFD700]">REWARD</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <motion.span 
                className="font-orbitron text-3xl text-[#FFD700]"
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => !showEasterEgg && setShowEasterEgg(true)}
              >
                $TBA
              </motion.span>
              <span className="font-orbitron text-xl text-[#FFD700]/80">TOKENS</span>
            </div>
          </div>

          {/* Badge Section */}
          <div className="flex justify-center gap-6 mb-8">
            {badges.map((badge) => (
              <motion.div
                key={badge.id}
                className="relative"
                onHoverStart={() => setHoveredBadge(badge.id)}
                onHoverEnd={() => setHoveredBadge(null)}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center
                  text-[#FFD700] border border-[#FFD700]/30">
                  {badge.icon}
                </div>
                <AnimatePresence>
                  {hoveredBadge === badge.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 bg-black/90 
                        backdrop-blur-sm p-3 rounded-lg border border-[#FFD700]/30 text-center z-10"
                    >
                      <p className="text-[#FFD700] font-audiowide text-sm mb-1">{badge.title}</p>
                      <p className="text-[#FFD700]/60 text-xs">{badge.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Social Links as "Last Seen At" with Hover Effects */}
          <div className="text-center mb-8">
            <p className="font-audiowide text-xl text-[#FFD700] mb-4">LAST SEEN AT</p>
            <div className="flex justify-center gap-8">
              {[
                { icon: FaXTwitter, label: 'Twitter', link: 'https://twitter.com' },
                { icon: FaTelegram, label: 'Telegram', link: 'https://t.me/+aavM_REWCCowNWE0' },
                { icon: FaDiscord, label: 'Discord', link: 'https://discord.com' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="relative group"
                >
                  <social.icon className="text-3xl text-[#FFD700] group-hover:text-pink-500 transition-colors" />
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#FFD700]/80
                      whitespace-nowrap"
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Warning Text with Typing Effect */}
          <div className="text-center mb-8">
            <motion.p 
              className="font-orbitron text-sm text-[#FFD700]/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              CAUTION: This individual is considered extremely bullish and may cause severe FOMO
            </motion.p>
          </div>

          {/* Interactive Elements */}
          <AnimatePresence>
            {showEasterEgg && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-black/90 backdrop-blur-sm p-6 rounded-lg border-2 border-pink-500
                  text-center z-20"
              >
                <p className="text-pink-500 font-audiowide mb-2">🎮 CHEAT CODE ACTIVATED!</p>
                <p className="text-cyan-400 font-orbitron text-sm">You found the secret!</p>
                <button
                  onClick={() => setShowEasterEgg(false)}
                  className="mt-4 px-4 py-2 bg-pink-500/20 text-pink-500 rounded-full text-sm
                    hover:bg-pink-500/30 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stamp Effect */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: -15 }}
            className="absolute -right-12 top-1/2 -translate-y-1/2 -rotate-12
              w-32 h-32 border-4 border-red-500/50 rounded-full flex items-center justify-center
              text-red-500/50 font-bold text-xs font-audiowide p-4 text-center
              [mask-image:linear-gradient(45deg,transparent_40%,black_60%)]
              cursor-pointer"
          >
            CERTIFIED DEGEN APPROVED
          </motion.div>

          {/* Copyright with Hover Effect */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[#FFD700]/40 text-xs font-orbitron
            hover:text-[#FFD700] transition-colors cursor-default">
            &copy; 2024 All rights reserved.
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r 
        from-transparent via-[#FFD700]/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r 
        from-transparent via-[#FFD700]/30 to-transparent" />
    </footer>
  );
};

export default WantedFooter;
