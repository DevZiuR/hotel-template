import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question: "¿A qué hora es el check-in y check-out?",
            answer: "El check-in es a partir de las 3:00 PM y el check-out hasta las 11:00 PM. Si necesitas horarios especiales, contáctanos para verificar disponibilidad."
        },
        {
            question: "¿El desayuno está incluido?",
            answer: "Sí, todas nuestras habitaciones incluyen desayuno continental para que empieces tu día con energía."
        },
        {
            question: "¿Tienen estacionamiento disponible?",
            answer: "Sí, ofrecemos estacionamiento gratuito para nuestros huéspedes."
        },
        {
            question: "¿Cómo puedo hacer una reserva?",
            answer: "Puedes reservar directamente por WhatsApp al +58 424-831-3091, a través de nuestro sitio web aquavisuites.com.ve, o enviándonos un mensaje directo por Instagram."
        },
        {
            question: "¿Ofrecen facilidades de pago?",
            answer: "Sí, aceptamos pagos en cuotas a través de Cashea para mayor comodidad."
        },
        {
            question: "¿Puedo usar la marina si no tengo embarcación?",
            answer: "La marina está disponible principalmente para huéspedes con embarcaciones. Sin embargo, puedes consultar sobre tours y excursiones al Parque Nacional Mochima."
        },
        {
            question: "¿Qué servicios incluye la marina?",
            answer: "Nuestra marina incluye muelle de 300 metros, mantenimiento náutico, personal especializado, storage locker, electricidad 220V/110V y baños para tripulación."
        },
        {
            question: "¿Están cerca de la playa?",
            answer: "Sí, estamos ubicados frente al mar en Lechería. Playa Muerta está a solo 8 km del hotel."
        },
        {
            question: "¿Hay restaurantes cerca?",
            answer: "Contamos con nuestro propio restaurante especializado en carnes a la parrilla. También estamos cerca del Centro Comercial Caribbean Mall con múltiples opciones gastronómicas."
        },
        {
            question: "¿Ofrecen servicio de spa?",
            answer: "Sí, tenemos un spa que ofrece servicios de masajes para tu relajación total."
        },
        {
            question: "¿Las habitaciones tienen aire acondicionado?",
            answer: "Sí, todas nuestras habitaciones cuentan con las comodidades necesarias para tu confort, incluyendo TV, minibar y áreas de estar."
        },
        {
            question: "¿Organizan excursiones al Parque Nacional Mochima?",
            answer: "Desde nuestra marina tienes acceso directo para zarpar hacia el Parque Nacional Mochima. Consúltanos sobre disponibilidad de tours."
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-[#FDF8F3]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Heading */}
                    <div className="lg:col-span-4 space-y-6">
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase block">
                            FAQ
                        </span>

                        <h2 className="text-5xl md:text-6xl lg:text-6xl font-serif font-normal text-[#1a2a3a] leading-[1.1]">
                            Preguntas<br />
                            frecuentes
                        </h2>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-8">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-0 mb-3"
                                >
                                    <AccordionTrigger className="bg-[#F5EDE6] hover:bg-[#EFE5DC] px-6 py-5 rounded-lg text-sm md:text-base font-bold tracking-[0.05em] uppercase text-[#1a2a3a] text-left transition-colors [&[data-state=open]]:rounded-b-none">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-[#F5EDE6] px-6 pb-6 pt-0 rounded-b-lg text-gray-700 font-sans text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
