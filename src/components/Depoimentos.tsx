/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const testimonials = [
  {
    id: 't1',
    text: '“Cheguei no Studio com queixas de dores nos dois joelhos que já foram fraturados e fiz cirurgia com pinos e placa, e com uma fratura não consolidada no ombro. Eu não conseguia descer uma escada e às vezes nem pentear o cabelo. Com menos de 2 meses fazendo Pilates com a Priscilla e com a Taty, não só consigo descer escadas como até secar meu cabelo sozinhá. O atendimento é totalmente diferenciado.”',
    author: 'Eliene Kelly Vieira',
    service: 'Aluna de Pilates',
    rating: 5
  },
  {
    id: 't2',
    text: '“Esse studio de pilates tem o compromisso das atividades serem realizadas de forma adequada e personalizada. A minha experiência está sendo muito satisfatória, pois estava sentindo muita dor e mal estar na lombar e hoje já estou sem remédios e sem dores, fortalecendo os músculos a cada dia. Agradeço a dedicação de toda a Equipe do Studio.”',
    author: 'Mara Tabatinga',
    service: 'Aluna de Pilates',
    rating: 5
  },
  {
    id: 't3',
    text: '“Excelente studio de pilates na Ponte Alta Norte do Gama. Priscilla super comprometida nas aulas. Além do pilates, o studio tem aulas de ginástica rítmica, que a minha filha ama muito e frequenta com maior prazer e felicidade todos os dias.”',
    author: 'Adriana Azevedo',
    service: 'Mãe de Aluna (G.R. & Pilates)',
    rating: 5
  },
  {
    id: 't4',
    text: '“A experiência está sendo ótima, tem resolvido meus problemas de dores no corpo, na lombar, e a Priscilla é ótima como pessoa e como profissional. Só tenho elogios, estou lá a pouco tempo e já tenho resultados incríveis com movimentos precisos.”',
    author: 'Gerson',
    service: 'Aluno de Pilates',
    rating: 5
  },
  {
    id: 't5',
    text: '“Gosto muito de fazer Pilates na Equilíbrio Studio. Equipe focada e comprometida com o resultado. Cuidado individualizado com cada aluno, adaptando cada série à dor ou limitações físicas que apresentamos no dia. Muito bom mesmo.”',
    author: 'Cassia Silva',
    service: 'Aluna de Pilates',
    rating: 5
  },
  {
    id: 't6',
    text: '“Estúdio de pilates maravilhoso, com instrutoras muito competentes. Lugar extremamente limpo, organized, silencioso e aconchegante. As aulas são dinâmicas e inteiramente personalizadas para o nosso bem-estar.”',
    author: 'Helô Christiane',
    service: 'Aluna de Pilates',
    rating: 5
  },
  {
    id: 't7',
    text: '“Faço Pilates com a Priscilla há quase dois anos e é uma experiência extremamente gratificante. Uma profissional muito capacitada, cuidadosa, que faz com que o aluno se sinta confiante. Está sempre buscando a melhor forma de reabilitar o aluno.”',
    author: 'Lucimar Rodrigues',
    service: 'Aluna de Pilates',
    rating: 5
  }
];

export default function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [visibleCards, setVisibleCards] = useState(3);
  const isFirstRender = useRef(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Resize listener to adapt carousel layout dynamically
  useEffect(() => {
    const handleResize = () => {
      let vc = 3;
      if (window.innerWidth < 640) {
        vc = 1;
      } else if (window.innerWidth < 1024) {
        vc = 2;
      } else {
        vc = 3;
      }
      setVisibleCards(vc);

      if (isFirstRender.current) {
        if (vc === 3) {
          setCurrentIndex(2); // Gerson (idx 3) is in the middle of 2, 3, 4
        } else if (vc === 2) {
          setCurrentIndex(2); // Displays 2, 3 -> Gerson (idx 3) is visible
        } else {
          setCurrentIndex(3); // Gerson (idx 3) is the active single card
        }
        isFirstRender.current = false;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.max(testimonials.length - visibleCards + 1, 1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="depoimentos"
      className="w-full bg-[#FAF8F5] py-24 md:py-32 border-b border-[#1A1814]/10 relative select-none overflow-hidden text-[#1A1814]"
    >
      {/* Decorative vertical background visual label */}
      <div className="absolute left-12 bottom-12 pointer-events-none opacity-[0.02] select-none font-display italic text-[10vw] leading-none text-[#1A1814]">
        Evolução
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F69A4F]" />
              <span className="label-eyebrow tracking-[0.25em] text-[0.68rem] font-bold text-[#F69A4F] uppercase">
                05 / HISTÓRIAS REAIS
              </span>
            </div>
            <AnimatedTitle className="text-display-md text-[#1A1814] italic font-light leading-[1.15] tracking-tight max-w-2xl">
              Quem vivencia o <br />
              <span className="text-[#F69A4F] font-normal italic">nosso cuidado diário.</span>
            </AnimatedTitle>
          </div>

          {/* Navigation Controls in top-right for desktop */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#1A1814]/10 bg-white hover:bg-[#FAF8F5] hover:border-[#F69A4F] text-[#1A1814]/70 hover:text-[#F69A4F] flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 active:scale-90 transition-all duration-300"
              aria-label="Depoimento Anterior"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#1A1814]/10 bg-white hover:bg-[#FAF8F5] hover:border-[#F69A4F] text-[#1A1814]/70 hover:text-[#F69A4F] flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 active:scale-90 transition-all duration-300"
              aria-label="Próximo Depoimento"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="overflow-visible relative -mx-4 px-4">
          <div 
            ref={sliderRef}
            className="flex gap-6 md:gap-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                style={{
                  width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 24 / visibleCards}px)`
                }}
                className="shrink-0 group"
              >
                <div className="bg-white rounded-[24px] border border-[#1A1814]/5 p-8 md:p-10 h-full flex flex-col justify-between shadow-[0_15px_45px_rgba(26,24,20,0.02)] group-hover:shadow-[0_25px_60px_rgba(26,24,20,0.06)] group-hover:border-[#F69A4F]/30 group-hover:translate-y-[-8px] transition-all duration-500 relative overflow-hidden bg-gradient-to-br from-white to-[#FAF8F5]/30">
                  
                  {/* Decorative background quote mark */}
                  <div className="absolute top-4 right-6 text-[#F69A4F]/[0.08] font-display text-[8rem] leading-none pointer-events-none select-none transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                    ”
                  </div>

                  {/* Main Card Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    
                    {/* Star Rating & Quote Text */}
                    <div>
                      {/* Five Stars Rating */}
                      <div className="flex gap-1 text-[#F69A4F] mb-6">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={15} className="fill-current" />
                        ))}
                      </div>

                      {/* Client testimonial review comment */}
                      <p className="font-interface text-sm md:text-base leading-relaxed text-[#4D4844] font-normal italic mb-8">
                        {item.text}
                      </p>
                    </div>

                    {/* Author Detail Block */}
                    <div className="pt-6 border-t border-[#1A1814]/5">
                      <h4 className="font-interface text-sm font-semibold text-[#1A1814] tracking-wide">
                        {item.author}
                      </h4>
                      <p className="font-interface text-[0.72rem] text-[#F69A4F] font-semibold tracking-wider uppercase mt-1">
                        {item.service}
                      </p>
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Minimal Bottom Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="relative h-2 rounded-full cursor-pointer transition-all duration-500"
              style={{
                width: currentIndex === idx ? '24px' : '8px',
                backgroundColor: currentIndex === idx ? '#F69A4F' : 'rgba(26, 24, 20, 0.15)',
              }}
              aria-label={`Ir para a página ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
