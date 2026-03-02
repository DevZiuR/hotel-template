import RevealOnScroll from "./RevealOnScroll";
import { ArrowUpRight } from "lucide-react";

const PreFooterCTA = () => {
    return (
        <section className="relative h-[600px] w-full mt-24">
            {/* Background Image Container with fixed height and rounded corners */}
            <div className="container mx-auto px-4 h-full">
                <div className="relative h-full w-full rounded-3xl overflow-hidden">
                    {/* Image */}
                    <img
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/73/22/9d/hotel-aqua-vi-suites.jpg?w=1400&h=-1&s=1"
                        alt="Aqua Vi Marina Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark Overlay (Little Darker as requested) */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Content Centered */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <RevealOnScroll animation="fade-in">
                            <h2 className="text-[40px] md:text-[60px] lg:text-[79px] text-white font-serif leading-tight mb-8 drop-shadow-lg">
                                Escápate hacia la calma,<br />
                                <span className="italic">privacidad y alma</span>
                            </h2>

                            <a
                                href="#rooms"
                                className="inline-flex items-center gap-2 bg-[#E6D5E9] hover:bg-white text-black px-8 py-4 rounded-full font-bold tracking-wider uppercase transition-all duration-300 transform hover:scale-105"
                            >
                                Encuentra tu habitación
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreFooterCTA;
