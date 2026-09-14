
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Luzes de fundo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-neon/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/20 text-neon text-[10px] font-black uppercase tracking-[0.2em]">
            <Play className="w-3 h-3 fill-neon" /> Tour pela plataforma
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Veja como vamos <span className="text-neon">transformar seu atendimento.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Descubra como a Vitrine Digital organiza seu negócio em poucos minutos.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon/40 to-emerald-500/40 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-700"></div>
            
            <div className="relative aspect-[9/16] bg-[#111] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
              <iframe 
                id="panda-9f140bbb-f806-420d-8f38-4d7ee22a2be3" 
                src="https://player-vz-11d9ac60-c8b.tv.pandavideo.com.br/embed/?v=9f140bbb-f806-420d-8f38-4d7ee22a2be3" 
                style={{ border: 'none', width: '100%', height: '100%' }} 
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" 
                allowFullScreen
                title="Apresentação Vitrine Digital"
              ></iframe>
            </div>

            <div className="absolute -top-4 -right-4 bg-white text-black px-3 py-1.5 rounded-lg shadow-xl hidden md:block z-20">
              <p className="text-[9px] font-black uppercase leading-tight tracking-tighter">Explicação Completa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
