import React, { useState, useMemo, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects as allProjects } from "../data/projects";

const filters = [
  "All",
  "iOS",
  "Android",
  "Web",
  "Dashboard",
  "Branding",
  "UI/UX",
  "Landing Page",
  "E-commerce",
  "Education",
  "Healthcare",
  "Directory",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animationKey, setAnimationKey] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Scroll reveal hook untuk container
  const [scrollRef, isInView] = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return allProjects;
    return allProjects.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const handleFilterChange = (newFilter) => {
    if (newFilter === activeFilter) return;

    setIsInitialLoad(false);

    setVisibleCards(new Set());
    setActiveFilter(newFilter);
    setAnimationKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (isInView && isInitialLoad) {
      const timer = setTimeout(() => {
        filteredProjects.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards((prev) => new Set([...prev, index]));
          }, index * 120);
        });
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isInView, isInitialLoad, filteredProjects]);

  useEffect(() => {
    if (!isInitialLoad) {
      setVisibleCards(new Set());
      const timer = setTimeout(() => {
        filteredProjects.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards((prev) => new Set([...prev, index]));
          }, index * 60);
        });
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [filteredProjects, animationKey, isInitialLoad]);

  return (
    <section className="work-section">
      <div id="work" className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header dengan scroll reveal */}
        <ScrollReveal
          direction="up"
          duration={350}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">My Work</h2>
          <p className="text-lg text-muted mt-2">
            A selection of my recent projects and developments.
          </p>
        </ScrollReveal>

        {/* Filter Bar dengan scroll reveal */}
        <ScrollReveal
          direction="up"
          delay={100}
          duration={350}
          className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-5 py-2 text-sm md:text-base font-bold rounded-full hover:scale-105 transition-transform duration-200 focus-ring ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-text dark:bg-white/5 border border-gray-200 dark:border-white/10"
              }`}
              style={{
                transitionDelay: `${index * 20}ms`,
              }}
            >
              {filter}
            </button>
          ))}
        </ScrollReveal>

        {/* Projects Grid dengan hybrid scroll reveal + filter animation */}
        <div
          ref={scrollRef}
          key={animationKey}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={`${project.id}-${animationKey}`}
                className="project-card"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0, 0, 0) scale(1)"
                    : "translate3d(0, 40px, 0) scale(0.92)",
                  transition: isInitialLoad
                    ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" // Lebih lambat untuk scroll reveal
                    : "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Lebih cepat untuk filter
                  willChange: "transform, opacity",
                }}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <ScrollReveal
            direction="fade"
            duration={300}
            className="text-center py-12"
          >
            <p className="text-muted text-lg">
              No projects found for "{activeFilter}" category.
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default Projects;
