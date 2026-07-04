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
      className="w-full bg-[#FAF8F5] text-[#1A1814] py-24 md:py-32 selection:bg-[#1A1814] selection:text-[#FAF8F5] select-none relative overflow-hidden"
      style={{
        background: 'linear-gradient(to top, #FAF8F5, #F4F1EC)'
      }}
    >
      {/* Background elegant architectural rings/blobs */}
      <div className="absolute top-[30%] -right-[15%] w-[50%] aspect-square rounded-full bg-[#F69A4F]/[0.015] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[40%] aspect-square rounded-full bg-[#F69A4F]/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Subtle Credibility Floating Badge */}
        <div className="flex justify-center lg:justify-start mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#F69A4F]/10 px-4 py-2 rounded-full border border-[#F69A4F]/20"
          >
            <span className="flex gap-0.5 text-[#F69A4F]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-current" />
              ))}
            </span>
            <span className="font-interface text-[0.68rem] font-bold text-[#F69A4F] tracking-wider uppercase">
              REABILITAÇÃO E BEM-ESTAR REFERÊNCIA NO GAMA
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Editorial Content, Highly detailed CTA and stats */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F69A4F]" />
                <span className="label-eyebrow tracking-[0.25em] text-[0.68rem] font-bold text-[#F69A4F] uppercase">
                  06 / CONEXÃO E AGENDAMENTO
                </span>
              </div>
              
              <AnimatedTitle className="text-display-md md:text-display-lg text-[#1A1814] italic font-light leading-[1.1] tracking-tight mb-6">
                Dê o primeiro passo <br />
                <span className="text-[#F69A4F] font-normal italic">para viver sem dor.</span>
              </AnimatedTitle>

              <p className="font-interface text-sm md:text-base text-[#4D4844] font-normal leading-relaxed max-w-xl mb-10">
                Seja para tratar uma lesão crônica, recuperar a mobilidade após cirurgias ou simplesmente fortalecer seu corpo de forma totalmente segura e guiada por fisioterapeutas dedicadas. Agende uma avaliação biomecânica detalhada.
              </p>

              {/* Main Action Buttons: Bold, Oversized, High Contrast */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full max-w-md sm:max-w-none mb-12">
                <a
                  href="https://wa.me/5561983614547?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o."
                  target="_blank"
                  rel="noreferrer"
                  className="relative overflow-hidden bg-[#1A1814] text-[#FAF8F5] hover:bg-[#F69A4F] duration-500 py-5 px-10 font-interface text-xs font-semibold tracking-[0.18em] uppercase text-center inline-flex items-center justify-center gap-3 rounded-full shadow-[0_20px_40px_rgba(26,24,20,0.15)] group hover:shadow-[0_20px_40px_rgba(246,154,79,0.25)] transition-all"
                  id="cta-contact-whatsapp"
                >
                  <Phone size={15} className="group-hover:rotate-12 transition-transform duration-300" />
                  Agendar via WhatsApp
                  <ArrowUpRight size={14} className="opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <a
                  href="https://instagram.com/pequilibriostudio"
                  target="_blank"
                  rel="noreferrer"
                  className="relative border-2 border-[#1A1814]/15 hover:border-[#1A1814] hover:bg-[#1A1814] hover:text-[#FAF8F5] transition-all duration-500 text-[#1A1814] py-4.5 px-10 font-interface text-xs font-semibold tracking-[0.18em] uppercase text-center inline-flex items-center justify-center gap-3 rounded-full"
                  id="cta-contact-instagram"
                >
                  <Instagram size={15} />
                  @pequilibriostudio
                </a>
              </div>
            </motion.div>

            {/* Quick trust metrics grid inside block cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-white/50 backdrop-blur-sm border border-[#1A1814]/5 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F69A4F]/10 flex items-center justify-center text-[#F69A4F] shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-interface text-xs font-bold uppercase tracking-wider text-[#1A1814]">
                    Avaliação Precisa
                  </h4>
                  <p className="font-interface text-xs text-[#4D4844] leading-relaxed mt-1 font-normal">
                    Diagnóstico dinâmico inicial para mapear assimetrias e adaptar cada exercício.
                  </p>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm border border-[#1A1814]/5 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F69A4F]/10 flex items-center justify-center text-[#F69A4F] shrink-0">
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <h4 className="font-interface text-xs font-bold uppercase tracking-wider text-[#1A1814]">
                    Fisioterapia Integrada
                  </h4>
                  <p className="font-interface text-xs text-[#4D4844] leading-relaxed mt-1 font-normal">
                    Sessões orientadas por especialistas qualificadas em reabilitação de coluna e articulações.
                  </p>
                </div>
              </div>
            </div>

            {/* Information details footer cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 mt-10 border-t border-[#1A1814]/10">
              <div className="flex items-start gap-3.5">
                <MapPin size={18} className="text-[#F69A4F] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[0.62rem] font-bold tracking-widest text-[#4D4844] uppercase">
                    Endereço do Estúdio
                  </span>
                  <p className="text-xs text-[#4D4844] font-normal mt-1.5 leading-relaxed tracking-wide">
                    Condomínio Ponte de Terra, Lote 17, Loja 07 <br />
                    Ponte Alta Norte (Gama), Brasília - DF
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3.5">
                <Clock size={18} className="text-[#F69A4F] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[0.62rem] font-bold tracking-widest text-[#4D4844] uppercase">
                    Horário de Atendimento
                  </span>
                  <p className="text-xs text-[#4D4844] font-normal mt-1.5 leading-relaxed">
                    Segunda a Sexta: 07h às 12h | 14h às 21h <br />
                    Sábados: Reservado para avaliações prévias
                  </p>
                </div>
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
                      src="https://res.cloudinary.com/dxpwgum9x/image/upload/v1780778097/ChatGPT_Image_6_de_jun._de_2026_17_34_43_wmi8pb.png" 
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

              {/* Glassmorphic Address Info Card pinned to the bottom of the photo container */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md border border-white/30 p-5 rounded-[20px] shadow-2xl z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="font-mono text-[0.55rem] tracking-[0.25em] text-[#F69A4F] font-bold uppercase block mb-1">
                    Como Chegar
                  </span>
                  <h3 className="font-interface text-xs font-semibold text-[#1A1814] tracking-wide uppercase">
                    Equilíbrio Studio Pilates
                  </h3>
                  <p className="font-interface text-[0.68rem] text-[#4D4844] leading-normal font-normal mt-1">
                    Gama - Ponte Alta Norte, próximo ao comércio principal.
                  </p>
                </div>
                
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1A1814] text-white hover:bg-[#F69A4F] text-[0.62rem] font-bold tracking-[0.15em] uppercase py-3 px-5 rounded-full inline-flex items-center gap-2 shrink-0 shadow-md transition-colors duration-300"
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
