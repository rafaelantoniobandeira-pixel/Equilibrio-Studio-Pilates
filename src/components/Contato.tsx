/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Instagram, MapPin, Clock, Star, Map, Image as ImageIcon, ExternalLink, ArrowUpRight, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

export default function Contato() {
  const [showMap, setShowMap] = useState(false);

  // Direct Google Maps search link for Ponte Alta Norte Gama DF
  const googleMapsUrl = "https://maps.google.com/?q=Equil%C3%ADbrio+Studio+Pilates+Ponte+Alta+Norte+Gama+DF";

  return (
    <section 
      id="contato" 
      className="w-full bg-[#FAF8F5] text-[#1A1814] py-20 md:py-28 border-t border-[#1A1814]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Editorial Content and CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <span className="label-eyebrow tracking-[0.2em] text-[0.7rem] font-semibold text-[#C85E0E] uppercase mb-2.5">
                Localização & Atendimento
              </span>
              
              <AnimatedTitle className="text-display-md md:text-display-lg text-[#1A1814] italic font-light leading-[1.1] tracking-tight mb-5">
                Dê o primeiro passo <br />
                <span className="text-[#C85E0E] font-normal italic">para viver sem dor.</span>
              </AnimatedTitle>

              <p className="font-interface text-sm md:text-base text-[#4D4844] font-normal leading-relaxed max-w-xl mb-8">
                Seja para tratar dores na coluna, recuperar a mobilidade ou fortalecer seu corpo com segurança. Agende uma conversa ou venha nos visitar no Gama.
              </p>

              {/* Main Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-md sm:max-w-none mb-10">
                <a
                  href="https://wa.me/5561983614547?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o."
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1A1814] text-white hover:bg-[#C85E0E] duration-300 py-4 px-8 font-interface text-xs font-semibold tracking-wider uppercase text-center inline-flex items-center justify-center gap-2.5 rounded-full shadow-sm"
                  id="cta-contact-whatsapp"
                >
                  <Phone size={14} />
                  Agendar via WhatsApp
                </a>

                <a
                  href="https://instagram.com/pequilibriostudio"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#1A1814]/20 hover:border-[#1A1814] hover:bg-[#1A1814] hover:text-white transition-colors duration-300 text-[#1A1814] py-4 px-7 font-interface text-xs font-semibold tracking-wider uppercase text-center inline-flex items-center justify-center gap-2 rounded-full"
                  id="cta-contact-instagram"
                >
                  <Instagram size={14} />
                  @pequilibriostudio
                </a>
              </div>
            </motion.div>

            {/* Information details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#1A1814]/10">
              <div>
                <span className="block text-[0.68rem] font-bold tracking-widest text-[#C85E0E] uppercase mb-1">
                  Endereço do Estúdio
                </span>
                <p className="text-xs sm:text-sm text-[#4D4844] font-normal leading-relaxed">
                  Condomínio Ponte de Terra, Lote 17, Loja 07 <br />
                  Ponte Alta Norte (Gama), Brasília - DF
                </p>
              </div>
              
              <div>
                <span className="block text-[0.68rem] font-bold tracking-widest text-[#C85E0E] uppercase mb-1">
                  Horário de Atendimento
                </span>
                <p className="text-xs sm:text-sm text-[#4D4844] font-normal leading-relaxed">
                  Segunda a Sexta: 07h às 12h | 14h às 21h <br />
                  Sábados: Horários especiais sob agendamento
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Editorial Composition with Unsplash Photo + Floating Glassmorphic Map Trigger Card */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_30px_70px_rgba(26,24,20,0.14)] border border-[#1A1814]/10 relative group bg-[#F4F1EC]"
            >
              <AnimatePresence mode="wait">
                {!showMap ? (
                  <motion.div
                    key="photo-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Beautiful image of the professional/studio */}
                    <img 
                      src="https://res.cloudinary.com/dxpwgum9x/image/upload/f_auto,q_auto,w_800/v1780778097/ChatGPT_Image_6_de_jun._de_2026_17_34_43_wmi8pb.png" 
                      alt="Priscilla e o ambiente acolhedor do nosso estúdio de Pilates"
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-[1.04]"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="map-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full bg-[#E5E3DF]"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.5925206240217!2d-48.04945532414197!3d-15.972486984687588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2bbbaa8e6869%3A0x988bc784ad278119!2sEquil%C3%ADbrio%20Studio%20Pilates!5e0!3m2!1spt-BR!2sbr!4v1717700000000!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="Equilíbrio Studio localizador no mapa"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating Header controls inside card */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-20">
                <button
                  onClick={() => setShowMap(!showMap)}
                  className="bg-white/80 hover:bg-white text-[#1A1814] font-interface text-[0.68rem] font-bold tracking-wider uppercase px-4 py-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
                >
                  {showMap ? (
                    <>
                      <ImageIcon size={13} className="text-[#F69A4F]" />
                      Ver Foto do Espaço
                    </>
                  ) : (
                    <>
                      <Map size={13} className="text-[#F69A4F]" />
                      Mostrar Mapa Interativo
                    </>
                  )}
                </button>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/80 hover:bg-white text-[#1A1814] p-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg cursor-pointer transition-all hover:scale-110"
                  title="Abrir no Google Maps"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Address Info Card pinned to the bottom of the photo container */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-white/40 p-5 rounded-2xl shadow-lg z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] text-[#C85E0E] font-semibold uppercase block mb-1">
                    Como Chegar
                  </span>
                  <h3 className="font-interface text-xs sm:text-sm font-semibold text-[#1A1814] tracking-tight">
                    Equilíbrio Studio Pilates
                  </h3>
                  <p className="font-interface text-xs text-[#5A544F] leading-normal font-normal mt-0.5">
                    Ponte Alta Norte, Gama — DF
                  </p>
                </div>
                
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1A1814] text-white hover:bg-[#C85E0E] text-[0.68rem] font-semibold tracking-wider uppercase py-2.5 px-5 rounded-full inline-flex items-center gap-2 shrink-0 shadow-sm transition-colors duration-300"
                >
                  Abrir Rotas
                  <ExternalLink size={11} />
                </a>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
