import { useRef } from "react";
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  const logoRef = useRef<HTMLDivElement>(null);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-dots"
    >
      {/* Static decorative dots pattern */}
      {/* He ajustado la posición de los círculos para que no corten texto o botones (excepto el header principal)*/}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 top-[15%] left-[8%] bg-accent/25 rounded-full"></div>
        <div className="absolute w-3 h-3 top-[25%] left-[18%] bg-primary/15 rounded-full"></div>
        <div className="absolute w-1.5 h-1.5 top-[35%] left-[12%] bg-highlight/30 rounded-full"></div>
        <div className="absolute w-2.5 h-2.5 top-[41%] left-[6%] bg-accent/20 rounded-full"></div>
        <div className="absolute w-2 h-2 top-[60.5%] left-[15%] bg-primary/20 rounded-full"></div>
        <div className="absolute w-1.5 h-1.5 top-[65%] left-[9%] bg-highlight/25 rounded-full"></div>
        <div className="absolute w-3 h-3 top-[75%] left-[14%] bg-accent/15 rounded-full"></div>
        
        <div className="absolute w-2 h-2 top-[20%] right-[10%] bg-primary/20 rounded-full"></div>
        <div className="absolute w-2.5 h-2.5 top-[30%] right-[16%] bg-highlight/25 rounded-full"></div>
        <div className="absolute w-1.5 h-1.5 top-[40%] right-[8%] bg-accent/30 rounded-full"></div>
        <div className="absolute w-3 h-3 top-[40%] right-[12%] bg-primary/15 rounded-full"></div>
        <div className="absolute w-2 h-2 top-[60%] right-[18%] bg-highlight/20 rounded-full"></div>
        <div className="absolute w-2.5 h-2.5 top-[72%] right-[7%] bg-accent/25 rounded-full"></div>
        
        <div className="absolute w-1.5 h-1.5 top-[18%] left-[50%] bg-primary/25 rounded-full"></div>
        <div className="absolute w-2 h-2 top-[38%] left-[45%] bg-highlight/20 rounded-full"></div>
        <div className="absolute w-2.5 h-2.5 top-[56%] left-[58%] bg-accent/20 rounded-full"></div>
        <div className="absolute w-2 h-2 top-[78%] left-[48%] bg-primary/15 rounded-full"></div>
      </div>
      
      {/* He cambiado lg:pt-0 por lg:pt-20. Así, en pantallas grandes (lg => es decir ≥1024px)
      el padding-top se pone a 20. Es una regla responsiva que anula pt-20 en lg.*/}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-20">
        
        {/* He cambiado lg:grid-cols-2 por min-[1250px]:grid-cols-2 para que el hero pase
          de dos columnas a 1 cuando la anchura es menor a 1250 px que es cuando se
          superponia con el header principal.*/}

        <div className="grid gap-12 lg:gap-16 items-center min-[1250px]:grid-cols-2">
          {/* Left Column - Content */}
          <div className="space-y-8 fade-in visible">

            {/* Main Headline */}
            <h1 className="hero-h1">
              IMPULSA TU{" "}
              <span className="hero-accent">NEGOCIO</span>{" "}
              CON AUTOMATIZACIÓN INTELIGENTE
            </h1>

            {/* Lead Text */}
            <p className="text-lead max-w-xl">
              Transformamos tu negocio con automatización inteligente y estrategias 
              de marketing que impulsan el crecimiento sostenible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection("contacto")}
                className="btn-primary group"
              >
                Solicitar Demo Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection("servicios")}
                className="btn-secondary"
              >
                Ver Servicios
              </button>
            </div>

            {/* KPI Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-secondary mr-2" />
                  <span className="text-2xl lg:text-3xl font-bold text-secondary">+300%</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">ROI Promedio</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-secondary mr-2" />
                  <span className="text-2xl lg:text-3xl font-bold text-secondary">98%</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Precisión IA</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-5 w-5 text-secondary mr-2" />
                  <span className="text-2xl lg:text-3xl font-bold text-secondary">24/7</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Automatización</p>
              </div>
            </div>
          </div>

          {/* Right Column - Logo/Visual */}

          {/* He cambiado lg:justify-end por min-[1250px]:justify-end para que el logo
          se centre en la columna cuando el ancho de pantalla sea menor a 1250 px que
          es cuando se superponia con el header principal.*/}

          <div className="relative flex justify-center min-[1250px]:justify-end">
            <div 
              ref={logoRef}
              /* He añadido max-[1249px]:mb-16 para que no se corte la sombra del contenedor del logo
                al disminuir la anchura de la página*/
              className="relative w-80 h-80 lg:w-96 lg:h-96 transition-transform duration-300 max-[1249px]:mb-16"
            >
              {/* Main logo circle */}
              <div className="w-full h-full bg-white rounded-full shadow-2xl border border-border/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/10"></div>
                <img
                  src="/lovable-uploads/73ef4d8d-5756-4136-983e-1d719bfac6a0.png"
                  alt="E-BOOST Lab Logo"
                  className="w-48 h-48 lg:w-56 lg:h-56 object-contain relative z-10"
                />
              </div>

              {/* Static micro elements around the logo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full"></div>
              <div className="absolute top-1/4 -left-6 w-6 h-6 bg-secondary/15 rounded-full"></div>
              <div className="absolute bottom-1/4 -right-8 w-10 h-10 bg-highlight/20 rounded-full"></div>
              <div className="absolute -bottom-6 left-1/4 w-5 h-5 bg-accent/25 rounded-full"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-secondary/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;