'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { motion } from 'framer-motion';

ChartJS.register(ArcElement, Tooltip, Legend);

const tokenomicsData = [
  { label: 'Liquidity Pool', value: 70, tokens: '700,000,000', color: '#00ffff' }, // cyan
  { label: 'Public Sale', value: 10, tokens: '100,000,000', color: '#ff1493' }, // pink
  { label: 'Marketing & Community', value: 7, tokens: '70,000,000', color: '#4b0082' }, // indigo
  { label: 'Staking Rewards', value: 6, tokens: '60,000,000', color: '#9400d3' }, // purple
  { label: 'Team (Vested)', value: 3, tokens: '30,000,000', color: '#7b68ee' }, // medium slate blue
  { label: 'Reserve Fund', value: 2, tokens: '20,000,000', color: '#00ced1' }, // dark turquoise
  { label: 'Airdrops', value: 2, tokens: '20,000,000', color: '#FF10F0' }, // medium slate blue
];

const data = {
  labels: tokenomicsData.map(item => item.label),
  datasets: [
    {
      data: tokenomicsData.map(item => item.value),
      backgroundColor: tokenomicsData.map(item => item.color),
      borderColor: tokenomicsData.map(() => '#000'),
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          const label = context.label || '';
          const value = context.parsed || 0;
          const tokens = tokenomicsData[context.dataIndex].tokens;
          return `${label}: ${value}% (${tokens} tokens)`;
        }
      },
      titleFont: {
        family: 'Orbitron',
      },
      bodyFont: {
        family: 'Orbitron',
      },
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: '#00ffff',
      borderWidth: 1,
      padding: 12,
      displayColors: true,
      bodyColor: '#fff',
    }
  },
};

const TokenomicsItem = ({ item, index }: { item: typeof tokenomicsData[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-center gap-3 group"
  >
    <div 
      className="w-4 h-4 rounded-full" 
      style={{ backgroundColor: item.color }}
    />
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <p className="font-audiowide text-base sm:text-lg text-[#00FFFF] group-hover:text-[#FF007F] transition-colors
          drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
          {item.label}
        </p>
        <p className="text-[#00FFFF] font-orbitron text-base sm:text-lg
          drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
          {item.value}%
        </p>
      </div>
      <p className="font-orbitron text-sm text-gray-300">
        {item.tokens} tokens
      </p>
    </div>
  </motion.div>
);

const Tokenomics = () => {
  return (
    <section className="relative py-20" id="tokenomics">
      <div className="container mx-auto px-4">
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
            Tokenomics
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 rounded-full opacity-20 blur-2xl" />
            <div className="relative z-10">
              <Doughnut data={data} options={options} />
            </div>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-4 bg-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-400/30
              hover:border-cyan-400 transition-all duration-500">
              {tokenomicsData.map((item, index) => (
                <TokenomicsItem key={item.label} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      </div>
    </section>
  );
};

export default Tokenomics;
