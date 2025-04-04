import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA?: {
      BIRDS: (options: object) => { destroy: () => void };
    };
  }
}

export const VantaBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && backgroundRef.current) {
      // Poll until the script has attached VANTA to window
      const interval = setInterval(() => {
        if (window.VANTA?.BIRDS) {
          vantaEffect.current = window.VANTA.BIRDS({
            el: backgroundRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: "rgb(50, 72, 87)",
            backgroundAlpha: 1,
            color1: "rgb(41, 77, 51)",
            color2: "rgb(49, 105, 65)",
            colorMode: "varianceGradient",
            quantity: 6,
            birdSize: 2,
            wingSpan: 30,
            speedLimit: 7,
            separation: 20,
            alignment: 20,
            cohesion: 20,
          });
          clearInterval(interval);
        }
      }, 100);
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};
