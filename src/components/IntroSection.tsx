import { Anchor, Waves, Utensils } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const IntroSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <RevealOnScroll animation="fade-in">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">
                            Tu Refugio en el Caribe
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight md:leading-snug text-black mb-12 font-serif max-w-3xl">
                            Anclado frente a las aguas turquesas de Puerto La Cruz, un santuario donde el lujo se une con la aventura. Elegancia, calma y la belleza de Mochima te esperan.
                        </h2>

                        <div className="flex flex-row md:flex-row justify-center items-start md:items-center gap-4 md:gap-24 w-full">
                            {/* Feature 1 */}
                            <div className="flex flex-col items-center gap-2 md:gap-4 group flex-1">
                                <div className="p-3 md:p-4 rounded-full bg-gray-50 group-hover:bg-[#f8f8f8] transition-colors duration-300">
                                    <Anchor className="w-6 h-6 md:w-10 md:h-10 text-black stroke-[1.5]" />
                                </div>
                                <span className="text-[8px] md:text-xs font-bold tracking-widest uppercase text-gray-900 text-center">
                                    Marina Privada
                                </span>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex flex-col items-center gap-2 md:gap-4 group flex-1">
                                <div className="p-3 md:p-4 rounded-full bg-gray-50 group-hover:bg-[#f8f8f8] transition-colors duration-300">
                                    <Waves className="w-6 h-6 md:w-10 md:h-10 text-black stroke-[1.5]" />
                                </div>
                                <span className="text-[8px] md:text-xs font-bold tracking-widest uppercase text-gray-900 text-center">
                                    Acceso a Mochima
                                </span>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex flex-col items-center gap-2 md:gap-4 group flex-1">
                                <div className="p-3 md:p-4 rounded-full bg-gray-50 group-hover:bg-[#f8f8f8] transition-colors duration-300">
                                    <Utensils className="w-6 h-6 md:w-10 md:h-10 text-black stroke-[1.5]" />
                                </div>
                                <span className="text-[8px] md:text-xs font-bold tracking-widest uppercase text-gray-900 text-center">
                                    Gastronomía Exquisita
                                </span>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default IntroSection;
