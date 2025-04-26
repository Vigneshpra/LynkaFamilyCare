import React from "react";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Link } from "./Link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">Lynka Family Care</span>
            </div>
            <p className="text-slate-300 mb-4">
              Providing professional and compassionate home care services
              throughout New York.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-300 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#personal-care"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Personal Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services#companion-care"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Companion Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services#specialized-care"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Specialized Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services#respite-care"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Respite Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services#live-in-care"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Live-In Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-1" />
                <span>(404) 337-2464</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-1" />
                <span>lynkafamilycarecompanion@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-1" />
                <span>
                  4150 Snapfinger Woods Dr
                  <br />
                  Decatur, GA 30035
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-600 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Lynka Family Care. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-slate-400 text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-slate-400 text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
