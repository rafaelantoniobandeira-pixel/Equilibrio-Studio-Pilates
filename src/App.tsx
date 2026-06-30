/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Galeria from './components/Galeria';
import VideoImersivo from './components/VideoImersivo';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return (
    <div id="app-root" className="min-h-screen bg-black-org text-white-crm relative selection:bg-accent-a selection:text-black-org">
      
      {/* Premium Smooth Scroll Engine */}
      <SmoothScroll speed={1.1} inertia={0.075} />

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
