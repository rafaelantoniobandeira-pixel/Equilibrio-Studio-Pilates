/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowLeft, ArrowRight } from 'lucide-react';
import { galleryData } from '../data';
import AnimatedTitle from './AnimatedTitle';

export default function Galeria() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(2); // Center image default
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Responsive break detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const carouselNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  };

  const carouselPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  const lightboxNext = () => {
    setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % galleryData.length : null));
  };

  const lightboxPrev = () => {
    setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + galleryData.length) % galleryData.length : null));
  };

  // Keyboard navigation for carousel and lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'Escape') setSelectedImageIndex(null);
        if (e.key === 'ArrowRight') lightboxNext();
        if (e.key === 'ArrowLeft') lightboxPrev();
      } else {
        if (e.key === 'ArrowRight') carouselNext();
        if (e.key === 'ArrowLeft') carouselPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  // Cyclic difference calculation to correctly render coverflow around center
  const getDiff = (index: number) => {
    let diff = index - currentIndex;
    const len = galleryData.length;
    while (diff < -Math.floor(len / 2)) diff += len;
    while (diff > Math.floor(len / 2)) diff -= len;
    return diff;
  };

  // Subtle interactive mouse parallax tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile) return;
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (clientY - top) / height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="galeria"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full bg-[#F4F1EC] text-[#1A1814] pt-14 pb-24 md:pt-18 md:pb-32 border-b border-line-dark select-none overflow-hidden relative"
    >
      {/* Subtle architectural dot grid texture to avoid a flat background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(rgba(246, 154, 79, 0.15) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Soft Warm Identity Glow behind the composition */}
      <motion.div 
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] max-w-[850px] aspect-square rounded-full pointer-events-none z-0 opacity-80 blur-[130px]" 
        animate={{
          x: mousePos.x * -40,
          y: mousePos.y * -25,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.6 }}
        style={{
          background: 'radial-gradient(circle, rgba(246,154,79,0.16) 0%, rgba(14,114,129,0.05) 45%, rgba(244,241,236,0) 75%)'
        }} 
      />

      {/* Premium Ambient Noise Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-noise" />

      {/* Content wrapper with restricted width of 1200-1300px */}
      <div className="max-w-[1250px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Centered high-impact Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-14 gap-3 relative z-10">
          <span className="label-eyebrow block tracking-[0.35em] text-[0.68rem] font-medium text-[#1A1814]/60 uppercase">
            03 / CONEXÃO VISUAL
          </span>
          <AnimatedTitle className="text-display-md text-[#1A1814] italic font-light leading-[1.1] tracking-tight max-w-3xl">
            Nosso espaço <span className="font-sans not-italic text-[#1A1814]/90 font-extralight">e refinamento em</span> <br />
            <span className="text-[#F69A4F] font-normal not-italic relative inline-block">
              detalhes
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#F69A4F]/25 rounded-full" />
            </span>
          </AnimatedTitle>
        </div>

        {/* 3D PERSPECTIVE COVERFLOW CAROUSEL WITH DEPTH */}
        <div className="relative w-full h-[390px] md:h-[550px] flex items-center justify-center select-none overflow-visible">
          <div className="absolute inset-0 flex items-center justify-center overflow-visible">
            {galleryData.map((item, index) => {
              const diff = getDiff(index);
              const absDiff = Math.abs(diff);
              const isActive = index === currentIndex;

              // Only render items within viewable range (±2 from center) to prevent overcrowding
              if (absDiff > 2) return null;

              // Responsive layout calculations
              const translateX = diff * (isMobile ? 120 : 275);
              // Scale: central is 20% bigger than base standard card. Side cards scale progressively down
              const scale = isActive ? 1.15 : (isMobile ? 0.72 : 0.8) - absDiff * 0.08;
              const opacity = isActive ? 1.0 : (absDiff === 1 ? 0.6 : 0.25);
              const zIndex = 30 - absDiff;
              const blurVal = isActive ? 0 : (absDiff === 1 ? 2.5 : 5);

              return (
                <motion.div
                  key={item.id}
                  style={{
                    position: 'absolute',
                    zIndex,
                    originY: '50%',
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    x: translateX + mousePos.x * (isActive ? 15 : 6),
                    y: mousePos.y * (isActive ? 10 : 4),
                    scale: scale,
                    opacity: opacity,
                    rotateY: diff * -16, // Smooth elegant 3D perspective orientation
                    z: isActive ? 100 : -120 * absDiff, // Depth feeling
                  }}
                  whileHover={isActive ? {
                    scale: 1.18,
                    y: -12,
                    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
                  } : {
                    scale: scale + 0.03,
                    y: -6,
                    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 140,
                    damping: 24,
                    mass: 0.8,
                  }}
                  onClick={() => {
                    if (isActive) {
                      setSelectedImageIndex(index);
                    } else {
                      setCurrentIndex(index);
                    }
                  }}
                  className={`relative w-[200px] h-[280px] md:w-[330px] md:h-[450px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-500 will-change-transform
                    ${isActive 
                      ? 'shadow-[0_35px_80px_rgba(246,154,79,0.22),_0_20px_40px_rgba(11,11,10,0.18)] border-2 border-[#F69A4F]/30' 
                      : 'shadow-lg border border-[#1A1814]/10'
                    }`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{
                      filter: `blur(${blurVal}px)`,
                      transition: 'filter 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Elegant floating active overlay indicator */}
                  {isActive && (
                    <div className="absolute inset-0 bg-[#0B0B0A]/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 transform translate-y-3 hover:translate-y-0 transition-transform duration-500">
                        <div className="w-10 h-10 rounded-full border border-white-crm flex items-center justify-center text-white-crm bg-black/35 backdrop-blur-md">
                          <Maximize2 size={16} />
                        </div>
                        <span className="text-[0.62rem] tracking-widest text-white-crm/90 uppercase font-medium">
                          Ampliar Espaço
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Caption & Navigation Controls Below Carousel */}
        <div className="flex flex-col items-center gap-6 mt-14 md:mt-20 relative z-10 w-full">
          
          {/* Active Image Description block */}
          <div className="min-h-[80px] text-center px-6 max-w-2xl mx-auto flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display italic text-[#1A1814] text-base md:text-xl leading-relaxed font-light"
              >
                {galleryData[currentIndex].alt}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Premium Dots & Navigation buttons */}
          <div className="flex items-center gap-10 mt-2">
            {/* Minimalist Prev Button */}
            <button
              onClick={carouselPrev}
              className="w-12 h-12 rounded-full border border-[#1A1814]/15 text-[#1A1814]/75 hover:border-[#F69A4F] hover:text-[#F69A4F] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer bg-white/40 hover:bg-white shadow-sm"
              aria-label="Anterior"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            
            {/* Modern Indicator Dots with Small Numbers */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.62rem] tracking-wider text-[#1A1814]/40 font-semibold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              
              <div className="flex items-center gap-2">
                {galleryData.map((_, idx) => {
                  const isActiveDot = idx === currentIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className="relative h-2 rounded-full cursor-pointer transition-all duration-500"
                      style={{
                        width: isActiveDot ? '20px' : '8px',
                        backgroundColor: isActiveDot ? '#F69A4F' : 'rgba(26, 24, 20, 0.15)',
                      }}
                      aria-label={`Ir para imagem ${idx + 1}`}
                    />
                  );
                })}
              </div>

              <span className="font-mono text-[0.62rem] tracking-wider text-[#1A1814]/40 font-semibold">
                {String(galleryData.length).padStart(2, '0')}
              </span>
            </div>

            {/* Minimalist Next Button */}
            <button
              onClick={carouselNext}
              className="w-12 h-12 rounded-full border border-[#1A1814]/15 text-[#1A1814]/75 hover:border-[#F69A4F] hover:text-[#F69A4F] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer bg-white/40 hover:bg-white shadow-sm"
              aria-label="Próximo"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX DIALOG */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black-org/95 backdrop-blur-md z-[100] flex flex-col justify-between p-6"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Top row */}
            <div className="flex items-center justify-between w-full relative z-10 max-w-7xl mx-auto">
              <div className="flex flex-col text-left">
                <span className="font-interface text-[0.68rem] uppercase tracking-[0.25em] text-accent-a font-medium">
                  Equilíbrio Studio Pilates
                </span>
                <span className="font-interface text-[0.6rem] text-[#8A8680] uppercase tracking-widest mt-1">
                  Foto {selectedImageIndex + 1} de {galleryData.length}
                </span>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="text-white-crm/60 hover:text-white-crm p-3 rounded-full border border-white-crm/10 hover:border-white-crm/40 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Center Image Frame */}
            <div className="relative flex items-center justify-center h-[65vh] md:h-[70vh] w-full max-w-5xl mx-auto select-none">
              
              {/* Left Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  lightboxPrev();
                }}
                className="absolute left-0 z-10 text-white-crm/40 hover:text-[#F69A4F] p-4 cursor-pointer hidden md:block"
                aria-label="Previous Image"
              >
                <ChevronLeft size={36} />
              </button>

              {/* Central image view */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="max-h-full max-w-[90%] md:max-w-[80%] flex justify-center items-center relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={galleryData[selectedImageIndex].image}
                    alt={galleryData[selectedImageIndex].alt}
                    className="max-h-[60vh] object-contain border border-line-sut shadow-2xl rounded-lg"
                    referrerPolicy="no-referrer"
                    decoding="async"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Right Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  lightboxNext();
                }}
                className="absolute right-0 z-10 text-white-crm/40 hover:text-[#F69A4F] p-4 cursor-pointer hidden md:block"
                aria-label="Next Image"
              >
                <ChevronRight size={36} />
              </button>
            </div>

            {/* Bottom Caption row */}
            <div className="w-full text-center relative z-10 max-w-4xl mx-auto">
              <p className="font-display italic text-white-crm text-sm md:text-base leading-relaxed font-light px-6">
                {galleryData[selectedImageIndex].alt}
              </p>

              {/* Mobile controls */}
              <div className="flex justify-center gap-8 mt-6 md:hidden">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    lightboxPrev();
                  }}
                  className="p-3 text-white-crm border border-line-sut rounded-full"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    lightboxNext();
                  }}
                  className="p-3 text-white-crm border border-line-sut rounded-full"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
