import React from 'react';
import { Github, Linkedin, Code2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com/frq-frk', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/farooqmulla14', label: 'LinkedIn' },
  { icon: Code2, href: 'https://leetcode.com/frq_frk_', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:farooqmulla14@gmail.com', label: 'Email' }
];

const SocialLinks = () => {
  return (
    <motion.div
      className="flex justify-center gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          className="hover:text-blue-300 transition-colors p-2 bg-white/10 rounded-lg backdrop-blur-sm"
          whileHover={{ scale: 1.2, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          <link.icon size={28} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;