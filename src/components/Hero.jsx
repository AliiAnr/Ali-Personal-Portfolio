import React, { useState } from "react";
import { user } from "../data/user";
import { socials } from "../data/socials";
import { GitHubIcon, LinkedInIcon, TwitterIcon, LinktreeIcon } from "./Icons";

const SocialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  linktree: LinktreeIcon,
};

const Hero = () => {
  const [isAlternateStyle, setIsAlternateStyle] = useState(false);

  const toggleStyle = () => {
    setIsAlternateStyle(!isAlternateStyle);
  };

  const OriginalHero = () => (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-24"
    >
      {/* Diagonal Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-bg z-0">
        <div className="absolute w-[200%] h-[150%] md:h-full lg:w-[150%] left-1/2 -translate-x-1/2 lg:-translate-x-[25%] top-0 -translate-y-[40%] md:-translate-y-[15%] lg:-translate-y-[25%] bg-primary-gradient origin-top-left -rotate-[12deg]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center md:text-left animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter mb-4">
              {user.name}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold opacity-80 mb-6">
              {user.title}
            </p>
            <p className="text-lg text-muted max-w-xl mx-auto md:mx-0 mb-8">
              {user.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-transform duration-300 focus-ring"
              >
                Hire Me
              </a>
              <a
                href={user.supportURL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/20 backdrop-blur-sm text-text font-bold rounded-2xl hover:scale-105 transition-transform duration-300 focus-ring"
              >
                Support Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex justify-center md:justify-start space-x-6">
              {socials.map((social) => {
                const Icon = SocialIcons[social.name.toLowerCase()];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors duration-300 focus-ring rounded-md"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-8 h-8" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column (Avatar) - Clickable */}
          <div className="relative flex justify-center animate-fade-in">
            <div
              onClick={toggleStyle}
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-glow cursor-pointer group"
              title="Click me"
            >
              <img
                src={user.avatar}
                alt="Avatar of Ali An Nuur"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Style 2: Apple-style Hero (clean, centered)
  const AppleStyleHero = () => (
    <section id="hero" className="relative overflow-hidden section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Content */}
          <div className="animate-slide-in-up">
            <h1 className="text-display font-semibold mb-6">{user.name}</h1>
            <p className="text-title text-muted mb-8 max-w-4xl mx-auto">
              {user.title}
            </p>
            <p className="text-body-large text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
              {user.bio}
            </p>

            {/* CTA Buttons - Apple Style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 focus-ring text-lg"
              >
                Get in touch
              </a>
              <a
                href="#work"
                className="px-8 py-4 border border-primary/20 text-primary font-medium rounded-full hover:bg-primary/5 hover:scale-105 transition-all duration-300 focus-ring text-lg"
              >
                View my work
              </a>
            </div>
          </div>

          {/* Avatar - Clickable */}
          <div className="relative inline-block animate-fade-in">
            <div
              onClick={toggleStyle}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-subtle hover:shadow-glow mx-auto cursor-pointer group transition-all duration-500"
              title="Click me"
            >
              <img
                src={user.avatar}
                alt={`${user.name} - ${user.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-8 mt-12">
              {socials.map((social) => {
                const Icon = SocialIcons[social.name.toLowerCase()];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors duration-300 focus-ring rounded-full p-2"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-6 h-6" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="transition-all duration-700 ease-in-out">
      {isAlternateStyle ? <AppleStyleHero /> : <OriginalHero />}
    </div>
  );
};

export default Hero;
