import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Info } from "lucide-react";

interface ProjectLink {
  type: "github" | "live";
  url: string;
  label: string;
  liveAvailable?: boolean; // New flag to indicate whether live demo is available
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  links,
  image,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {links.map((link) =>
            link.type === "live" && link.liveAvailable === false ? (
              // Render the disabled Live Demo button with tooltip if liveAvailable is false
              <motion.div
                key={link.url}
                className="relative group inline-flex items-center gap-2"
              >
                <button
                  disabled
                  className="inline-flex items-center gap-2 text-gray-400 cursor-not-allowed"
                >
                  <Globe size={18} />
                  <span>{link.label}</span>
                  <Info size={14} />
                </button>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-md px-4 py-2 transition-opacity duration-300">
                  Project live has been halted due to technical reasons
                </div>
              </motion.div>
            ) : (
              // Render regular buttons for available live demo or GitHub links
              <motion.a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                {link.type === "github" ? (
                  <Github size={18} />
                ) : (
                  <Globe size={18} />
                )}
                <span>{link.label}</span>
                <ExternalLink size={14} />
              </motion.a>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
