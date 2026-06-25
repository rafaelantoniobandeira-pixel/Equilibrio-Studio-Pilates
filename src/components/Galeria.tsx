/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowLeft, ArrowRight } from 'lucide-react';
import { galleryData } from '../data';
import AnimatedTitle from './AnimatedTitle';

export default function Galeria() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(2); // Center image default
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section
      id="galeria"
      className="w-full bg-[#F4F1EC] text-[#1A1814] py-24 md:py-32 border-b border-line-dark select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section title & layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="label-eyebrow block mb-3">03 / CONEXÃO VISUAL</span>
            <AnimatedTitle className="text-display-md text-[#1A1814] italic font-light">
              Nosso espaço <br />
              <span className="font-sans not-italic text-[#1A1814]/80 font-extralight">e refinamento em</span> <br />
              <span className="text-accent-a font-normal">detalhes.</span>
            </AnimatedTitle>
          </div>
        </div>

        {/* 3D PERSPECTIVE COVERFLOW CAROUSEL */}
        <div className="relative w-full h-[360px] md:h-[500px] flex items-center justify-center my-6 md:my-10 select-none">
          <div className="absolute inset-0 flex items-center justify-center overflow-visible">
            {galleryData.map((item, index) => {
              const diff = getDiff(index);
              const absDiff = Math.abs(diff);
              const isActive = index === currentIndex;

              // Only render items within viewable range (±2 from center) to prevent overcrowding
              if (absDiff > 2) return null;

              // Responsive layout calculations
              const translateX = diff * (isMobile ? 120 : 250);
              const scale = isActive ? 1.0 : (isMobile ? 0.75 : 0.82) - absDiff * 0.05;
              const opacity = isActive ? 1.0 : 0.85 - absDiff * 0.20;
              const zIndex = 30 - absDiff;

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
                    x: translateX,
                    scale: scale,
                    opacity: opacity,
                    rotateY: diff * -15, // Smooth elegant 3D perspective orientation
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 28,
                  }}
                  onClick={() => {
                    if (isActive) {
                      setSelectedImageIndex(index);
                    } else {
                      setCurrentIndex(index);
                    }
                  }}
                  className={`relative w-[210px] h-[300px] md:w-[350px] md:h-[470px] rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-500
                    ${isActive 
                      ? 'shadow-[0_25px_50px_-12px_rgba(11,11,10,0.45)] border border-[#1A1814]/15' 
                      : 'shadow-md border border-[#1A1814]/5'
                    }`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-all pointer-events-none duration-700 select-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Elegant floating active overlay indicator */}
                  {isActive && (
                    <div className="absolute inset-0 bg-black-org/25 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 transform translate-y-3 hover:translate-y-0 transition-transform duration-500">
                        <div className="w-10 h-10 rounded-full border border-white-crm flex items-center justify-center text-white-crm">
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

        {/* Caption & Navigation Controls Below Carousel (matches user instructions design) */}
        <div className="flex flex-col items-center gap-6 mt-12 md:mt-16">
          {/* Active Image Description block */}
          <div className="min-h-[44px] text-center px-4 max-w-xl">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="font-display italic text-[#1A1814] text-sm md:text-base leading-relaxed font-light"
              >
                {galleryData[currentIndex].alt}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Clean Rounded Navigation Buttons */}
          <div className="flex items-center gap-8">
            <button
              onClick={carouselPrev}
              className="w-12 h-12 rounded-full border border-[#1A1814]/15 text-[#1A1814]/70 hover:border-[#1A1814]/60 hover:text-[#1A1814] flex items-center justify-center transition-all duration-350 hover:scale-[1.05] active:scale-95 cursor-pointer bg-[#F4F1EC] hover:bg-[#1A1814]/[0.02]"
              aria-label="Anterior"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            
            <span className="font-interface text-xs tracking-widest text-[#6B6560] font-medium select-none min-w-[60px] text-center">
              {currentIndex + 1} / {galleryData.length}
            </span>

            <button
              onClick={carouselNext}
              className="w-12 h-12 rounded-full border border-[#1A1814]/15 text-[#1A1814]/70 hover:border-[#1A1814]/60 hover:text-[#1A1814] flex items-center justify-center transition-all duration-350 hover:scale-[1.05] active:scale-95 cursor-pointer bg-[#F4F1EC] hover:bg-[#1A1814]/[0.02]"
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
                className="absolute left-0 z-10 text-white-crm/40 hover:text-accent-a p-4 cursor-pointer hidden md:block"
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
                    className="max-h-[60vh] object-contain border border-line-sut shadow-2xl"
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
                className="absolute right-0 z-10 text-white-crm/40 hover:text-accent-a p-4 cursor-pointer hidden md:block"
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
