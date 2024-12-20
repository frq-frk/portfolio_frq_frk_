import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, ArrowRight } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  companyURL: string;
  period: string;
  description: string[];
  isLast?: boolean;
  delay?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  companyURL,
  period,
  description,
  isLast = false,
  delay = 0,
}) => {
  return (
    <div className="relative pl-16 pb-16">
      {/* Vertical Line */}
      {!isLast && (
        <div
          className="absolute left-[25px] top-1/2 translate-y-1/2 w-[3px] bg-gradient-to-b from-blue-500 to-blue-200 z-0"
          style={{
            top: "0", // Start from the top of the container
            height: "calc(100%)", // Extend slightly to align with the next dot
          }}
        />
      )}

      {/* Stepper Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.3 }}
        className="absolute left-[12px] top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full z-10 shadow-lg"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-blue-600/30" />
        <div className="absolute inset-[3px] rounded-full bg-white" />
        <div className="absolute inset-[6px] rounded-full bg-blue-600" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100 z-20"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <a href={companyURL} target="_blank">
              <div className="flex items-center text-blue-600 mb-4">
                <Building2 size={18} className="mr-2" />
                <span>{company}</span>
              </div>
            </a>
          </div>
          <div className="flex items-center text-gray-500">
            <Calendar size={18} className="mr-2" />
            <span>{period}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {description.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
