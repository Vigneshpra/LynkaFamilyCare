import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import JobApplicationForm from "../components/JobApplicationForm";

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-slate-600">
                We're here to answer your questions and help you find the right
                care solution.
              </p>
            </div>
          </div>
        </section>

        <Contact />
        {/* Add the job application form here */}
        <JobApplicationForm />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
