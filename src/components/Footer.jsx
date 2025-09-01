import React from 'react';
import { user } from '../data/user';
import { socials } from '../data/socials';
import { useLocation } from 'react-router-dom';
import { GitHubIcon, LinkedInIcon, TwitterIcon, ArrowUpIcon, LinktreeIcon } from './Icons';

const SocialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  linktree: LinktreeIcon,
};

const Footer = () => {
  const location = useLocation();
  const isProjectDetailPage = location.pathname.startsWith('/project/');
  
  return (
    <footer className={`py-12 pt-60 ${
      isProjectDetailPage 
        ? 'bg-bg' 
        : 'bg-primary/5' 
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">{user.name}</p>
            <p className="text-muted">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-6">
            {socials.map((social) => {
              const Icon = SocialIcons[social.name.toLowerCase()];
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors duration-300 focus-ring rounded-md" aria-label={social.name}>
                  {Icon && <Icon className="w-6 h-6" />}
                </a>
              );
            })}
          </div>

          <a href="#" className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform duration-300 focus-ring" aria-label="Back to top">
            <ArrowUpIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;