import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ServicesDropdown = () => {
  const items = [
    { id: 1, title: "Vocational Skills Development", link: "/services/vsd" },
    { id: 2, title: "HR Advisory", link: "/services/hra" },
    { id: 3, title: "Recruitment & Selection Services", link: "/services/rss" },
    { id: 4, title: "Payroll Compensation Development", link: "/services/pcd" },
    { id: 5, title: "Recognition System", link: "/services/rs" },
    {
      id: 6,
      title: "Business Process & Policy Manual",
      link: "/services/bppm",
    },
    {
      id: 7,
      title: "Organization Development & Change",
      link: "/services/odc",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="lg:absolute bg-gray-800 text-[#fff] z-50 lg:rounded-xl lg:shadow-lg mt-2 flex flex-col p-2 space-y-2 lg:w-[20vw] w-[100%] lg:top-16"
    >
      {items.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          className="text-[15px] hover:bg-gray-600 hover:rounded-xl p-3 transition-all duration-300 ease-in-out lg:border-none border-b-2 border-[#404040]"
        >
          {item.title}
        </NavLink>
      ))}
    </motion.div>
  );
};

export default ServicesDropdown;
