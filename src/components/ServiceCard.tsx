import React from 'react';
import { Link } from './Link';
import { ArrowRight, DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full group">
      <div className="rounded-full bg-primary/10 p-4 inline-flex mb-4 w-16 h-16 items-center justify-center">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 flex-grow mb-4">{description}</p>
      <Link 
        to={link}
        className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors mt-auto"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;