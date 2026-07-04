/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import AnimatedTitle from './AnimatedTitle';

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
  const [imgState, setImgState] = useState<'loading' | 'success' | 'error'>('loading');

  return (
    <section 
      id="sobre" 
      className="w-full bg-[#F4F1EC] pt-24 pb-36 md:pt-32 md:pb-48 border-b border-line-dark overflow-visible text-[#1A1814] relative"
    >
      {/* Subtle fine architectural lines for Awwwards-style editorial structure */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#1A1814]/[0.04] pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-[#1A1814]/[0.04] pointer-events-none hidden md:block" />

      {/* Decorative large background text for layered editorial depth */}
      <div className="absolute left-6 top-10 pointer-events-none opacity-[0.02] select-none font-display italic text-[12vw] leading-none text-[#1A1814]">
        Acolhimento
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Side: Significant larger photo of Priscilla, bleeding and overflowing the boundaries */}
        <div className="lg:col-span-7 relative group select-none w-full flex flex-col md:flex-row gap-6 items-stretch">
          
          {/* Main Visual Frame with bleeding overflow and bottom fade */}
          <div className="relative flex-1">
            {/* Elegant architectural organic arch backplate */}
            <div className="absolute -inset-4 bg-[#EBE5DB]/60 rounded-[40px] -rotate-1 pointer-events-none transition-transform duration-700 group-hover:rotate-0" />
            
            {/* Image mask with a sophisticated rounded shape and bleeding overflow */}
            <div className="overflow-visible w-full aspect-[2/3] md:aspect-[3/4] lg:aspect-[2/3] max-h-[880px] rounded-[32px] border border-[#1A1814]/10 relative bg-[#EBE5DB] shadow-2xl transition-all duration-700 hover:shadow-[0_45px_90px_rgba(26,24,20,0.15)] overflow-hidden">
              
              {/* Shimmer / Skeleton Loader */}
              {imgState === 'loading' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#E6DEC1]/10 animate-pulse z-10">
                  <div className="w-8 h-8 rounded-full border-2 border-accent-a/30 border-t-accent-a animate-spin mb-3" />
                  <span className="font-interface text-[11px] uppercase tracking-widest text-[#6B6560] font-light">
                    Carregando imagem...
                  </span>
                </div>
              )}

              {/* Error Fallback Layout */}
              {imgState === 'error' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#E5DFD5] z-10">
                  <span className="text-accent-a font-display italic text-3xl mb-4">Equilíbrio</span>
                  <span className="font-interface text-sm text-[#1A1814]/80 max-w-xs font-light">
                    Priscilla — Fisioterapeuta e Instrutora de Pilates
                  </span>
                </div>
              )}

              <motion.img
                initial={{ scale: 1.05, filter: 'grayscale(0.2)', opacity: 0 }}
                animate={{ 
                  scale: imgState === 'success' ? 1 : 1.05,
                  filter: imgState === 'success' ? 'grayscale(0)' : 'grayscale(0.2)',
                  opacity: imgState === 'success' ? 1 : 0
                }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src="https://res.cloudinary.com/dxpwgum9x/image/upload/v1782415872/WhatsApp_Image_2026-06-04_at_14.23.49_2_dxivux.jpg"
                alt="Priscilla sorrindo de forma acolhedora no Equilíbrio Studio Pilates"
                className="w-full h-full object-cover object-center transform hover:scale-[1.03] transition-transform duration-1000 block"
                referrerPolicy="no-referrer"
                onLoad={() => setImgState('success')}
                onError={() => setImgState('error')}
                loading="eager"
                decoding="async"
              />

              {/* Premium fade gradient at the bottom to blend her into the background color (cutout simulation) */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#F4F1EC] via-[#F4F1EC]/40 to-transparent pointer-events-none" />
            </div>

            {/* Fine crosshairs decoration for premium editorial feel */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-accent-a/35" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-accent-a/35" />
          </div>

          {/* Integrated Statistics: Placed vertically right beside the image to create a strong visual hierarchy */}
          <div className="flex md:flex-col justify-between md:justify-center gap-4 lg:gap-6 mt-4 md:mt-0 md:w-48 lg:w-56 shrink-0 relative z-20">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-1 bg-[#FAF8F5]/85 backdrop-blur-md p-5 border border-line-sut rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 text-accent-a font-mono text-[0.62rem] tracking-widest uppercase mb-1">
                <span className="w-1 h-1 rounded-full bg-accent-a animate-pulse" />
                Tempo
              </div>
              <Counter value={5} suffix="+" />
              <span className="font-interface text-[0.68rem] uppercase tracking-wider text-[#6B6560] font-medium mt-2 leading-tight">
                Anos de estúdio
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 bg-[#FAF8F5]/85 backdrop-blur-md p-5 border border-line-sut rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 text-[#0E7281] font-mono text-[0.62rem] tracking-widest uppercase mb-1">
                <span className="w-1 h-1 rounded-full bg-[#0E7281]" />
                Comunidade
              </div>
              <Counter value={500} suffix="+" />
              <span className="font-interface text-[0.68rem] uppercase tracking-wider text-[#6B6560] font-medium mt-2 leading-tight">
                Alunos atendidos
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 bg-[#FAF8F5]/85 backdrop-blur-md p-5 border border-line-sut rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 text-accent-a font-mono text-[0.62rem] tracking-widest uppercase mb-1">
                <span className="w-1 h-1 rounded-full bg-accent-a" />
                Diferenciais
              </div>
              <Counter value={3} />
              <span className="font-interface text-[0.68rem] uppercase tracking-wider text-[#6B6560] font-medium mt-2 leading-tight">
                Especialidades
              </span>
            </motion.div>
          </div>

        </div>

        {/* Right Side: Typography block */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center pt-4 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-a" />
              <span className="label-eyebrow tracking-[0.25em] text-[0.68rem] font-semibold text-[#1A1814]/65">
                01 / CONHEÇA A PRISCILLA
              </span>
            </div>
            
            <AnimatedTitle className="text-display-md text-[#1A1814] italic font-light leading-[1.1] tracking-tight mb-8">
              Seu corpo ouvido <span className="font-sans not-italic font-extralight text-[#1A1814]/90">com calma,</span> <br className="hidden md:block" />
              <span className="text-accent-a font-normal">respeito e acolhimento.</span>
            </AnimatedTitle>

            <div className="font-interface text-sm md:text-[0.98rem] text-[#1A1814]/90 leading-relaxed font-light space-y-6 max-w-xl">
              <p className="border-l-2 border-[#0E7281]/25 pl-4 py-1">
                Olá, eu sou a <strong className="font-medium text-[#1A1814]">Priscilla</strong>. Sei que, muitas vezes, dar o primeiro passo ou recomeçar pode trazer insegurança, especialmente se você já convive com dores ou rotinas que não respeitam o seu momento.
              </p>
              <p>
                No meu estúdio, o foco não é a cobrança por desempenho ou movimentos repetitivos sem sentido. Eu convido você a experimentar algo raro hoje em dia: <strong>um atendimento genuinamente focado em você</strong>, respeitando as suas limitações e fortalecendo a sua saúde.
              </p>
              <p>
                Quero te ouvir, entender sua história e desenhar um caminho seguro para que você recupere o prazer de se mover sem dor.
              </p>
              <p className="text-[#6B6560] italic pt-2 border-t border-[#1A1814]/5">
                Dê a si mesma(o) essa chance. Vamos agendar uma conversa para eu te guiar nessa transformação?
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
