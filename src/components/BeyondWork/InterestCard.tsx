import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface InterestCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  link: {
    text: string;
    url: string;
  };
  details: string[];
  delay?: number;
}

const InterestCard: React.FC<InterestCardProps> = ({
  title,
  icon,
  description,
  link,
  details,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
    >
      <div className="p-3 bg-blue-50 rounded-lg text-blue-600 w-fit mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-4">
        {details.map((detail, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1 * index }}
            className="text-sm text-gray-500 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            {detail}
          </motion.li>
        ))}
      </ul>
      
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
        whileHover={{ x: 5 }}
      >
        {link.text}
        <ExternalLink size={14} />
      </motion.a>
    </motion.div>
  );
};

export default InterestCard;