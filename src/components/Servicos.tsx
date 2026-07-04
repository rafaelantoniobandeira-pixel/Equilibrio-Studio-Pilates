/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import AnimatedTitle from './AnimatedTitle';

// Accordion Collapsible using GSAP for buttery smooth physics-based height and opacity animation
interface AccordionContentProps {
  isOpen: boolean;
  children: React.ReactNode;
}

function AccordionContent({ isOpen, children }: AccordionContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Wait a tick so the component is rendered in the DOM before GSAP queries its height
      const ctx = gsap.context(() => {
        gsap.fromTo(containerRef.current,
          { height: 0, opacity: 0, y: 15 },
          { height: 'auto', opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }
        );
      });
      return () => ctx.revert();
    } else {
      const ctx = gsap.context(() => {
        gsap.to(containerRef.current, {
          height: 0,
          opacity: 0,
          y: -10,
          duration: 0.55,
          ease: 'power3.inOut',
          onComplete: () => setShouldRender(false)
        });
      });
      return () => ctx.revert();
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div ref={containerRef} className="overflow-hidden">
      {children}
    </div>
  );
}

// Enriched Specialties Data for unmatched layout polish
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="servicos"
      className="w-full bg-[#F4F1EC] py-24 md:py-32 border-b border-[rgba(26,24,20,0.12)] relative select-none text-[#1A1814] overflow-hidden"
    >
      {/* Background warm tactile pattern */}
      <div className="absolute inset-0 bg-[#F4F1EC] pointer-events-none" />
      
      {/* Container grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header section with title and brief introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <span className="label-eyebrow block mb-3">02 / ESPECIALIDADES</span>
            <AnimatedTitle className="text-display-md text-[#1A1814] italic font-light leading-none">
              Nossas <span className="font-sans not-italic text-[#1A1814]/90 font-extralight">frentes de</span> <br />
              <span className="text-accent-a font-normal">atendimento.</span>
            </AnimatedTitle>
          </div>
          <div className="lg:col-span-5">
            <p className="font-interface text-sm md:text-base leading-relaxed text-[#6B6560] font-light">
              Oferecemos abordagens terapêuticas e corporais altamente refinadas, pensadas para reabilitar, fortalecer e redefinir o equilíbrio do seu corpo de maneira individualizada, científica e acolhedora.
            </p>
          </div>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="relative mt-8 border-t border-[rgba(26,24,20,0.15)]">

          {specialties.map((service, index) => {
            const isOpen = activeIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className={`border-b transition-all duration-500 relative group cursor-pointer overflow-hidden ${
                  isOpen 
                    ? 'border-[#0E7281]/35 bg-[#FAF8F5]' 
                    : 'border-[rgba(26,24,20,0.12)] hover:bg-[#FAF8F5]/50'
                }`}
              >
                {/* Visual left indicator ribbon for premium active focus */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#0E7281] transition-transform duration-500 origin-left ${
                    isOpen ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />

                {/* Main Accordion Row Header */}
                <div className="flex items-center justify-between py-8 md:py-10 px-4 md:px-8 transition-all duration-500">
                  <div className="flex items-center gap-6 md:gap-12 pl-2">
                    {/* Item Number */}
                    <span className={`font-display text-lg md:text-xl font-medium transition-all duration-500 ${
                      isOpen 
                        ? 'text-[#F69A4F] scale-110' 
                        : isHovered 
                          ? 'text-[#0E7281] scale-105' 
                          : 'text-[#0E7281]'
                    }`}>
                      {service.num}
                    </span>
                    
                    {/* Item Title */}
                    <h3
                      className={`font-interface text-[1.3rem] md:text-[1.8rem] lg:text-[2rem] transition-all duration-500 font-extralight tracking-[0.08em] uppercase ${
                        isOpen 
                          ? 'text-[#1A1814] font-normal translate-x-2' 
                          : isHovered 
                            ? 'text-[#1A1814] translate-x-1.5' 
                            : 'text-[#1A1814]/45'
                      }`}
                    >
                      {service.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 pr-2">
                    {/* Expand Chevron Icon with precise rotation */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`p-2 rounded-full border transition-all duration-500 ${
                        isOpen 
                          ? 'border-[#F69A4F]/20 bg-[#F69A4F]/5 text-[#F69A4F]' 
                          : 'border-transparent text-[#1A1814]/40 group-hover:border-[rgba(26,24,20,0.12)] group-hover:bg-[#1A1814]/5'
                      }`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                </div>

                {/* GSAP-Driven Accordion Panel content */}
                <AccordionContent isOpen={isOpen}>
                  <div className="pb-12 pt-2 px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      
                      {/* Left: Professional Concept Image */}
                      <div className="lg:col-span-5 overflow-hidden rounded-xl border border-[rgba(26,24,20,0.06)] bg-[#EBE8E2] relative group/img aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5] shadow-[0_12px_32px_rgba(26,24,20,0.04)]">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {/* Subtle ambient shadow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black-org/25 via-transparent to-transparent opacity-40 pointer-events-none" />
                      </div>

                      {/* Right: Informational Copy & Benefit List */}
                      <div className="lg:col-span-7 flex flex-col justify-center">
                        
                        {/* Detailed Description */}
                        <p className="font-interface text-base md:text-[1.05rem] leading-relaxed text-[#5A544F] font-light mb-8 max-w-2xl">
                          {service.description}
                        </p>

                        {/* Checklist of Benefits */}
                        <div className="mb-8">
                          <h4 className="font-interface text-xs tracking-[0.2em] uppercase font-semibold text-[#0E7281] mb-5">
                            Diferenciais e Benefícios:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0E7281]/10 flex items-center justify-center text-[#0E7281] mt-0.5">
                                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                <span className="font-interface text-[0.88rem] text-[#4E4944] font-light leading-snug">
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Direct Assessment WhatsApp Booking CTA */}
                        <div className="pt-2">
                          <a
                            href={`https://wa.me/5561983614547?text=${encodeURIComponent(service.whatsappText)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative cta-shining glow-btn-orange inline-flex items-center gap-3 bg-[#0B0B0A] hover:bg-[#F69A4F] text-[#F4F1EC] hover:text-white-crm py-3.5 px-8 font-interface text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_12px_24px_rgba(11,11,10,0.06)] hover:shadow-[0_12px_32px_rgba(246,154,79,0.2)] hover:-translate-y-0.5"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>{service.ctaText}</span>
                            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                        </div>

                      </div>

                    </div>
                  </div>
                </AccordionContent>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
