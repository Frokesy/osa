import { useEffect, useState, type JSX } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { client } from "../../../sanity/client";
import { allServicesQuery } from "../../../sanity/servicePage";

import {
  BPPMIcon,
  ODCIcon,
  PCDIcon,
  PMSIcon,
  TMOIcon,
  VSDIcon,
} from "../../svgs/Icons";

const ICONS: Record<string, JSX.Element> = {
  vsd: <VSDIcon size="48" />,
  hra: <TMOIcon size="48" />,
  rss: <TMOIcon size="48" />,
  pcd: <PCDIcon size="48" />,
  rs: <PMSIcon size="48" />,
  bppm: <BPPMIcon size="48" />,
  odc: <ODCIcon size="48" />,
};

interface Service {
  title: string;
  slug: { current: string };
  subText: string;
  icon: string;
}

const ServicesDropdown = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    client.fetch(allServicesQuery).then((res) => setServices(res));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="lg:absolute bg-[#fff] w-[90vw] text-[#333] z-50 lg:rounded-xl left-0 lg:shadow-3xl lg:top-[17vh] lg:p-10 p-3 mt-4 lg:mt-0"
    >
      <h2 className="text-[14px] lg:block hidden text-[#1F3887] font-semibold mb-6">
        Our Services
      </h2>
      <div className="gap-10 grid grid-cols-1 lg:grid-cols-3">
        {services.map((service) => (
          <NavLink
            key={service.slug.current}
            to={`/services/${service.slug.current}`}
            className="flex space-x-3"
          >
            <div>{ICONS[service.slug.current] || <TMOIcon size="48" />}</div>
            <div>
              <h2>{service.title}</h2>
              <p className="text-[#5D5E5F]">{service.subText}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesDropdown;
