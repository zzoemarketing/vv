
import React from 'react';

const JourneySection: React.FC = () => {
  const steps = [
    { num: "1", title: "O Clique", desc: "O cliente clica no link da sua bio ou anúncio." },
    { num: "2", title: "A Visualização", desc: "Ele navega pelos seus serviços organizados." },
    { num: "3", title: "A Educação", desc: "Assiste aos vídeos e entende o que o carro dele precisa." },
    { num: "4", title: "O Agendamento", desc: "Chama no WhatsApp já decidido e qualificado." }
  ];

  return (
    <section id="como-funciona" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Jornada sem atrito.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Elimine a confusão e as conversas longas. Substitua o improviso por um processo previsível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative p-6 glass rounded-2xl border border-white/5 hover:border-neon/20 transition-all">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-neon text-black font-black rounded-lg flex items-center justify-center text-lg shadow-neon">
                {step.num}
              </div>
              <h3 className="text-lg font-bold mt-2 mb-2">{step.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
