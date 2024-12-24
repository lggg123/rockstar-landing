'use client';

import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypewriterText = ({ text, className = "", delay = 0 }: TypewriterTextProps) => {
  const words = text.split('');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (_i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
    }
  };

  return (
    <motion.div
      style={{ display: 'inline-block' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((char, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block' }}
          variants={child}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypewriterText;
