/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 350, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect mobile or touch device based on hover support
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) {
      setVisible(false);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const addHoverListeners = () => {
      const interactableElements = document.querySelectorAll(
        'button, a, input, select, textarea, [role="button"], .interactive-element'
      );
      interactableElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Initial listener scan
    addHoverListeners();

    // Create observer for dynamic updates
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-b/60 pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: hovered ? 1.8 : 1,
        }}
        animate={{
          backgroundColor: hovered ? 'rgba(118, 221, 239, 0.15)' : 'rgba(118, 221, 239, 0)',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />
      {/* Inner dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-b pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
