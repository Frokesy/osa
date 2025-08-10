import { ArrowRight } from "lucide-react";
import {
  AutomotiveIcon,
  CarpentryIcon,
  CreativeArtsIcon,
  FashionDesignIcon,
  HospitalityIcon,
  SolarTechnologyIcon,
} from "../../svgs/Icons";

const Programs = () => {
  return (
    <div className="lg:mt-30 mt-20">
      <div className="flex flex-col space-y-3 lg:w-[40%] w-[90%] mx-auto text-center">
        <h2 className="text-[#223D94] lg:text-[36px] text-[24px] font-semibold">
          Key Training Programs
        </h2>
        <p className="text-[#667085] lg:text-[20px]">
          Discover our comprehensive range of professional training programs
          designed to equip you with in-demand skills for today's job market.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-10 w-[90vw] mx-auto">
        <div className="flex flex-col items-center space-y-3 text-center">
          <FashionDesignIcon />
          <h2 className="text-[18px] font-semibold">Fashion Design</h2>
          <p className="text-[14px] lg:w-[60%] text-[#71717A]">
            Learn cutting-edge fashion design and garment construction
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 text-center">
          <CarpentryIcon />
          <h2 className="text-[18px] font-semibold">Carpentry</h2>
          <p className="text-[14px] lg:w-[60%] text-[#71717A]">
            Master woodworking and construction techniques
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 text-center">
          <SolarTechnologyIcon />
          <h2 className="text-[18px] font-semibold">Solar Technology</h2>
          <p className="text-[14px] lg:w-[60%] text-[#71717A]">
            Renewable energy installation and maintenance
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 text-center">
          <HospitalityIcon />
          <h2 className="text-[18px] font-semibold">Hospitality</h2>
          <p className="text-[14px] lg:w-[60%] text-[#71717A]">
            Customer service and Hospitality management
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 text-center">
          <AutomotiveIcon />
          <h2 className="text-[18px] font-semibold">Automotive</h2>
          <p className="text-[14px] lg:w-[60%] text-[#71717A]">
            Vehicle maintenance and repair expertise
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 text-center">
          <CreativeArtsIcon />
          <h2 className="text-[18px] font-semibold">Creative Arts</h2>
          <p className="text-[14px] lg:w-[60%] text-[#71717A]">
            Graphics design and multimedia production.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
        <button className="flex text-[#fff] items-center space-x-4 bg-[#E30613] px-4 py-4 font-semibold rounded-lg hover:bg-[#c0050f] transition-colors">
          <span>See full catalogue</span>
          <ArrowRight color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default Programs;
