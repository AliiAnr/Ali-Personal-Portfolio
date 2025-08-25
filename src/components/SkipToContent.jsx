import React from 'react';

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-primary text-white px-4 py-2 rounded-b-lg focus:translate-y-0 transition-transform duration-300 z-50"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;