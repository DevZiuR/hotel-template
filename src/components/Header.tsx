import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setServicesOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const [lang, setLang] = useState<'EN' | 'ES'>('ES');

  const translations = {
    EN: {
      navLinks: [
        { name: "Services", id: "services", hasDropdown: true },
        { name: "About", id: "about" },
        { name: "Rooms", id: "rooms" },
        { name: "Marina", id: "marina" },
        { name: "Location", id: "locations" },
        { name: "Contact", id: "contact" },
      ],
      serviceItems: [
        "Accommodation",
        "Marina Aqua Vi",
        "Pool & Spa",
        "Restaurant"
      ],
      bookNow: "Book Now"
    },
    ES: {
      navLinks: [
        { name: "Servicios", id: "services", hasDropdown: true },
        { name: "Nosotros", id: "about" },
        { name: "Habitaciones", id: "rooms" },
        { name: "Marina", id: "marina" },
        { name: "Ubicación", id: "locations" },
        { name: "Contacto", id: "contact" },
      ],
      serviceItems: [
        "Alojamiento",
        "Marina Aqua Vi",
        "Piscina y Spa",
        "Restaurante"
      ],
      bookNow: "Reservar"
    }
  };

  const navLinks = translations[lang].navLinks;
  const serviceItems = translations[lang].serviceItems;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="w-full bg-[#E6D5E9] py-2 text-center">
        <span className="text-black text-[10px] md:text-xs font-bold tracking-widest uppercase">
          ¡Aceptamos Cashea! - Planifica tu escape en cuotas 💳
        </span>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        <div className="max-w-[1400px] mx-auto border border-white/20 bg-white/5 backdrop-blur-sm rounded-none md:rounded-sm flex items-stretch min-h-[70px]">

          {/* Logo Section */}
          <div className="flex items-center px-6 border-r border-white/20 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img
              src="https://aquavisuites.com.ve/wp-content/uploads/2021/01/LOGO-FONDO-TRANSPARENTE-baja.png"
              alt="Aqua Vi Marina Hotel & Suites"
              className={`h-12 w-auto object-contain transition-all duration-300 ${scrolled ? "" : ""}`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-end items-center px-8 border-r border-white/20">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="relative group h-full flex items-center">
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-white hover:text-gray-300 font-bold font-onest text-sm tracking-wider uppercase transition-colors flex items-center gap-1 py-4"
                      >
                        {link.name}
                        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                      </button>
                      {/* Dropdown */}
                      <div className="absolute top-[calc(100%+10px)] -left-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-black border border-white/10 shadow-xl overflow-hidden min-w-[240px]">
                          {serviceItems.map((item) => (
                            <button
                              key={item}
                              onClick={(e) => {
                                e.stopPropagation();
                                scrollToSection("services");
                              }}
                              className="w-full text-left px-5 py-3 text-gray-300 hover:bg-white/10 hover:text-white text-sm font-medium transition-colors border-b border-white/5 last:border-0"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-gray-300 font-bold font-onest text-sm tracking-wider uppercase transition-colors py-4"
                  >
                    {link.name}
                  </button>
                );
              })}

              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
                className="text-white hover:text-gray-300 font-bold font-onest text-sm tracking-wider transition-colors ml-4 border border-white/30 px-2 py-1 rounded"
              >
                {lang === 'ES' ? 'EN' : 'ES'}
              </button>
            </nav>
          </div>

          {/* Contact Button Section */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="h-full px-10 bg-black hover:bg-gray-900 border-l border-white/20 text-white font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center whitespace-nowrap"
            >
              {translations[lang].bookNow}
            </button>
          </div>

          {/* Mobile Menu Button - Right aligned within the flex container logic if needed, or absolute */}
          <div className="lg:hidden flex-1 flex justify-end items-center px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[100px] bg-black z-40 lg:hidden animate-fade-in border-t border-gray-800">
          <div className="flex flex-col p-6 space-y-6 h-full overflow-y-auto">
            <div className="space-y-4">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="border-b border-gray-800 pb-4">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-left text-lg font-bold text-white mb-2 uppercase tracking-wide"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>

                      {servicesOpen && (
                        <div className="flex flex-col gap-3 pl-4 mt-2 animate-slide-down">
                          {serviceItems.map((item) => (
                            <button
                              key={item}
                              onClick={() => scrollToSection("services")}
                              className="text-gray-300 hover:text-white text-base font-medium text-left flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-lg font-bold text-white border-b border-gray-800 pb-4 uppercase tracking-wide"
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <Button
                className="w-full bg-secondary text-black py-6 text-base font-bold uppercase tracking-wider rounded-none"
                onClick={() => scrollToSection("contact")}
              >
                {translations[lang].bookNow}
              </Button>
              <Button
                variant="outline"
                className="w-full text-black py-6 text-base font-bold uppercase tracking-wider rounded-none"
                onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              >
                Language: {lang === 'ES' ? 'Español' : 'English'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;