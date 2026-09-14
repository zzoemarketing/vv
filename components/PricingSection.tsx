
import React from 'react';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  const whatsappNumber = "5541992065712";
  
  // Utilizando encodeURIComponent para garantir que caracteres especiais não quebrem o link
  const messageEssencial = encodeURIComponent("Quero adquirir o Plano Essencial da Vitrine Digital");
  const messageProfissional = encodeURIComponent("Quero adquirir o Plano Profissional da Vitrine Digital");
  
  const linkEssencial = `https://wa.me/${whatsappNumber}?text=${messageEssencial}`;
  const linkProfissional = `https://wa.me/${whatsappNumber}?text=${messageProfissional}`;

  return (
    <section id="planos" className="py-16 bg-[#0d0d0d] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">Invista na sua estrutura.</h2>
          <p className="text-gray-400 text-base">Escolha o plano que melhor se adapta ao seu momento.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Plan 1 - Essencial */}
          <div className="glass p-8 rounded-[2.5rem] border border-white/10 flex flex-col hover:border-white/20 transition-all group">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1 text-white">Plano Essencial</h3>
              <p className="text-gray-500 text-xs">Você cria sua própria Vitrine</p>
            </div>
            
            <div className="mb-6">
              <span className="text-3xl font-display font-extrabold text-white">R$597</span>
              <span className="text-gray-500 text-sm"> / ano</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Acesso total à plataforma",
                "Estrutura 100% pronta",
                "Capas profissionais inclusas",
                "Suporte na criação",
                "Ideal para quem quer autonomia"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-gray-300">
                  <Check className="w-4 h-4 text-neon" /> {item}
                </li>
              ))}
            </ul>

            <a 
              href={linkEssencial}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all uppercase text-xs tracking-wide text-center text-white"
            >
              Quero o Essencial
            </a>
          </div>

          {/* Plan 2 - Profissional */}
          <div className="bg-neon/10 p-8 rounded-[2.5rem] border-2 border-neon/30 flex flex-col relative shadow-neon overflow-hidden">
            <div className="absolute top-0 right-0 bg-neon text-black text-[9px] font-black uppercase px-5 py-1.5 rotate-45 translate-x-4 translate-y-1">
              Recomendado
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1 text-white">Plano Profissional</h3>
              <p className="text-neon/70 text-xs">Nós entregamos tudo pronto</p>
            </div>
            
            <div className="mb-6">
              <span className="text-3xl font-display font-extrabold text-white">R$997</span>
              <span className="text-gray-500 text-sm"> / ano</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Tudo do plano Essencial",
                "Vitrine criada pela nossa equipe",
                "Configuração profissional imediata",
                "Foco total na agilidade",
                "Pronto para começar a usar"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-medium text-white">
                  <Check className="w-4 h-4 text-neon" /> {item}
                </li>
              ))}
            </ul>

            <a 
              href={linkProfissional}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-neon text-black font-bold shadow-lg hover:scale-[1.02] transition-all uppercase text-xs tracking-wide text-center"
            >
              Quero o Profissional
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
