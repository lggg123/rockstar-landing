import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'audiowide': ['Audiowide', 'cursive'],
      },
      backgroundImage: {
        'hero-bg': "url('/rockst_back.png')",
        'wallet-bg': "url('/card-backgrounds/wallet-bg.jpg')",
        'sui-bg': "url('/card-backgrounds/sui-bg.jpg')",
        'connect-bg': "url('/card-backgrounds/connect-bg.jpg')",
        'purchase-bg': "url('/card-backgrounds/purchase-bg.jpg')",
      },
      colors: {
        custom: {
          'pink': '#FF007F',
          'cyan': '#00FFFF',
          'purple': '#9400D3',
          'black': '#000000',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 15px theme(colors.custom.cyan)',
        'glow-pink': '0 0 15px theme(colors.custom.pink)',
        'glow-purple': '0 0 15px theme(colors.custom.purple)',
      },
    },
  },
  plugins: [],
} satisfies Config;
