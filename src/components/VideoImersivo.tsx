/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

export default function VideoImersivo() {
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const mutedLoop = true;
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = 'https://res.cloudinary.com/dxpwgum9x/video/upload/v1782417133/video_estudio_pilates_lc9jeo.mp4';

  // Ensure native video element's muted state synchronizes reliably with React state changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = mutedLoop;
    }
  }, [mutedLoop]);

  return (
    <section className="relative w-full min-h-[75vh] md:min-h-[80vh] bg-black-org overflow-hidden select-none flex flex-col justify-center py-16 md:py-24">
      
      {/* Absolute high-design background, plays high-res aesthetic video under linear gradients */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted={mutedLoop}
          playsInline
          className="absolute w-full h-full object-cover pointer-events-none brightness-[70%] scale-[1.01]"
        />
        {/* Soft linear overlays that frame the video and keep it balanced */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-org via-black-org/40 to-black-org" />
        <div className="absolute inset-0 bg-black-org/35" />
      </div>

      {/* Main Overlay contents */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-12 md:p-16 max-w-7xl mx-auto items-center">
        
        {/* Empty space on top to push things down */}
        <div />

        {/* Big Interactive circular Play Button */}
        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlayingFull(true)}
          className="w-20 h-20 rounded-full border border-white-crm/40 hover:border-accent-a flex items-center justify-center text-white-crm hover:text-accent-a bg-black-org/50 backdrop-blur-md cursor-pointer transition-colors duration-300 relative group"
          aria-label="Abrir Vídeo Institucional"
        >
          {/* Subtle outer ripple rings */}
          <span className="absolute inset-0 rounded-full border border-accent-a/30 animate-ping group-hover:block hidden" />
          <Play size={24} className="fill-current transform translate-x-0.5" />
        </motion.button>

        {/* Text descriptions anchored below the clip framing */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="label-eyebrow text-accent-a/90">CONHEÇA O NOSSO ESPAÇO</span>
          <AnimatedTitle className="text-display-md text-white-crm font-light italic leading-none">
            "Um refúgio para <br />
            <span className="font-sans not-italic text-white-crm/80 font-extralight">recuperar o equilíbrio duradouro."</span>
          </AnimatedTitle>
        </div>

      </div>

      {/* EXPANDED FULLSCREEN PLAYER MODAL */}
      <AnimatePresence>
        {isPlayingFull && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black-org/98 backdrop-blur-lg z-[110] flex flex-col justify-center items-center p-4 md:p-12"
            onClick={() => setIsPlayingFull(false)}
          >
            {/* Header controls inside expanded video */}
            <div className="absolute top-6 right-6 z-[120] flex items-center gap-4">
              <button
                onClick={() => setIsPlayingFull(false)}
                className="text-white-crm/60 hover:text-white-crm hover:border-white-crm/40 p-3 border border-white-crm/10 rounded-full transition-colors cursor-pointer"
                aria-label="Voltar para a Navegação"
              >
                <X size={22} />
              </button>
            </div>

            {/* Video Box adjusted to 9:16 vertical cinema layout */}
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[420px] rounded-lg aspect-[9/16] max-h-[82vh] overflow-hidden border border-line-sut/40 shadow-2xl relative bg-black"
            >
              <video
                src={videoUrl}
                autoPlay
                muted
                controls
                playsInline
                className="w-full h-full object-cover bg-black"
              />
            </motion.div>

            <p className="text-muted-lbl text-xs mt-6 uppercase tracking-[0.25em] font-interface text-center">
              Assista ao vídeo e conheça nosso espaço de prática e cuidado.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
