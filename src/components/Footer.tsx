/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, ArrowUp, Phone } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
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
    <footer className="w-full bg-black-org text-white-crm pt-16 pb-8 border-t border-line-sut select-none relative z-10">
      
      {/* Scroll to Top Trigger */}
      <a
        href="#inicio"
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-line-sut hover:border-accent-a bg-black-org flex items-center justify-center text-white-crm hover:text-accent-a transition-colors cursor-pointer group shadow-xl z-20"
        aria-label="Ir para o Topo"
      >
        <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
      </a>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Column 1: Logo + brand quote description */}
        <div className="md:col-span-5 flex flex-col items-start gap-4">
          <div className="flex items-center group cursor-pointer">
            <div className="relative overflow-hidden h-18 md:h-22 lg:h-26 w-[180px] md:w-[240px] lg:w-[280px] flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dxpwgum9x/image/upload/v1783109457/WhatsApp_Image_2026-06-04_at_14.23.49_ebpyof.png" 
                alt="Equilíbrio Studio Logo" 
                className="absolute h-[280%] w-auto max-w-none object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <p className="font-interface text-xs text-muted-lbl max-w-sm mt-2 leading-relaxed">
            Nossa missão é restaurar a harmonia corporal através da precisão mecânica, respeito biológico e reabilitação de alta performance na Ponte Alta Norte do Gama, DF.
          </p>
        </div>

        {/* Column 2: Smooth Links */}
        <div className="md:col-span-4 flex flex-col items-start gap-3">
          <div className="text-[0.62rem] font-semibold tracking-widest text-[#FFF]/30 uppercase mb-2">
            Navegação
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <a
              href="#inicio"
              className="text-xs text-muted-lbl hover:text-white-crm transition-colors text-left font-light font-interface uppercase tracking-widest"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-xs text-muted-lbl hover:text-white-crm transition-colors text-left font-light font-interface uppercase tracking-widest"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-xs text-muted-lbl hover:text-white-crm transition-colors text-left font-light font-interface uppercase tracking-widest"
            >
              Pilates
            </a>
            <a
              href="#servicos"
              className="text-xs text-muted-lbl hover:text-white-crm transition-colors text-left font-light font-interface uppercase tracking-widest"
            >
              Fisioterapia
            </a>
            <a
              href="#servicos"
              className="text-xs text-muted-lbl hover:text-white-crm transition-colors text-left font-light font-interface uppercase tracking-widest"
            >
              Ginástica
            </a>
            <a
              href="#contato"
              className="text-xs text-muted-lbl hover:text-white-crm transition-colors text-left font-light font-interface uppercase tracking-widest"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Column 3: Social & Brands */}
        <div className="md:col-span-3 flex flex-col items-start gap-3">
          <div className="text-[0.62rem] font-semibold tracking-widest text-[#FFF]/30 uppercase mb-2">
            Nossas Redes
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="https://instagram.com/pequilibriostudio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-lbl hover:text-accent-a transition-colors"
            >
              <Instagram size={14} className="text-accent-a" />
              Instagram
            </a>
            <a
              href="https://wa.me/5561983614547?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avaliação."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-lbl hover:text-accent-b transition-colors"
            >
              <Phone size={14} className="text-accent-b" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* SEO Text Block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-left">
        <h4 className="font-display text-sm text-[#FAF8F5]/50 font-medium tracking-wider mb-3">
          O Estúdio | Pilates no Gama-DF
        </h4>
        <p className="font-interface text-[11px] leading-relaxed text-muted-lbl/50 font-normal max-w-4xl normal-case">
          O Equilíbrio Studio Pilates é a principal referência de <strong className="text-[#FAF8F5]/70 font-semibold">pilates no Gama</strong>, localizado na Ponte Alta Norte do Gama-DF. Fundado e dirigido pela fisioterapeuta Priscilla, nosso <strong className="text-[#FAF8F5]/70 font-semibold">estúdio de pilates</strong> oferece um ambiente acolhedor e altamente técnico. Desenvolvemos <strong className="text-[#FAF8F5]/70 font-semibold">aulas de pilates Gama-DF</strong> com foco especial em <strong className="text-[#FAF8F5]/70 font-semibold">pilates clínico</strong> e <strong className="text-[#FAF8F5]/70 font-semibold">reabilitação postural</strong>, auxiliando no tratamento de lesões e oferecendo programas de <strong className="text-[#FAF8F5]/70 font-semibold">pilates para dor nas costas</strong>, hérnia de disco e escoliose. Nosso estúdio é ideal tanto para o público de <strong className="text-[#FAF8F5]/70 font-semibold">pilates para iniciantes</strong>, que começam a se exercitar de forma segura, quanto para quem busca o <strong className="text-[#FAF8F5]/70 font-semibold">fortalecimento do core</strong>, ganho de mobilidade e vitalidade geral. Através de <strong className="text-[#FAF8F5]/70 font-semibold">aulas em grupo reduzido</strong>, asseguramos acompanhamento individualizado de excelência. Agende uma avaliação detalhada e mude sua vida pelo movimento consciente.
        </p>
      </div>

      {/* Divider fine line separator */}
      <div className="w-full h-[1px] bg-line-sut max-w-7xl mx-auto mb-8" />

      {/* Bottom base legal text and credits */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.65rem] text-muted-lbl/70 uppercase tracking-widest font-interface">
        <p>
          © 2026 Equilíbrio Studio Pilates  ·  Todos os direitos reservados
        </p>
        <p className="text-muted-lbl/50">
          <a href="mailto:rafaelantoniobandeira@gmail.com" className="hover:text-accent-a transition-colors font-medium">DESENVOLVIDO POR RAFAEL ANTONIO WEB</a>
        </p>
      </div>

    </footer>
  );
}
