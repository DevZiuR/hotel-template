import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { CheckCircle2, ArrowUpRight, Anchor, ShieldCheck, Clock, Users, Building2 } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "",
    message: "",
    source: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-24 bg-gray-50 flex items-center justify-center min-h-[600px]">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg mx-4 animate-fade-in border border-gray-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold font-onest text-gray-900 mb-4">¡Solicitud Recibida!</h3>
          <p className="text-gray-600 font-sans mb-8">
            ¡Gracias! Nos pondremos en contacto contigo dentro de 24 horas para confirmar tu reserva.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
          >
            Enviar Otra Solicitud
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column: Content & Illustration */}
          <div className="space-y-8 pt-10 sticky top-24">
            <div className="inline-block px-4 py-2 border border-gray-300 rounded-full bg-white/50 backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-600">Reserva Tu Estadía</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-normal font-onest text-white leading-[1.1]">
              ¿Listo para Tu <br />
              Escape al Mar?
            </h2>

            <p className="text-lg text-gray-400 font-sans max-w-md leading-relaxed font-normal">
              Ya sea que busques relajación frente al mar o aventuras en el Parque Nacional Mochima,
              Aqua Vi Marina Hotel & Suites es tu destino ideal. Reserva ahora y vive la experiencia.
            </p>

            {/* Decorative Illustration (Styled like footer) */}
            <div className="relative mt-12 opacity-20 pointer-events-none select-none">
              <Anchor className="w-64 h-64 stroke-[0.5] text-gray-400" />
            </div>
          </div>

          {/* Right Column: Premium Form */}
          {/* Right Column: Clean Form Layout */}
          <div className="bg-white rounded-[4px] p-8 sm:p-10 shadow-lg relative">

            <div className="mb-8">
              <h3 className="text-3xl font-medium font-onest text-gray-900 tracking-tight">¡Contáctanos hoy!</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Nombre Completo</label>
                  <Input
                    required
                    placeholder="Ingresa tu nombre"
                    className="bg-white border-[#e5e7eb] focus:border-black rounded-none h-14 px-4 text-base transition-colors placeholder:text-gray-400"
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Teléfono</label>
                  <Input
                    required
                    type="tel"
                    placeholder="Ingresa tu teléfono"
                    className="bg-white border-[#e5e7eb] focus:border-black rounded-none h-14 px-4 text-base transition-colors placeholder:text-gray-400"
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>

              {/* Row 2: Email & Check-in */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Email</label>
                  <Input
                    required
                    type="email"
                    placeholder="Ingresa tu email"
                    className="bg-white border-[#e5e7eb] focus:border-black rounded-none h-14 px-4 text-base transition-colors placeholder:text-gray-400"
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Fecha de Llegada</label>
                  <Input
                    required
                    type="date"
                    className="bg-white border-[#e5e7eb] focus:border-black rounded-none h-14 px-4 text-base transition-colors placeholder:text-gray-400"
                    onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Fecha de Salida</label>
                  <Input
                    required
                    type="date"
                    className="bg-white border-[#e5e7eb] focus:border-black rounded-none h-14 px-4 text-base transition-colors placeholder:text-gray-400"
                    onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  />
                </div>
              </div>

              {/* Row 3: Room Type & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Tipo de Habitación</label>
                  <select
                    required
                    className="w-full h-14 px-4 bg-white border border-[#e5e7eb] focus:border-black rounded-none text-base outline-none text-gray-900 transition-colors appearance-none"
                    onChange={(e) => handleInputChange('roomType', e.target.value)}
                  >
                    <option value="" className="text-gray-400">Selecciona habitación...</option>
                    <option value="Individual">Individual - $65/noche</option>
                    <option value="Doble">Doble - $75/noche</option>
                    <option value="Triple">Triple - $85/noche</option>
                    <option value="Cuadruple">Cuádruple - $85/noche</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-base font-normal text-gray-500">Número de Huéspedes</label>
                  <select
                    required
                    className="w-full h-14 px-4 bg-white border border-[#e5e7eb] focus:border-black rounded-none text-base outline-none text-gray-900 transition-colors appearance-none"
                    onChange={(e) => handleInputChange('guests', e.target.value)}
                  >
                    <option value="" className="text-gray-400">¿Cuántos huéspedes?</option>
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5+">5+ personas</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Source (Full Width) */}
              <div className="space-y-2">
                <label className="text-base font-normal text-gray-500">¿Cómo nos conociste?</label>
                <select
                  className="w-full h-14 px-4 bg-white border border-[#e5e7eb] focus:border-black rounded-none text-base outline-none text-gray-900 transition-colors appearance-none"
                  onChange={(e) => handleInputChange('source', e.target.value)}
                >
                  <option value="" className="text-gray-400">Selecciona fuente...</option>
                  <option value="Google">Búsqueda en Google</option>
                  <option value="Referral">Recomendación</option>
                  <option value="Social">Redes Sociales</option>
                  <option value="Booking">Booking / TripAdvisor</option>
                  <option value="Repeat">Cliente Frecuente</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-base font-normal text-gray-500">Mensaje (Opcional)</label>
                <Textarea
                  placeholder="¿Alguna solicitud especial o pregunta?"
                  className="bg-white border-[#e5e7eb] focus:border-black rounded-none min-h-[150px] p-4 text-base resize-none transition-colors placeholder:text-gray-400"
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
              </div>

              {/* Button aligned right */}
              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-16 px-10 bg-[#161616] hover:bg-black text-white text-base font-bold uppercase tracking-widest rounded-none shadow-none transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
                >
                  <span className="relative z-10 border-b border-white pb-0.5 leading-none">
                    {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                  </span>
                  {!isSubmitting && <ArrowUpRight size={20} className="relative z-10" />}
                </Button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section >
  );
};

export default Contact;