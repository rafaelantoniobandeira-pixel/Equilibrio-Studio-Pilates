/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    // Clean up if there is an existing hero-phrase2 to avoid duplication
    const existingPhrase2 = document.querySelector('.hero-phrase2');
    if (existingPhrase2) {
      existingPhrase2.remove();
    }

    const headline = document.querySelector('.hero-headline') as HTMLElement;
    if (!headline) return;

    const originalHTML = headline.innerHTML;
    const words = headline.innerText.trim().split(/\s+/);
    
    headline.innerHTML = words.map(w => {
      // Color 'confiança.' or 'confiança' with orange (#F69A4F) and italic
      const isAccent = w.toLowerCase().includes('confian');
      const style = isAccent ? 'color:#F69A4F;font-style:italic;letter-spacing:0.05em;font-variant-ligatures:none;font-feature-settings:\\"liga\\" 0, \\"clig\\" 0;' : '';
      return `<span class="hw" style="display:inline-block;overflow:hidden;padding-bottom:0.45em;margin-bottom:-0.45em;padding-top:0.25em;margin-top:-0.25em;padding-right:0.2em;margin-right:-0.2em;vertical-align:bottom;line-height:1.25;"><span class="hwi" style="display:inline-block;line-height:1.25;${style}">${w}</span></span>`;
    }).join(' ');

    const phrase2 = document.createElement('div');
    phrase2.className = 'hero-phrase2';
    phrase2.innerHTML = `
      <span class="p2w" style="display:inline-block;overflow:hidden;padding-bottom:0.35em;margin-bottom:-0.35em;padding-top:0.15em;margin-top:-0.15em;padding-right:0.1em;margin-right:-0.1em;vertical-align:bottom;"><span class="p2wi" style="display:inline-block">Quer</span></span>
      <span class="p2w" style="display:inline-block;overflow:hidden;padding-bottom:0.35em;margin-bottom:-0.35em;padding-top:0.15em;margin-top:-0.15em;padding-right:0.1em;margin-right:-0.1em;vertical-align:bottom;"><span class="p2wi p2-accent" style="display:inline-block;font-style:italic;color:#76DDEF">conhecer</span></span>
      <span class="p2w" style="display:inline-block;overflow:hidden;padding-bottom:0.35em;margin-bottom:-0.35em;padding-top:0.15em;margin-top:-0.15em;padding-right:0.1em;margin-right:-0.1em;vertical-align:bottom;"><span class="p2wi" style="display:inline-block">o nosso espaço?</span></span>
    `;

    Object.assign(phrase2.style, {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      fontFamily: "'Bodoni Moda', serif, Georgia, serif",
      fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
      lineHeight: '0.95',
      letterSpacing: '-0.02em',
      color: '#F4F1EC',
      opacity: '0',
      pointerEvents: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.25em'
    });

    const parentOfHeadline = headline.parentElement;
    if (parentOfHeadline) {
      parentOfHeadline.appendChild(phrase2);
    }

    let heroTl: gsap.core.Timeline | null = null;

    ScrollTrigger.matchMedia({
      '(min-width: 768px)': function () {
        heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: '+=130%',
            pin: true,
            pinSpacing: true,
            scrub: 0.8,
          }
        });

        heroTl.to('.hwi', {
          y: '-110%',
          opacity: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power3.in'
        });

        heroTl.set(phrase2, { opacity: 1 });

        heroTl.from('.p2wi', {
          y: '100%',
          opacity: 0,
          duration: 0.85,
          stagger: 0.2,
          ease: 'power4.out'
        }, '-=0.05');

        heroTl.to({}, { duration: 1.2 });
      }
    });

    return () => {
      phrase2.remove();
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (heroTl) {
        heroTl.kill();
      }
      headline.innerHTML = originalHTML;
    };
  }, []);

  const handleScrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="hero relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-between"
    >
      <style>{`
        @keyframes scroll-pulse {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          40% { transform: scaleY(1); transform-origin: top; opacity: 0.8; }
          60% { transform: scaleY(1); transform-origin: bottom; opacity: 0.8; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
        .scroll-line-pulse {
          animation: scroll-pulse 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>

      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0 bg-black-org overflow-hidden">
        <img
          src="https://res.cloudinary.com/dxpwgum9x/image/upload/v1780778097/ChatGPT_Image_6_de_jun._de_2026_17_34_43_wmi8pb.png"
          alt="Espaço Studio Pilates com luz solar"
          className="w-full h-full object-cover object-center opacity-50 brightness-[0.62]"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Cinematic Vignette */}
      <div className="vignette-layer" />

      {/* Top Margin/Eyebrow Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 pb-4 flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#76DDEF] animate-pulse" />
          <span className="label-eyebrow text-white-crm/90">PONTE ALTA NORTE DO GAMA — DF</span>
        </motion.div>
      </div>

      {/* Main Content: asymmetrical typography anchored near 55-65% height of screen with my-auto spacing */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-12">
        
        {/* Left column for headline */}
        <div className="lg:col-span-8 flex flex-col items-start relative">
          <div className="relative w-full">
            <h1 className="hero-headline text-display-lg text-white-crm italic font-normal tracking-tight select-none">
              Viver sem dor e se mover com <span className="text-[#F69A4F] italic font-normal" style={{ letterSpacing: '0.05em', fontVariantLigatures: 'none', fontFeatureSettings: '"liga" 0, "clig" 0', paddingBottom: '0.45em', marginBottom: '-0.45em', verticalAlign: 'bottom', display: 'inline-block', lineHeight: '1.25' }}>confiança.</span>
            </h1>
          </div>

          {/* Subtitle labels */}
          <p className="font-interface text-xs md:text-sm font-light uppercase tracking-[0.25em] text-white-crm/70 mt-6">
            Pilates <span className="text-accent-a/50 font-normal">·</span> Fisioterapia <span className="text-accent-a/50 font-normal">·</span> Ginástica Rítmica
          </p>
        </div>

        {/* Right column for separated Call To Action button */}
        <div className="lg:col-span-4 flex lg:justify-end mt-4 lg:mt-0">
          <a
            href="#contato"
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-4 bg-transparent border border-[rgba(244,241,236,0.5)] text-white py-5 px-8 font-interface text-xs font-semibold uppercase tracking-[0.2em] transition-all group duration-300 transform hover:-translate-y-0.5 hover:bg-white hover:text-black hover:border-transparent"
          >
            Agendar avaliação
            <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
