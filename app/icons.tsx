import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const BoltSolid = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...p}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" />
  </svg>
);

/* Company logo: a lightbulb shining yellow light */
export const BulbLogo = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...p}>
    {/* radiating light rays */}
    <g stroke="#ffd34d" strokeWidth="1.7" strokeLinecap="round">
      <line x1="12" y1="0.8" x2="12" y2="3.2" />
      <line x1="3.4" y1="4.4" x2="5.1" y2="6.1" />
      <line x1="20.6" y1="4.4" x2="18.9" y2="6.1" />
      <line x1="1" y1="11.2" x2="3.4" y2="11.2" />
      <line x1="20.6" y1="11.2" x2="23" y2="11.2" />
    </g>
    {/* glass bulb */}
    <path
      d="M12 3.6a6 6 0 0 0-3.6 10.8c.55.42.9 1.05.9 1.74V17h5.4v-.86c0-.69.35-1.32.9-1.74A6 6 0 0 0 12 3.6z"
      fill="#ffce3a"
    />
    <path d="M10.1 8.6 12 11.1l1.9-2" fill="none" stroke="#caa100" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    {/* metal base */}
    <rect x="9.3" y="17.4" width="5.4" height="1.7" rx="0.85" fill="#0c2340" />
    <rect x="10.1" y="19.6" width="3.8" height="1.5" rx="0.75" fill="#0c2340" />
  </svg>
);

export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </svg>
);

export const MapPin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2.5} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Shield = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Zap = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export const Wrench = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
  </svg>
);

export const Bulb = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
  </svg>
);

export const Target = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const HomeIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
  </svg>
);

export const Transformer = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="4" y="9" width="16" height="12" rx="1" />
    <path d="M8 9V6M16 9V6M9 3h6M2 13h2M2 17h2M20 13h2M20 17h2" />
  </svg>
);

export const WrenchDot = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
    <circle cx="18" cy="6" r="2" />
  </svg>
);

export const Tower = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 4v16M20 4v16M4 8h16M4 14h16M8 4l8 16M16 4 8 20" />
  </svg>
);

export const Cart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
  </svg>
);

export const PanelHV = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="6" y="2" width="12" height="20" rx="1" />
    <path d="M9 6h6M9 10h6M9 14h3" />
  </svg>
);

export const PanelMV = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="8" height="18" rx="1" />
    <rect x="13" y="3" width="8" height="18" rx="1" />
    <path d="M6 7h2M16 7h2M6 11h2M16 11h2" />
  </svg>
);

export const Send = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2.5} {...p}>
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);
