/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MapPin, Sparkles } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "Onde fazer pilates clínico para dor nas costas e hérnia de disco no Gama DF?",
    answer: "No Equilíbrio Studio Pilates, localizado na Ponte Alta Norte (Gama - DF). O estúdio é especializado em pilates clínico e fisioterapia para reabilitação da coluna, hérnia de disco e lombalgia, com acompanhamento individualizado da fisioterapeuta Dra. Priscilla.",
    category: "Pilates Clínico & Coluna"
  },
  {
    question: "Qual o endereço do Equilíbrio Studio Pilates no Gama?",
    answer: "O estúdio fica no Setor Habitacional Ponte de Terra, Lj 07 - Ponte Alta Norte (Gama), Brasília - DF, CEP 72427-010. Atende alunos e pacientes do Gama, Ponte Alta e regiões próximas do DF.",
    category: "Localização & Acesso"
  },
  {
    question: "O Equilíbrio Studio Pilates oferece pilates para gestantes e idosos no Gama?",
    answer: "Sim. O estúdio possui programas personalizados de pilates gestacional para preparação do parto e alívio de dores pélvicas, além de pilates para terceira idade (60+) focado em equilíbrio, fortalecimento muscular e prevenção de quedas.",
    category: "Atendimento Especializado"
  },
  {
    question: "Como agendar uma avaliação fisioterapêutica ou aula experimental de pilates no Gama?",
    answer: "O agendamento pode ser feito diretamente pelo WhatsApp (61) 98361-4547 ou pelo site oficial equilibriostudiopilates.com.br.",
    category: "Agendamentos"
  },
  {
    question: "Qual o diferencial do pilates clínico em relação ao pilates fitness comum?",
    answer: "O pilates clínico no Equilíbrio Studio é direcionado por fisioterapeutas habilitados, com foco na biomecânica da coluna, tratamento de dores e lesões articulares, com exercícios adaptados à anatomia de cada paciente.",
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
      className="w-full bg-[#FAF8F5] py-20 md:py-28 border-b border-[#1A1814]/10 relative text-[#1A1814] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 gap-3">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles size={14} className="text-[#C85E0E]" />
            <span className="label-eyebrow tracking-[0.25em] text-[0.68rem] font-bold text-[#C85E0E] uppercase">
              06 / PERGUNTAS FREQUENTES & GEO
            </span>
          </div>
          <AnimatedTitle className="text-display-md text-[#1A1814] italic font-light leading-[1.15] tracking-tight max-w-2xl">
            Respostas diretas <br />
            <span className="font-sans not-italic text-[#1A1814]/90 font-light">para o seu bem-estar no Gama</span>
          </AnimatedTitle>
          <p className="font-interface text-sm md:text-base leading-relaxed text-[#5A544F] font-normal max-w-xl mt-2">
            Tire suas dúvidas sobre nosso atendimento de Pilates Clínico e Fisioterapia na Ponte Alta Norte (Gama - DF).
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-[#1A1814]/10 overflow-hidden shadow-[0_4px_20px_rgba(26,24,20,0.03)] transition-colors duration-300 hover:border-[#C85E0E]/40"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C85E0E] bg-[#C85E0E]/10 px-2.5 py-1 rounded-md shrink-0 mt-0.5">
                      {faq.category}
                    </span>
                    <h3 className="font-interface text-base md:text-lg font-semibold text-[#1A1814] leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-full bg-[#FAF8F5] text-[#1A1814] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#C85E0E] text-white' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-[#1A1814]/5 text-[#4D4844] font-interface text-sm md:text-base leading-relaxed">
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
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0F2C41] to-[#1A1814] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#76DDEF]">
              <MapPin size={22} />
            </div>
            <div>
              <h4 className="font-interface text-sm md:text-base font-semibold">
                Visite nosso estúdio no Gama (Ponte Alta Norte)
              </h4>
              <p className="font-interface text-xs md:text-sm text-white/70 mt-0.5">
                Setor Habitacional Ponte de Terra, Lj 07 — Gama / Brasília-DF
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5561983614547?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#F69A4F] text-[#0B0B0A] font-interface text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300 shrink-0"
          >
            Falar pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
