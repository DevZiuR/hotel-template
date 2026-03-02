import { ArrowUpRight, Bed, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealOnScroll from "@/components/RevealOnScroll";

const Gallery = () => {
  const rooms = [
    {
      src: "https://aquavisuites.com.ve/wp-content/uploads/2017/06/Hotel-Aqua-Vi-12-07492-1024x683.jpg",
      title: "Habitación Individual",
      price: "$65/noche",
      description: "Perfecta para viajeros solos",
    },
    {
      src: "https://aquavisuites.com.ve/wp-content/uploads/2017/06/Hotel-Aqua-Vi-27--1024x683.jpg",
      title: "Habitación Doble",
      price: "$75/noche",
      description: "Ideal para parejas",
    },
    {
      src: "https://aquavisuites.com.ve/wp-content/uploads/2017/06/Hotel-Aqua-Vi-27--1024x683.jpg",
      title: "Habitación Triple",
      price: "$85/noche",
      description: "Cómoda para familias pequeñas",
    },
    {
      src: "https://aquavisuites.com.ve/wp-content/uploads/2017/06/Hotel-Aqua-Vi-27--1024x683.jpg",
      title: "Habitación Cuádruple",
      price: "$85/noche",
      description: "Amplio espacio para grupos o familias",
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="rooms" className="py-20 md:py-32 bg-[#111111] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-8">
          <div className="flex flex-col space-y-6">
            <span className="w-fit inline-block px-3 py-1 border border-gray-700 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              NUESTRAS HABITACIONES
            </span>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal text-white leading-tight tracking-tight">
                Suites Diseñadas para Tu Máximo Confort
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-medium tracking-wide">
                Espaciosas, modernas y perfectas para estancias largas
              </p>
            </div>
          </div>

          <div className="flex items-center h-full">
            <div className="hidden md:block h-20 w-[1px] bg-gray-800 mr-8"></div>
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-gray-300 transition-colors "
            >
              RESERVAR AHORA <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {rooms.map((room, index) => (
            <RevealOnScroll key={index} animation="slide-up" delay={index * 100}>
              <div className="group relative flex flex-col space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={room.src}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-sm font-bold">
                    {room.price}
                  </div>
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                    {room.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    {room.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-base">
            Todas las habitaciones incluyen desayuno continental y acceso a todas nuestras instalaciones
          </p>
        </div>

      </div>
    </section>
  );
};

export default Gallery;