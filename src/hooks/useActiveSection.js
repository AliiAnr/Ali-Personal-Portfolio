import { useState, useEffect, useRef } from 'react';

export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries.reduce((prev, current) => {
          if (current.intersectionRatio > prev.intersectionRatio) {
            return current;
          }
          if (current.intersectionRatio === prev.intersectionRatio) {
            return current.boundingClientRect.top < prev.boundingClientRect.top ? current : prev;
          }
          return prev;
        });
        
        setActiveSection(mostVisible.target.id);
      } else {
        setActiveSection('');
      }
    }, { 
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0]
    });
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean); 

    elements.forEach((el) => observer.current?.observe(el));

    return () => {
      if (observer.current) {
        elements.forEach((el) => observer.current?.unobserve(el));
      }
    };
  }, [sectionIds]);

  return activeSection;
};