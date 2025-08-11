import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ServiceIcon } from "../../svgs/Icons";

const MediaDropdown = () => {
  
  const items = [
    {
      id: 1,
      title: "News Highlight",
      link: "/media/highlights",
      desc: "The latest industry news, interviews, technologies, and resources.",
      icon: <ServiceIcon size="36" color="#1F3887" />,
    },
    {
      id: 2,
      title: "HR Nugget",
      link: "/media/nugget",
      desc: "The latest industry news, interviews, technologies, and resources.",
      icon: <ServiceIcon size="36" color="#1F3887" />,
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
      <h2 className="text-[14px] lg:block hidden text-[#1F3887] font-semibold mb-6">Media</h2>
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

export default MediaDropdown;
