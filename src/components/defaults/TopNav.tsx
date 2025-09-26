import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretDown, Hamburger } from "../svgs/Icons";
import AboutDropdown from "../sections/dropdowns/AboutDropdown";
import ServicesDropdown from "../sections/dropdowns/ServicesDropdown";
import MediaDropdown from "../sections/dropdowns/MediaDropdown";
import Drawer from "./Drawer";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";
import { LinkedIn } from "../svgs/Logos";

const TopNav = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About" },
    { name: "Our services" },
    { name: "Media room" },
    { name: "Career", path: "/career" },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="bg-[#fff] shadow-lg relative">
      <div className="bg-[#223D94] lg:flex hidden justify-between px-20 text-[#fff] items-center py-3">
        <div className="flex items-center space-x-6">
          <p className="">Your One Stop Shop HR Solutions:</p>
          <div className="flex items-center space-x-3">
            <Phone size={18} />
            <span>+234 906 308 3323</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail size={18} />
            <span>info@1stepaheadgroup.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Instagram color="#fff" />
          <img
            src="/assets/xicon2.avif"
            alt="xicon"
            className="w-[24px] h-[24px] rounded-full"
          />
          <LinkedIn />
        </div>
      </div>
      <div className="lg:w-[95vw] z-50 flex justify-between items-center text-[#000] py-4 lg:px-10 px-6 mx-auto lg:rounded-4xl">
        <div className="flex items-center space-x-20">
          <NavLink to="/">
            <img src="/assets/logo.svg" alt="logo" />
          </NavLink>

          <div className="lg:flex hidden items-center space-x-10">
            {navItems.map((item, index) => (
              <div key={index} className="">
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className="text-[16px] flex items-center space-x-3"
                  >
                    <span>{item.name}</span>
                  </NavLink>
                ) : (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="text-[16px] flex items-center space-x-3 cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <CaretDown />
                  </button>
                )}

                {item.name === "About" && activeDropdown === "About" && (
                  <AboutDropdown />
                )}
                {item.name === "Our services" &&
                  activeDropdown === "Our services" && <ServicesDropdown />}
                {item.name === "Media room" &&
                  activeDropdown === "Media room" && <MediaDropdown />}
              </div>
            ))}
          </div>
        </div>

        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Hamburger />
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className=""
        >
          <Drawer
            isOpen={isDrawerOpen}
            closeDrawer={() => setIsDrawerOpen(false)}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TopNav;
