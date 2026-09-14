
import React from 'react';
import { ExternalLink, Smartphone, MousePointer2 } from 'lucide-react';

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-16 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-block px-4 py-1 bg-neon/10 border border-neon/20 rounded-full text-neon text-xs font-bold uppercase tracking-widest">
            Experiência Mobile
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Navegue na Vitrine agora.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Teste agora a experiência vertical exata que seus clientes terão pelo Instagram.
          </p>
        </div>

        <div className="max-w-[400px] mx-auto">
          <div className="relative group">
            <div className="bg-[#1a1a1a] rounded-[3rem] border-[6px] border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500 hover:border-neon/30 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#222] rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-10 h-0.5 bg-white/5 rounded-full"></div>
              </div>

              <div className="bg-[#222] pt-7 pb-2 px-4 flex items-center justify-center border-b border-white/5">
                <div className="bg-black/60 px-4 py-0.5 rounded-full text-[9px] text-gray-500 font-medium w-full text-center truncate border border-white/5">
                  sennastudioautomotivo.lojaapp.com
                </div>
              </div>
              
              <div className="relative bg-white w-full aspect-[10/18] overflow-hidden">
                <iframe 
                  src="https://sennastudioautomotivo.lojaapp.com/" 
                  className="w-full h-full border-none"
                  title="Demonstração Vitrine Digital"
                  loading="lazy"
                  allow="fullscreen"
                ></iframe>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-[9px] font-black px-3 py-1.5 rounded-full border border-white/10 pointer-events-none flex items-center gap-2 opacity-80 uppercase tracking-widest">
                  <MousePointer2 className="w-3 h-3 text-neon" /> Role para navegar
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-6 bg-neon text-black px-4 py-3 rounded-xl shadow-2xl hidden lg:flex items-center gap-3 z-20">
              <Smartphone className="w-4 h-4" />
              <div>
                <p className="text-[10px] font-black uppercase leading-none">Mobile First</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
             <a 
              href="https://sennastudioautomotivo.lojaapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-neon transition-colors text-[11px] font-bold underline underline-offset-4 uppercase tracking-tighter"
            >
              Abrir em tela cheia <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
