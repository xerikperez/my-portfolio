'use client';

export default function CircuitBackground() {
  return (
    <div
      className="fixed inset-0 -z-20 opacity-20"
      style={{
        backgroundImage: "url('/circuit-board.svg')",
        backgroundRepeat: 'repeat',
        backgroundSize: '400px 400px',
      }}
    />
  );
}
