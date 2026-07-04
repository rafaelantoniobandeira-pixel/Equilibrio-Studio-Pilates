/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  isIntroActive?: boolean;
}

export default function Hero({ isIntroActive = false }: HeroProps) {
  // Mouse parallax motion values (highly optimized, runs at 120fps)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for gorgeous fluid movement
  const springX = useSpring(mouseX, { stiffness: 35, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 25 });

  // Derived transforms for beautiful 3D layered parallax depth
  const bgX = useTransform(springX, (x) => x * -25);
  const bgY = useTransform(springY, (y) => y * -25);
  const contentX = useTransform(springX, (x) => x * 10);
  const contentY = useTransform(springY, (y) => y * 10);

  useEffect(() => {
    const handleMouseMoveGlobal = (e: globalThis.MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Coordinates normalized between -0.5 and 0.5
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMoveGlobal);
    return () => window.removeEventListener('mousemove', handleMouseMoveGlobal);
  }, [mouseX, mouseY]);

  // Stagger variants for masked headline lines
  const lineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      }
    }
  };

  const lineVariants = {
    hidden: { y: '105%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="inicio"
      className="hero relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-between bg-black-org"
    >
      {/* Background Hero Image with 12s initial zoom-out & parallax tracking */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none scale-105">
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="w-full h-full relative"
        >
          <motion.img
            initial={{ scale: 1.16, opacity: 0 }}
            animate={isIntroActive ? { scale: 1.16, opacity: 0 } : { scale: 1, opacity: 0.58 }}
            transition={{
              scale: { duration: 12, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 2.2, ease: 'easeOut' },
            }}
            src="https://res.cloudinary.com/dxpwgum9x/image/upload/v1780778097/ChatGPT_Image_6_de_jun._de_2026_17_34_43_wmi8pb.png"
            alt="Espaço Studio Pilates com luz solar"
            className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.08] saturate-[0.92] blur-[0.4px]"
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>

      {/* Cinematic Vignette Layers */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-radial-vignette" style={{
        background: 'radial-gradient(ellipse at center, transparent 15%, rgba(11,11,10,0.4) 65%, rgba(11,11,10,0.95) 100%)'
      }} />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black-org via-black-org/60 to-black-org/20" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black-org/80 via-transparent to-transparent" />

      {/* Top Margin Spacer */}
      <div className="relative z-20 w-full max-w-none px-6 md:px-12 lg:px-16 pt-32 pb-4 flex-shrink-0" />

      {/* Main Content: beautifully offset with layered parallax */}
      <motion.div
        style={{ x: contentX, y: contentY }}
        className="relative z-20 w-full max-w-none px-6 md:px-12 lg:px-16 my-auto py-12"
      >
        <div className="max-w-4xl flex flex-col items-start relative">
          
          {/* Headline with Masked line-by-line reveal */}
          <motion.h1
            variants={lineContainerVariants}
            initial="hidden"
            animate={isIntroActive ? "hidden" : "visible"}
            className="hero-headline font-display text-display-lg text-white-crm italic font-normal tracking-tight leading-[1.08] select-none"
          >
            <div className="overflow-hidden block py-1.5">
              <motion.span variants={lineVariants} className="block not-italic font-light">
                Viver sem dor
              </motion.span>
            </div>
            <div className="overflow-hidden block py-1.5">
              <motion.span variants={lineVariants} className="block italic font-light">
                e se mover com
              </motion.span>
            </div>
            <div className="overflow-hidden block py-1.5">
              <motion.span
                variants={{
                  hidden: { y: '105%', opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="relative inline-block text-accent-a italic font-normal"
              >
                confiança.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={isIntroActive ? { scaleX: 0 } : { scaleX: 1 }}
                  transition={{ delay: 1.8, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 bottom-[6px] w-full h-[1.25px] bg-accent-a/60 origin-left"
                />
              </motion.span>
            </div>
          </motion.h1>

          {/* Subtitle labels (staggered entrance) */}
          <motion.div
            initial="hidden"
            animate={isIntroActive ? "hidden" : "visible"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 1.0,
                }
              }
            }}
            className="font-interface text-xs md:text-sm font-light uppercase tracking-[0.25em] text-white-crm/60 mt-10 flex flex-wrap items-center gap-x-3 gap-y-1.5"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>Pilates</motion.span>
            <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.4 } }} className="text-accent-a font-normal">·</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>Fisioterapia</motion.span>
            <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.4 } }} className="text-accent-a font-normal">·</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>Ginástica Rítmica</motion.span>
          </motion.div>

          {/* Luxury CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isIntroActive ? { opacity: 0, y: 25 } : { opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-5 mt-12 w-full"
          >
            <a
              href="#contato"
              className="group relative cta-shining glow-btn-orange inline-flex items-center gap-3 bg-white-crm text-black-org py-4 px-8 font-interface text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(246,154,79,0.15)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Agendar avaliação
                <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </a>

            <a
              href="#sobre"
              className="group relative cta-shining glow-btn-teal inline-flex items-center gap-3 border border-white-crm/25 text-white-crm py-4 px-8 font-interface text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white-crm/5 hover:border-white-crm hover:-translate-y-0.5"
            >
              Conheça o estúdio
            </a>
          </motion.div>

        </div>
      </motion.div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-[0.6rem] tracking-[0.3em] uppercase text-white-crm font-light"
        >
          Scroll
        </motion.span>
        <div className="w-[1px] h-12 bg-white-crm/10 relative overflow-hidden">
          <motion.div
            animate={{
              y: ['-100%', '100%']
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent-a"
          />
        </div>
      </div>
    </section>
  );
}
