import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import {
  Heart,
  Users,
  BookOpen,
  Clock,
  Shield,
  ActivitySquare,
  CheckCircle,
} from "lucide-react";
import { Link } from "../components/Link";

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tasks: string[];
  image: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  title,
  description,
  icon,
  tasks,
  image,
}) => {
  return (
    <section id={id} className="py-20 border-b border-slate-200 last:border-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              {icon}
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 ml-4">
                {title}
              </h2>
            </div>
            <p className="text-lg text-slate-600 mb-8">{description}</p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Services Include:
            </h3>
            <ul className="space-y-3 mb-8">
              {tasks.map((task, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-600">{task}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-primary inline-flex">
              Request This Service
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={image} alt={title} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: "companion-care",
      title: "Companion/Sitter Services",
      description:
        "Our companion care services provide essential support and companionship to help clients maintain their independence and quality of life at home.",
      icon: <Users className="h-10 w-10 text-primary" />,
      tasks: [
        "Meal preparation and serving",
        "Transportation and escort services to appointments and community activities",
        "Light housekeeping including sanitation and cleaning",
        "Home safety monitoring and security checks",
        "Shopping assistance and errands",
        "Assistance with appointments and scheduling",
        "Laundry and changing linens",
        "Diet implementation and meal planning",
        "Social interaction and engagement",
      ],
      image:
        "https://images.pexels.com/photos/7578876/pexels-photo-7578876.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: "personal-care",
      title: "Personal Support Services",
      description:
        "Our personal care assistants provide compassionate support with activities of daily living, ensuring dignity and comfort while promoting independence.",
      icon: <Heart className="h-10 w-10 text-primary" />,
      tasks: [
        "Assistance with bathing and personal hygiene",
        "Toileting assistance",
        "Grooming and dressing assistance",
        "Dental care assistance",
        "Mobility and ambulation support",
        "Transfer assistance (bed to chair, etc.)",
        "Medication reminders",
        "Vital signs monitoring",
        "Basic first aid and emergency response",
      ],
      image:
        "https://images.pexels.com/photos/7551608/pexels-photo-7551608.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: "specialized-care",
      title: "Skilled Nursing / Special Condition Care",
      description:
        "We provide specialized care services for clients with specific conditions, including those who are elderly, have traumatic brain injury, autism, or other special needs.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      tasks: [
        "Wound care and dressing changes",
        "Catheter care and maintenance",
        "Diabetic care and monitoring",
        "Colostomy care and teaching",
        "Tracheostomy care",
        "Enteral/parenteral feeding assistance",
        "Ventilator care support",
        "IV therapy management",
        "Post-operative care and recovery support",
      ],
      image:
        "https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: "respite-care",
      title: "Respite and Relief Care",
      description:
        "Our respite care services provide temporary relief for family caregivers, ensuring their loved ones receive quality care while they take a needed break.",
      icon: <Clock className="h-10 w-10 text-primary" />,
      tasks: [
        "Temporary relief for family caregivers",
        "Flexible scheduling options",
        "Personal care assistance",
        "Medication management",
        "Companionship and social interaction",
        "Meal preparation and feeding assistance",
        "Light housekeeping",
        "Safety monitoring",
        "Activities and engagement",
      ],
      image:
        "https://images.pexels.com/photos/7551887/pexels-photo-7551887.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: "live-in-care",
      title: "24-Hour Live-In Care",
      description:
        "Our live-in care services provide 24-hour support for clients who require round-the-clock assistance, ensuring continuous care and monitoring.",
      icon: <Shield className="h-10 w-10 text-primary" />,
      tasks: [
        "24/7 care and supervision",
        "Complete personal care assistance",
        "Medication management",
        "Meal preparation and nutrition monitoring",
        "Housekeeping and home maintenance",
        "Companionship and social support",
        "Safety monitoring",
        "Transportation and escorts",
        "Care coordination with healthcare providers",
      ],
      image:
        "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: "recovery-care",
      title: "Post-Hospitalization Recovery Support",
      description:
        "Our recovery care services support clients during post-hospitalization and rehabilitation periods, focusing on safe recovery and preventing readmission.",
      icon: <ActivitySquare className="h-10 w-10 text-primary" />,
      tasks: [
        "Post-operative care and monitoring",
        "Medication administration and teaching",
        "Wound care and dressing changes",
        "Physical therapy exercises assistance",
        "Vital signs monitoring",
        "Pain management assistance",
        "Nutrition and hydration support",
        "Recovery progress tracking",
        "Coordination with healthcare providers",
      ],
      image:
        "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Our Care Services
              </h1>
              <p className="text-xl text-slate-600">
                At Lynka Family Care, we offer a personalized range of in-home
                care services designed to promote independence, dignity, and
                well-being. Our compassionate caregivers are dedicated to
                providing exceptional support tailored to each client’s unique
                needs.
              </p>
            </div>
          </div>
        </section>

        {services.map((service) => (
          <ServiceDetail
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            tasks={service.tasks}
            image={service.image}
          />
        ))}

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
