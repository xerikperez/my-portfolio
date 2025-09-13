import React from "react";

interface MockupProps {
  className?: string;
}

export function PortfolioMockup({ className = "" }: MockupProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="400" height="250" rx="16" fill="#1f2937" />
      <rect x="20" y="20" width="360" height="40" rx="8" fill="#374151" />
      <rect x="20" y="80" width="170" height="150" rx="8" fill="#4b5563" />
      <rect x="200" y="80" width="180" height="70" rx="8" fill="#4b5563" />
      <rect x="200" y="160" width="180" height="70" rx="8" fill="#4b5563" />
    </svg>
  );
}

export function EcommerceMockup({ className = "" }: MockupProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="400" height="250" rx="16" fill="#1f2937" />
      <rect x="20" y="20" width="360" height="40" rx="8" fill="#374151" />
      <rect x="20" y="80" width="110" height="150" rx="8" fill="#4b5563" />
      <rect x="140" y="80" width="110" height="150" rx="8" fill="#4b5563" />
      <rect x="260" y="80" width="110" height="150" rx="8" fill="#4b5563" />
    </svg>
  );
}

export function SaasMockup({ className = "" }: MockupProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="400" height="250" rx="16" fill="#1f2937" />
      <rect x="20" y="20" width="360" height="40" rx="8" fill="#374151" />
      <rect x="20" y="80" width="160" height="100" rx="8" fill="#4b5563" />
      <rect x="200" y="80" width="180" height="50" rx="8" fill="#4b5563" />
      <rect x="200" y="140" width="180" height="90" rx="8" fill="#4b5563" />
    </svg>
  );
}
