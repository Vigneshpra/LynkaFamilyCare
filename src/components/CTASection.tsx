import React from "react";
import { Link } from "./Link";
import { ArrowRight, Phone } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Home Care Needs?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free consultation and learn how our
            personalized care services can help you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-white">
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+18005551234" className="btn-outline-white">
              <Phone className="mr-2 h-5 w-5" />
              (404) 337-2464
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
