import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useActiveSection } from '../hooks/useActiveSection';
import { user } from '../data/user';
import { MenuIcon, XIcon } from './Icons';
import GlassSurface from './GlassSurface';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const activeSection = useActiveSection(location.pathname === '/' ? ['work', 'about', 'contact'] : []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const heroElement = document.querySelector('#hero');
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 z-40 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mt-4 transition-all duration-700 ease-out transform ${
          isScrolled || isMenuOpen 
            ? 'translate-y-0 scale-100' 
            : '-translate-y-2 scale-95'
        }`}>
          <GlassSurface
            width="100%"
            height={80}
            borderRadius={50}

            displace={0.5}
            distortionScale={-180}
            greenOffset={10}
            blueOffset={20}
            redOffset={0}
            borderWidth={0.07}

            backgroundOpacity={0.1}
            saturation={1}
            blur={7}
            brightness={50}
            opacity={0.93}
            className={`transition-all duration-700 ease-out ${
              isScrolled || isMenuOpen 
                ? 'shadow-lg backdrop-blur-md' 
                : 'shadow-none backdrop-blur-none'
            }`}
          >
            <div className="flex items-center justify-between h-20 px-6 w-full">
              <button
                onClick={handleLogoClick}
                className="text-2xl font-bold bg-primary-gradient text-transparent bg-clip-text focus-ring rounded-lg transition-transform duration-300 hover:scale-105"
              >
                {user.initials}
              </button>
              
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map(({ href, label }) => (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className={`text-lg font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                      location.pathname === '/' && activeSection === href.substring(1) 
                        ? 'text-primary' 
                        : 'text-text'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>

              <div className="flex items-center">
                <ThemeToggle />
                <button
                  onClick={toggleMenu}
                  className="ml-4 md:hidden focus-ring rounded-md p-1 transition-transform duration-300 hover:scale-105"
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <XIcon /> : <MenuIcon />}
                </button>
              </div>
            </div>
          </GlassSurface>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mt-2 transform transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-4 opacity-0 scale-95'
          }`}>
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={50}
              backgroundOpacity={0.1}
              saturation={1}
              blur={11}
              brightness={50}
              opacity={0.93}

            displace={0.5}
            distortionScale={-180}
            greenOffset={5}
            blueOffset={5}
            redOffset={0}
            borderWidth={0.07}

              className="md:hidden shadow-xl"
            >
              <nav className="flex flex-col items-center space-y-6 py-8 w-full">
                {navLinks.map(({ href, label }) => (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className={`text-xl font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                      location.pathname === '/' && activeSection === href.substring(1) 
                        ? 'text-primary' 
                        : 'text-text'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </GlassSurface>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;