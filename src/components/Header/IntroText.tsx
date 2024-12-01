import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Briefcase } from "lucide-react";

const IntroText = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-center mb-8">
      <h1>
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Farooq Mulla
        </motion.h1>
      </h1>
      <h2>
        <motion.p
          className="text-xl md:text-2xl text-blue-200 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Software Development Engineer
        </motion.p>
      </h2>
      <motion.p
        className="text-lg text-blue-200/80 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Passionate about building scalable solutions and creating impactful
        software experiences
      </motion.p>

      <motion.div
        className="flex justify-center gap-6 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          onClick={() => scrollToSection("#projects")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
        >
          <Briefcase size={20} />
          View my work
          <ArrowDown size={16} className="animate-bounce" />
        </motion.button>

        <motion.button
          onClick={() => scrollToSection("#contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all"
        >
          <Mail size={20} />
          Reach out to me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default IntroText;
