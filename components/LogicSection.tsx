
import React from 'react';

const LogicSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block px-4 py-1 bg-neon/10 border border-neon/20 rounded-full text-neon text-xs font-bold uppercase tracking-widest">
          O Cliente Mudou
        </div>
        
        <h2 className="text-3xl md:text-5xl font-display font-extrabold leading-tight">
          Hoje o cliente quer ver antes de conversar. <span className="text-gray-400 italic">Simples assim.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
          <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h3 className="text-neon font-bold text-xl mb-3">Atrito Desnecessário</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Quem ainda vende apenas explicando no WhatsApp cria uma barreira invisível. O cliente sente que está "perdendo tempo" ou sendo "pressionado" antes mesmo de entender o valor.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-neon/30 bg-neon/5 shadow-neon">
            <h3 className="text-neon font-bold text-xl mb-3">Decisão Facilitada</h3>
            <p className="text-gray-100 leading-relaxed font-medium text-sm">
              A Vitrine Digital permite que ele entenda sozinho, sinta segurança e tome a decisão no tempo dele. Quando ele chama, já está 90% pronto para fechar o agendamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogicSection;
