import { useId } from "react";

export default function Logo({ size = 32, className = "" }) {
  const gradId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2DD4BF" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        fill="#0B1120"
        stroke={`url(#${gradId})`}
        strokeWidth="1.5"
      />
      <text
        x="16"
        y="16"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="12"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        <tspan fill="#2DD4BF">J</tspan>
        <tspan fill="#FFFFFF">F</tspan>
      </text>
    </svg>
  );
}
