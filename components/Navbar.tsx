
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neon rounded flex items-center justify-center">
            <span className="text-black font-black text-sm">VD</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            VITRINE<span className="text-neon">DIGITAL</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#solucao" className="hover:text-neon transition-colors">A Solução</a>
          <a href="#demo" className="hover:text-neon transition-colors font-bold text-white">Demonstração</a>
          <a href="#como-funciona" className="hover:text-neon transition-colors">Como funciona</a>
          <a href="#planos" className="hover:text-neon transition-colors">Planos</a>
        </div>

        <a 
          href="#planos" 
          className="bg-neon text-black px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-neon"
        >
          Começar agora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
