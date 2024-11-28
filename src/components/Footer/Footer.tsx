import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="w-full flex items-center py-16 bg-blue-900 min-h-[30vh]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-200 mb-2">
            © {new Date().getFullYear()} Farooq Mulla. All rights reserved.
          </p>
          <p className="text-blue-200/60 text-sm">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;