import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import Section from './Section';

const Experience = () => {
  return (
    <Section className="bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-gray-800"
        >
          Experience
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Software Development Engineer</h3>
              <div className="flex items-center text-blue-600 mb-4">
                <Building2 size={18} className="mr-2" />
                <span>Verifone</span>
              </div>
            </div>
            <div className="flex items-center text-gray-500">
              <Calendar size={18} className="mr-2" />
              <span>2023 - Present</span>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-600">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start"
            >
              <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full" />
              Developed and maintained payment solutions using Java and Spring Boot
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start"
            >
              <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full" />
              Implemented secure payment processing features and integrations
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start"
            >
              <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full" />
              Collaborated with cross-functional teams to deliver high-quality software
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};

export default Experience;