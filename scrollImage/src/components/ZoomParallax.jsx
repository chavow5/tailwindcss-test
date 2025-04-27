import { useState, useEffect } from "react";

// plantilla para hacer zoom en imagen

export default function ZoomParallax({ imageUrl }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // valor de scale basado en el scroll
  const scaleValue = Math.min(1 + scrollPosition * 0.0008, 1.2);
  // 0.0005 controla qué tanto zoom hace

  const blurValue = Math.min(scrollPosition * 0.005, 5);

  return (
    <div className="relative overflow-hidden h-[80vh] w-full">
      <img
        src={imageUrl}
        alt="Zoom Parallax"
        className="w-full h-full object-cover transition-transform duration-300"
        style={{
          transform: `scale(${scaleValue})`,
          filter: `blur(${blurValue}px)`,
        }}
      />
    </div>
  );
}
