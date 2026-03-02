import { Calendar, ChevronDown, Users } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 Huésped");

  const handleCheckAvailability = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://aquavisuites.com.ve/wp-content/uploads/2021/01/Hotel-Aqua-Vi-42-07588-scaled.jpg"
          alt="Aqua Vi Marina Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-32 md:mt-20">
        <h1 className="text-[42px] md:text-[64px] lg:text-[70px] text-white font-serif leading-[1.1] mb-6 drop-shadow-lg">
          Un Santuario Privado<br />
          en el <span className="italic">Corazón de Mochima</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 font-sans max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Diseñado para quienes buscan más que un destino<br className="hidden md:block" />
          — una experiencia del alma.
        </p>
      </div>

      {/* Booking Form */}
      <div className="relative md:absolute md:bottom-12 md:left-1/2 md:transform md:-translate-x-1/2 z-20 w-full max-w-4xl px-4 mt-16 md:mt-0">
        <div className="bg-white rounded-lg shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden">

          {/* Check-in */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6">
            <label className="text-[10px] font-bold tracking-[0.15em] text-gray-500 uppercase block mb-2">
              Llegada
            </label>
            <div className="flex items-center justify-between">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="text-gray-800 text-base font-sans bg-transparent border-none outline-none w-full cursor-pointer"
                placeholder="Elegir fecha"
              />
              <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6">
            <label className="text-[10px] font-bold tracking-[0.15em] text-gray-500 uppercase block mb-2">
              Salida
            </label>
            <div className="flex items-center justify-between">
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="text-gray-800 text-base font-sans bg-transparent border-none outline-none w-full cursor-pointer"
                placeholder="Elegir fecha"
              />
              <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </div>
          </div>

          {/* Room/Guests */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6">
            <label className="text-[10px] font-bold tracking-[0.15em] text-gray-500 uppercase block mb-2">
              Guests
            </label>
            <div className="flex items-center justify-between">
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="text-gray-800 text-base font-sans bg-transparent border-none outline-none w-full cursor-pointer appearance-none"
              >
                <option value="1 Huésped">1 Adulto</option>
                <option value="2 Huéspedes">2 Adultos</option>
                <option value="3 Huéspedes">3 Adultos</option>
                <option value="4 Huéspedes">4 Adultos</option>
                <option value="5+ Huéspedes">5+ Adultos</option>
              </select>
              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleCheckAvailability}
            className="bg-[#E6D5E9] hover:bg-[#d4c3d7] text-black font-bold text-xs md:text-sm tracking-[0.15em] uppercase px-6 md:px-10 py-6 transition-colors duration-300 whitespace-nowrap"
          >
            Verificar Disponibilidad
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;