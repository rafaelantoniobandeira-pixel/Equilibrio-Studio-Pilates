/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData } from '../data';

export default function Depoimentos() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play timer for slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="depoimentos"
      className="w-full bg-black-org py-24 md:py-32 border-b border-line-sut overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative flex flex-col items-center">
        
        {/* Section eyebrow */}
        <span className="label-eyebrow text-muted-lbl mb-12 block">04 / EXPERIÊNCIAS DE EVOLUÇÃO</span>

        {/* Massive quotation marks */}
        <div className="text-accent-a/10 font-display text-8xl md:text-9xl leading-none absolute top-10 select-none pointer-events-none">
          “
        </div>

        {/* Active testimonial slide window with smooth React transitions */}
        <div className="relative w-full min-h-[220px] md:min-h-[180px] flex items-center justify-center pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center max-w-4xl"
            >
              {/* Massive italic typographic quote style Bodoni Moda */}
              <blockquote className="font-display italic text-lg md:text-2xl lg:text-3xl text-white-crm leading-relaxed font-light font-sans z-10 px-4 md:px-12">
                {testimonialsData[activeIndex].text}
              </blockquote>

              <div className="h-[1px] bg-accent-a/30 w-12 my-6" />

              {/* Author name and service tag info */}
              <cite className="not-italic flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <span className="font-interface text-sm text-white-crm tracking-wider font-medium">
                  {testimonialsData[activeIndex].author}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-a/50 hidden md:inline-block" />
                <span className="font-interface text-[0.72rem] text-accent-b tracking-widest uppercase font-light">
                  {testimonialsData[activeIndex].service}
                </span>
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal dot navigation triggers */}
        <div className="flex items-center justify-center gap-3 mt-12 relative z-20">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 transition-all duration-500 cursor-pointer ${
                activeIndex === index ? 'w-8 bg-accent-a' : 'w-2 bg-white-crm/20 hover:bg-white-crm/50'
              } rounded-full`}
              aria-label={`Ir para o Depoimento ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
