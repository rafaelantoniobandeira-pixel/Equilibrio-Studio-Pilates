/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [shouldRender, setShouldRender] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Trigger the exit transition
  const handleExit = () => {
    if (!shouldRender) return;

    // Smoothly dissolve the whole container to show the website behind
    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => {
        setShouldRender(false);
        onComplete();
      }
    });
  };

  useEffect(() => {
    // Set video playback rate to accelerate the intro (2.35x speed)
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.35;
    }

    // 1. Smoothly fade in the video container on mount
    const ctx = gsap.context(() => {
      gsap.fromTo(videoRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.8, ease: 'power2.out' }
      );
    }, containerRef);

    // 2. Playback fail-safe timer (3.5 seconds max since the video is highly accelerated)
    const safetyTimeout = setTimeout(() => {
      handleExit();
    }, 3500);

    return () => {
      ctx.revert();
      clearTimeout(safetyTimeout);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full z-[9999] bg-[#000000] flex items-center justify-center select-none overflow-hidden"
    >
      {/* Compact Seamless Video Container matching pure black background */}
      <div className="relative w-[60%] max-w-sm md:max-w-md lg:max-w-lg aspect-video z-10">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dxpwgum9x/video/upload/v1783128382/Firefly_Motion_graphics_intro_on_a_solid_pure_black_background._Cinematic_lighting._An_elegant_fema_scqake.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleExit}
          onPlay={(e) => {
            e.currentTarget.playbackRate = 2.35;
          }}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Extreme Fine Ambient Light Grain Overlay inside Intro to establish prestige */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-noise" />
    </div>
  );
}
