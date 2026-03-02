import { CheckCircle2 } from "lucide-react";

const About = () => {
  const checkItems = [
    "🌊 Ubicación Privilegiada",
    "🛥️ Marina Privada 5 Estrellas",
    "🏊 Instalaciones de Primera",
    "🛏️ Suites Espaciosas",
    "🍽️ Restaurante Especializado",
    "🌴 Acceso a Parque Nacional Mochima",
  ];

  const stats = [
    { label: "SATISFACCIÓN DEL CLIENTE", value: "100%" },
    { label: "METROS DE MUELLE", value: "300" },
    { label: "EMBARCACIONES CAPACIDAD", value: "40" },
    { label: "ESTRELLAS", value: "5★" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="inline-block px-3 py-1 border border-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
                NUESTRO COMPROMISO
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 mb-6 leading-tight">
                ¿Por Qué Aqua Vi Marina Hotel & Suites?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Frente al mar en Lechería, a minutos del Centro Comercial Caribbean Mall y con acceso directo a la terminal de ferry de Puerto La Cruz. Zarpa directamente desde nuestro muelle de 300 metros hacia las aguas cristalinas del Parque Nacional Mochima.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {checkItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <span className="text-4xl md:text-5xl font-normal text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 tracking-widest uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Video */}
          <div className="relative h-[500px] md:h-[600px] lg:h-full min-h-[500px]">
            <div className="absolute inset-0">
              <video
                src="https://i.imgur.com/uVxSNH1.mp4"
                className="w-full h-full object-cover shadow-2xl"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;