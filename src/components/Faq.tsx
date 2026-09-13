/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "Onde fazer pilates clínico para coluna no Gama?",
    answer: "No Equilíbrio Studio, na Ponte Alta Norte (Gama - DF). Focado na reabilitação de dor na coluna, hérnia de disco e postura, com acompanhamento fisioterapêutico individualizado.",
    category: "Coluna & Reabilitação"
  },
  {
    question: "Qual o endereço do estúdio no Gama?",
    answer: "Setor Habitacional Ponte de Terra, Loja 07 — Ponte Alta Norte, Gama (DF). Espaço acolhedor e com estacionamento acessível.",
    category: "Localização"
  },
  {
    question: "Vocês atendem gestantes e terceira idade (60+)?",
    answer: "Sim! Temos aulas dedicadas ao pilates gestacional (preparação para o parto e alívio lombar) e pilates para idosos (equilíbrio, força e prevenção de quedas).",
    category: "Gestantes & 60+"
  },
  {
    question: "Como agendar uma avaliação ou aula?",
    answer: "O agendamento é rápido diretamente pelo WhatsApp no (61) 98361-4547 ou pelo formulário de contato do site.",
    category: "Agendamentos"
  },
  {
    question: "Qual a diferença do pilates clínico para o comum?",
    answer: "O pilates clínico é conduzido por fisioterapeutas com foco terapêutico na sua biomecânica, alívio de lesões e exercícios 100% sob medida.",
    category: "Metodologia Clínica"
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="w-full bg-[#FAF8F5] py-16 md:py-24 border-b border-[#1A1814]/10 relative text-[#1A1814] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-14 gap-2">
          <span className="label-eyebrow tracking-[0.2em] text-[0.7rem] font-semibold text-[#C85E0E] uppercase">
            Dúvidas Frequentes
          </span>
          <AnimatedTitle className="text-2xl sm:text-3xl md:text-4xl text-[#1A1814] italic font-light leading-snug tracking-tight max-w-xl">
            Respostas diretas <br />
            <span className="font-sans not-italic text-[#1A1814]/90 font-light">para o seu bem-estar no Gama</span>
          </AnimatedTitle>
          <p className="font-interface text-xs sm:text-sm md:text-base leading-relaxed text-[#5A544F] font-normal max-w-lg mt-1">
            Tire suas principais dúvidas sobre nosso atendimento de Pilates Clínico e Fisioterapia na Ponte Alta Norte (Gama - DF).
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white rounded-xl sm:rounded-2xl border border-[#1A1814]/10 overflow-hidden shadow-[0_2px_12px_rgba(26,24,20,0.03)] transition-colors duration-200 hover:border-[#C85E0E]/40"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 min-w-0 pr-1">
                    <span className="inline-block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#C85E0E] bg-[#C85E0E]/10 px-2 py-0.5 rounded mb-1.5">
                      {faq.category}
                    </span>
                    <h3 className="font-interface text-sm sm:text-base md:text-lg font-semibold text-[#1A1814] leading-snug break-normal">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-1.5 sm:p-2 rounded-full bg-[#FAF8F5] text-[#1A1814] shrink-0 transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180 bg-[#C85E0E] text-white' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5 border-t border-[#1A1814]/5 text-[#4D4844] font-interface text-xs sm:text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Local Map Link Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#1A1814] text-white flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-sm border border-[#1A1814]">
          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#C85E0E]">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-interface text-xs sm:text-sm md:text-base font-semibold">
                Estúdio no Gama (Ponte Alta Norte)
              </h4>
              <p className="font-interface text-[11px] sm:text-xs text-white/75 mt-0.5">
                Setor Hab. Ponte de Terra, Loja 07 — Gama / DF
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5561983614547?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#C85E0E] text-white font-interface text-xs font-semibold uppercase tracking-wider hover:bg-[#b0520b] transition-colors duration-300 shrink-0"
          >
            Falar pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
