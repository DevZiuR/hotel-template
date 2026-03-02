import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealOnScroll from "@/components/RevealOnScroll";

const Services = () => {
  const services = [
    {
      image: "https://aquavisuites.com.ve/wp-content/uploads/2017/06/Hotel-Aqua-Vi-27--1024x683.jpg",
      title: "Alojamiento Confortable",
      description: "Habitaciones con TV y minibar, áreas de estar amplias, camas matrimoniales y opciones desde individuales hasta cuádruples."
    },
    {
      image: "https://aquavisuites.com.ve/wp-content/uploads/2017/08/Hotel-Aqua-Vi-69--1024x683.jpg",
      title: "Marina Aqua Vi",
      description: "Muelle de 300 metros con capacidad para 40 embarcaciones, mantenimiento náutico, personal especializado y storage locker individual."
    },
    {
      image: "https://aquavisuites.com.ve/wp-content/uploads/2021/02/Hotel-Aqua-Vi-52-07617-scaled.jpg",
      title: "Piscina al Aire Libre",
      description: "Piscina espectacular con las mejores vistas del Caribe venezolano, perfecta para relajarte bajo el sol tropical."
    },
    {
      image: "https://aquavisuites.com.ve/wp-content/uploads/2021/02/close-up-of-glasses-with-champagne-1024x683.jpg",
      title: "Salones",
      description: "4 Salones especiales fiestas y eventos de cualquier tipo."
    },
    {
      image: "https://aquavisuites.com.ve/wp-content/uploads/2021/01/Hotel-Aquia-Vi-Spa-12-01481-1024x683.jpg",
      title: "Gimnasio & Spa",
      description: "Gimnasio completamente equipado y spa con servicios de masajes para tu bienestar y relajación."
    },
    {
      image: "https://aquavisuites.com.ve/wp-content/uploads/2017/08/Hotel-Aqua-Vi-104-00107-1024x683.jpg",
      title: "Restaurante",
      description: "Restaurante especializado en carnes a la parrilla con vista al mar y áreas sociales para compartir."
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRooms = () => {
    const element = document.querySelector("#rooms");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section - Inspired by reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-black font-bold tracking-widest text-sm uppercase flex items-center gap-2 font-onest">
              <span className="w-8 h-[2px] bg-primary"></span>
              Servicios & Comodidades
            </span>
            <h2 className="text-4xl md:text-6xl font-normal font-onest text-black leading-[0.9] tracking-tighter">
              Tu Confort <br />
              <span className="text-black">es Primero.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg text-gray-600 font-sans leading-relaxed max-w-md">
              Desde la comodidad de tu habitación hasta aventuras en el mar, tenemos todo lo que necesitas.
              Elige <span className="font-bold">Aqua Vi Marina Hotel & Suites.</span>
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <button
                onClick={scrollToRooms}
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 hover:text-primary hover:border-primary transition-all duration-300"
              >
                Ver Habitaciones <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 hover:text-secondary hover:border-secondary transition-all duration-300"
              >
                Reservar Ahora <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index} animation="slide-up" delay={index * 150}>
              <div
                className="group relative h-[400px] sm:h-[450px] overflow-hidden rounded-[2.5rem] bg-gray-100 flex flex-col justify-end p-8 w-full"
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4">
                  <h3 className="text-lg sm:text-xl font-bold font-onest text-white leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 font-sans text-xs opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 overflow-hidden leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex justify-start">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-500 group-hover:bg-primary group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;