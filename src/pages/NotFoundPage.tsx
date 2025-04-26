import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from '../components/Link';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center">
              <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6">404</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">Page Not Found</h2>
              <p className="text-lg text-slate-600 mb-8">
                The page you are looking for might have been removed, had its name changed, 
                or is temporarily unavailable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="btn-primary">
                  <Home className="mr-2 h-5 w-5" />
                  Return Home
                </Link>
                <button 
                  onClick={() => window.history.back()} 
                  className="btn-secondary"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;