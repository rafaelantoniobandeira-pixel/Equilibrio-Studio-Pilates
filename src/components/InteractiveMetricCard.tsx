import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

interface InteractiveMetricCardProps {
  numberText: string;
  label: string;
  description: string;
  subLabel: string;
  icon: React.ReactNode;
  iconColorClass?: string;
  accentBgClass?: string;
}

export const InteractiveMetricCard: React.FC<InteractiveMetricCardProps> = ({
  numberText,
  label,
  description,
  subLabel,
  icon,
  iconColorClass = "text-[#F69A4F]",
  accentBgClass = "bg-[#F69A4F]/10",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Position of the pointer relative to the card bounds (0% to 100%)
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Center-offset values (-50 to +50)
    const centerX = x - 50;
    const centerY = y - 50;

    // Smooth tilt angles (adjust values for more/less extreme tilt)
    const rotateX = -(centerY / 4); // Rotation around horizontal axis
    const rotateY = centerX / 4;  // Rotation around vertical axis

    setCoords({ x, y });
    setRotation({ x: rotateX, y: rotateY });
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className="relative w-full h-full select-none"
      style={{ perspective: "1000px" }}
    >
      {/* Dynamic Ambient Background Glow */}
      <div
        className="absolute -inset-2 rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          opacity: isHovered ? 0.35 : 0,
          background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, rgba(246, 154, 79, 0.4) 0%, transparent 60%)`,
          filter: "blur(20px)",
        }}
      />

      {/* The 3D Rotating Card Shell */}
      <div
        className="relative w-full h-full bg-[#FAF8F5] dark:bg-[#1A1814] border-2 border-[#1A1814]/10 dark:border-[#FAF8F5]/10 rounded-2xl p-8 md:p-10 shadow-sm transition-all duration-300 overflow-hidden"
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.025) translateZ(10px)`
            : "rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)",
          boxShadow: isHovered
            ? "rgba(26, 24, 20, 0.15) 0px 20px 40px -15px, rgba(246, 154, 79, 0.08) 0px 0px 30px 2px"
            : "rgba(26, 24, 20, 0.04) 0px 4px 20px -2px",
          transition: isHovered ? "none" : "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Real-time Reflection (Glare) Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Diagonal Sweeping Sheen (Shine) */}
        <div
          className="absolute inset-0 pointer-events-none z-20 transition-all duration-700 opacity-0"
          style={{
            opacity: isHovered ? 0.15 : 0,
            background: "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.8) 50%, transparent 65%)",
            transform: isHovered ? "translateX(0%)" : "translateX(-100%)",
            mixBlendMode: "overlay",
          }}
        />

        {/* Content inside Card with relative z-index */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            {/* Upper row: icon & title */}
            <div className="flex items-center justify-between mb-8">
              <span className={`p-3 rounded-full ${accentBgClass} ${iconColorClass} inline-flex items-center justify-center transition-transform duration-500 ${isHovered ? "scale-110 rotate-3" : ""}`}>
                {icon}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#1A1814]/40 dark:text-[#FAF8F5]/40 font-medium">
                {subLabel}
              </span>
            </div>

            {/* Large Standout Metrics Number */}
            <div className="mb-4">
              <h3 className="font-display text-5xl md:text-6xl font-semibold text-[#1A1814] dark:text-[#FAF8F5] tracking-tight leading-none">
                {numberText}
              </h3>
              <p className="font-display text-lg md:text-xl text-[#F69A4F] font-medium tracking-tight mt-1.5">
                {label}
              </p>
            </div>
          </div>

          {/* Descriptive biomechanics detail text */}
          <p className="font-interface text-[13px] md:text-sm text-[#4D4844]/80 dark:text-[#FAF8F5]/80 leading-relaxed font-normal mt-4 pt-4 border-t border-[#1A1814]/5 dark:border-[#FAF8F5]/5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
