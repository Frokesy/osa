import { motion } from "framer-motion";

const Fallback = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <motion.img
        src="/assets/logo.svg"
        alt="logo"
        className="w-32 h-32"
        animate={{
          scale: [1, 1.1, 0.95, 1.05, 1],
          opacity: [1, 0.9, 0.8, 0.9, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Fallback;
