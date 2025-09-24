"use client";
import { useEffect, useState } from "react";

export default function CircuitBackground() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-20 opacity-30"
      style={{
        backgroundImage: "url('/circuit-board.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "400px 400px",
        backgroundPosition: `0px ${-offset}px`,
      }}
    />
  );
}
