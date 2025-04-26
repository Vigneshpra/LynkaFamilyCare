import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { Star } from "lucide-react";

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Reviews Coming Soon
              </h1>
              <p className="text-xl text-slate-600">
                We are excited to share client experiences with Lynka Family
                Care soon!
              </p>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="bg-white shadow-lg rounded-xl p-10 max-w-md text-center animate-fade-in hover:scale-105 transition-transform duration-500 ease-in-out">
                <p className="text-xl text-slate-700 font-semibold">
                  ⭐ Reviews Coming Soon ⭐
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Share Your Experience
              </h2>
              <p className="text-lg text-slate-600">
                We value your feedback. If you've received care from
                CaringHearts, we'd love to hear about your experience.
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="relation"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Relationship to Client
                  </label>
                  <input
                    type="text"
                    id="relation"
                    name="relation"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Service Received
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                  >
                    <option value="">Select a service</option>
                    <option value="personal-care">Personal Care</option>
                    <option value="skilled-nursing">Skilled Nursing</option>
                    <option value="companion-care">Companion Care</option>
                    <option value="specialized-care">Specialized Care</option>
                    <option value="respite-care">Respite Care</option>
                    <option value="live-in-care">Live-In Care</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Rating
                  </label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="text-yellow-400 p-1"
                      >
                        <Star className="h-8 w-8" fill="currentColor" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="testimonial"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Your Experience
                  </label>
                  <textarea
                    id="testimonial"
                    name="testimonial"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit Testimonial
                </button>
              </form>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
