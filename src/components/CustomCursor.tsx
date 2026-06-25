/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const [isSupported, setIsSupported] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Check device compatibility (only show custom cursor on screens with hover and fine pointer)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsSupported(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsSupported(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Main cursor motion engine using GSAP (registered exactly once for maximum reliability)
  useEffect(() => {
    if (!isSupported) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // Set initial transform anchor (centering with GSAP's optimized percentage translation)
    gsap.set(dot, { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.set(ring, { xPercent: -50, yPercent: -50, opacity: 0 });

    // Performance-optimized quick setters and smooth quickTo targets
    const setDotX = gsap.quickSetter(dot, "x", "px");
    const setDotY = gsap.quickSetter(dot, "y", "px");

    const setRingX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update coordinates instantly for dot, and with lerp delay for ring
      setDotX(clientX);
      setDotY(clientY);
      setRingX(clientX);
      setRingY(clientY);

      // Force make visible on mouse movement
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Only show "Ver" cursor on elements in the gallery section or with explicit data-cursor
      const isGalleryItem = target.closest('#galeria img, .gallery-card, [data-cursor="view"]');
      const isInteractable = target.closest('button, a, input, select, textarea, [role="button"], .interactive-element, .cursor-pointer, [class*="cursor-pointer"]');

      if (isGalleryItem) {
        setIsImageHovered(true);
        setIsHovered(false);
      } else if (isInteractable) {
        setIsHovered(true);
        setIsImageHovered(false);
      } else {
        setIsHovered(false);
        setIsImageHovered(false);
      }
    };

    const handleMouseDown = () => {
      gsap.timeline()
        .to(dot, { scale: 0.4, duration: 0.08, ease: 'power2.out' })
        .to(dot, { scale: 1, duration: 0.15, ease: 'power2.inOut' });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isSupported]); // Dependency array contains ONLY isSupported to prevent listener teardowns on state changes

  // Handle visibility transitions
  useEffect(() => {
    if (!isSupported) return;

    if (isVisible) {
      gsap.to([dotRef.current, ringRef.current], {
        opacity: 1,
        duration: 0.35,
        overwrite: 'auto'
      });
    } else {
      gsap.to([dotRef.current, ringRef.current], {
        opacity: 0,
        duration: 0.35,
        overwrite: 'auto'
      });
    }
  }, [isSupported, isVisible]);

  // Handle state-based cursor transformations (scale, fill, color)
  useEffect(() => {
    if (!isSupported || !ringRef.current || !dotRef.current) return;

    if (isImageHovered) {
      // Image hover: larger filled terracota bubble with dark text
      gsap.to(ringRef.current, {
        scale: 2.2,
        backgroundColor: '#F69A4F',
        borderColor: '#F69A4F',
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto'
      });
      gsap.to(dotRef.current, {
        scale: 0,
        duration: 0.2,
        overwrite: 'auto'
      });
    } else if (isHovered) {
      // Button/link hover: grew scale and light background opacity
      gsap.to(ringRef.current, {
        scale: 1.7,
        backgroundColor: 'rgba(246, 154, 79, 0.15)',
        borderColor: 'rgba(246, 154, 79, 0.6)',
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto'
      });
      gsap.to(dotRef.current, {
        scale: 0.5,
        duration: 0.2,
        overwrite: 'auto'
      });
    } else {
      // Default: hollow thin border
      gsap.to(ringRef.current, {
        scale: 1,
        backgroundColor: 'rgba(246, 154, 79, 0)',
        borderColor: 'rgba(246, 154, 79, 0.35)',
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto'
      });
      gsap.to(dotRef.current, {
        scale: 1,
        duration: 0.2,
        overwrite: 'auto'
      });
    }
  }, [isSupported, isHovered, isImageHovered]);

  if (!isSupported) return null;

  return (
    <>
      {/* 1. Outer Ring with GSAP-controlled lag and styling */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#F69A4F]/30 pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
      >
        <span
          className={`text-[8px] font-display uppercase tracking-[0.2em] font-bold text-[#1A1814] transition-all duration-300 transform ${
            isImageHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
          }`}
        >
          Ver
        </span>
      </div>

      {/* 2. Inner Dot for instantaneous tracking */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#F69A4F] pointer-events-none z-[9999]"
      />
    </>
  );
}

