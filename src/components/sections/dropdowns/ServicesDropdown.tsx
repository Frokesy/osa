import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  BPPMIcon,
  ODCIcon,
  PCDIcon,
  PMSIcon,
  TMOIcon,
  VSDIcon,
} from "../../svgs/Icons";

const ServicesDropdown = () => {
  const items = [
    {
      id: 1,
      title: "Vocational Skills Development",
      link: "/services/vsd",
      desc: "Training individuals for specific job-related competencies.",
      icon: <VSDIcon size="48" />,
    },
    {
      id: 2,
      title: "HR Advisory",
      link: "/services/hra",
      desc: "Acquiring, developing, or externally sourcing skilled professionals.",
      icon: <TMOIcon size="48" />,
    },
    {
      id: 3,
      title: "Recruitment & Selection Services",
      link: "/services/rss",
      desc: "Attracting and hiring qualified, culture-fit candidates.",
      icon: <TMOIcon size="48" />,
    },
    {
      id: 4,
      title: "Payroll Compensation Development",
      link: "/services/pcd",
      desc: "Structuring fair employee pay and benefit systems.",
      icon: <PCDIcon size="48" />,
    },
    {
      id: 5,
      title: "Recognition System",
      link: "/services/rs",
      desc: "Monitoring and enhancing employee effectiveness and goals.",
      icon: <PMSIcon size="48" />,
    },
    {
      id: 6,
      title: "Business Process & Policy Manual",
      link: "/services/bppm",
      desc: "Documenting standardized workflows and operational guidelines.",
      icon: <BPPMIcon size="48" />,
    },
    {
      id: 7,
      title: "Consulting for govt. & NGOs.",
      link: "/services/odc",
      desc: "Improving systems to adapt and grow efficiently.",
      icon: <ODCIcon size="48" />,
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
      <h2 className="text-[14px] lg:block hidden text-[#1F3887] font-semibold mb-6">Our Services</h2>
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

export default ServicesDropdown;
