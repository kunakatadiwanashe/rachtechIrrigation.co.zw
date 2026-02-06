import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phone = "263798670043";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 
        right-6 
        z-50
        bg-green-500 
        hover:bg-green-600
        text-white 
        w-14 
        h-14 
        rounded-full 
        flex 
        items-center 
        justify-center 
        shadow-lg
        transition-transform 
        hover:scale-110
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;




