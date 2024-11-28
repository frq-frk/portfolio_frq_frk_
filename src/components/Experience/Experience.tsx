import React from 'react';
import Section from '../Section';
import ExperienceCard from './ExperienceCard';
import SectionTitle from '../common/SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Verifone',
      period: '2023 - Present',
      description: [
        'Led the development of payment processing solutions using Java and Spring Boot',
        'Implemented secure payment gateway integrations handling over 1M transactions daily',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Optimized database queries resulting in 40% improvement in response time'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Tech Innovators',
      period: '2022 - 2023',
      description: [
        'Developed and maintained RESTful APIs using Node.js and Express',
        'Implemented real-time features using WebSocket technology',
        'Created automated test suites achieving 90% code coverage',
        'Participated in code reviews and contributed to team best practices'
      ]
    }
  ];

  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="A timeline of my professional journey and key achievements"
        />
        <div className="relative mt-12 ml-4">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.title}
              {...exp}
              isLast={index === experiences.length - 1}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;