import React from "react";
import { Phone } from "lucide-react";

const Chatbot: React.FC = () => {
  return (
    <a
      href="tel:04248313091"
      className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-[#E6D5E9] text-black w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#d4c3d7] transition-all duration-300 hover:scale-110 group"
      aria-label="Call us"
    >
      <Phone className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Llámanos: 0424-8313091
      </span>
    </a>
  );
};

export default Chatbot;


