import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* He cambiado h-16 por h-20 para que al hacer la pantalla pequeña
        no haya cambios de altura. */}

        <div className="flex items-center justify-between h-20 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/lovable-uploads/5a2d414c-4f2e-460c-aaa0-05c02a42da4c.png"
              alt="E-BOOST Lab"
              /*Antes: className="h-8 lg:h-10 w-auto" y Ahora: className="w-65 lg:w-65 h-auto" para que sea más grande.*/
              className="w-60 lg:w-65 h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-nosotros")}
              className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("casos-exito")}
              className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
            >
            {/* Antes "Casos de Éxito" y ahora "Noticias de Actualidad"*/}
              Noticias de Actualidad
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
            >
              Contacto
            </button>
          </nav>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-border/20">
            <nav className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="px-4 py-3 text-left text-primary hover:text-secondary hover:bg-muted/30 transition-all duration-200 font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("sobre-nosotros")}
                className="px-4 py-3 text-left text-primary hover:text-secondary hover:bg-muted/30 transition-all duration-200 font-medium"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="px-4 py-3 text-left text-primary hover:text-secondary hover:bg-muted/30 transition-all duration-200 font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("casos-exito")}
                className="px-4 py-3 text-left text-primary hover:text-secondary hover:bg-muted/30 transition-all duration-200 font-medium"
              >
              {/* Antes "Casos de Éxito" y ahora "Noticias de Actualidad"*/}
                Noticias de Actualidad
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="px-4 py-3 text-left text-primary hover:text-secondary hover:bg-muted/30 transition-all duration-200 font-medium"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;