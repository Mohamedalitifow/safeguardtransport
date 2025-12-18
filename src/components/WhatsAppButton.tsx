import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({
  phoneNumber = "+252612121368",
  message = "Hello! I would like to inquire about your transport services.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
