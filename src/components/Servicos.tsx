/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { servicesData } from '../data';

export default function Servicos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // None open by default

  return (
    <section
      id="servicos"
      className="w-full bg-[#F4F1EC] py-24 md:py-32 border-b border-[rgba(26,24,20,0.12)] relative select-none text-[#1A1814]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header line of section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="label-eyebrow block mb-3">02 / ESPECIALIDADES</span>
            <h2 className="text-display-md text-[#1A1814] italic font-light">
              Nossas <span className="font-sans not-italic text-[#1A1814]/90 font-extralight">frentes de</span> <br />
              <span className="text-accent-a font-normal">atendimento.</span>
            </h2>
          </div>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="relative mt-8 border-t border-[rgba(26,24,20,0.12)]">

          {/* Service Editorial list */}
          {servicesData.map((service, index) => {
            const isOpen = activeIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className="border-b border-[rgba(26,24,20,0.12)] cursor-pointer transition-colors duration-500 hover:bg-black-org/[0.02]"
              >
                {/* Horizontal row line header */}
                <div className="flex items-center justify-between py-8 md:py-10">
                  <div className="flex items-center gap-6 md:gap-12 pl-2">
                    <span className="font-display text-lg md:text-xl text-[#0E7281] font-medium">
                      {service.num}
                    </span>
                    <h3
                      className={`font-interface text-[1.4rem] md:text-[2rem] lg:text-[2.2rem] transition-all duration-300 font-extralight tracking-widest uppercase ${
                        isOpen || isHovered ? 'text-[#1A1814]' : 'text-[#1A1814]/45'
                      }`}
                    >
                      {service.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Expand Chevron Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#1A1814]/40 p-2"
                    >
                      <ChevronDown size={22} />
                    </motion.div>
                  </div>
                </div>

                {/* Body Section content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-8 md:pl-20 pr-4 max-w-4xl">
                        {/* Description block */}
                        <div className="flex flex-col items-start gap-5">
                          <p className="font-interface text-sm md:text-base leading-relaxed text-[#6B6560] font-light max-w-2xl">
                            {service.description}
                          </p>

                          {/* Action CTA within list */}
                          <div className="mt-2">
                            <a
                              href={`https://wa.me/5561983614547?text=${encodeURIComponent('Olá! Vim pelo site e ' + (service.whatsappText || `gostaria de saber mais sobre o atendimento de ${service.name}.`))}`}
                              className="text-xs uppercase font-interface tracking-[0.2em] inline-flex items-center gap-2 group text-accent-a font-medium py-1"
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()} // Overlap accordion click toggle
                            >
                              {service.ctaText || `Saiba mais sobre ${service.name}`}
                              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
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
