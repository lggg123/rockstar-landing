"use client"

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      {/* Hamburger Menu Button - Only visible on mobile */}
      <button 
        onClick={toggleMenu}
        className="md:hidden text-cyan-400 hover:text-pink-500 transition-colors duration-300 text-2xl"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul className={`${
        isOpen ? 'flex' : 'hidden'
      } md:flex flex-col md:flex-row gap-8 items-center absolute md:relative right-0 top-16 md:top-0 
        bg-black/90 md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none 
        border border-cyan-400/30 md:border-none backdrop-blur-lg md:backdrop-blur-none`}>
        <li>
          <Link href="/manifesto"
            className="font-audiowide text-lg text-cyan-400 relative group block
              transition-all duration-300 hover:text-pink-500
              px-4 py-2 border-2 border-cyan-400/30 hover:border-cyan-400 rounded-lg backdrop-blur-sm bg-black/20 hover:shadow-lg hover:shadow-cyan-400/20"
            onClick={() => setIsOpen(false)}
          >
            Criminal Empire
            <span className="absolute bottom-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-cyan-400/40 to-pink-500/40 blur-xl
              transition-opacity duration-300"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;