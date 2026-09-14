
import React from 'react';
import { Check } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-12 px-4 relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold leading-tight mb-4">
          Pare de explicar tudo no WhatsApp usando uma <span className="text-neon">Vitrine Digital</span> que vende por você.
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
          Seus clientes entram, veem seus serviços organizados, assistem aos vídeos e escolhem o que precisam — antes mesmo de falar com você.
        </p>

        {/* Image */}
        <div className="relative mb-8 flex justify-center">
          <img 
            src="https://i.postimg.cc/SKKHHQrx/gere-outra-no-formato-1080-x-1920-sem-fundo-em-png.png" 
            alt="Vitrine Digital Mockup" 
            className="max-w-full h-auto max-h-[500px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* CTA Button */}
        <div className="space-y-4 flex flex-col items-center">
          <button 
            onClick={scrollToPricing}
            className="w-full sm:w-auto bg-neon text-black px-12 py-5 rounded-2xl font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-neon uppercase tracking-wide"
          >
            Criar minha Vitrine Digital
          </button>
          
          {/* Microcopy */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
             <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon"></span> Plano anual
            </p>
             <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon"></span> Suporte incluso
            </p>
             <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon"></span> Estrutura profissional
            </p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {[
            "Serviços organizados",
            "Vídeos que convencem",
            "Jornada guiada",
            "Atendimento qualificado"
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-3 p-3 glass rounded-xl border border-white/5">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-neon" />
              </div>
              <span className="text-gray-300 text-[11px] font-bold uppercase tracking-tight">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
