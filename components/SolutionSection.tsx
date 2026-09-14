
import React from 'react';
import { Layers, PlayCircle, ShieldCheck } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solucao" className="py-16 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl font-display font-bold">
            Um painel estratégico onde seus serviços são <span className="text-neon">os protagonistas.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Em vez de explicar tudo no chat, você <span className="text-white font-medium">mostra</span>. A Vitrine Digital não é um site qualquer; é um funil de decisão visual criado especificamente para a estética automotiva.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            { icon: <Layers />, title: "Serviços Organizados", desc: "Separação lógica por categorias: Polimento, Higienização, Vitrificação." },
            { icon: <PlayCircle />, title: "Apresentação com Vídeos", desc: "Mostre o processo e o resultado final em segundos." },
            { icon: <ShieldCheck />, title: "Prova de Valor", desc: "O cliente percebe o profissionalismo antes de perguntar o preço." }
          ].map((item, i) => (
            <div key={i} className="p-6 glass border border-white/10 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-neon/10 border border-neon/20 rounded-xl flex items-center justify-center text-neon mx-auto md:mx-0">
                {item.icon}
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
