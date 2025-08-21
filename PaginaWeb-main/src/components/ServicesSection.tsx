import { useEffect, useRef } from "react";
import { Cog, Target, Zap, TrendingUp, ArrowRight } from "lucide-react";

const ServicesSection = () => {
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

  const services = [
    {
      icon: Cog,
      title: "Automatización de Procesos",
      description: "Optimización de operaciones para reducir tiempos y costos operativos.",
      features: [
        "Flujos de trabajo automatizados",
        "Integración de sistemas",
        "Reducción de errores humanos",
        "Escalabilidad operacional"
      ]
    },
    {
      icon: Target,
      title: "Estrategias de Marketing Inteligente",
      description: "Campañas basadas en datos para maximizar resultados y ROI.",
      features: [
        "Marketing automation",
        "Segmentación avanzada",
        "Personalización en tiempo real",
        "Analytics y reporting"
      ]
    },
    {
      icon: Zap,
      title: "Integraciones Tecnológicas",
      description: "Conexión de herramientas para flujos de trabajo eficientes.",
      features: [
        "APIs y webhooks",
        "Sincronización de datos",
        "Conectores personalizados",
        "Monitoreo en tiempo real"
      ]
    },
    {
      icon: TrendingUp,
      title: "Análisis y Optimización Continua",
      description: "Seguimiento de KPIs y mejoras constantes para maximizar performance.",
      features: [
        "Dashboards inteligentes",
        "Métricas personalizadas",
        "Predicciones y tendencias",
        "Optimización automática"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="servicios" 
      className="py-20 lg:py-32 bg-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-section-title text-primary mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lead">
            Soluciones integrales de automatización y marketing inteligente 
            diseñadas para impulsar el crecimiento de tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                /* He añadido flex flex-col h-full al className: En la tarjeta → Hace que el contenido se distribuya en columna y que la tarjeta ocupe la misma altura que las demás.*/
                className="card-elegant fade-in group cursor-pointer flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-circle mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <h3 className="text-card-title text-primary mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* He añadido mb-6: En el <ul> para dejar un espacio uniforme antes del separador.*/}

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* He cambiado mt-6 por mt-auto: En el bloque del botón → Empuja la barra y el botón hacia el fondo sin importar cuánto texto haya antes.*/}
                <div className="mt-auto pt-6 border-t border-border/30">
                  <button 
                    onClick={scrollToContact}
                    className="text-secondary font-medium text-sm group-hover:text-accent transition-colors inline-flex items-center"
                  >
                    Más información
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="fade-in">
          <div className="bg-white rounded-2xl p-8 lg:p-12 text-center shadow-lg border border-border/10">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-lead mb-8 max-w-2xl mx-auto">
              Descubre cómo nuestras soluciones de automatización pueden 
              impulsar tu crecimiento y optimizar tus operaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="btn-primary"
              >
                Solicitar Consulta Gratuita
              </button>
               
              {/* <button 
                onClick={() => {
                  const element = document.getElementById("casos-exito");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn-secondary"
              >
                Ver Casos de Éxito
              </button> */} {/* Este botón lo he comentado para descomentarlo cuando tengamos nuestros clientes */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;