import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const iconMap: Record<string, string> = {
  fashion: "/icons/fashion.svg",
  carpentry: "/icons/carpentry.svg",
  solar: "/icons/solar.svg",
  hospitality: "/icons/hospitality.svg",
  automotive: "/icons/automotive.svg",
  creative: "/icons/creative.svg",
};

interface Program {
  icon: string;
  title: string;
  subtext: string;
}

interface ProgramsProps {
  items: Program[];
}

const Programs: React.FC<ProgramsProps> = ({ items }) => {
  return (
    <div className="lg:mt-30 mt-20">
      <div
        data-aos="fade-down"
        className="flex flex-col space-y-3 lg:w-[40%] w-[90%] mx-auto text-center"
      >
        <h2 className="text-[#223D94] lg:text-[36px] text-[24px] font-semibold">
          Corporate Training Programs
        </h2>
        <p className="text-[#667085] lg:text-[20px]">
          Discover our comprehensive range of professional training programs
          designed to equip you with in-demand skills for today's job market.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-10 w-[90vw] mx-auto">
        {items.map((program, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="flex flex-col items-center space-y-3 text-center"
          >
            {iconMap[program.icon] ? (
              <img
                src={iconMap[program.icon]}
                alt={program.title}
                className="w-12 h-12 object-contain"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200" />
            )}
            <h2 className="text-[18px] font-semibold">{program.title}</h2>
            <p className="text-[14px] lg:w-[60%] text-[#71717A]">
              {program.subtext}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-20">
        <NavLink
          to="/services/ctp"
          className="flex text-[#fff] items-center space-x-4 bg-[#E30613] px-4 lg:py-4 py-3 font-semibold rounded-lg hover:bg-[#c0050f] transition-colors"
        >
          <span>See full catalogue</span>
          <ArrowRight color="#fff" />
        </NavLink>
      </div>
    </div>
  );
};

export default Programs;
