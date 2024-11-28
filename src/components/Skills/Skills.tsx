import React from 'react';
import Section from '../Section';
import SkillsHeader from './SkillsHeader';
import SkillCategory from './SkillCategory';
import { Code2, Layers, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: [
        'Java',
        'JavaScript',
        'TypeScript',
        'Python',
        'SQL'
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers size={24} />,
      skills: [
        'Spring Boot',
        'React.js',
        'Node.js',
        'Express.js',
        'Tailwind CSS'
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench size={24} />,
      skills: [
        'Git & GitHub',
        'Docker',
        'AWS Services',
        'REST APIs',
        'MongoDB'
      ]
    }
  ];

  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <SkillsHeader />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(category => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;