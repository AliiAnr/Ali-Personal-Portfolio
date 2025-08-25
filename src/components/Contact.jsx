import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { user } from '../data/user';
import { CopyIcon, CheckIcon } from './Icons';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(user.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 md:py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <ScrollReveal direction="up">
          <h2 className="text-3xl md:text-4xl font-extrabold">Get In Touch</h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <p className="text-lg text-muted mt-4 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to say hi!
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={400}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${user.email}`}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-transform duration-300 focus-ring"
            >
              Say Hello
            </a>
            <div className="relative w-full sm:w-auto">
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-bg border-2 border-primary/20 text-text font-bold rounded-2xl hover:bg-primary/10 transition-colors duration-300 focus-ring"
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Contact;