const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      <ul className="flex gap-8 items-center">
        <li>
          <a href="#home" 
            className="font-audiowide text-lg text-cyan-400 relative group
              transition-all duration-300 hover:text-pink-500
              hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500
              group-hover:w-full transition-all duration-300"></span>
            <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-cyan-400/40 to-pink-500/40 blur-xl
              transition-opacity duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#tokenomics" 
            className="font-audiowide text-lg text-cyan-400 relative group
              transition-all duration-300 hover:text-pink-500
              hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
            Tokenomics
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500
              group-hover:w-full transition-all duration-300"></span>
            <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-cyan-400/40 to-pink-500/40 blur-xl
              transition-opacity duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#roadmap" 
            className="font-audiowide text-lg text-cyan-400 relative group
              transition-all duration-300 hover:text-pink-500
              hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
            Roadmap
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500
              group-hover:w-full transition-all duration-300"></span>
            <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-cyan-400/40 to-pink-500/40 blur-xl
              transition-opacity duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#whitepaper" 
            className="font-audiowide text-lg text-cyan-400 relative group
              transition-all duration-300 hover:text-pink-500
              hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
            Whitepaper
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500
              group-hover:w-full transition-all duration-300"></span>
            <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-cyan-400/40 to-pink-500/40 blur-xl
              transition-opacity duration-300"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;