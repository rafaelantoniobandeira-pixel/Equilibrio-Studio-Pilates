/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ArrowRight, 
  Activity, 
  Feather, 
  Music, 
  HeartPulse, 
  Infinity, 
  Sparkles, 
  Compass, 
  Shield, 
  Waves, 
  Target, 
  Zap, 
  Award
} from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

// Enriched Specialties Data with linear icons
const specialties = [
  {
    id: 'pilates',
    num: '01',
    name: 'Pilates Clínico & Funcional',
    icon: Activity,
    tagline: 'Precisão biomecânica e fortalecimento profundo.',
    description: 'Se você convive com dores constantes na coluna, articulações ou busca melhorar seu tônus postural, o Pilates é uma escolha científica e segura. Aqui, nossa instrução é totalmente focada nas suas particularidades, ajudando seu corpo a se reabilitar e se fortalecer de forma saudável.',
    benefits: [
      { name: 'Alinhamento Postural', desc: 'Ajuste biomecânico preciso para reduzir a sobrecarga.', icon: Compass },
      { name: 'Fortalecimento do Core', desc: 'Foco no centro de força para estabilização da coluna.', icon: Shield },
      { name: 'Alívio de Dores Crônicas', desc: 'Exercícios graduais e adaptados às suas restrições.', icon: Sparkles },
      { name: 'Aumento de Mobilidade', desc: 'Recuperação do movimento saudável sem desgaste articular.', icon: Waves }
    ],
    whatsappText: 'Olá! Gostaria de agendar uma avaliação de Pilates.',
    ctaText: 'Agendar avaliação de Pilates'
  },
  {
    id: 'ballet',
    num: '02',
    name: 'Ballet Clássico',
    icon: Feather,
    tagline: 'Leveza, alinhamento e disciplina clássica.',
    description: 'Trabalhamos o desenvolvimento físico, a postura correta e a concentração com total delicadeza. Uma atividade clássica amorosa que estimula o equilíbrio e a leveza de movimentos, com turmas dedicadas ao desenvolvimento infantil e também ao público adulto.',
    benefits: [
      { name: 'Consciência Corporal', desc: 'Domínio do espaço, equilíbrio e alinhamento elegante.', icon: Target },
      { name: 'Postura e Leveza', desc: 'Trabalho contínuo de sustentação e alongamento muscular.', icon: Feather },
      { name: 'Disciplina e Ritmo', desc: 'Integração entre música, tempo e expressão corporal.', icon: Music },
      { name: 'Flexibilidade Natural', desc: 'Amplitude de movimentos desenvolvida de forma orgânica.', icon: Infinity }
    ],
    whatsappText: 'Olá! Gostaria de informações sobre as aulas de Ballet.',
    ctaText: 'Agendar aula experimental de Ballet'
  },
  {
    id: 'jazz',
    num: '03',
    name: 'Jazz Dance',
    icon: Music,
    tagline: 'Expressividade, agilidade e vitalidade corporal.',
    description: 'Um estilo ativo e vibrante que trabalha a expressividade e a coordenação motora de forma lúdica ou avançada. Ideal para canalizar a energia de forma saudável, melhorando a postura corporal e fortalecendo o corpo em um ambiente acolhedor.',
    benefits: [
      { name: 'Coordenação Dinâmica', desc: 'Sequências de movimento que estimulam corpo e mente.', icon: Zap },
      { name: 'Expressão Livre', desc: 'Estímulo à interpretação artística e autoconfiança corporal.', icon: Sparkles },
      { name: 'Condicionamento Ativo', desc: 'Trabalho cardiovascular e aumento da resistência geral.', icon: Activity },
      { name: 'Tônus e Vitalidade', desc: 'Fortalecimento global através de movimentos rítmicos.', icon: HeartPulse }
    ],
    whatsappText: 'Olá! Gostaria de informações sobre as turmas de Jazz.',
    ctaText: 'Agendar aula de Jazz'
  },
  {
    id: 'fisioterapia',
    num: '04',
    name: 'Fisioterapia & Reabilitação',
    icon: HeartPulse,
    tagline: 'Ciência aplicada ao alívio de lesões e dores agudas.',
    description: 'Entendemos o quanto limitações físicas ou dores musculares agudas prejudicam seu dia a dia. Oferecemos um acompanhamento clínico cuidadoso e detalhado para reduzir seu desconforto e recuperar seus movimentos com segurança.',
    benefits: [
      { name: 'Diagnóstico Mecânico', desc: 'Avaliação clínica minuciosa do seu padrão de movimento.', icon: Target },
      { name: 'Recuperação Direcionada', desc: 'Fisioterapeutas dedicadas que acompanham sua evolução.', icon: Shield },
      { name: 'Terapia Miofascial', desc: 'Técnicas manuais para alívio de tensões profundas.', icon: Waves },
      { name: 'Independência Motora', desc: 'Foco no reestabelecimento da sua autonomia de vida.', icon: Compass }
    ],
    whatsappText: 'Olá! Gostaria de agendar uma consulta de Fisioterapia.',
    ctaText: 'Agendar consulta de Fisioterapia'
  },
  {
    id: 'ginastica',
    num: '05',
    name: 'Ginástica Rítmica',
    icon: Infinity,
    tagline: 'Flexibilidade, beleza plástica e coordenação infantil.',
    description: 'Ajudamos sua filha a desenvolver disciplina, flexibilidade e autoestima desde cedo. Oferecemos aulas cuidadosas e carinhosas em um espaço macio de tatames, projetado para que ela aprenda a se expressar com segurança e confiança.',
    benefits: [
      { name: 'Desenvolvimento Motor', desc: 'Coordenação fina e ampla utilizando fitas, arcos e bolas.', icon: Activity },
      { name: 'Expressão Plástica', desc: 'A graciosidade dos movimentos rítmicos integrados à música.', icon: Sparkles },
      { name: 'Flexibilidade e Força', desc: 'Trabalho focado no desenvolvimento motor juvenil saudável.', icon: Infinity },
      { name: 'Autoconfiança Juvenil', desc: 'Aulas divertidas que elevam a autoestima e a disciplina.', icon: Award }
    ],
    whatsappText: 'Olá! Gostaria de informações sobre as turmas de Ginástica Rítmica.',
    ctaText: 'Agendar aula experimental de Ginástica'
  }
];

export default function Servicos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Pilates is open by default

  return (
    <section
      id="servicos"
      className="w-full bg-[#FAF8F5] py-24 md:py-32 border-b border-[#1A1814]/10 relative select-none text-[#1A1814] overflow-hidden"
    >
      {/* Background Soft Gradients and Architectural elements */}
      <div className="absolute inset-0 bg-[#FAF8F5]" />
      <div className="absolute top-[20%] -left-[10%] w-[45%] aspect-square rounded-full bg-[#0F2C41]/[0.02] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] -right-[10%] w-[45%] aspect-square rounded-full bg-[#F69A4F]/[0.03] blur-[130px] pointer-events-none" />

      {/* Decorative luxury vertical outline label */}
      <div className="absolute right-8 top-32 pointer-events-none opacity-[0.03] select-none font-display italic text-[10vw] leading-none text-[#0F2C41] rotate-90 origin-top-right">
        Studio
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Minimalist Premium Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-3 relative z-10">
          <div className="flex items-center gap-2 mb-1 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F69A4F]" />
            <span className="label-eyebrow tracking-[0.25em] text-[0.68rem] font-bold text-[#F69A4F] uppercase">
              02 / MODALIDADES E PRÁTICAS
            </span>
          </div>
          <AnimatedTitle className="text-display-md text-[#0F2C41] italic font-light leading-[1.15] tracking-tight max-w-2xl">
            Nossas <span className="font-interface not-italic text-[#0F2C41]/90 font-light">frentes de</span> <br />
            <span className="text-[#F69A4F] font-normal italic">atendimento e bem-estar.</span>
          </AnimatedTitle>
          <p className="font-interface text-sm md:text-base leading-relaxed text-[#5A544F] font-normal max-w-2xl mt-3">
            Através de uma metodologia de movimentos altamente controlada, refinada e sem impactos nocivos, devolvemos a liberdade mecânica e o vigor físico para a sua rotina diária.
          </p>
        </div>

        {/* Premium Accordion with clean minimal details */}
        <div className="border-t border-[#0F2C41]/10 divide-y divide-[#0F2C41]/10">
          {specialties.map((service, index) => {
            const isOpen = activeIndex === index;
            const isHovered = hoveredIndex === index;
            const ModalMainIcon = service.icon;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className={`transition-all duration-500 relative cursor-pointer overflow-hidden ${
                  isOpen 
                    ? 'bg-white shadow-[0_15px_40px_rgba(15,44,65,0.02)]' 
                    : 'hover:bg-white/40'
                }`}
              >
                {/* Active Left/Top premium border accent */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#F69A4F] transition-transform duration-500 origin-left ${
                    isOpen ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />

                {/* Accordion Trigger Header */}
                <div className="flex items-center justify-between py-6 md:py-8 px-4 md:px-8">
                  <div className="flex items-center gap-6 md:gap-8">
                    {/* Number label in gold */}
                    <span className={`font-mono text-xs font-bold transition-all duration-500 ${
                      isOpen 
                        ? 'text-[#F69A4F] scale-110' 
                        : isHovered 
                          ? 'text-[#0F2C41] scale-105' 
                          : 'text-[#1A1814]/30'
                    }`}>
                      {service.num}
                    </span>

                    {/* Service Name & Tagline */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <ModalMainIcon size={18} className={`transition-all duration-500 ${
                          isOpen ? 'text-[#F69A4F]' : 'text-[#1A1814]/30'
                        }`} />
                        <h3 className={`font-interface text-md md:text-lg tracking-widest uppercase transition-all duration-500 ${
                          isOpen 
                            ? 'text-[#0F2C41] font-semibold' 
                            : isHovered 
                              ? 'text-[#0F2C41]' 
                              : 'text-[#1A1814]/50'
                        }`}>
                          {service.name}
                        </h3>
                      </div>
                      {!isOpen && (
                        <p className="hidden md:block font-interface text-xs text-[#5A544F]/60 font-light pl-7">
                          {service.tagline}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Elegant arrow or drop indicator in soft gold/deep blue */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-2 rounded-full border transition-all duration-500 ${
                      isOpen 
                        ? 'border-[#F69A4F]/30 bg-[#F69A4F]/10 text-[#F69A4F]' 
                        : 'border-transparent text-[#1A1814]/30'
                    }`}
                  >
                    <ChevronDown size={16} />
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
                        transition: { height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.35, delay: 0.1 } }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { height: { duration: 0.4 }, opacity: { duration: 0.25 } }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 px-6 md:px-16 flex flex-col gap-8">
                        
                        {/* Premium Tagline and Description */}
                        <div>
                          <p className="font-display italic text-[#F69A4F] text-lg md:text-xl font-medium mb-3">
                            {service.tagline}
                          </p>
                          <p className="font-interface text-sm leading-relaxed text-[#5A544F] font-normal">
                            {service.description}
                          </p>
                        </div>

                        {/* List of Benefits in format of linear icons with no photography */}
                        <div className="border-t border-[#0F2C41]/5 pt-8">
                          <h4 className="font-interface text-xs font-bold tracking-widest text-[#0F2C41] uppercase mb-6 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#F69A4F]" />
                            Benefícios & Foco de Trabalho
                          </h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {service.benefits.map((benefit, idx) => {
                              const BenefitIcon = benefit.icon;
                              return (
                                <div key={idx} className="flex items-start gap-4">
                                  <div className="w-8 h-8 rounded-lg bg-[#F69A4F]/5 border border-[#F69A4F]/15 flex items-center justify-center text-[#F69A4F] shrink-0">
                                    <BenefitIcon size={14} />
                                  </div>
                                  <div className="flex flex-col gap-0.5">
                                    <span className="font-interface text-sm font-semibold text-[#0F2C41]">
                                      {benefit.name}
                                    </span>
                                    <span className="font-interface text-xs text-[#5A544F]/85 leading-relaxed font-light">
                                      {benefit.desc}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Booking CTA Button in elegant Dark Blue and Soft Gold border/hover */}
                        <div className="pt-4 border-t border-[#0F2C41]/5 flex justify-start">
                          <a
                            href={`https://wa.me/5561983614547?text=${encodeURIComponent(service.whatsappText)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2.5 bg-[#0F2C41] hover:bg-[#F69A4F] text-white py-3.5 px-8 font-interface text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-full shadow-sm hover:shadow-md"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>{service.ctaText}</span>
                            <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
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
