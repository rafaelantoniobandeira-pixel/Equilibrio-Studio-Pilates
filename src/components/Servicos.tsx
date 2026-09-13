/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

// Clean Specialties Data without icon overload
const specialties = [
  {
    id: 'pilates',
    num: '01',
    name: 'Pilates Clínico & Funcional',
    tagline: 'Precisão biomecânica e fortalecimento profundo.',
    description: 'Se você convive com dores constantes na coluna, hérnia de disco, postura desalinhada ou busca fortalecer a musculatura profunda sem impacto articular. Nossas turmas são reduzidas com instrução guiada por fisioterapeuta.',
    benefits: [
      { name: 'Alinhamento Postural', desc: 'Ajuste biomecânico preciso para descompressão da coluna e alívio de sobrecargas.' },
      { name: 'Fortalecimento do Core', desc: 'Estabilização ativa dos músculos profundos do abdômen, pelve e lombar.' },
      { name: 'Alívio de Dores Crônicas', desc: 'Exercícios graduais e adaptados à sua avaliação e eventuais limitações físicas.' },
      { name: 'Mobilidade Articular', desc: 'Recuperação gradual do movimento natural sem atrito ou desgaste articular.' }
    ],
    whatsappText: 'Olá! Gostaria de agendar uma avaliação de Pilates.',
    ctaText: 'Agendar avaliação de Pilates'
  },
  {
    id: 'fisioterapia',
    num: '02',
    name: 'Fisioterapia & Reabilitação',
    tagline: 'Ciência aplicada ao alívio de lesões e dores agudas.',
    description: 'Entendemos o quanto limitações físicas ou dores agudas paralisam o dia a dia. Oferecemos acompanhamento individual com raciocínio clínico para tratar a causa raiz do desconforto e devolver sua autonomia com segurança.',
    benefits: [
      { name: 'Diagnóstico Biomecânico', desc: 'Avaliação clínica minuciosa do padrão de movimento e das causas da dor.' },
      { name: 'Plano Personalizado', desc: 'Conduta individualizada acompanhada de perto pela fisioterapeuta.' },
      { name: 'Terapia Manual e Exercício', desc: 'Combinação de técnicas terapêuticas para alívio e fortalecimento progressivo.' },
      { name: 'Recuperação Funcional', desc: 'Foco no retorno seguro às atividades diárias e laborais sem recidivas.' }
    ],
    whatsappText: 'Olá! Gostaria de agendar uma consulta de Fisioterapia.',
    ctaText: 'Agendar consulta de Fisioterapia'
  },
  {
    id: 'ballet',
    num: '03',
    name: 'Ballet Clássico',
    tagline: 'Leveza, postura e consciência corporal.',
    description: 'Trabalha o desenvolvimento físico, a postura elegante e a concentração com total delicadeza. Uma prática artística e disciplinar que desenvolve sustentação, flexibilidade e equilíbrio com turmas para diferentes faixas etárias.',
    benefits: [
      { name: 'Consciência Corporal', desc: 'Domínio do espaço, equilíbrio, sustentação e alinhamento gracioso.' },
      { name: 'Postura e Sustentação', desc: 'Fortalecimento de membros inferiores, abdômen e eretores da coluna.' },
      { name: 'Disciplina e Expressão', desc: 'Integração entre ritmo, respiração e musicalidade do movimento.' },
      { name: 'Flexibilidade Orgânica', desc: 'Alongamento muscular respeitoso e aumento progressivo da amplitude motora.' }
    ],
    whatsappText: 'Olá! Gostaria de informações sobre as aulas de Ballet.',
    ctaText: 'Agendar aula experimental de Ballet'
  },
  {
    id: 'ginastica',
    num: '04',
    name: 'Ginástica Rítmica',
    tagline: 'Flexibilidade, coordenação e disciplina infantil.',
    description: 'Aulas cuidadosas e lúdicas em ambiente acolhedor com tatames macios. Auxilia crianças e jovens no ganho de autoconfiança, coordenação motora fina e ampla, ritmo e desenvolvimento corporal saudável.',
    benefits: [
      { name: 'Coordenação e Ritmo', desc: 'Trabalho motor lúdico integrando música, fitas, arcos e bolas.' },
      { name: 'Flexibilidade Segura', desc: 'Exercícios específicos que favorecem o crescimento e a elasticidade natural.' },
      { name: 'Autoestima e Foco', desc: 'Incentivo à disciplina positiva e à expressão física com alegria.' },
      { name: 'Ambiente Acolhedor', desc: 'Espaço com tatames apropriados e turmas que respeitam cada aluna.' }
    ],
    whatsappText: 'Olá! Gostaria de informações sobre as turmas de Ginástica Rítmica.',
    ctaText: 'Agendar aula experimental de Ginástica'
  },
  {
    id: 'jazz',
    num: '05',
    name: 'Jazz Dance',
    tagline: 'Expressividade, agilidade e vitalidade corporal.',
    description: 'Modalidade energética e dinâmica que combina técnica de dança moderna com expressividade. Estimula a coordenação motora, o condicionamento cardiovascular e a liberação de endorfina em um ambiente caloroso.',
    benefits: [
      { name: 'Coordenação Dinâmica', desc: 'Sequências de movimento que desafiam agilidade e reflexos motores.' },
      { name: 'Expressão Corporal', desc: 'Estímulo à musicalidade, autoconfiança e conexão corpo-mente.' },
      { name: 'Condicionamento Físico', desc: 'Melhora da resistência cardiorrespiratória e gasto calórico positivo.' },
      { name: 'Tônus Muscular', desc: 'Fortalecimento geral do corpo com movimentos fluidos e ritmados.' }
    ],
    whatsappText: 'Olá! Gostaria de informações sobre as turmas de Jazz.',
    ctaText: 'Agendar aula de Jazz'
  }
];

export default function Servicos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Pilates is open by default

  return (
    <section
      id="servicos"
      className="w-full bg-[#FAF8F5] py-20 md:py-28 border-b border-[#1A1814]/10 relative select-none text-[#1A1814] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14 gap-2.5">
          <span className="label-eyebrow tracking-[0.2em] text-[0.7rem] font-semibold text-[#C85E0E] uppercase">
            Modalidades & Cuidado
          </span>
          <AnimatedTitle className="text-display-md text-[#1A1814] italic font-light leading-[1.15] tracking-tight max-w-2xl">
            Práticas guiadas para <br />
            <span className="text-[#C85E0E] font-normal italic">a saúde do seu corpo.</span>
          </AnimatedTitle>
          <p className="font-interface text-sm md:text-base leading-relaxed text-[#5A544F] font-normal max-w-2xl mt-2">
            Com orientação fisioterapêutica e turmas reduzidas, cada movimento é acompanhado com atenção para promover alívio, sustentação e equilíbrio duradouros.
          </p>
        </div>

        {/* Premium Accordion with clean minimal details */}
        <div className="border-t border-[#1A1814]/10 divide-y divide-[#1A1814]/10 bg-white/40 rounded-2xl border border-[#1A1814]/10 shadow-[0_4px_24px_rgba(26,24,20,0.03)] overflow-hidden">
          {specialties.map((service, index) => {
            const isOpen = activeIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className={`transition-colors duration-300 relative cursor-pointer overflow-hidden ${
                  isOpen 
                    ? 'bg-white shadow-[0_10px_30px_rgba(26,24,20,0.03)]' 
                    : 'hover:bg-white/70'
                }`}
              >
                {/* Active Left border accent */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#C85E0E] transition-transform duration-300 origin-left ${
                    isOpen ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />

                {/* Accordion Trigger Header */}
                <div className="flex items-center justify-between py-5 md:py-6 px-5 md:px-8">
                  <div className="flex items-center gap-5 md:gap-7">
                    {/* Index Number */}
                    <span className={`font-mono text-xs font-semibold tracking-wider transition-colors duration-300 ${
                      isOpen ? 'text-[#C85E0E]' : isHovered ? 'text-[#1A1814]' : 'text-[#1A1814]/30'
                    }`}>
                      {service.num}
                    </span>

                    {/* Service Name & Subtitle */}
                    <div className="flex flex-col gap-0.5">
                      <h3 className={`font-interface text-base md:text-lg tracking-wide transition-colors duration-300 ${
                        isOpen ? 'text-[#1A1814] font-semibold' : 'text-[#1A1814]/75 font-medium'
                      }`}>
                        {service.name}
                      </h3>
                      {!isOpen && (
                        <p className="hidden md:block font-interface text-xs text-[#5A544F]/70 font-light">
                          {service.tagline}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Dropdown Indicator */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-1.5 rounded-full border transition-colors duration-300 ${
                      isOpen 
                        ? 'border-[#C85E0E]/30 bg-[#C85E0E]/10 text-[#C85E0E]' 
                        : 'border-transparent text-[#1A1814]/40'
                    }`}
                  >
                    <ChevronDown size={17} />
                  </motion.div>
                </div>

                {/* Accordion Drawer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: { height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.3, delay: 0.05 } }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 px-5 md:px-8 md:pl-16 flex flex-col gap-6">
                        
                        {/* Tagline and Description */}
                        <div>
                          <p className="font-display italic text-[#C85E0E] text-base md:text-lg font-medium mb-2">
                            {service.tagline}
                          </p>
                          <p className="font-interface text-sm leading-relaxed text-[#4D4844] font-normal">
                            {service.description}
                          </p>
                        </div>

                        {/* List of Benefits - Clean Editorial Typography without Icon Overload */}
                        <div className="border-t border-[#1A1814]/8 pt-6">
                          <h4 className="font-interface text-[0.7rem] font-bold tracking-widest text-[#1A1814] uppercase mb-4">
                            Benefícios & Foco do Tratamento
                          </h4>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C85E0E] mt-2 shrink-0" />
                                <div className="flex flex-col">
                                  <span className="font-interface text-sm font-semibold text-[#1A1814]">
                                    {benefit.name}
                                  </span>
                                  <span className="font-interface text-xs text-[#5A544F] leading-relaxed font-light mt-0.5">
                                    {benefit.desc}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Booking CTA Button */}
                        <div className="pt-2 border-t border-[#1A1814]/8 flex justify-start">
                          <a
                            href={`https://wa.me/5561983614547?text=${encodeURIComponent(service.whatsappText)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 bg-[#1A1814] hover:bg-[#C85E0E] text-white py-3 px-6 font-interface text-xs font-semibold uppercase tracking-wider transition-colors duration-300 rounded-full"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>{service.ctaText}</span>
                            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
