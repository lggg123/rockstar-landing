import { BiWallet } from 'react-icons/bi';
import { FaCoins, FaRocket } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';

interface InstructionalCardProps {
  title: string;
  step: string;
  bgClass: string;
  glowColor: 'glow-cyan' | 'glow-pink' | 'glow-purple';
  icon: React.ReactNode;
}

const InstructionalCard = ({ title, step, bgClass, glowColor, icon }: InstructionalCardProps) => (
  <div className="relative w-full aspect-square">
    <div className={`absolute inset-0 ${bgClass} bg-cover bg-center bg-no-repeat rounded-xl`} />
    <div className={`absolute inset-0 rounded-xl border-[6px] border-black ${glowColor} 
      hover:shadow-${glowColor}/80 transition-all duration-300 hover:scale-105`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70">
        <div className="h-full flex flex-col items-center justify-center p-4 text-center">
          {/* Icon */}
          <div className="text-6xl mb-4 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
            {icon}
          </div>
          {/* Step Number */}
          <h3 className="text-xl font-audiowide font-bold text-pink-500 mb-2 
            drop-shadow-[0_0_10px_rgba(255,0,127,0.5)]">
            {step}
          </h3>
          {/* Title with background for better readability */}
          <div className="bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
            <p className="text-cyan-400 font-orbitron tracking-wide 
              drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Instructions = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
    <InstructionalCard 
      step="Step 1" 
      title="Create a crypto wallet." 
      bgClass="bg-wallet-bg"
      glowColor="glow-cyan"
      icon={<BiWallet />}
    />
    <InstructionalCard 
      step="Step 2" 
      title="Buy SUI." 
      bgClass="bg-sui-bg"
      glowColor="glow-cyan"
      icon={<FaCoins />}
    />
    <InstructionalCard 
      step="Step 3" 
      title="Connect to our DApp." 
      bgClass="bg-connect-bg"
      glowColor="glow-purple"
      icon={<HiOutlineLink />}
    />
    <InstructionalCard 
      step="Step 4" 
      title="Purchase $Rockstar." 
      bgClass="bg-purchase-bg"
      glowColor="glow-cyan"
      icon={<FaRocket />}
    />
  </div>
);

export default Instructions;