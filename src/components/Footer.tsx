import { motion } from 'framer-motion';
import Section from './Section';

const Footer = () => {
  return (
    <Section className="bg-blue-900">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-200"
        >
          © 2024 Farooq Mulla. All rights reserved.
        </motion.p>
      </div>
    </Section>
  );
};

export default Footer;