import fondo from "../assets/fondo2.png";

// fondo gradiente
const HeroSection = () => {
  return (
    <div
      id="inicio"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.5), #1e1e1e),
          url(${fondo})
        `
      }}
    >
      <div className="text-white text-center p-12 pt-24">
        <h1 className="text-4xl font-bold">David Ramirez</h1>
        <p className="mt-2 text-2xl">Full Stack Web Developer.</p>
      </div>
    </div>
  );
};

export default HeroSection;
