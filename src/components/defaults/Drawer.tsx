import { NavLink } from "react-router-dom";
import { CaretDown } from "../svgs/Icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AboutDropdown from "../sections/dropdowns/AboutDropdown";
import ServicesDropdown from "../sections/dropdowns/ServicesDropdown";
import MediaDropdown from "../sections/dropdowns/MediaDropdown";

const Drawer = ({
  isOpen,
  closeDrawer,
}: {
  isOpen: boolean;
  closeDrawer: () => void;
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="drawer"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="bg-gray-900 text-white fixed top-0 left-0 w-full min-h-screen z-[100] px-6 py-10 space-y-6 lg:hidden overflow-y-auto"
        >
          <div className="flex justify-end">
            <button
              onClick={closeDrawer}
              className="text-white text-3xl font-bold hover:text-red-500"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          <nav className="space-y-6 mt-4">
            <NavLink to="/" onClick={closeDrawer} className="block">
              Home
            </NavLink>

            <div>
              <div
                onClick={() => toggleDropdown("About")}
                className="flex justify-between items-center cursor-pointer"
              >
                <span>About</span>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeDropdown === "About" ? "rotate-180" : ""
                  }`}
                >
                  <CaretDown />
                </div>
              </div>
              <AnimatePresence>
                {activeDropdown === "About" && <AboutDropdown />}
              </AnimatePresence>
            </div>

            <div>
              <div
                onClick={() => toggleDropdown("Our services")}
                className="flex justify-between items-center cursor-pointer"
              >
                <span>Our Services</span>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeDropdown === "Our services" ? "rotate-180" : ""
                  }`}
                >
                  <CaretDown />
                </div>
              </div>
              <AnimatePresence>
                {activeDropdown === "Our services" && <ServicesDropdown />}
              </AnimatePresence>
            </div>

            <div>
              <div
                onClick={() => toggleDropdown("Media room")}
                className="flex justify-between items-center cursor-pointer"
              >
                <span>Media Room</span>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeDropdown === "Media room" ? "rotate-180" : ""
                  }`}
                >
                  <CaretDown />
                </div>
              </div>
              <AnimatePresence>
                {activeDropdown === "Media room" && <MediaDropdown />}
              </AnimatePresence>
            </div>

            <NavLink to="/career" onClick={closeDrawer} className="block">
              Career
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeDrawer}
              className="bg-[#E30613] px-6 py-3 text-center rounded-xl block hover:bg-[#c0050f]"
            >
              Contact Us
            </NavLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
