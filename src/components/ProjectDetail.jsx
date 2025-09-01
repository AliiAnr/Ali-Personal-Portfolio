import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpIcon, GitHubIcon, LockIcon } from "./Icons";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [currentMockup, setCurrentMockup] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("next"); // 'next' or 'prev'

  const isValidUrl = (url) => {
    return (
      url &&
      typeof url === "string" &&
      url.trim() !== "" &&
      url.trim() !== "#" &&
      url.trim() !== "null" &&
      url.trim() !== "undefined"
    );
  };

  // Check if project has valid mockups
  const hasMockups =
    project &&
    project.mockups &&
    project.mockups.length > 0 &&
    project.mockups.some((mockup) => mockup && mockup.trim() !== "");

  useEffect(() => {
    const foundProject = projects.find((p) => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate("/");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const nextMockup = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentMockup((prev) => (prev + 1) % project.mockups.length);

    // Reset setelah animasi selesai
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevMockup = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentMockup(
      (prev) => (prev - 1 + project.mockups.length) % project.mockups.length
    );

    // Reset setelah animasi selesai
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToMockup = (index) => {
    if (isTransitioning || index === currentMockup) return;
    setIsTransitioning(true);
    setCurrentMockup(index);

    // Reset setelah animasi selesai
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };
  
  return (
    <div className="min-h-screen bg-bg pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScrollReveal direction="left">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors duration-300 focus-ring rounded-lg p-2"
          >
            <ArrowUpIcon className="w-5 h-5 rotate-180" />
            <span className="font-medium">Back to Projects</span>
          </button>
        </ScrollReveal>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className={`grid gap-12 items-center ${
            hasMockups ? "lg:grid-cols-2" : "lg:grid-cols-1"
          }`}
        >
          {/* Left Column - Project Info */}
          <div
            className={`space-y-8 ${
              !hasMockups ? "max-w-4xl mx-auto text-center" : ""
            }`}
          >
            <ScrollReveal direction="up">
              <div
                className={`mb-6 ${
                  !hasMockups
                    ? "text-center space-y-4"
                    : "flex items-center gap-4"
                }`}
              >
                <div className="w-28 rounded-2xl overflow-hidden shadow-lg mx-auto">
                  <img
                    src={project.appIcon}
                    alt={`${project.title} icon`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">
                    {project.title}
                  </h1>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      !hasMockups ? "justify-center" : ""
                    }`}
                  >
                    {project.roles.map((role, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <p className="text-lg text-muted leading-relaxed">
                {project.description}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div
                className={`flex flex-wrap gap-3 ${
                  !hasMockups ? "justify-center" : ""
                }`}
              >
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
  <div
    className={`flex flex-col sm:flex-row gap-4 ${
      !hasMockups ? "justify-center" : ""
    }`}
  >
    {/* Live Demo Button - Always show */}
    <div className="relative group">
      <a
        href={isValidUrl(project.url) ? project.url : "#"}
        target={isValidUrl(project.url) ? "_blank" : "_self"}
        rel={isValidUrl(project.url) ? "noopener noreferrer" : ""}
        className={`relative inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-xl transition-all duration-300 focus-ring overflow-hidden ${
          isValidUrl(project.url)
            ? 'hover:bg-primary/90 hover:scale-105 cursor-pointer'
            : 'hover:scale-105 cursor-pointer'
        }`}
        onClick={!isValidUrl(project.url) ? (e) => e.preventDefault() : undefined}
      >
        <span className="relative z-10">See the project here</span>
        
        {/* Locked Overlay */}
        {!isValidUrl(project.url) && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <LockIcon className="w-6 h-6 text-white" />
          </div>
        )}
      </a>
    </div>

    {/* GitHub Button - Always show */}
    <div className="relative group">
      <a
        href={isValidUrl(project.githubUrl) ? project.githubUrl : "#"}
        target={isValidUrl(project.githubUrl) ? "_blank" : "_self"}
        rel={isValidUrl(project.githubUrl) ? "noopener noreferrer" : ""}
        className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/20 text-primary font-medium rounded-xl transition-all duration-300 focus-ring overflow-hidden ${
          isValidUrl(project.githubUrl)
            ? 'hover:bg-primary/5 hover:scale-105 cursor-pointer'
            : 'hover:scale-105 cursor-pointer'
        }`}
        onClick={!isValidUrl(project.githubUrl) ? (e) => e.preventDefault() : undefined}
      >
        <span className="relative z-10 flex items-center gap-2">
          <GitHubIcon className="w-5 h-5" />
          View Code
        </span>
        
        {/* Locked Overlay */}
        {!isValidUrl(project.githubUrl) && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <LockIcon className="w-6 h-6 text-white" />
          </div>
        )}
      </a>
    </div>
  </div>
</ScrollReveal>
          </div>

          {/* Right Column - Mockups Carousel (Only show if mockups exist) */}
          {hasMockups && (
            <div className="relative">
              <ScrollReveal direction="right">
                <div className="relative rounded-2xl overflow-hidden bg-gray-50 dark:bg-white/5 shadow-lg hover:shadow-2xl transition-all duration-500 will-change-transform border border-gray-200 dark:border-white/10 bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                  <div className="relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden min-h-[300px] max-h-[600px] flex items-center justify-center">
                    {/* Carousel Container */}
                    <div
                      className="flex transition-transform duration-500 ease-in-out w-full h-full"
                      style={{
                        transform: `translateX(-${currentMockup * 100}%)`,
                      }}
                    >
                      {project.mockups.map((mockup, index) => (
                        <div
                          key={index}
                          className="w-full flex-shrink-0 flex items-center justify-center"
                        >
                          <img
                            src={mockup}
                            alt={`${project.title} mockup ${index + 1}`}
                            className="max-w-full max-h-full object-contain"
                            style={{
                              width: "auto",
                              height: "auto",
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Navigation Arrows */}
                    {project.mockups.length > 1 && (
                      <>
                        <button
                          onClick={prevMockup}
                          disabled={isTransitioning}
                          className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 text-black rounded-full transition-all duration-300 focus-ring shadow-lg z-10 ${
                            isTransitioning
                              ? "opacity-50 cursor-not-allowed"
                              : "opacity-80 hover:opacity-100"
                          }`}
                        >
                          <ArrowUpIcon className="w-5 h-5 -rotate-90" />
                        </button>
                        <button
                          onClick={nextMockup}
                          disabled={isTransitioning}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 text-black rounded-full transition-all duration-300 focus-ring shadow-lg z-10 ${
                            isTransitioning
                              ? "opacity-50 cursor-not-allowed"
                              : "opacity-80 hover:opacity-100"
                          }`}
                        >
                          <ArrowUpIcon className="w-5 h-5 rotate-90" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Enhanced Mockup Indicators */}
                  {project.mockups.length > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                      {project.mockups.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToMockup(index)}
                          disabled={isTransitioning}
                          className={`relative transition-all duration-300 ${
                            index === currentMockup
                              ? "w-8 h-3 bg-primary rounded-full"
                              : "w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500"
                          } ${
                            isTransitioning
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:scale-110"
                          }`}
                        >
                          {/* Active indicator pulse effect */}
                          {index === currentMockup && (
                            <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-50"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </section>

      {/* STAR Method Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal direction="up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Project Overview
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Situation & Task */}
          <div className="space-y-12">
            <ScrollReveal direction="left" delay={100}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  Situation
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {project.star.situation}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                  Task
                </h3>
                <ul className="space-y-3">
                  {project.star.task.map((task, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Action & Result */}
          <div className="space-y-12">
            <ScrollReveal direction="right" delay={100}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">
                  Action
                </h3>
                <ul className="space-y-3">
                  {project.star.action.map((action, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">
                  Result
                </h3>
                <ul className="space-y-3">
                  {project.star.result.map((result, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">Tools & Platforms</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ScrollReveal direction="up">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
            <h3 className="text-2xl font-bold mb-4">
              Interested in similar work?
            </h3>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects. Let's discuss
              how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const contactElement = document.getElementById("contact");
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="px-8 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 focus-ring"
              >
                Let's Work Together
              </button>
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const workElement = document.getElementById("work");
                    if (workElement) {
                      workElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="px-8 py-3 border border-primary/20 text-primary font-medium rounded-xl hover:bg-primary/5 hover:scale-105 transition-all duration-300 focus-ring"
              >
                View More Projects
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ProjectDetail;
