import React from 'react';
import { motion } from 'framer-motion';

const SkillsHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 mb-4"
      >
        Technical Expertise
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto"
      >
        A comprehensive overview of my technical skills and proficiencies across various domains
      </motion.p>
    </div>
  );
}

export default SkillsHeader;