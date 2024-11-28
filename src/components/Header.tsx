import React from 'react';
import { Github, Linkedin, Code2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/frq-frk', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/farooqmulla14', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/frq_frk_', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:farooqmulla14@gmail.com', label: 'Email' }
  ];

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Farooq Mulla
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-200 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Software Development Engineer
          </motion.p>
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
                className="hover:text-blue-300 transition-colors p-2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <link.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;