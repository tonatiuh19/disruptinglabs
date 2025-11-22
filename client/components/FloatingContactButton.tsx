import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useReachOutModal } from "@/components/ReachOutModal";

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useReachOutModal();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Show button after scrolling past hero section (e.g., 800px)
      setIsVisible(scrollTop > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      onClick={openModal}
      size="lg"
      className="fixed bottom-8 right-8 z-50 group bg-gradient-to-r from-wine via-pink-500 to-burgundy hover:from-wine/90 hover:via-pink-400 hover:to-burgundy/90 text-white px-6 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-float-1"
    >
      <MessageCircle className="h-6 w-6 mr-2 group-hover:rotate-12 transition-transform" />
      <span className="font-bold text-lg">Get in Touch</span>
    </Button>
  );
}
