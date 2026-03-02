import { Star, Quote } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";

const reviews = [
  {
    id: 1,
    source: "Google",
    sourceColor: "text-[#4285F4]",
    text: "Excelente opción para pernoctar antes de agarrar el ferry al día siguiente. La piscina muy linda… la vista a la marina y el atardecer estuvo super chevere.",
    author: "VICTORIA M",
    details: "CARACAS, VENEZUELA",
    avatar: null
  },
  {
    id: 2,
    source: "Google",
    sourceColor: "text-[#4285F4]",
    text: "muy buen lugar la atención el increíble, y es mi lugar de confianza para hospedarme.",
    author: "ROSALIA MARIA",
    details: "HUÉSPED FRECUENTE",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWbD6CayOtw08XIuTsI-YhqPZ3mGtfyljeQM3_4Uk4csMVH56g=s80-rp-mo-br100"
  },
  {
    id: 3,
    source: "TripAdvisor",
    sourceColor: "text-[#00AA6C]",
    text: "Mi experiencia en el Hotel Aqua Vi fue increíble. Ubicado cerca de playas y entornos naturales, las habitaciones son acogedoras y el personal siempre amable. Disfruté la piscina relajante, el spa revitalizante y los platos auténticos en su restaurante. ¡Un lugar que captura la esencia del Caribe y hace sentir como en casa!",
    author: "FRANCISCO M",
    details: "TRIPADVISOR",
    avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f4/d0/default-avatar-2020-33.jpg?w=200&h=-1&s=1"
  },
  {
    id: 4,
    source: "Google",
    sourceColor: "text-[#4285F4]",
    text: "Es la quinta vez que me quedo en este hotel y gran diferencia, están bastante bien para el momento. La atención y lo impecable del personal es excelente ... La habitación limpia y cómoda. El Aire acondicionado muy buena Por lo menos la que me asignaron... Las instalaciones como siempre bastante agradable",
    author: "KAMAL",
    details: "HUÉSPED FRECUENTE",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWH-U_Ktxe39QrjxHud6jsHOYFeikT7TqL1aPhUX_GUSXKyVbWYlA=s80-rp-mo-ba6-br100"
  }
];

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <section className="py-24 bg-[#F9F8FD]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#6B5B95] text-[#6B5B95]" />
            ))}
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal font-serif text-[#1a1a1a] mb-6">
            Historias de Huéspedes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-sans">
            2000+ huéspedes felices hasta ahora
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6 md:-ml-8">
              {reviews.map((review) => (
                <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6 md:pl-8">
                  <div className="bg-white p-10 md:p-12 h-full flex flex-col rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300">

                    {/* Source Logo/Text */}
                    <div className={`text-xl font-bold mb-8 flex items-center gap-2 ${review.sourceColor}`}>
                      {/* Simple icon representation */}
                      <span className="font-bold tracking-tight">{review.source}</span>
                    </div>

                    {/* Review Text */}
                    <p className="text-xl md:text-2xl text-gray-800 font-sans font-light leading-relaxed mb-12 flex-grow">
                      "{review.text}"
                    </p>

                    {/* Author Info */}
                    <div className="mt-auto flex items-center gap-4">
                      {review.avatar && (
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <h4 className="text-xs font-bold tracking-[0.2em] text-gray-900 uppercase mb-2">
                          {review.author}
                        </h4>
                        <p className="text-[10px] md:text-xs font-bold tracking-[0.1em] text-gray-400 uppercase">
                          {review.details}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;