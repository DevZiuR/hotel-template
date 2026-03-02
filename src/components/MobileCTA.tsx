import { Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const MobileCTA = () => {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
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

    const scrollToRooms = () => {
        const element = document.getElementById("rooms");
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

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex h-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Button
                onClick={scrollToContact}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-black font-montserrat uppercase h-full rounded-none text-base sm:text-lg border-r border-white/20"
            >
                Reservar
            </Button>
            <Button
                onClick={scrollToRooms}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-black font-montserrat uppercase h-full rounded-none text-base sm:text-lg"
            >
                Ver Habitaciones
            </Button>
        </div>
    );
};

export default MobileCTA;
