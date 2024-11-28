import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory = ({ title, skills, icon }: SkillCategoryProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-3 group"
        >
          <CheckCircle2 className="text-blue-500 w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
          <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
            {skill}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default SkillCategory;