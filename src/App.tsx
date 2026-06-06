/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Galeria from './components/Galeria';
import VideoImersivo from './components/VideoImersivo';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  // Setup standard scroll progress tracking at the top border
  const { scrollYProgress } = useScroll();
  const scaleXSpring = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <div id="app-root" className="min-h-screen bg-black-org text-white-crm relative selection:bg-accent-a selection:text-black-org">
      
      {/* 1. Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] origin-left z-[1000] pointer-events-none"
        style={{ scaleX: scaleXSpring, backgroundImage: 'linear-gradient(to right, #76DDEF, #F69A4F)' }}
      />

      {/* 2. Custom Cursor Follower */}
      <CustomCursor />

      {/* 3. Global Header Header */}
      <Header />

      {/* 4. Hero Visual Presentation */}
      {/* INSERIR: hero.jpg */}
      <Hero />

      {/* 5. Editorial Studio presentation */}
      {/* INSERIR: sobre.jpg */}
      <Sobre />

      {/* 6. Vertical custom services accordion */}
      {/* INSERIR: pilates.jpg */}
      {/* INSERIR: fisioterapia.jpg */}
      {/* INSERIR: ginastica.jpg */}
      <Servicos />

      {/* 7. Asymmetrical full-bleed gallery display */}
      {/* INSERIR: g1.jpg */}
      {/* INSERIR: g2.jpg */}
      {/* INSERIR: g3.jpg */}
      {/* INSERIR: g4.jpg */}
      {/* INSERIR: g5.jpg */}
      {/* INSERIR: g6.jpg */}
      {/* INSERIR: g7.jpg */}
      <Galeria />

      {/* 8. Immersive video and controls section */}
      {/* INSERIR: video.mp4 */}
      {/* INSERIR: video-thumb.jpg */}
      <VideoImersivo />

      {/* 9. Typographic quotation commentary */}
      <Depoimentos />

      {/* 10. Contact detail maps and buttons */}
      <Contato />

      {/* 11. Footer credits and link menus */}
      <Footer />

      {/* 12. Pulsating floating communicative widget */}
      <FloatingWhatsApp />

    </div>
  );
}
