/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  isIntroActive?: boolean;
}

export default function Header({ isIntroActive = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  useEffect(() => {
    let lastY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isPinned = window.innerWidth >= 768;
      const threshold = isPinned ? window.innerHeight * 0.9 : 40;
      
      if (currentScrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY < 40) {
        setVisible(true);
      } else if (currentScrollY > lastY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      lastY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Native IntersectionObserver for automatic high-end active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? 'bg-[#1A1814] border-b border-[#FAF8F5]/10 py-4 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.9)]'
            : 'bg-transparent py-8 border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-none px-6 md:px-16 lg:px-24 flex items-center justify-between xl:grid xl:grid-cols-3">
          {/* Logo Column */}
          <div className="flex justify-start">
            <a
              href="#inicio"
              className="group focus:outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={isIntroActive ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center select-none"
              >
                <div className="flex items-center">
                  <div className={`relative overflow-hidden ${scrolled ? 'h-11 md:h-13 lg:h-15 w-[150px]' : 'h-18 md:h-22 lg:h-26 w-[180px]'} md:w-[240px] lg:w-[280px] flex items-center justify-center`}>
                    <img 
                      src="https://res.cloudinary.com/dxpwgum9x/image/upload/v1783109457/WhatsApp_Image_2026-06-04_at_14.23.49_ebpyof.png" 
                      alt="Equilíbrio Studio Logo" 
                      className={`absolute h-[280%] w-auto max-w-none object-contain top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-105 ${scrolled ? 'left-[30%] md:left-1/2' : 'left-1/2'}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            </a>
          </div>

          {/* Desktop Navigation Column (perfectly centered) */}
          <motion.nav
            initial="hidden"
            animate={isIntroActive ? "hidden" : "visible"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04,
                  delayChildren: 0.15,
                }
              }
            }}
            className="hidden xl:flex items-center justify-center gap-10 col-span-1"
          >
            {menuItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <motion.a
                  variants={{
                    hidden: { opacity: 0, y: -8 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  key={item.label}
                  href={item.href}
                  className={`cursor-pointer transition-opacity duration-300 relative py-2.5 group text-[0.78rem] tracking-[0.22em] uppercase font-medium ${
                    isActive ? 'opacity-100 text-white-crm' : 'opacity-60 text-white-crm/90 hover:opacity-100'
                  }`}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-a transition-all duration-400 ease-out w-0 group-hover:w-full opacity-70"
                  />
                </motion.a>
              );
            })}
          </motion.nav>

          {/* Action/Mobile Column */}
          <div className="flex justify-end col-span-1">
            {/* Mobile Hamburguer button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-white-crm focus:outline-none p-1.5 border border-line-sut hover:border-accent-a/50 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
            className="fixed inset-0 bg-black-org z-40 xl:hidden flex flex-col justify-between p-8 pt-32"
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
                  onClick={handleLinkClick}
                  className="text-display-sm text-white-crm italic hover:text-accent-a transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
