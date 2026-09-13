import React from "react";

interface InteractiveMetricCardProps {
  numberText: string;
  label: string;
  description: string;
  subLabel: string;
  icon?: React.ReactNode;
  iconColorClass?: string;
  accentBgClass?: string;
}

export const InteractiveMetricCard: React.FC<InteractiveMetricCardProps> = ({
  numberText,
  label,
  description,
  subLabel,
  icon,
}) => {
  return (
    <div className="relative w-full h-full select-none">
      <div className="relative w-full h-full bg-white border border-[#1A1814]/10 rounded-2xl p-7 md:p-8 shadow-[0_4px_20px_rgba(26,24,20,0.03)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
        <div>
          {/* Sub-label and subtle rating indicator */}
          <div className="flex items-center justify-between mb-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C85E0E] font-semibold">
              {subLabel}
            </span>
            {icon && (
              <div className="text-[#C85E0E]">
                {icon}
              </div>
            )}
          </div>

          {/* Large Standout Metrics Number */}
          <div className="mb-3">
            <h3 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1814] tracking-tight leading-none">
              {numberText}
            </h3>
            <p className="font-interface text-base md:text-lg text-[#C85E0E] font-medium tracking-tight mt-1.5">
              {label}
            </p>
          </div>

          {/* Descriptive biomechanics detail text */}
          <p className="font-interface text-xs md:text-sm text-[#5A544F] leading-relaxed font-normal mt-4 pt-4 border-t border-[#1A1814]/8">
            {description}
          </p>
        </div>

        {/* Bottom fine baseline border accent */}
        <div className="w-8 h-[2px] bg-[#C85E0E]/40 mt-6" />
      </div>
    </div>
  );
};

