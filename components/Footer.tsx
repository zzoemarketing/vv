
import React from 'react';

const Footer: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-black border-t border-white/5 text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold">A decisão inevitável.</h2>
          <p className="text-gray-400 text-base">
            Você pode continuar explicando tudo no WhatsApp ou pode deixar sua estrutura fazer isso por você.
          </p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={scrollToPricing}
            className="bg-neon text-black px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-neon uppercase"
          >
            Criar minha Vitrine Digital agora
          </button>
          <div className="flex flex-wrap justify-center gap-6 text-[9px] uppercase tracking-widest font-bold text-gray-500">
             <span>Acesso Imediato</span>
             <span>Suporte Incluso</span>
             <span>Plano Anual</span>
          </div>
        </div>

        <div className="pt-10 flex flex-col items-center gap-3 opacity-30">
           <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black font-black text-[10px]">VD</span>
            </div>
            <span className="font-display font-bold text-sm tracking-tight">
              VITRINE DIGITAL
            </span>
          </div>
          <p className="text-[10px]">© 2024 Vitrine Digital para Estética Automotiva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
