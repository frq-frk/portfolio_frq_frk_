import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all"
  >
    <h3 className="text-xl font-semibold text-gray-800 mb-6">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python']
    },
    {
      title: 'Frameworks',
      skills: ['Spring Boot', 'React', 'Node.js']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS']
    }
  ];

  return (
    <Section className="bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-gray-800"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(category => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;