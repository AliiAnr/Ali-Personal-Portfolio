import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 600,
  distance = 50,
  className = '',
  ...options 
}) => {
  const [ref, isVisible] = useScrollReveal(options);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0) scale(0.95)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0) scale(0.95)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0) scale(0.95)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0) scale(0.95)`;
      case 'fade':
        return `translate3d(0, 0, 0) scale(0.9)`;
      default:
        return `translate3d(0, ${distance}px, 0) scale(0.95)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;