
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-3">
             <CheckCircle2 className="text-neon" /> Isso é para você se:
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-neon mt-2 flex-shrink-0"></span>
               <span>Quer profissionalizar o atendimento e ser visto como autoridade.</span>
            </li>
            <li className="flex gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-neon mt-2 flex-shrink-0"></span>
               <span>Quer parar de depender de explicações manuais no WhatsApp.</span>
            </li>
            <li className="flex gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-neon mt-2 flex-shrink-0"></span>
               <span>Busca que o cliente entenda seu valor antes de pedir o preço.</span>
            </li>
            <li className="flex gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-neon mt-2 flex-shrink-0"></span>
               <span>Deseja vender serviços de alto ticket com menos esforço.</span>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-[2rem] bg-black/40 border border-white/5 space-y-6 opacity-60 grayscale hover:grayscale-0 transition-all">
          <h3 className="text-xl font-bold flex items-center gap-3">
             <XCircle className="text-gray-500" /> Não é para você se:
          </h3>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li className="flex gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0"></span>
               <span>Prefere continuar improvisando e atendendo de qualquer jeito.</span>
            </li>
            <li className="flex gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0"></span>
               <span>Cobra barato e quer apenas disputar por preço no mercado.</span>
            </li>
            <li className="flex gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0"></span>
               <span>Não está disposto a investir na estrutura do seu próprio negócio.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
