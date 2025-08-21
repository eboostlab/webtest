import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "¡Mensaje enviado exitosamente!",
      description: "Nos pondremos en contacto contigo dentro de las próximas 24 horas.",
      duration: 5000,
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <section 
      ref={sectionRef}
      id="contacto" 
      className="py-20 lg:py-32 bg-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-section-title text-primary mb-6">
            Contacta con Nosotros
          </h2>
          <p className="text-lead">
            ¿Listo para llevar tu negocio al siguiente nivel? Conversemos sobre 
            cómo podemos ayudarte a automatizar y optimizar tus procesos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="fade-in">
            <div className="card-elegant">
              <h3 className="text-card-title text-primary mb-6">
                Solicita tu Demo Gratuita
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors bg-white"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors bg-white"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors bg-white"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors resize-none bg-white"
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensaje
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="fade-in space-y-8">
            {/* Contact Details */}
            <div className="card-elegant">
              <h3 className="text-card-title text-primary mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="icon-circle-outline flex-shrink-0">
                    <Mail className="h-10 w-10" /> {/* Antes h-5 w-5 */}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@eboostlab.com</p>
                    <p className="text-muted-foreground">info@eboostlab.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="icon-circle-outline flex-shrink-0">
                    <Phone className="h-10 w-10" /> {/* Antes h-5 w-5 */}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground text-sm">Lun - Vie: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/*<div className="flex items-start">
                  <div className="icon-circle-outline flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary mb-1">Oficina Principal</h4>
                    <p className="text-muted-foreground">
                      123 Innovation Street<br />
                      Tech District, TD 12345<br />
                      Estados Unidos
                    </p>
                  </div>
                </div>*/} {/* Ahora no aparece la ubicación*/}
              </div>
            </div>

            {/* What to Expect */}
            <div className="card-elegant">
              <h3 className="text-card-title text-primary mb-6">
                ¿Qué esperar?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Respuesta rápida:</strong> Te contactaremos dentro de las próximas 24 horas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Consulta gratuita:</strong> Análisis inicial sin costo de tu situación actual.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Propuesta personalizada:</strong> Solución diseñada específicamente para tu negocio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-accent rounded-xl p-6 text-center text-white">
              <h4 className="text-lg font-bold mb-2">
                ¡Lleva tu negocio al siguiente nivel!
              </h4>
              <p className="text-sm opacity-90">
                Únete a las empresas que ya están transformando sus operaciones con E-BOOST Lab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;