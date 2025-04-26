import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, children, className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    
    // Simple client-side routing
    window.history.pushState({}, '', to);
    
    // Dispatch a custom event that our router can listen to
    const navigationEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navigationEvent);
    
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  };

  return (
    <a 
      href={to} 
      onClick={handleClick} 
      className={`${className}`}
    >
      {children}
    </a>
  );
};