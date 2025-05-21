import React, { useState, useEffect } from 'react';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import TestimonialsPage from '../pages/TestimonialsPage';
import BlogPage from '../pages/BlogPage';
import NotFoundPage from '../pages/NotFoundPage';
import PreventingFalls from '../pages/articles/PreventingFalls';
import UnderstandingDementia from '../pages/articles/UnderstandingDementia';
import NutritionTips from '../pages/articles/NutritionTips';

const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Set document title based on current path
  useEffect(() => {
    const pathTitles: Record<string, string> = {
      '/': 'Lynka Family Care | Professional Home Care Services in New York',
      '/services': 'Our Services | Lynka Family Care',
      '/about': 'About Us | Lynka Family Care',
      '/contact': 'Contact Us | Lynka Family Care',
      '/testimonials': 'Client Testimonials | Lynka Family Care',
      '/blog': 'Healthcare Resources & Blog | Lynka Family Care',
    };

    document.title = pathTitles[currentPath] || 'Page Not Found | Lynka Family Care';
  }, [currentPath]);

  switch (currentPath) {
    case '/':
      return <HomePage />;
    case '/services':
      return <ServicesPage />;
    case '/about':
      return <AboutPage />;
    case '/contact':
      return <ContactPage />;
    case '/testimonials':
      return <TestimonialsPage />;
     case '/blog':
      return <BlogPage />;
    case '/blog/1':
      return <PreventingFalls />;
    case '/blog/2':
      return <UnderstandingDementia />;
    case '/blog/3':
      return <NutritionTips />;
    default:
      return <NotFoundPage />;
  }
};

export default Router;
