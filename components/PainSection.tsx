
import React from 'react';
import { Clock, MessageSquare, AlertCircle, XCircle } from 'lucide-react';

const PainSection: React.FC = () => {
  const pains = [
    {
      icon: <MessageSquare className="w-6 h-6 text-red-500" />,
      title: "WhatsApp Sobrecarregado",
      text: "O cliente chama e pergunta tudo, forçando você a explicar o básico repetidas vezes."
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "Ciclo Infinito de Explicação",
      text: "Manda áudio, foto, texto... e o cliente simplesmente desaparece no final."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-red-500" />,
      title: "Falta de Valor Percebido",
      text: "Sem uma estrutura visual, o cliente foca apenas no preço e não entende seu diferencial."
    },
    {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      title: "Perda de Tempo Lucrativo",
      text: "Você gasta horas no chat que deveriam ser usadas executando serviços de alto ticket."
    }
  ];

  return (
    <section className="py-16 bg-[#0d0d0d] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            O problema não é o seu serviço.
          </h2>
          <p className="text-xl text-gray-400">
            Se você é dono de estética automotiva, provavelmente vive preso em uma rotina de atendimento manual cansativa que mata sua produtividade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, index) => (
            <div key={index} className="p-6 rounded-2xl glass hover:bg-white/5 transition-all group">
              <div className="mb-4 p-3 bg-red-500/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{pain.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
