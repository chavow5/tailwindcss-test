import { useState, useEffect } from "react";
import fondo from "../assets/fondo2.png";

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scaleValue = Math.min(1 + scrollPosition * 0.0008, 1.2);
  const blurValue = Math.min(scrollPosition * 0.005, 5);

  return (
    <div id="inicio" className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo con zoom */}
      <div
        className="absolute inset-0 w-full h-full transition-all duration-300 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), #1e1e1e), url(${fondo})`,
          backgroundSize: `${scaleValue * 100}%`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: `blur(${blurValue}px)`,
        }}
      />

      {/* Contenido encima del fondo */}
      <div className="relative z-10 text-white text-center p-12 pt-24">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-shadow-md">
          David Ramirez
        </h1>
        <p className="text-lg md:text-xl uppercase font-medium mt-4 text-shadow-md">
          Full Stack Web Developer.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
