import React from "react";
import { Link } from "./Link";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 relative bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-48 -top-48 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -left-48 top-48 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              <span className="text-primary">
                Where Caring Feels Like Family
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Providing compassionate, professional in-home care services to
              support your loved ones' dignity, comfort, and independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/7551608/pexels-photo-7551608.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Caregiver with elderly patient"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
              <p className="text-white text-lg font-medium">
                "The care and compassion shown by the Lynka Family Care team has
                been life-changing for our family."
              </p>
              <p className="text-white/80 mt-2">
                – Maria J., Client Family Member
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
