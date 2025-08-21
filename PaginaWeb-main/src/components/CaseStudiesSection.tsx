import { useEffect, useRef } from "react";
import { TrendingUp, Users, Clock, DollarSign, TextIcon } from "lucide-react";

const CaseStudiesSection = () => {
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

  // LO SIGUIENTE LO COMENTO PORQUE VOY A PONER LAS NOTICIAS

  /*const caseStudies = [
    {
      title: "E-commerce: Automatización de Ventas",
      industry: "Retail Online",
      description: "Implementación de automatización completa del proceso de ventas y marketing para una tienda online.",
      results: [
        { icon: TrendingUp, metric: "+340%", label: "Aumento en conversiones" },
        { icon: DollarSign, metric: "+280%", label: "Incremento en ROI" },
        { icon: Clock, metric: "75%", label: "Reducción en tiempo operativo" }
      ],
      challenge: "Cliente con alta rotación de inventario necesitaba automatizar el seguimiento de clientes y optimizar campañas de remarketing.",
      solution: "Desarrollo de workflows automatizados para segmentación dinámica, email marketing personalizado y seguimiento de abandono de carrito.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SaaS: Optimización de Customer Success",
      industry: "Software B2B",
      description: "Automatización del onboarding y seguimiento de clientes para una plataforma SaaS.",
      results: [
        { icon: Users, metric: "+150%", label: "Retención de clientes" },
        { icon: TrendingUp, metric: "+220%", label: "Upselling automatizado" },
        { icon: Clock, metric: "60%", label: "Reducción en churn rate" }
      ],
      challenge: "Plataforma SaaS con alta tasa de abandono durante onboarding y bajo engagement post-venta.",
      solution: "Sistema inteligente de onboarding progresivo, alertas automáticas de riesgo de churn y campañas de engagement personalizadas.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Servicios Profesionales: Lead Generation",
      industry: "Consultoría",
      description: "Implementación de sistema automatizado de generación y calificación de leads.",
      results: [
        { icon: Users, metric: "+400%", label: "Leads calificados" },
        { icon: DollarSign, metric: "+190%", label: "Ingresos por cliente" },
        { icon: TrendingUp, metric: "+95%", label: "Eficiencia del equipo" }
      ],
      challenge: "Firma de consultoría necesitaba escalar su proceso de generación de leads sin aumentar personal de ventas.",
      solution: "Chatbots inteligentes, scoring automático de leads, workflows de nurturing y integración CRM completa.",
      image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&q=80"
    }
  ];*/

  const caseStudies = [
    {
      title: "E-commerce: Personalización que convierte",
      industry: "Retail Online",
      description: "Homepage y recomendaciones dinámicas elevan ingresos por visita y conversión en retail de lujo.",
      reference: "https://www.voguebusiness.com/story/consumers/inside-saks-globals-personalisation-strategy",
      results: [
        { icon: TrendingUp, metric: "+7%", label: "Aumento de ingreso por visitante" },
        { icon: DollarSign, metric: "+10%", label: "Mejora de conversión" },
        { icon: Clock, metric: "6 meses", label: "Despliegue de solución" }
      ],
      challenge: "Catálogo amplio y experiencia genérica reducían compras; necesitaban personalización escalable sin degradar rendimiento.",
      solution: "Algoritmos de Machine Learning para homepage y orden de ítems; tests controlados y despliegue total con first-party data.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SaaS/CX: Resolución automática en soporte",
      industry: "Software B2B",
      description: "Bots y enrutado inteligente aceleran tiempos de respuesta y suben satisfacción, liberando agentes para casos complejos.",
      reference: "https://www.zendesk.es/blog/zip2-relate-2025-resolution-platform-ai-agents/#georedirect",
      results: [
        { icon: Users, metric: "x3", label: "Productividad del equipo" },
        { icon: TrendingUp, metric: "+20%", label: "Incremento de CSAT" },
        { icon: Clock, metric: ">90%", label: "Reducción en tiempo de resolución" }
      ],
      challenge: "Volumen de tickets y picos estacionales saturaban equipos; esperas largas afectaban satisfacción y costes operativos.",
      solution: "Plataforma de automatización de Zendesk con IA: autoservicio, autosolución y flujos orquestados para priorizar y cerrar tickets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Servicios Profesionales: Automatización en despachos",
      industry: "Consultoría",
      description: "Automatización documental y de datos libera horas facturables y acelera la entrega al cliente.",
      reference: "https://www.microsoft.com/en/customers/story/23921-assembly-software-azure-ai-foundry",
      results: [
        { icon: Users, metric: "+10%", label: "Ganancia de eficiencia" },
        { icon: TextIcon, metric: "40h a min", label: "Redacción de documentos" },
        { icon: Clock, metric: "hasta 25h", label: "Ahorro por caso" }
      ],
      challenge: "Procesos manuales en expedientes legales ralentizaban operaciones y generaban errores, manteniendo altas cargas administrativas.",
      solution: "NeosAI embebido con Azure: extracción, RAG y generación de documentos; automatización de extremo a extremo en workflows legales.",
      image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="casos-exito" 
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          {/* Antes ponía "Casos de Éxito" y se ha cambiado por "Noticias de Actualidad".*/}
          <h2 className="text-section-title text-primary mb-6">
            Noticias de Actualidad
          </h2>
          {/* Antes ponía "Descubre cómo hemos transformado negocios 
          reales con nuestras soluciones de automatización inteligente."
           y se ha cambiado por "Descubre los métodos que se utilizan 
           en negocios reales con soluciones de automatización 
           inteligente.".*/}
          <p className="text-lead">
            Descubre los métodos que se utilizan en negocios reales con 
            soluciones de automatización inteligente.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center fade-in ${
                index % 2 === 1 ? 'lg:grid-cols-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
                  {study.industry}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  {study.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {study.results.map((result, resultIndex) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={resultIndex} className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <IconComponent className="h-5 w-5 text-secondary mr-2" />
                          <span className="text-xl lg:text-2xl font-bold text-secondary">
                            {result.metric}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">
                          {result.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Desafío:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Solución:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                
                {/* Esto lo añado para que las imágenes crezcan al hacer hover; ahí pondré 
                el enlace de la noticia.  Antes ponía en className solamente "relative",
                ahora "relative transition-transform duration-300 ease-in-out".*/}

                <div className="relative transition-transform duration-300 ease-in-out"
                  /* Lo del estilo y onMouseEnter y onMouseLeave lo añado nuevo. */
                  /* Esto aplica un estilo inline al elemento. Lo de transform: scale(1)
                    significa que inicialmente no hay escalado, es decir, el tamaño es
                    normal. */

                  style={{ transform: 'scale(1)', }}

                  /* onMouseEnter es un evento de React que se dispara cuando el cursor
                    entra en el área del elemento. e es el evento. e.currentTarget es el
                    elemento que recibió el evento (el div en este caso). 
                    e.currentTarget.style.transform = 'scale(1.02)' le dice al navegador
                    que escale el elemento al 102% mientras el cursor está encima.
                    
                    onMouseLeave se dispara cuando el cursor sale del elemento. Igual
                    que antes, seleccionamos el elemento con e.currentTarget y restauramos
                    su tamaño original (scale(1)), quitando el efecto de zoom.*/

                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  
                  onClick={() => window.open(study.reference, "_blank", "noopener,noreferrer")}
                  >
                  
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-gradient-accent rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ¿Tu negocio será el próximo caso de éxito?
            </h3>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Únete a las empresas que ya están transformando sus operaciones 
              con nuestras soluciones de automatización inteligente.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contacto");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Solicitar Demo Gratuita
              <TrendingUp className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;