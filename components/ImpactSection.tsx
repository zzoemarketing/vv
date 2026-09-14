
import React from 'react';
import { Zap, Target, TrendingUp, Clock3, UserCheck } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const items = [
    { icon: <Clock3 />, text: "Menos perguntas repetitivas no chat." },
    { icon: <Zap />, text: "Atendimento mais rápido e eficiente." },
    { icon: <UserCheck />, text: "Clientes mais qualificados e prontos para pagar." },
    { icon: <Target />, text: "Aumento real do valor percebido." },
    { icon: <TrendingUp />, text: "Mais tempo para focar na operação lucrativa." }
  ];

  return (
    <section className="py-12 bg-neon/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-display font-bold">O que muda na sua rotina.</h2>
              <p className="text-gray-400 text-base">
                Não é sobre trabalhar mais. É sobre trabalhar com uma estrutura que faz o trabalho pesado por você.
              </p>
              
              <div className="grid gap-3">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="p-2 bg-neon/10 rounded-lg text-neon group-hover:bg-neon group-hover:text-black transition-all">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                    </div>
                    <span className="text-gray-300 font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="text-center">
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-1">Mentalidade</p>
                <blockquote className="text-xl font-display font-bold italic leading-tight">
                  "Isso não é uma ferramenta. É a estrutura que eu deveria ter há muito tempo."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
