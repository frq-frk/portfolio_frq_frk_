import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Mail } from 'lucide-react';
import Section from '../Section';
import SectionTitle from '../common/SectionTitle';

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/frq-frk', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/farooqmulla14', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/frq_frk_', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:farooqmulla14@gmail.com', label: 'Email' }
  ];

  return (
    <Section className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Feel free to reach out for collaborations or just a friendly hello"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <p className="text-gray-600">
              I'm always interested in hearing about new projects and opportunities.
              Let's connect and discuss how we can work together!
            </p>
          </div>
          
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <link.icon size={24} />
                </div>
                <span className="text-sm font-medium text-gray-600">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;