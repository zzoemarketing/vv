
import React from 'react';
import { ChevronDown } from 'lucide-react';

const FaqSection: React.FC = () => {
  const faqs = [
    { q: "Preciso saber mexer com tecnologia?", a: "Não. A estrutura é extremamente simples e intuitiva. Além disso, você conta com suporte especializado para te guiar." },
    { q: "Funciona em qualquer cidade?", a: "Sim. A Vitrine é digital e totalmente adaptável para negócios locais, independente do tamanho da sua cidade." },
    { q: "É só para estética automotiva?", a: "Sim. Cada detalhe, desde o visual até o funil de vendas, foi pensado exclusivamente para o mercado de estética automotiva." },
    { q: "Quanto tempo demora para ficar pronta?", a: "No plano profissional, nossa equipe entrega pronta para você. No essencial, a criação é rápida e guiada, levando poucos minutos." }
  ];

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-display font-bold mb-8 text-center">Perguntas Frequentes.</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group glass rounded-xl border border-white/5 open:border-neon/30 transition-all">
              <summary className="p-5 flex items-center justify-between cursor-pointer list-none">
                <span className="font-bold text-base">{faq.q}</span>
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform text-neon" />
              </summary>
              <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
