import { motion } from "framer-motion";
import profileImage  from "../../Assets/Images/profileImage.jpg";

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl" />
      <motion.img
        src={profileImage}
        alt="Farooq Mulla"
        className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <motion.div
        className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-2xl">👋</span>
      </motion.div>
    </motion.div>
  );
};

export default ProfileImage;
