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
      x="1.5"
      y="1.5"
      width="61"
      height="61"
      rx="16.5"
      stroke="url(#logo-paint1_linear)"
      strokeWidth="3"
      opacity="0.45"
    />
    <path
      d="M44 20C35.1634 20 28 27.1634 28 36C28 44.8366 35.1634 52 44 52"
      stroke="url(#logo-paint2_linear)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 24L26 44L34 32L40 44"
      stroke="url(#logo-paint3_linear)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 14H28"
      stroke="url(#logo-paint4_linear)"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M12 30H18"
      stroke="url(#logo-paint5_linear)"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.55"
    />
    <path
      d="M36 52H48"
      stroke="url(#logo-paint6_linear)"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <circle cx="18" cy="14" r="2.2" fill="#22D3EE" />
    <circle cx="28" cy="14" r="1.8" fill="#F472B6" />
    <circle cx="12" cy="30" r="1.8" fill="#22D3EE" />
    <circle cx="48" cy="52" r="2.2" fill="#F472B6" />
    <defs>
      <linearGradient
        id="logo-paint0_linear"
        x1="14"
        y1="8"
        x2="54"
        y2="56"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#312E81" />
        <stop offset="0.48" stopColor="#111827" />
        <stop offset="1" stopColor="#0B1120" />
      </linearGradient>
      <linearGradient
        id="logo-paint1_linear"
        x1="12"
        y1="8"
        x2="52"
        y2="56"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6366F1" stopOpacity="0.85" />
        <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="0.45" />
        <stop offset="1" stopColor="#EC4899" stopOpacity="0.85" />
      </linearGradient>
      <linearGradient
        id="logo-paint2_linear"
        x1="26"
        y1="24"
        x2="50"
        y2="52"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22D3EE" />
        <stop offset="1" stopColor="#818CF8" />
      </linearGradient>
      <linearGradient
        id="logo-paint3_linear"
        x1="18"
        y1="24"
        x2="42"
        y2="46"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C084FC" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient
        id="logo-paint4_linear"
        x1="18"
        y1="14"
        x2="28"
        y2="14"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22D3EE" />
        <stop offset="1" stopColor="#38BDF8" />
      </linearGradient>
      <linearGradient
        id="logo-paint5_linear"
        x1="12"
        y1="30"
        x2="18"
        y2="30"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A855F7" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient
        id="logo-paint6_linear"
        x1="36"
        y1="52"
        x2="48"
        y2="52"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22D3EE" />
        <stop offset="1" stopColor="#F472B6" />
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
          className={`font-[var(--font-orbitron)] uppercase tracking-[0.45em] text-xs sm:text-sm text-white/90 ${wordmarkClassName}`.trim()}
        >
          CoreVision
        </span>
      )}
    </span>
  );
};

export default Logo;
export { LogoGlyph };
