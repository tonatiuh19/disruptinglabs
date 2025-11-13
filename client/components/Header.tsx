import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useReachOutModal } from "@/components/ReachOutModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Consider scrolled when past 100px (roughly the height of the first section's top part)
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { openModal } = useReachOutModal();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-wine via-disrupting-purple to-burgundy rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:glow-wine">
              <span className="text-white font-black text-lg">D</span>
            </div>
            <span className={`text-2xl font-black transition-all duration-300 ${
              isScrolled ? 'text-white drop-shadow-lg bg-gradient-to-r from-wine via-disrupting-pink to-burgundy bg-clip-text text-transparent' : 'text-wine'
            }`}>Disrupting Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className={`transition-all duration-300 ${
              isScrolled ? 'text-white/90 hover:text-white drop-shadow-lg' : 'text-disrupting-gray hover:text-disrupting-dark'
            }`}>
              Services
            </Link>
            <Link to="/solutions" className={`transition-all duration-300 ${
              isScrolled ? 'text-white/90 hover:text-white drop-shadow-lg' : 'text-disrupting-gray hover:text-disrupting-dark'
            }`}>
              Solutions
            </Link>
            <Link to="/about" className={`transition-all duration-300 ${
              isScrolled ? 'text-white/90 hover:text-white drop-shadow-lg' : 'text-disrupting-gray hover:text-disrupting-dark'
            }`}>
              About
            </Link>
            <Link to="/contact" className={`transition-all duration-300 ${
              isScrolled ? 'text-white/90 hover:text-white drop-shadow-lg' : 'text-disrupting-gray hover:text-disrupting-dark'
            }`}>
              Contact
            </Link>
            <Button onClick={openModal} className="bg-gradient-to-r from-wine to-burgundy hover:from-wine/90 hover:to-burgundy/90 text-white px-8 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-all duration-300 ${
                isScrolled ? 'text-white drop-shadow-lg' : 'text-disrupting-dark'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-6 border-t transition-all duration-300 ${
            isScrolled
              ? 'border-white/20 bg-white/10 backdrop-blur-xl'
              : 'border-disrupting-gray/20 bg-white/90 backdrop-blur-xl'
          }`}>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/services"
                className={`transition-all duration-300 px-4 py-3 text-lg font-semibold rounded-lg ${
                  isScrolled ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-disrupting-gray hover:text-disrupting-dark hover:bg-disrupting-gray/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/solutions"
                className={`transition-all duration-300 px-4 py-3 text-lg font-semibold rounded-lg ${
                  isScrolled ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-disrupting-gray hover:text-disrupting-dark hover:bg-disrupting-gray/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/about"
                className={`transition-all duration-300 px-4 py-3 text-lg font-semibold rounded-lg ${
                  isScrolled ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-disrupting-gray hover:text-disrupting-dark hover:bg-disrupting-gray/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`transition-all duration-300 px-4 py-3 text-lg font-semibold rounded-lg ${
                  isScrolled ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-disrupting-gray hover:text-disrupting-dark hover:bg-disrupting-gray/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button onClick={() => { setIsMenuOpen(false); openModal(); }} className="bg-gradient-to-r from-disrupting-purple to-disrupting-blue hover:from-disrupting-purple/90 hover:to-disrupting-blue/90 text-white w-full mt-6 rounded-xl font-bold text-xl py-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
