import { Mail, Phone, MapPin } from "lucide-react";

// AQUÍ AÑADO ESTOS DOS IMPORTS QUE CONTINENE LOS SVGs DE LAS RRSS
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/62c1dff5-8a84-4cee-9d59-b1d95c6a08a4.png"
                alt="E-BOOST Lab"
              /*Antes: className="h-8 w-auto mr-3 brightness-0 invert" y Ahora: className="h-16 w-auto mr-3 brightness-0 invert" para que sea más grande.*/
                className="h-16 w-auto mr-3 brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transformamos negocios con automatización inteligente y estrategias 
              de marketing que impulsan el crecimiento sostenible.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <span className="text-gray-300">hello@eboostlab.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-3 text-accent" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>

              {/* He comentado la parte de la dirección para que no se vea */}

              {/*<div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-3 text-accent" />
                <span className="text-gray-300">123 Innovation Street, Tech District</span>
              </div>*/}

              {/* Aquí estoy poniendo lo de las redes sociales. Lo añado yo.*/}

              {/* Redes Sociales. La exclamación es para forzar ese margen superior.*/}
              <div className="flex gap-3 !mt-8">
                <a
                  href="https://www.linkedin.com/company/eboostlab/about/"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="icon-circle-outline w-14 h-14 flex items-center justify-center transition-colors duration-200 hover:bg-[#0077B5] hover:text-white"
                >
                  <FaLinkedinIn className="w-6 h-6" aria-hidden="true" />
                </a>

                  {/* La parte de Instagram es un poco más complicada para que se vea bonito.*/}

                <a
                  href="https://www.instagram.com/eboostlab/"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="icon-circle-outline w-14 h-14 flex items-center justify-center hover:text-white hover:border-[#f58529] hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af]"
                  style={{ transitionProperty: 'background-color', transitionDuration: '200ms' }}                >
                    <FaInstagram className="w-6 h-6" aria-hidden="true" />
                </a>

                <a
                  href="https://www.tiktok.com"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="icon-circle-outline w-14 h-14 flex items-center justify-center transition-colors duration-200 hover:bg-black hover:text-white"
                >
                  <SiTiktok className="w-6 h-6" aria-hidden="true" />
                </a>

                <a
                  href="https://www.youtube.com"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="icon-circle-outline w-14 h-14 flex items-center justify-center transition-colors duration-200 hover:bg-[#FF0000] hover:text-white"
                >
                  <FaYoutube className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>

              </div>
            </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-gray-300 hover:text-accent transition-colors text-sm"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("sobre-nosotros")}
                className="block text-gray-300 hover:text-accent transition-colors text-sm"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block text-gray-300 hover:text-accent transition-colors text-sm"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("casos-exito")}
                className="block text-gray-300 hover:text-accent transition-colors text-sm"
              >
                {/* Antes "Casos de Éxito" y ahora "Noticias de Actualidad". */}
                Noticias de Actualidad
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block text-gray-300 hover:text-accent transition-colors text-sm"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <nav className="space-y-3">
              <span className="block text-gray-300 text-sm">
                Automatización de Procesos
              </span>
              <span className="block text-gray-300 text-sm">
                Marketing Inteligente
              </span>
              <span className="block text-gray-300 text-sm">
                Integraciones Tecnológicas
              </span>
              <span className="block text-gray-300 text-sm">
                Análisis y Optimización
              </span>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="/lovable-uploads/1154805c-21a4-4139-85dc-e20468b7765a.png"
                alt="E-BOOST Lab Logo"
                className="h-10 w-10 mr-3 brightness-0 invert opacity-80"
              />
              <span className="text-sm text-gray-400">
                © 2024 E-BOOST Lab. Todos los derechos reservados.
              </span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-accent transition-colors">
                Política de Privacidad
              </button>
              <button className="text-gray-400 hover:text-accent transition-colors">
                Términos de Servicio
              </button>
              <button className="text-gray-400 hover:text-accent transition-colors">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-secondary hover:bg-accent text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Volver arriba"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;