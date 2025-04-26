import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would handle form submission
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                >
                  <option value="">Select a service</option>
                  <option value="personal-care">Personal Care</option>
                  <option value="companion-care">Companion Care</option>
                  <option value="specialized-care">Specialized Care</option>
                  <option value="respite-care">Respite Care</option>
                  <option value="live-in-care">Live-In Care</option>
                  <option value="recovery-care">Recovery Care</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Contact Information
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-3 mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Phone</p>
                    <p className="text-lg font-medium text-slate-800">
                      (404) 337-2464
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-3 mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Email</p>
                    <p className="text-lg font-medium text-slate-800">
                      lynkafamilycarecompanion@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-3 mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">
                      Office Address
                    </p>
                    <p className="text-lg font-medium text-slate-800">
                      4150 Snapfinger Woods Dr
                      <br />
                      Decatur, GA 30035
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-slate-800 mb-3">
                Need Immediate Assistance?
              </h4>
              <p className="text-slate-600 mb-4">
                Our care coordinators are available to discuss your care needs
                and answer any questions.
              </p>
              <a href="tel:+15162438130" className="btn-primary inline-flex">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
