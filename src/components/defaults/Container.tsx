import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import type { FC } from "react";
import ScrollToTop from "./ScrollToTop";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <ScrollToTop />
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Container;
