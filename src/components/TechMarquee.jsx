import Marquee from "react-fast-marquee";
import { useAppleMode } from '../contexts/AppleModeContext';

const TechMarquee = () => {
  const technologies = [
    { name: "Swift", src: "/tech/swift.png", alt: "Swift" },
    { name: "Kotlin", src: "/tech/kotlin.png", alt: "Kotlin" },
    { name: "Dart", src: "/tech/dart.png", alt: "Dart" },
    { name: "Java", src: "/tech/java.png", alt: "Java" },
    { name: "React", src: "/tech/react.png", alt: "React" },
    { name: "Next.js", src: "/tech/nextjs.png", alt: "Next.js" },
    { name: "Tailwind CSS", src: "/tech/tailwind.png", alt: "Tailwind CSS" },
    { name: "Vite", src: "/tech/vite.png", alt: "Vite" },
    { name: "Node.js", src: "/tech/nodejs.png", alt: "Node.js" },
    { name: "PHP", src: "/tech/php.png", alt: "PHP" },
    { name: "Python", src: "/tech/python.png", alt: "Python" },
    { name: "Firebase", src: "/tech/firebase.png", alt: "Firebase" },
  ];

  const duplicatedTechnologies = [...technologies, ...technologies];

  const { isAppleMode } = useAppleMode();

  return (
    <div className={`w-full overflow-hidden ${isAppleMode ? '' : 'bg-bg dark:bg-bg-dark'}`}>
      <Marquee
        gradient={isAppleMode ? false : true}
        gradientColor="var(--c-bg)"
        speed={40}
        pauseOnHover={true}
        className="h-24"
      >
        {duplicatedTechnologies.map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`} 
            className="relative group flex-shrink-0"
            style={{ marginRight: '4rem' }} 
          >
            <div className="relative group">
              <img
                src={tech.src}
                alt={tech.alt}
                className="w-12 h-12 md:w-16 md:h-16 object-contain filter hover:scale-110 transition-transform duration-300 grayscale hover:grayscale-0 cursor-pointer"
                onError={(e) => {
                  e.target.src = "/tech/placeholder.png";
                }}
              />
              
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechMarquee;