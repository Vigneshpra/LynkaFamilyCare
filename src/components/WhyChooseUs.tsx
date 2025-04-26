import React from 'react';
import { Award, Clock, UserCheck, HeartHandshake, FileCheck, BadgeCheck } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Experienced & Certified",
      description: "Our caregivers are highly trained, licensed professionals with extensive experience in home healthcare."
    },
    {
      icon: <UserCheck className="h-10 w-10 text-primary" />,
      title: "Personalized Care Plans",
      description: "We develop customized care plans tailored to each client's unique needs, preferences, and health conditions."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "24/7 Availability",
      description: "Our team is available around the clock to provide care when you need it, including holidays and weekends."
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-primary" />,
      title: "Compassionate Approach",
      description: "We treat each client with dignity, respect, and genuine care, focusing on both physical and emotional wellbeing."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-primary" />,
      title: "Comprehensive Assessments",
      description: "We conduct thorough assessments to understand your needs and create an effective care strategy."
    },
    {
      icon: <BadgeCheck className="h-10 w-10 text-primary" />,
      title: "Quality Assurance",
      description: "Our rigorous quality control measures ensure consistent, high-standard care for every client."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose CaringHearts</h2>
          <p className="text-lg text-slate-600">
            Our commitment to excellence and personalized care sets us apart in the home healthcare industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;