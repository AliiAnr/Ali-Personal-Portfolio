import { useState, useEffect, useRef } from 'react';

export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      // Filter hanya entries yang benar-benar terlihat
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Cari section yang paling visible
        const mostVisible = visibleEntries.reduce((prev, current) => {
          // Prioritaskan berdasarkan intersection ratio
          if (current.intersectionRatio > prev.intersectionRatio) {
            return current;
          }
          // Jika intersection ratio sama, pilih yang posisinya lebih tinggi di viewport
          if (current.intersectionRatio === prev.intersectionRatio) {
            return current.boundingClientRect.top < prev.boundingClientRect.top ? current : prev;
          }
          return prev;
        });
        
        setActiveSection(mostVisible.target.id);
      } else {
        // Jika tidak ada section yang terlihat, reset ke kosong
        setActiveSection('');
      }
    }, { 
      // Kurangi root margin untuk deteksi yang lebih sensitif
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0]
    });

    // Observasi semua section yang valid
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean); // Filter out null elements

    elements.forEach((el) => observer.current?.observe(el));

    // Cleanup function
    return () => {
      if (observer.current) {
        elements.forEach((el) => observer.current?.unobserve(el));
      }
    };
  }, [sectionIds]);

  return activeSection;
};