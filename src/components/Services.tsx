import React from 'react';
import ServiceCard from './ServiceCard';
import { Heart, ActivitySquare, Users, BookOpen, Clock, Shield } from 'lucide-react';
import { Link } from './Link';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Personal Care',
      description: 'Assistance with activities of daily living including bathing, grooming, dressing, toileting, and mobility support. Our caregivers ensure dignity and comfort while promoting independence.',
      icon: Heart,
      link: '/services#personal-care'
    },
    {
      title: 'Companion Care',
      description: 'Engaging companionship, conversation, and assistance with light housekeeping, meal preparation, medication reminders, and accompaniment to appointments.',
      icon: Users,
      link: '/services#companion-care'
    },
    {
      title: 'Specialized Care',
      description: 'Tailored care for clients with Alzheimer\'s, dementia, Parkinson\'s, or other specific conditions requiring specialized attention.',
      icon: BookOpen,
      link: '/services#specialized-care'
    },
    {
      title: 'Respite Care',
      description: 'Temporary relief for family caregivers, providing them with needed breaks while ensuring their loved ones receive quality care.',
      icon: Clock,
      link: '/services#respite-care'
    },
    {
      title: 'Live-In Care',
      description: '24-hour care services for clients who need round-the-clock assistance, provided by dedicated caregivers who live in the client\'s home.',
      icon: Shield,
      link: '/services#live-in-care'
    },
    {
      title: 'Recovery Care',
      description: 'Post-hospitalization and rehabilitation support to ensure a safe recovery and prevent hospital readmission.',
      icon: ActivitySquare,
      link: '/services#recovery-care'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Care Services</h2>
          <p className="text-lg text-slate-600">
            We offer comprehensive home care services throughout New York, tailored to meet each client's unique needs.
            Our goal is to help our clients maintain their independence while receiving professional care in their homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary inline-flex">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;