/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Star, Award, Users, Heart } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';
import { InteractiveMetricCard } from './InteractiveMetricCard';

export default function VideoImersivo() {
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const videoUrl = 'https://res.cloudinary.com/dxpwgum9x/video/upload/v1782417133/video_estudio_pilates_lc9jeo.mp4';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.log('Autoplay blocked:', err));
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="video-institucional"
      className="relative w-full bg-[#FAF8F5] py-24 md:py-32 overflow-hidden select-none text-[#1A1814]"
      style={{
        background: 'linear-gradient(to bottom, #FAF8F5, #F4F1EC)'
      }}
    >
      {/* Background abstract decorations for premium editorial feel */}
      <div className="absolute top-[20%] -left-[10%] w-[40%] aspect-square rounded-full bg-[#F69A4F]/[0.015] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] -right-[10%] w-[40%] aspect-square rounded-full bg-[#F69A4F]/[0.015] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F69A4F]" />
            <span className="label-eyebrow tracking-[0.25em] text-[0.68rem] font-bold text-[#F69A4F] uppercase">
              04 / ATMOSFERA E PRÁTICA
            </span>
          </div>
          <AnimatedTitle className="text-display-md text-[#1A1814] italic font-light leading-[1.15] tracking-tight max-w-2xl">
            Sinta a experiência <br />
            <span className="font-sans not-italic text-[#1A1814]/90 font-extralight">do nosso espaço</span>
          </AnimatedTitle>
          <p className="font-interface text-sm md:text-base leading-relaxed text-[#5A544F] font-light max-w-2xl mt-2">
            Explore em movimento o carinho, a precisão e o acolhimento que preparamos para receber você em cada sessão.
          </p>
        </div>

        {/* 70-80% Width Video Container with Glassmorphism Play Button */}
        <div className="w-full max-w-5xl mx-auto flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setIsPlayingFull(true)}
            className="w-full aspect-[16/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_25px_65px_rgba(26,24,20,0.16)] border border-[#1A1814]/10 relative group cursor-pointer bg-[#FAF8F5]"
          >
            {/* Ambient muted loop background video */}
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03] pointer-events-none"
              referrerPolicy="no-referrer"
            />

            {/* Subtly reduced dark overlay for high brightness & welcoming environment */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors duration-500" />
            
            {/* Top Right "Vídeo Completo" subtle tag */}
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 text-white font-mono text-[9px] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Vídeo Completo
            </div>

            {/* Center Play Button with stunning Glassmorphism style */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="w-20 h-20 md:w-26 md:h-26 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/45 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_20px_45px_rgba(246,154,79,0.22)]"
              >
                {/* Rippling glass outer ring */}
                <span className="absolute inset-0 rounded-full border border-white/30 animate-pulse" />
                <span className="absolute -inset-3 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
                
                <Play size={26} className="fill-current text-white transform translate-x-0.5 transition-transform group-hover:scale-110" />
              </motion.div>
            </div>

            {/* Video lower card styling indicator */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white-crm z-10 pointer-events-none max-w-md">
              <span className="font-mono text-[0.58rem] tracking-[0.3em] uppercase text-[#F69A4F] font-bold block mb-1">
                Acolhimento de Alta Performance
              </span>
              <span className="font-display italic text-lg md:text-xl text-white/90 block font-light leading-tight">
                Um espaço planejado para a sua reabilitação física.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Editorial Highlight Quote Below Video */}
        <div className="text-center max-w-4xl mx-auto mt-20 px-6">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display italic text-2xl md:text-3xl lg:text-4xl text-[#1A1814]/90 font-light leading-relaxed tracking-tight"
          >
            "O movimento consciente <span className="text-[#F69A4F] font-medium">reabilita o corpo</span>, acalma a mente e devolve a <span className="text-[#F69A4F] font-medium">autonomia</span> para a sua vida."
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[1.5px] bg-[#F69A4F]/40 mx-auto mt-10" 
          />
        </div>

        {/* Discrete & Elegant Credibility Metrics - Fully 3D Interactive Grid */}
        <div className="max-w-6xl mx-auto mt-16 px-6 w-full relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-center">
            <InteractiveMetricCard
              numberText="500+"
              label="Alunos Atendidos"
              description="Atendidos com cuidado individualizado e diagnósticos biomecânicos minuciosos para alívio de lesões."
              subLabel="Gama - DF"
              icon={<Users size={24} />}
            />
            <InteractiveMetricCard
              numberText="5+ Anos"
              label="Experiência Clínica"
              description="De dedicação científica, aperfeiçoamento constante e carinho com cada queixa ou limitação física."
              subLabel="Estúdio de Excelência"
              icon={<Award size={24} />}
              iconColorClass="text-[#FAF8F5] dark:text-[#FAF8F5]"
              accentBgClass="bg-[#F69A4F]"
            />
            <InteractiveMetricCard
              numberText="5.0"
              label="Nota Máxima no Google"
              description="100% de satisfação com depoimentos reais que atestam a qualidade, o silêncio e o respeito da nossa equipe."
              subLabel="Avaliações Reais"
              icon={
                <div className="flex gap-0.5 text-[#F69A4F]">
                  <Star size={20} className="fill-current" />
                </div>
              }
            />
          </div>
        </div>

      </div>

      {/* FULLSCREEN ACCESSIBLE CINEMATIC PLAYER MODAL */}
      <AnimatePresence>
        {isPlayingFull && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[110] flex flex-col justify-center items-center p-4 md:p-12"
            onClick={() => setIsPlayingFull(false)}
          >
            {/* Top header controls */}
            <div className="absolute top-6 right-6 z-[120]">
              <button
                onClick={() => setIsPlayingFull(false)}
                className="text-white/60 hover:text-white p-3 border border-white/10 hover:border-white/40 rounded-full transition-colors cursor-pointer"
                aria-label="Voltar para a Navegação"
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Frame */}
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[420px] rounded-[24px] aspect-[9/16] max-h-[82vh] overflow-hidden border border-white/10 shadow-2xl relative bg-black"
            >
              <video
                src={videoUrl}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover bg-black"
              />
            </motion.div>

            <p className="text-white/40 text-xs mt-6 uppercase tracking-[0.25em] font-interface text-center">
              Equilíbrio Studio — Toque para silenciar ou controlar o reprodutor.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
