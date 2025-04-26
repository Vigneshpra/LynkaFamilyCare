import React, { useState, useEffect } from "react";
import { Heart, Menu, X, Phone } from "lucide-react";
import { Link } from "./Link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Heart className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold text-slate-800">
              Lynka Family Care
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/testimonials" className="nav-link">
              Testimonials
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+15162438130"
              className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>(516) 243-8130</span>
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-slate-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="block py-2 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block py-2 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block py-2 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/testimonials"
                className="block py-2 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/contact"
                className="block py-2 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <a
                href="tel:+15162438130"
                className="flex items-center py-2 text-primary font-medium hover:text-primary-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>(516) 243-8130</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
