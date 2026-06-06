/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Instagram, MapPin, Clock } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="w-full bg-[#F4F1EC] text-[#1A1814] py-24 md:py-32 selection:bg-[#1A1814] selection:text-[#F4F1EC] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        
        {/* Left Side: Editorial context CTA */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <span className="label-eyebrow mb-3">05 / FALE COM A GENTE</span>
            
            <h2 className="text-display-md text-[#1A1814] italic font-light leading-none mb-6">
              "Quer se mover <br />
              <span className="font-sans not-italic font-extralight text-[#1A1814]/80">sem sentir cansaço</span> <br />
              <span className="text-accent-a font-normal">ou dor?"</span>
            </h2>

            <p className="font-interface text-sm md:text-base text-[#6B6560] font-light leading-relaxed max-w-lg mb-10">
              Sem compromisso. Só uma conversa para entender o que seu corpo precisa. O contato é fácil e a gente responde no mesmo dia.
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary button: WhatsApp black styled */}
              <a
                href="https://wa.me/5561983614547?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avaliação%20gratuita."
                target="_blank"
                rel="noreferrer"
                className="bg-[#1A1814] text-[#F4F1EC] hover:bg-[#1A1814]/90 border border-[#1A1814] duration-300 py-4 px-8 font-interface text-[0.72rem] tracking-[0.18em] uppercase text-center inline-flex items-center justify-center gap-2 group shadow-lg"
              >
                <Phone size={14} className="group-hover:rotate-12 transition-transform" />
                Agendar avaliação gratuita
              </a>

              {/* Secondary button: Instagram border styled */}
              <a
                href="https://instagram.com/pequilibriostudio"
                target="_blank"
                rel="noreferrer"
                className="border border-[#1A1814]/35 hover:border-[#1A1814] hover:bg-[#1A1814] hover:text-[#F4F1EC] transition-colors text-[#1A1814] py-4 px-8 font-interface text-[0.72rem] tracking-[0.18em] uppercase text-center inline-flex items-center justify-center gap-2"
              >
                <Instagram size={14} />
                @pequilibriostudio
              </a>
            </div>
          </motion.div>

          {/* Business location list details anchored below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 mt-12 border-t border-[#1A1814]/10">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-accent-a mt-1 shrink-0" />
              <div>
                <span className="block text-[0.62rem] font-semibold tracking-widest text-[#6B6560] uppercase">
                  Endereço
                </span>
                <p className="text-xs text-[#6B6560] font-light mt-1 uppercase leading-relaxed tracking-wider">
                  Ponte de Terra, Lj 07 <br />
                  Pte. Alta Norte (Gama), DF
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock size={16} className="text-[#0E7281] mt-1 shrink-0" />
              <div>
                <span className="block text-[0.62rem] font-semibold tracking-widest text-[#6B6560] uppercase">
                  Atendimento
                </span>
                <p className="text-xs text-[#6B6560] font-light mt-1 leading-relaxed">
                  Segunda a Sexta: 07h às 21h <br />
                  Sábados: Com agendamento prévio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Responsive Google Map, showing the exact location with a clear red pin */}
        <div className="lg:col-span-6 min-h-[350px] md:min-h-[450px] relative border border-[#1A1814]/10 overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.5925206240217!2d-48.04945532414197!3d-15.972486984687588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2bbbaa8e6869%3A0x988bc784ad278119!2sEquil%C3%ADbrio%20Studio%20Pilates!5e0!3m2!1spt-BR!2sbr!4v1717700000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            title="Equilíbrio Studio localizador no mapa"
          />
        </div>

      </div>
    </section>
  );
}
