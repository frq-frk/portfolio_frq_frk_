import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Section from './Section';

const Projects = () => {
  const projects = [
    {
      title: 'D-Diary',
      description: 'A digital diary application with secure authentication and real-time updates',
      links: [
        { label: 'Frontend', url: 'https://github.com/frq-frk/D-Diary-FE' },
        { label: 'Backend', url: 'https://github.com/frq-frk/D-Diary-BE' }
      ]
    },
    {
      title: 'Compiler Service',
      description: 'Online code compiler supporting multiple programming languages',
      links: [
        { label: 'View Project', url: 'https://github.com/frq-frk/compiler-service' }
      ]
    }
  ];

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-gray-800"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex gap-4">
                {project.links.map(link => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <Github size={18} />
                    <span>{link.label}</span>
                    <ExternalLink size={14} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;