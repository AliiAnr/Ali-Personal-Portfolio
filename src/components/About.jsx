import React from 'react';
import ScrollReveal from './ScrollReveal';
import TechMarquee from './TechMarquee'
import { user } from '../data/user';

const About = () => {
  const coreSkills = [
    "Mobile Development",
        "iOS Development",
            "Android Development",
                "Flutter",
    "React Native", 
    "UI/UX Design"
  ];

  return (
    <section id="about" className="py-32 md:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="space-y-4">
              <h2 id="about" className="text-3xl md:text-4xl font-extrabold">About</h2>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal direction="up" delay={100}>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-muted leading-relaxed">
                I'm a passionate <span className="text-primary font-medium">{user.title}</span> based in {user.location}, 
                dedicated to crafting exceptional digital experiences.
              </p>
              
              <p className="text-lg text-muted/80 leading-relaxed max-w-3xl mx-auto">
                My focus is on creating user-centric mobile applications that seamlessly blend 
                beautiful design with robust functionality. I believe in the power of clean code, 
                intuitive interfaces, and meaningful user experiences.
              </p>
            </div>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal direction="up" delay={200}>
            <div className="space-y-12">
              <h3 className="text-2xl font-semibold">Expertise</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {coreSkills.map((skill, index) => (
<ScrollReveal 
  key={index}
  direction="up" 
  delay={100 + (index * 20)}
  className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 [transition:none!important]"
>
  <span className="text-sm font-medium">{skill}</span>
</ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal direction="up" delay={200}>
            <div className="pt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all duration-300 focus-ring"
              >
                Let's work together
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* Technologies Marquee - Full Width */}
      <ScrollReveal direction="up" delay={200}>
        <div className="mt-16 space-y-8">
          <div className="text-center pb-6">
            <h3 className="text-lg font-medium text-muted">Technologies I work with</h3>
          </div>
          <TechMarquee />
        </div>
      </ScrollReveal>

    </section>
  );
};

export default About;