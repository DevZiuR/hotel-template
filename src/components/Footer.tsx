import { Anchor } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const elementPositionAbs = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: elementPositionAbs,
        behavior: "smooth"
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black pt-24 pb-12 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-24">

          {/* Explore Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">
              Explorar
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", id: "home" },
                { label: "Habitaciones", id: "rooms" },
                { label: "Servicios", id: "services" },
                { label: "Nosotros", id: "about" },
                { label: "Marina", id: "marina" },
                { label: "Contacto", id: "contact" }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-4xl md:text-5xl font-normal hover:italic hover:text-gray-600 transition-all duration-300 text-left block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">
              Social
            </h4>
            <ul className="space-y-2">
              {["Instagram", "Facebook", "TripAdvisor", "Booking"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-4xl md:text-5xl font-normal hover:italic hover:text-gray-600 transition-all duration-300 block"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Grid */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12">

            {/* Phone */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                Teléfono
              </h4>
              <p className="text-lg text-gray-800 leading-relaxed font-sans">
                +58 (281) 263-9792<br />
                Diario, 8am–8pm
              </p>
            </div>

            {/* Whatsapp */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                Whatsapp
              </h4>
              <p className="text-lg text-gray-800 leading-relaxed font-sans">
                +58 (414) 123-4567
              </p>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                Dirección
              </h4>
              <p className="text-lg text-gray-800 leading-relaxed font-sans max-w-xs">
                Av. R 19 Norte, Puerto La Cruz 6023, Anzoátegui, Venezuela
              </p>
            </div>

            {/* Email */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                Email
              </h4>
              <a href="mailto:info@aquavisuites.com.ve" className="text-lg text-gray-800 leading-relaxed font-sans hover:text-gray-500 transition-colors">
                Reservas@aquavisuites.com.ve
              </a>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 relative">

          <span className="text-xs font-bold tracking-[0.1em] text-gray-400 uppercase order-2 md:order-1">
            Hecho con <span className="text-red-500">♥</span> en Venezuela
          </span>

          <div className="order-1 md:order-2 bg-white px-8 -mt-20 md:-mt-24 z-10">
            <img
              src="https://aquavisuites.com.ve/wp-content/uploads/2021/01/LOGO-FONDO-TRANSPARENTE-baja.png"
              alt="Aqua Vi Logo"
              className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-80"
            />
            <div className="text-center mt-2 font-serif text-lg italic text-gray-400">The Aqua Vi Shore</div>
          </div>

          <span className="text-xs font-bold tracking-[0.1em] text-gray-400 uppercase order-3 text-right">
            © {currentYear} Aqua Vi Marina Hotel
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;