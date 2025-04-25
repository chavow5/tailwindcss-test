import logo from '../assets/logodavidramirez.png'

const Header = () => {
    return (
      <header className="bg-black bg-opacity-60 text-white px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img  src={logo} alt="Logo" className="h-15 w-auto" />
          {/* <span className="text-2xl font-bold">Chavo landing</span> */}
        </div>

        {/* Navegación */}
        <nav className="space-x-6">
          <a href="home" className="hover:text-gray-300 transition">Inicio</a>
          <a href="#" className="hover:text-gray-300 transition">Sobre Mi</a>
          <a href="#" className="hover:text-gray-300 transition">Proyectos</a>
          <a href="#" className="hover:text-gray-300 transition">Contacto</a>
        </nav>
      </div>
    </header>
    );
  };
  
  export default Header;
  