import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { HistoryIcon, TeamIcon, ValueIcon } from "../../svgs/Icons";

const AboutDropdown = () => {
  const items = [
    {
      id: 1,
      title: "Who we are",
      link: "/about/history",
      desc: "Our company’s history and the value we provide.",
      icon: <HistoryIcon size="48" />,
    },
    {
      id: 2,
      title: "Our Team",
      link: "/about/team",
      desc: "Get to know our group of brilliant individuals who attend to your every problems.",
      icon: <TeamIcon size="48" />,
    },
    {
      id: 3,
      title: "Core Values",
      link: "/about/core-values",
      desc: "Learn about our values and what guides us .",
      icon: <ValueIcon size="48" />,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="lg:absolute bg-[#fff] w-[90vw] text-[#333] z-50 lg:rounded-xl left-0 lg:shadow-3xl lg:top-[17vh] lg:p-10 p-3 mt-4 lg:mt-0"
    >
      <h2 className="text-[14px] lg:block hidden text-[#1F3887] font-semibold mb-6">
        About
      </h2>
      <div className="gap-10 grid grid-cols-1 lg:grid-cols-3">
        {items.map((item) => (
          <NavLink key={item.id} to={item.link} className="flex space-x-3">
            <div className="">{item.icon}</div>
            <div className="">
              <h2 className="">{item.title}</h2>
              <p className="text-[#5D5E5F]">{item.desc}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutDropdown;
