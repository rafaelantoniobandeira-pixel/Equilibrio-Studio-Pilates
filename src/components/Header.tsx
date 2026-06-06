/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black-org/90 backdrop-blur-xl border-b border-line-sut py-4 shadow-xl'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Elegant SVG Logo representation */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img
              src="https://res.cloudinary.com/dxpwgum9x/image/upload/v1780780283/ChatGPT_Image_6_de_jun._de_2026_18_11_12_wu8j4w.png"
              alt="Equilíbrio Studio Logo"
              className="w-[125px] h-[68px] object-contain transition-transform group-hover:scale-[1.04]"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-[#76DDEF] font-display text-[1.05rem] font-bold tracking-[0.2em] leading-none uppercase">
                Equilíbrio
              </span>
              <div className="mt-1.5">
                <span className="text-white font-interface text-[0.5rem] font-bold tracking-[0.25em] leading-none uppercase px-1.5 py-0.5 bg-[#F69A4F] rounded-[3px] inline-block">
                  Studio Pilates
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="nav-link cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/5561983614547?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avaliação%20gratuita."
              target="_blank"
              rel="noreferrer"
              className="btn-editorial"
            >
              Agendar Avaliação
            </a>
          </div>

          {/* Mobile Hamburguer button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white-crm focus:outline-none p-1 border border-line-sut hover:border-accent-a/50 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black-org z-40 lg:hidden flex flex-col justify-between p-8 pt-32"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden">
              <svg width="100%" height="100%">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F4F1EC" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <nav className="flex flex-col gap-6 relative">
              <div className="text-[0.62rem] tracking-[0.3em] text-muted-lbl uppercase mb-4 font-semibold border-b border-line-sut pb-2">
                Navegação Principal
              </div>
              {menuItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className="text-display-sm text-white-crm italic hover:text-accent-a transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative"
            >
              <a
                href="https://wa.me/5561983614547?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avaliação%20gratuita."
                target="_blank"
                rel="noreferrer"
                className="w-full text-center flex items-center justify-center gap-2 py-4 bg-accent-a text-black-org font-interface text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent-a/90 transition-colors"
              >
                <Phone size={14} /> Agendar Avaliação Grátis
              </a>
              <div className="mt-6 text-center text-[0.68rem] text-muted-lbl">
                Ponte Alta Norte do Gama, DF
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
