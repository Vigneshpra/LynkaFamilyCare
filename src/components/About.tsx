import React from 'react';
import { Link } from './Link';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    'Personalized Care Plans',
    'Licensed & Insured Caregivers',
    'Flexible Scheduling',
    'Regular Care Monitoring',
    'Family Communication',
    'Cultural Sensitivity'
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Why Choose Lynka Family Care?</h2>
            <p className="text-lg text-slate-600 mb-6">
              Lynka Family Care is a licensed home care agency dedicated to providing exceptional care services 
              throughout New York. Our mission is to help seniors and individuals with disabilities maintain their 
              independence while receiving compassionate, professional care in the comfort of their homes.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              We understand that each client has unique needs, which is why we create personalized care plans 
              and carefully match caregivers based on both care requirements and personality compatibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center">
                  <div className="rounded-full bg-primary/10 p-1 mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-slate-700">{value}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary inline-flex">
              Learn More About Us
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-md transform translate-y-8">
                <img 
                  src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Caring nurse with patient"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/7551646/pexels-photo-7551646.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Homecare provider helping client"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Nurse checking vitals"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md transform translate-y-8">
                <img 
                  src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Caregiver and senior"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;