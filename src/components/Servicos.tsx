/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

// Enriched Specialties Data (aligned with data.ts but localized for inline styling details if needed)
const specialties = [
  {
    id: 'pilates',
    num: '01',
    name: 'Pilates',
    description: 'Se você convive com dores constantes na coluna, cervical ou joelhos, o Pilates é uma escolha segura. Aqui, nossa instrução é totalmente focada nas suas particularidades, ajudando seu corpo a se reabilitar e se fortalecer com calmaria.',
    image: 'https://res.cloudinary.com/dxpwgum9x/image/upload/v1780760753/WhatsApp_Image_2026-06-04_at_14.23.49_5_cnqtzf.jpg',
    benefits: [
      'Atendimento 100% individualizado e focado nas suas dores',
      'Alívio de dores crônicas na coluna, cervical e joelhos',
      'Fortalecimento muscular profundo e alinhamento postural',
      'Aumento da flexibilidade e mobilidade das articulações'
    ],
    whatsappText: 'Olá! Gostaria de agendar uma avaliação de Pilates.',
    ctaText: 'Agendar avaliação de Pilates'
  },
  {
    id: 'fisioterapia',
    num: '02',
    name: 'Fisioterapia',
    description: 'Entendemos o quanto limitações físicas ou dores agudas prejudicam seu dia a dia. Oferecemos um acompanhamento clínico e humano detalhado para reduzir seu desconforto e recuperar seus movimentos com segurança, sem pressa de academia.',
    image: 'https://res.cloudinary.com/dxpwgum9x/image/upload/v1780760754/WhatsApp_Image_2026-06-04_at_14.23.49_7_bcsvup.jpg',
    benefits: [
      'Avaliação diagnóstica biomecânica e clínica minuciosa',
      'Técnicas manuais avançadas e liberação miofascial profunda',
      'Tratamento direcionado à reabilitação e alívio de lesões',
      'Foco total na sua recuperação e independência motora'
    ],
    whatsappText: 'Olá! Gostaria de agendar uma consulta de Fisioterapia.',
    ctaText: 'Agendar consulta clínica'
  },
  {
    id: 'ginastica',
    num: '03',
    name: 'Ginástica Rítmica',
    description: 'Ajudamos sua filha a desenvolver disciplina, coordenação motora e autoestima desde cedo. Oferecemos aulas cuidadosas e carinhosas em um espaço acolhedor projetado para que ela aprenda a se expressar com segurança e confiança física.',
    image: 'https://res.cloudinary.com/dxpwgum9x/image/upload/v1780760754/WhatsApp_Image_2026-06-04_at_14.23.49_6_btx5xl.jpg',
    benefits: [
      'Desenvolvimento motor infantil completo e flexibilidade',
      'Estimulação de valores como disciplina, foco e autoconfiança',
      'Aulas ministradas com carinho em espaço macio de tatame',
      'Excelente atividade de socialização e expressão artística'
    ],
    whatsappText: 'Olá! Gostaria de informações sobre as turmas de Ginástica Rítmica.',
    ctaText: 'Agendar aula experimental'
  },
  {
    id: 'ballet',
    num: '04',
    name: 'Ballet',
    description: 'Trabalhamos o desenvolvimento físico, a postura correta e o foco da sua filha com total delicadeza. Uma atividade clássica amorosa que estimula a concentração, o equilíbrio e a leveza de movimentos na infância e adolescência.',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Correção e alinhamento postural natural desde cedo',
      'Ritmo, sensibilidade artística e musicalidade expressiva',
      'Desenvolvimento da concentração mental e disciplina clássica',
      'Exercícios lúdicos que estimulam a delicadeza física'
    ],
    whatsappText: 'Olá! Gostaria de informações sobre as aulas de Ballet.',
    ctaText: 'Agendar aula de Ballet'
  },
  {
    id: 'jazz',
    num: '05',
    name: 'Jazz',
    description: 'Um estilo ativo que trabalha a expressividade e a coordenação. Ideal para canalizar de forma saudável a energia da sua filha, melhorando a postura corporal e fortalecendo o corpo em um ambiente seguro e acolhedor.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Combinação de ritmo, agilidade e coordenação motora',
      'Aumento da resistência física e tônus muscular geral',
      'Expressividade artística livre e canalização de energia',
      'Aulas dinâmicas e focadas no bem-estar infantojuvenil'
    ],
    whatsappText: 'Olá! Gostaria de informações sobre as turmas de Jazz.',
    ctaText: 'Agendar aula de Jazz'
  }
];

export default function Servicos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default open first for richer layout

  return (
    <section
      id="servicos"
      className="w-full bg-[#FAF8F5] py-24 md:py-32 border-b border-[#1A1814]/10 relative select-none text-[#1A1814] overflow-hidden"
    >
      {/* Background radial gradient to give this section its own distinct soft glow */}
      <div className="absolute inset-0 bg-[#FAF8F5]" />
      <div className="absolute top-[30%] -left-[10%] w-[50%] aspect-square rounded-full bg-[#0E7281]/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] -right-[10%] w-[50%] aspect-square rounded-full bg-[#F69A4F]/[0.03] blur-[120px] pointer-events-none" />

      {/* Decorative vertical background label */}
      <div className="absolute right-12 top-24 pointer-events-none opacity-[0.03] select-none font-display italic text-[11vw] leading-none text-[#1A1814] rotate-90 origin-top-right">
        Studio
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Centered high-impact Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14 gap-3 relative z-10">
          <div className="flex items-center gap-2 mb-1 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E7281]" />
            <span className="label-eyebrow tracking-[0.25em] text-[0.68rem] font-semibold text-[#1A1814]/65 uppercase">
              02 / ESPECIALIDADES
            </span>
          </div>
          <AnimatedTitle className="text-display-md text-[#1A1814] italic font-light leading-[1.15] tracking-tight max-w-2xl">
            Nossas <span className="font-sans not-italic text-[#1A1814]/90 font-extralight">frentes de</span> <br />
            <span className="text-accent-a font-normal">atendimento.</span>
          </AnimatedTitle>
          <p className="font-interface text-sm md:text-base leading-relaxed text-[#6B6560] font-light max-w-2xl mt-3">
            Oferecemos abordagens terapêuticas e corporais altamente refinadas, pensadas para reabilitar, fortalecer e redefinir o equilíbrio do seu corpo de maneira individualizada, científica e acolhedora.
          </p>
        </div>

        {/* Premium Accordion in a neat focused container */}
        <div className="border-t border-[#1A1814]/10 divide-y divide-[#1A1814]/10">
          {specialties.map((service, index) => {
            const isOpen = activeIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className={`transition-all duration-500 relative cursor-pointer overflow-hidden ${
                  isOpen 
                    ? 'bg-[#FAF8F5]' 
                    : 'hover:bg-[#FAF8F5]/60'
                }`}
              >
                {/* Left Active Line Accent */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[#0E7281] transition-transform duration-500 origin-left ${
                    isOpen ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />

                {/* Accordion Trigger Header */}
                <div className="flex items-center justify-between py-6 md:py-8 px-4 md:px-6">
                  <div className="flex items-center gap-6">
                    {/* Number indicator */}
                    <span className={`font-mono text-xs font-bold transition-all duration-500 ${
                      isOpen 
                        ? 'text-[#F69A4F] scale-110' 
                        : isHovered 
                          ? 'text-[#0E7281] scale-105' 
                          : 'text-[#1A1814]/40'
                    }`}>
                      {service.num}
                    </span>
                    
                    {/* Title */}
                    <h3 className={`font-interface text-lg md:text-xl lg:text-2xl tracking-wider uppercase transition-all duration-500 ${
                      isOpen 
                        ? 'text-[#1a1814] font-medium' 
                        : isHovered 
                          ? 'text-[#1a1814]' 
                          : 'text-[#1a1814]/50'
                    }`}>
                      {service.name}
                    </h3>
                  </div>

                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-1.5 rounded-full border transition-all duration-500 ${
                      isOpen 
                        ? 'border-[#F69A4F]/30 bg-[#F69A4F]/10 text-[#F69A4F]' 
                        : 'border-transparent text-[#1A1814]/30'
                    }`}
                  >
                    <ChevronDown size={18} />
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
                        transition: { height: { duration: 0.5 }, opacity: { duration: 0.35, delay: 0.1 } }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { height: { duration: 0.4 }, opacity: { duration: 0.25 } }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 px-6 md:px-8 flex flex-col md:flex-row gap-6 items-start">
                        
                        {/* Service Miniature Image */}
                        <div className="w-full md:w-44 aspect-[4/3] md:aspect-[3/4] rounded-xl overflow-hidden border border-[#1a1814]/5 shrink-0 bg-[#EBE8E2]">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Service details and bullets */}
                        <div className="flex-1">
                          <p className="font-interface text-sm leading-relaxed text-[#5A544F] font-light mb-5">
                            {service.description}
                          </p>

                          {/* Bullet Perks */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="w-4 h-4 rounded-full bg-[#0E7281]/10 text-[#0E7281] flex items-center justify-center mt-0.5 text-[9px] font-bold">
                                  ✓
                                </span>
                                <span className="font-interface text-xs text-[#4E4944] font-light">
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Action Booking Button */}
                          <div>
                            <a
                              href={`https://wa.me/5561983614547?text=${encodeURIComponent(service.whatsappText)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="group inline-flex items-center gap-2.5 bg-[#0B0B0A] hover:bg-[#F69A4F] text-[#F4F1EC] hover:text-white py-2.5 px-6 font-interface text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 rounded-lg shadow-sm"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>{service.ctaText}</span>
                              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                          </div>
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
