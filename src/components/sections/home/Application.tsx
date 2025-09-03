import { ArrowRight, ClockIcon } from "lucide-react";
import {
  CarpentryIcon,
  FashionDesignIcon,
  HospitalityIcon,
  MiniCalendarIcon,
  NairaIcon,
  NigerianFlag,
  SolarTechnologyIcon,
} from "../../svgs/Icons";
import { NavLink } from "react-router-dom";
import type { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  fashion: <FashionDesignIcon />,
  carpentry: <CarpentryIcon />,
  solar: <SolarTechnologyIcon />,
  hospitality: <HospitalityIcon />,
};

interface OpenRole {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  salary: string;
  icon: string;
  postedDate: string;
}

interface ApplicationProps {
  roles: OpenRole[];
}

const Application: React.FC<ApplicationProps> = ({ roles }) => {
  return (
    <div className="bg-[#0E1A3E] text-[#fff] mt-20">
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        className="flex flex-col items-center justify-center pt-10"
      >
        <h2 className="lg:text-[36px] text-[24px] font-semibold">
          Become a Trainer
        </h2>
        <p className="lg:text-[20px] text-center pt-2">
          Invitation for skilled professionals to join as vocational
          facilitators/trainers.
        </p>
      </div>

      <div className="bg-[url('/assets/application-hero.png')] bg-cover bg-center pb-10 lg:py-10 mt-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 lg:gap-10 w-[90vw] mx-auto mt-10">
          {roles.map((job) => (
            <div
              key={job.id}
              data-aos="fade-up"
              className="border border-[#ccc] bg-[#fff] text-[#333] rounded-2xl lg:p-10 p-4 mt-6 lg:mt-0"
            >
              <div className="flex lg:flex-row flex-col items-start justify-between">
                <div className="lg:space-y-1 space-y-3 flex flex-col items-start">
                  <div className="flex items-center space-x-3">
                    <div>{iconMap[job.icon] ?? null}</div>
                    <h2 className="text-[18px] font-semibold">{job.title}</h2>
                  </div>
                  <div className="flex lg:hidden items-center space-x-2 bg-[#E9ECF4] font-semibold py-2 px-4 rounded-lg">
                    <NigerianFlag />
                    <p className="text-[#667085] text-[14px]">{job.location}</p>
                  </div>
                  <p className="text-gray-500">{job.description}</p>
                </div>
                <div className="lg:flex hidden items-center space-x-2 mt-3 lg:mt-0 bg-[#E9ECF4] font-semibold py-2 px-4 rounded-lg">
                  <NigerianFlag />
                  <p className="text-[#667085]">{job.location}</p>
                </div>
              </div>

              <div className="flex lg:flex-row flex-col justify-between lg:items-center space-y-3 lg:space-y-0 mt-10">
                <div className="flex items-center space-x-10">
                  <div className="flex items-center space-x-3">
                    <ClockIcon />
                    <p className="text-[#78797B]">{job.type}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <NairaIcon />
                    <p className="text-[#78797B]">{job.salary}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MiniCalendarIcon />
                  <p className="text-[#78797B]">
                    {new Date(job.postedDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center lg:mt-20 mt-10">
          <NavLink
            to="/career"
            className="flex text-[#fff] items-center space-x-4 bg-[#E30613] px-4 py-4 font-semibold rounded-lg hover:bg-[#c0050f] transition-colors"
          >
            <span>Apply Now</span>
            <ArrowRight color="#fff" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Application;
