import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import Team from "../components/Team";
import { Check } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                About CaringHearts
              </h1>
              <p className="text-xl text-slate-600">
                A trusted provider of exceptional home healthcare services since
                2005.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Lynka Family Care was founded with a simple belief — that
                  every individual deserves compassionate, personalized care
                  delivered with the warmth and trust of family. Our journey
                  began with the mission to enhance the lives of those we serve
                  by promoting dignity, independence, and well-being at every
                  stage of life.
                </p>

                <p className="text-lg text-slate-600 mb-6">
                  What started as a small team of dedicated caregivers has grown
                  into a trusted provider of home care services throughout our
                  community. Despite our growth, we have remained true to our
                  founding principles: Compassionate Care, Professional
                  Excellence, Integrity, and a Personalized Approach for every
                  client and family.
                </p>

                <p className="text-lg text-slate-600">
                  Today, Lynka Family Care continues to be independently
                  operated with a focus on high standards, client-centered care,
                  and building lasting relationships with the families we
                  proudly serve.
                </p>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="CaringHearts team"
                  className="rounded-xl shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="text-5xl font-bold text-primary mr-4">
                      18+
                    </div>
                    <div className="text-slate-800">
                      Years of
                      <br />
                      Compassionate Care
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-slate-600">
                Our mission and values guide everything we do, from the
                caregivers we hire to the services we provide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  To enhance the quality of life for our clients by providing
                  compassionate, personalized care services that promote
                  independence, dignity, and well-being in the comfort and
                  familiarity of their own homes.
                </p>
                <p className="text-lg text-slate-600">
                  We are committed to being a trusted partner for families
                  seeking the highest standard of home healthcare, delivered
                  with integrity, respect, and genuine caring.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Our Values
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="rounded-full bg-primary/10 p-2 mr-4 flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Compassion
                      </h4>
                      <p className="text-slate-600">
                        We approach every client with genuine empathy,
                        understanding, and kindness.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="rounded-full bg-primary/10 p-2 mr-4 flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Respect</h4>
                      <p className="text-slate-600">
                        We honor the dignity, preferences, and individuality of
                        each client.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="rounded-full bg-primary/10 p-2 mr-4 flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Excellence
                      </h4>
                      <p className="text-slate-600">
                        We strive for the highest standards of quality in all
                        aspects of our care and service.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="rounded-full bg-primary/10 p-2 mr-4 flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Integrity
                      </h4>
                      <p className="text-slate-600">
                        We conduct ourselves with honesty, transparency, and
                        ethical behavior.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Team />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img
                        src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Nurse checking patient"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md transform translate-y-8">
                      <img
                        src="https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Caregiver helping senior"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden shadow-md transform translate-y-8">
                      <img
                        src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Nurse with patient"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img
                        src="https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Senior with caregiver"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Our Approach to Care
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  At Lynka Family Care, we believe that exceptional home
                  healthcare begins with a thorough understanding of each
                  client's unique needs, preferences, and goals. Our
                  comprehensive approach ensures that every aspect of care is
                  personalized, compassionate, and effective.
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Initial Assessment
                    </h3>
                    <p className="text-slate-600">
                      We conduct a detailed assessment to understand medical
                      needs, home environment, personal preferences, and support
                      systems to develop a comprehensive care plan.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Personalized Care Planning
                    </h3>
                    <p className="text-slate-600">
                      We create individualized care plans that address specific
                      needs while promoting maximum independence, dignity, and
                      quality of life.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Caregiver Matching
                    </h3>
                    <p className="text-slate-600">
                      We carefully match caregivers with clients based on care
                      needs, personality, and preferences to ensure a positive
                      and effective relationship.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Ongoing Supervision & Adaptation
                    </h3>
                    <p className="text-slate-600">
                      We regularly review care plans, conduct supervisory
                      visits, and make adjustments as needs change to ensure
                      consistent quality care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
