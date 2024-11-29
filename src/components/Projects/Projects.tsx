import React from 'react';
import Section from '../Section';
import ProjectCard from './ProjectCard';
import SectionTitle from '../common/SectionTitle';

const Projects = () => {
  const projects = [
    {
      title: 'D-Diary',
      description: 'A secure digital diary application with real-time updates, rich text editing, and cloud synchronization',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
      links: [
        { type: 'github' as const, url: 'https://github.com/frq-frk/D-Diary-FE', label: 'Frontend', liveAvailable: false },
        { type: 'github' as const, url: 'https://github.com/frq-frk/D-Diary-BE', label: 'Backend', liveAvailable: false }
      ]
    },
    {
      title: 'Compiler Service',
      description: 'Online code compiler and execution platform supporting multiple programming languages',
      technologies: ['Spring Boot', 'Docker', 'Redis', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      links: [
        { type: 'github' as const, url: 'https://github.com/frq-frk/compiler-service', label: 'View Project', liveAvailable: false },
        { type: 'live' as const, url: 'https://compiler-service-demo.netlify.app', label: 'Live Demo', liveAvailable: false }
      ]
    },
    {
      title: 'Zenith-Learn website',
      description: 'A marketing website designed for the learning management startup company',
      technologies: ['NextJS', 'Firebase', 'SCSS'],
      image: 'https://images.unsplash.com/photo-1611131922192-9e1d9f483900?auto=format&fit=crop&w=800&q=80',
      links: [
        { type: 'live' as const, url: 'https://zenith-learn.com/', label: 'Live Demo', liveAvailable: true }
      ]
    },
  ];

  return (
    <Section className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A showcase of my recent work and technical achievements"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;