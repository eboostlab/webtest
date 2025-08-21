import { useEffect, useRef } from "react";
import { Target, Eye, Users, Lightbulb, Leaf, Heart, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".fade-in");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="sobre-nosotros" 
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-section-title text-primary mb-6">
            Sobre E-BOOST Lab
          </h2>
          <p className="text-lead">
            Somos un equipo de innovación que transforma negocios a través de 
            automatización inteligente y estrategias de marketing data-driven.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="card-elegant fade-in">
            <div className="icon-circle mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-card-title text-primary mb-4">Nuestra Misión</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Empoderar empresas con herramientas de automatización inteligente 
                que maximizan la eficiencia operacional.
              </p>
              <p>
                Optimizar procesos para maximizar el ROI y reducir costos operativos, 
                permitiendo a nuestros clientes enfocarse en lo que realmente importa.
              </p>
              <p>
                Crear partnerships estratégicos que impulsen el crecimiento sostenible 
                y la transformación digital.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="card-elegant fade-in">
            <div className="icon-circle mb-6">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-card-title text-primary mb-4">Nuestra Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser el equipo de innovación líder en automatización para todo tipo 
              de negocios, transformando la manera en que las empresas se conectan con 
              sus clientes a través de tecnología inteligente y estrategias data-driven 
              que generen impacto real y medible.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="fade-in">
          <h3 className="text-section-title text-primary text-center mb-12">
            Nuestros Valores
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Scalability */}
            <div className="text-center group">
              <div className="icon-circle-outline mx-auto group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300">
                <TrendingUp className="h-12 w-12" /> {/* ícono más grande (antes h-6 w-6)*/}
              </div>
              <h4 className="text-lg font-semibold text-primary mb-3">Escalabilidad</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Soluciones que crecen con tu negocio, adaptándose a cualquier 
                volumen de operaciones.
              </p>
            </div>

            {/* Closeness */}
            <div className="text-center group">
              <div className="icon-circle-outline mx-auto group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300">
                <Heart className="h-12 w-12" /> {/* ícono más grande (antes h-6 w-6)*/}
              </div>
              <h4 className="text-lg font-semibold text-primary mb-3">Cercanía</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Soporte personalizado y partnership estratégico para tu éxito.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center group">
              <div className="icon-circle-outline mx-auto group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300">
                <Lightbulb className="h-12 w-12" /> {/* ícono más grande (antes h-6 w-6)*/}
              </div>
              <h4 className="text-lg font-semibold text-primary mb-3">Innovación</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tecnología de vanguardia aplicada a automatización y marketing inteligente.
              </p>
            </div>

            {/* Sustainability */}
            <div className="text-center group">
              <div className="icon-circle-outline mx-auto group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300">
                <Leaf className="h-12 w-12" /> {/* ícono más grande (antes h-6 w-6)*/}
              </div>
              <h4 className="text-lg font-semibold text-primary mb-3">Sostenibilidad</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Crecimiento responsable que optimiza recursos y maximiza resultados.
              </p>
            </div>
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="mt-20 fade-in">
          <div className="bg-gradient-accent rounded-3xl p-8 lg:p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <Users className="h-12 w-12 mx-auto mb-6 opacity-90" />
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Nuestro Compromiso
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed opacity-95">
                Cada proyecto es una oportunidad para demostrar que la tecnología, 
                cuando se aplica con propósito y estrategia, puede transformar 
                completamente la forma en que los negocios operan y crecen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;