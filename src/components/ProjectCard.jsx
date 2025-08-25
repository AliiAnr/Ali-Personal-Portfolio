import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div 
      className="group block rounded-3xl overflow-hidden bg-gray-50 dark:bg-white/5 shadow-lg hover:shadow-2xl transition-all duration-500 will-change-transform border border-gray-200 dark:border-white/10 h-full"
    >
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy" 
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Hover Action Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 focus-ring cursor-pointer"
          onClick={handleClick}
          >
            View Details
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        {/* Title and Description */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-tight min-h-[3.5rem] flex items-start">
            <span className="line-clamp-2">
              {project.title}
            </span>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed min-h-[4rem]">
            {project.description}
          </p>
        </div>

        {/* Technologies Used */}
        {project.technologies && (
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Built with
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map(tech => (
                <span 
                  key={tech} 
                  className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;