import * as React from "react";

interface LogoProps {
  className?: string;
  glyphClassName?: string;
  wordmarkClassName?: string;
  withWordmark?: boolean;
}

const LogoGlyph: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    role="img"
    aria-hidden
    focusable="false"
    className={className}
    {...props}
  >
    <rect width="64" height="64" rx="18" fill="url(#logo-paint0_linear)" />
    <rect
      x="2"
      y="2"
      width="60"
      height="60"
      rx="16"
      stroke="url(#logo-paint1_radial)"
      strokeWidth="2"
      opacity="0.6"
    />
    <g filter="url(#logo-glow)">
      <path
        d="M42.5 20H33c-6.075 0-11 4.925-11 11v2c0 6.075 4.925 11 11 11h7"
        stroke="url(#logo-paint2_linear)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 20.5L32 44l6.8-13.5"
        stroke="url(#logo-paint3_linear)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <g opacity="0.7">
      <path
        d="M20 16h8"
        stroke="url(#logo-paint4_linear)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 26h4"
        stroke="url(#logo-paint5_linear)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M38 50h10"
        stroke="url(#logo-paint6_linear)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
    <circle cx="20" cy="16" r="2" fill="#7DF9FF" />
    <circle cx="28" cy="16" r="1.8" fill="#A855F7" />
    <circle cx="16" cy="26" r="1.6" fill="#38BDF8" />
    <circle cx="48" cy="50" r="2" fill="#F472B6" />
    <circle cx="34" cy="12" r="1.2" fill="#C084FC" opacity="0.75" />
    <circle cx="46" cy="28" r="1.4" fill="#22D3EE" opacity="0.85" />
    <defs>
      <filter
        id="logo-glow"
        x="11"
        y="11"
        width="42"
        height="42"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="1.75" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <linearGradient
        id="logo-paint0_linear"
        x1="10"
        y1="8"
        x2="52"
        y2="56"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1B1C3A" />
        <stop offset="0.4" stopColor="#101226" />
        <stop offset="1" stopColor="#050611" />
      </linearGradient>
      <radialGradient
        id="logo-paint1_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(32 32) scale(30)"
      >
        <stop offset="0.2" stopColor="#60A5FA" stopOpacity="0.75" />
        <stop offset="0.55" stopColor="#8B5CF6" stopOpacity="0.4" />
        <stop offset="1" stopColor="#EC4899" stopOpacity="0.75" />
      </radialGradient>
      <linearGradient
        id="logo-paint2_linear"
        x1="22"
        y1="22"
        x2="43"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#67E8F9" />
        <stop offset="0.55" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#6366F1" />
      </linearGradient>
      <linearGradient
        id="logo-paint3_linear"
        x1="24"
        y1="21"
        x2="39"
        y2="41"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C084FC" />
        <stop offset="1" stopColor="#FB7185" />
      </linearGradient>
      <linearGradient
        id="logo-paint4_linear"
        x1="20"
        y1="16"
        x2="28"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5EEAD4" />
        <stop offset="1" stopColor="#38BDF8" />
      </linearGradient>
      <linearGradient
        id="logo-paint5_linear"
        x1="16"
        y1="26"
        x2="20"
        y2="26"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#818CF8" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient
        id="logo-paint6_linear"
        x1="38"
        y1="50"
        x2="48"
        y2="50"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22D3EE" />
        <stop offset="1" stopColor="#A855F7" />
      </linearGradient>
    </defs>
  </svg>
);

const Logo: React.FC<LogoProps> = ({
  className = "",
  glyphClassName = "h-10 w-10",
  wordmarkClassName = "",
  withWordmark = false,
}) => {
  return (
    <span
      className={`inline-flex items-center ${withWordmark ? "gap-3" : ""} text-white ${className}`.trim()}
      aria-hidden={!withWordmark}
    >
      <LogoGlyph className={glyphClassName} />
      {withWordmark && (
        <span
          className={
            `font-[var(--font-orbitron)] uppercase tracking-[0.45em] text-xs sm:text-sm bg-gradient-to-r from-sky-300 via-indigo-300 to-pink-300 text-transparent bg-clip-text ${wordmarkClassName}`.trim()
          }
        >
          CoreVision
        </span>
      )}
    </span>
  );
};

export default Logo;
export { LogoGlyph };
