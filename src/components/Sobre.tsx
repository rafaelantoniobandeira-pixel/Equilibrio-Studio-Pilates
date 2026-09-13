/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import AnimatedTitle from './AnimatedTitle';
import ProfileCard from './ProfileCard';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1.8; // seconds
    const end = value;
    const incrementTime = Math.min(Math.floor((duration * 1000) / end), 50);

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration * 1000 / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl lg:text-5xl text-[#0E7281] font-light leading-none">
      {count}
      {suffix}
    </span>
  );
}

export default function Sobre() {
  return (
    <section 
      id="sobre" 
      className="w-full bg-[#F4F1EC] pt-20 pb-28 md:pt-28 md:pb-36 border-b border-line-dark overflow-visible text-[#1A1814] relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Side: Photo of Priscilla and Stats */}
        <div className="lg:col-span-7 relative select-none w-full flex flex-col md:flex-row gap-6 items-stretch">
          
          {/* Main Visual Frame */}
          <div className="relative flex-1 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#1A1814]/10 bg-[#1A1814]">
              <ProfileCard
                avatarUrl="https://res.cloudinary.com/dxpwgum9x/image/upload/f_auto,q_auto,w_800/v1782415872/WhatsApp_Image_2026-06-04_at_14.23.49_2_dxivux.jpg"
                name="Priscilla"
                title="Fisioterapeuta e Instrutora"
                handle="equilibrio_studio"
                status="Disponível para avaliação"
                contactText="Agendar"
                behindGlowEnabled={false}
                showDetailsOverlay={false}
                innerGradient="linear-gradient(145deg, rgba(19, 62, 77, 0.95) 0%, rgba(26, 24, 20, 0.98) 100%)"
                onContactClick={() => {
                  window.open('https://wa.me/5561983614547?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa%20com%20a%20Priscilla.', '_blank');
                }}
              />
            </div>

            {/* Clear name and title underneath the photo */}
            <div className="mt-4 text-left bg-white/90 backdrop-blur-md p-5 rounded-xl border border-[#1A1814]/8 shadow-sm">
              <h4 className="font-display text-xl md:text-2xl font-bold text-[#1A1814] tracking-tight">
                Dra. Priscilla
              </h4>
              <p className="font-sans text-xs text-[#C85E0E] uppercase tracking-wider font-bold mt-1">
                Fisioterapeuta e Instrutora de Pilates Clínico
              </p>
            </div>
          </div>

          {/* Integrated Statistics */}
          <div className="flex md:flex-col justify-between md:justify-center gap-3 sm:gap-4 lg:gap-5 mt-2 md:mt-0 md:w-48 lg:w-52 shrink-0 relative z-20 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 bg-white/90 backdrop-blur-sm p-4 sm:p-5 border border-[#1A1814]/8 rounded-xl shadow-sm flex flex-col justify-between min-w-0"
            >
              <Counter value={5} suffix="+" />
              <span className="font-interface text-xs uppercase tracking-wider text-[#6B6560] font-medium mt-1 leading-tight">
                Anos de estúdio no Gama
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 bg-white/90 backdrop-blur-sm p-4 sm:p-5 border border-[#1A1814]/8 rounded-xl shadow-sm flex flex-col justify-between min-w-0"
            >
              <Counter value={500} suffix="+" />
              <span className="font-interface text-xs uppercase tracking-wider text-[#6B6560] font-medium mt-1 leading-tight">
                Alunos e pacientes acolhidos
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 bg-white/90 backdrop-blur-sm p-4 sm:p-5 border border-[#1A1814]/8 rounded-xl shadow-sm flex flex-col justify-between min-w-0"
            >
              <Counter value={3} />
              <span className="font-interface text-xs uppercase tracking-wider text-[#6B6560] font-medium mt-1 leading-tight">
                Especialidades integradas
              </span>
            </motion.div>
          </div>

        </div>

        {/* Right Side: Typography block */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center pt-2 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <span className="label-eyebrow tracking-[0.2em] text-[0.7rem] font-semibold text-[#C85E0E] uppercase mb-3">
              Fisioterapeuta Responsável
            </span>
            
            <AnimatedTitle className="text-display-md text-[#1A1814] italic font-light leading-[1.15] tracking-tight mb-6">
              Seu corpo ouvido <span className="font-sans not-italic font-extralight text-[#1A1814]/90">com calma,</span> <br className="hidden md:block" />
              <span className="text-[#C85E0E] font-normal italic">respeito e acolhimento.</span>
            </AnimatedTitle>

            <div className="font-interface text-sm md:text-base text-[#1A1814]/90 leading-relaxed font-light space-y-5 max-w-xl">
              <p className="border-l-2 border-[#C85E0E]/40 pl-4 py-1 text-[#2D2A26]">
                Olá, eu sou a <strong className="font-semibold text-[#1A1814]">Priscilla</strong>. Sei que, muitas vezes, dar o primeiro passo ou recomeçar pode trazer receio, especialmente se você já convive com dores na coluna ou rotinas aceleradas que não respeitam o seu ritmo.
              </p>
              <p>
                No meu estúdio, o foco não é a cobrança por desempenho ou repetições mecânicas sem critério. O objetivo é oferecer <strong>um atendimento genuinamente focado em você</strong>, respeitando suas limitações e fortalecendo sua saúde biomecânica.
              </p>
              <p>
                Quero te ouvir, entender sua história e desenhar um caminho seguro para que você recupere o prazer de se mover sem dor.
              </p>
              <p className="text-[#6B6560] italic pt-2 border-t border-[#1A1814]/10">
                Dê a si mesma(o) essa chance. Agende uma conversa para alinharmos o melhor plano para você.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
