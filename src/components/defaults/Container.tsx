import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, type FC } from "react";
import ScrollToTop from "./ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

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

    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);  

  return (
    <AnimatePresence>
      <ScrollToTop />
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="overflow-x-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Container;
