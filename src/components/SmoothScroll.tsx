import { useEffect } from 'react';

/**
 * Premium Buttery-Smooth Scrolling Engine
 * 
 * Implements high-performance inertial (kinetic) scroll using requestAnimationFrame.
 * - Easing interpolation (lerp) for ultra-fluid wheel scrolling.
 * - Smooth continuous scroll with customizable speed and inertia.
 * - Animated elegant transition for anchor navigation (#sobre, #contato, etc.) that 
 *   perfectly synchronizes target position.
 * - Fallback on touch devices for native touch momentum.
 */
interface SmoothScrollProps {
  speed?: number;     // Scroll speed multiplier (default: 1.0)
  inertia?: number;   // Easing factor: lower is smoother, higher is more responsive (default: 0.075)
}

export default function SmoothScroll({ speed = 1.0, inertia = 0.075 }: SmoothScrollProps) {
  useEffect(() => {
    // Check if it's a touch device or mobile screen
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      // Keep native smooth scrolling for touch-based devices to preserve natural swipe inertia
      document.documentElement.style.scrollBehavior = 'smooth';
      return;
    }

    // Set auto scroll behavior on desktop so the custom inertial engine takes full control without fighting browser's default step scrolling
    document.documentElement.style.scrollBehavior = 'auto';

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isMoving = false;
    let isClickScrolling = false;
    let animationFrameId: number | null = null;

    const onWheel = (e: WheelEvent) => {
      // Only smooth scroll if we are not actively in an anchor click transition
      if (isClickScrolling) {
        // If user rolls wheel during click-scroll, cancel the click scroll and adopt new target
        isClickScrolling = false;
      }
      
      e.preventDefault();

      const delta = e.deltaY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Calculate new target based on customizable speed
      targetY = Math.max(0, Math.min(targetY + delta * speed, maxScroll));

      if (!isMoving) {
        isMoving = true;
        animate();
      }
    };

    const animate = () => {
      // Linear interpolation formula: current = current + (target - current) * inertia
      const diff = targetY - currentY;

      if (Math.abs(diff) < 0.2) {
        currentY = targetY;
        window.scrollTo(0, Math.round(currentY));
        isMoving = false;
        animationFrameId = null;
        return;
      }

      currentY += diff * inertia;
      window.scrollTo(0, Math.round(currentY));

      animationFrameId = requestAnimationFrame(animate);
    };

    // Synchronize current scroll position on manual events like resizing, keys, etc.
    const onScroll = () => {
      if (!isMoving && !isClickScrolling) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Elegant Anchor link click handler (Smooth animated navigation)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      // Verify is internal link
      if (href && href.startsWith('#') && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          
          isClickScrolling = true;
          isMoving = false;
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }

          const headerOffset = 85; // fixed header offset
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const targetPosition = Math.max(0, elementPosition - headerOffset);

          const startPosition = window.scrollY;
          const distance = targetPosition - startPosition;
          let startTime: number | null = null;
          const duration = 1100; // Elegant slow/fast easing duration

          // Easing Cubic Bezier approximation: EaseInOutCubic
          const easeInOutCubic = (t: number): number => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          };

          const scrollStep = (timestamp: number) => {
            if (!isClickScrolling) return; // Cancel if user starts wheeling
            
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easedProgress = easeInOutCubic(progress);
            const nextScroll = startPosition + distance * easedProgress;
            
            window.scrollTo(0, Math.round(nextScroll));
            
            // Keep state in sync
            targetY = nextScroll;
            currentY = nextScroll;

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(scrollStep);
            } else {
              isClickScrolling = false;
              targetY = targetPosition;
              currentY = targetPosition;
            }
          };

          animationFrameId = requestAnimationFrame(scrollStep);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', handleAnchorClick);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [speed, inertia]);

  return null; // pure behavior injection
}
