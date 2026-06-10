/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

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
    <span ref={ref} className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0E7281] font-normal">
      {count}
      {suffix}
    </span>
  );
}

export default function Sobre() {
  return (
    <section id="sobre" className="w-full bg-[#F4F1EC] py-24 md:py-32 border-b border-line-dark overflow-hidden text-[#1A1814]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: 60% viewport editorial photograph, bleed layout */}
        <div className="lg:col-span-7 relative group select-none">
          {/* Outer container holding picture with parallax feel */}
          <div className="overflow-hidden aspect-[2/3] md:aspect-[3/4] lg:aspect-[2/3] max-h-[750px] w-full border border-line-sut rounded-sm">
            <motion.img
              initial={{ scale: 1.15, filter: 'grayscale(0.3)' }}
              whileInView={{ scale: 1, filter: 'grayscale(0.1)' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              src="https://res.cloudinary.com/dxpwgum9x/image/upload/v1780757373/WhatsApp_Image_2026-06-04_at_14.23.49_2_dxivux.jpg"
              alt="Priscilla sorrindo de forma acolhedora no Equilíbrio Studio Pilates"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Subtle line decoration to echo high-end architecture */}
          <div className="absolute -bottom-4 -right-4 w-32 h-[1px] bg-accent-a/40 hidden lg:block" />
          <div className="absolute -bottom-4 -right-4 w-[1px] h-32 bg-accent-a/40 hidden lg:block" />
        </div>

        {/* Right Side: 40% Typography block */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <span className="label-eyebrow mb-3">01 / CONHEÇA A PRISCILLA</span>
            
            <h2 className="text-display-md text-[#1A1814] italic font-light leading-[1.1] tracking-tight mb-8">
              Seu corpo ouvido <span className="font-sans not-italic font-extralight text-[#1A1814]/90">com calma,</span> <br className="hidden md:block" />
              <span className="text-accent-a font-normal">respeito e acolhimento.</span>
            </h2>

            <div className="font-interface text-sm md:text-[0.98rem] text-[#1A1814]/90 leading-relaxed font-light space-y-6 max-w-xl">
              <p>
                Olá, eu sou a <strong className="font-medium text-[#1A1814]">Priscilla</strong>. Sei que, muitas vezes, dar o primeiro passo ou recomeçar pode trazer insegurança, especialmente se você já convive com dores ou rotinas que não respeitam o seu momento.
              </p>
              <p>
                No meu estúdio, o foco não é a cobrança por desempenho ou movimentos repetitivos sem sentido. Eu convido você a experimentar algo raro hoje em dia: <strong>um atendimento genuinamente focado em você</strong>, respeitando as suas limitações e fortalecendo a sua saúde.
              </p>
              <p>
                Quero te ouvir, entender sua história e desenhar um caminho seguro para que você recupere o prazer de se mover sem dor.
              </p>
              <p className="text-[#6B6560] italic">
                Dê a si mesma(o) essa chance. Vamos agendar uma conversa para eu te guiar nessa transformação?
              </p>
            </div>

            {/* 3 Indicators numbers increment block */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 border-t border-line-dark mt-12 pt-8 w-full">
              <div className="flex flex-col">
                <Counter value={5} suffix="+" />
                <span className="font-interface text-[0.68rem] uppercase tracking-widest text-[#6B6560] font-medium mt-2">
                  Anos de estúdio
                </span>
              </div>
              <div className="flex flex-col">
                <Counter value={500} suffix="+" />
                <span className="font-interface text-[0.68rem] uppercase tracking-widest text-[#6B6560] font-medium mt-2">
                  Alunos atendidos
                </span>
              </div>
              <div className="flex flex-col">
                <Counter value={3} />
                <span className="font-interface text-[0.68rem] uppercase tracking-widest text-[#6B6560] font-medium mt-2">
                  Especialidades
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
