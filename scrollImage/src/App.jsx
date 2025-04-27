import './App.css';
import ZoomParallax from "./components/ZoomParallax.jsx";

function App() {
  return (
    <div>
      {/* Imagen con efecto parallax zoom */}
      <ZoomParallax imageUrl="https://img.freepik.com/foto-gratis/puertas-que-abren-hermosa-vista-natural_23-2150083754.jpg?t=st=1745712643~exp=1745716243~hmac=a17f26b0a76f283dfbeb54a9b5faf4b3f11f2e0b4c0a48580cf9145b567eaccf&w=996" />
      
      {/* Título de bienvenida */}
      <section className="p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-center">¡Bienvenido!</h1>
        <p className="text-lg max-w-2xl mx-auto text-center">
          Esta es una página de prueba para ver el efecto Parallax Zoom mientras haces scroll. 
          Sigue bajando para ver cómo la imagen se transforma.
        </p>
      </section>

      {/* Más contenido para hacer scroll */}
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-2">Sección 1</h2>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eros vitae eros suscipit, ut cursus sem elementum.
        </p>
      </section>

      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-2">Sección 2</h2>
        <p className="text-base text-gray-600">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </section>

      <section className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-2">Sección 3</h2>
        <p className="text-base text-gray-600">
          Suspendisse potenti. Curabitur sit amet fermentum lorem, a suscipit justo. Donec malesuada.
        </p>
      </section>

      <footer className="p-4 bg-black text-white text-center">
        <p>© 2025 Tu proyecto. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
