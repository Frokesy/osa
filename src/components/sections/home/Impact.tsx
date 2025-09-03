import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { TelIcon } from "../../svgs/Icons";
import { NavLink } from "react-router-dom";

type ImpactItem = {
  id: number;
  title: string;
  desc: string;
  value: number;
  suffix?: string;
};

type ImpactProps = {
  impact: ImpactItem[];
};

const Impact = ({ impact }: ImpactProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counts, setCounts] = useState(impact.map(() => 0));

  useEffect(() => {
    if (inView) {
      impact.forEach((item, i) => {
        let start = 0;
        const end = item.value;
        const duration = 1500;
        const stepTime = Math.max(Math.floor(duration / end), 20);

        const timer = setInterval(() => {
          start += 1;
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[i] = start;
            return newCounts;
          });
          if (start >= end) clearInterval(timer);
        }, stepTime);
      });
    }
  }, [inView, impact]);

  return (
    <div className="bg-[#0E1A3E] text-[#fff] mt-20 py-10" ref={ref}>
      <div className="w-[90vw] mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-start">
          <div className="lg:w-[50%]">
            <h2 className="lg:text-[36px] font-semibold text-[24px]">
              Our impact, by the numbers
            </h2>
            <p className="lg:text-[20px] mt-2">
              See how our training programs, advisory services, and partnerships
              have created measurable change across communities and industries.
            </p>
          </div>

          <div className="flex items-center lg:mt-0 mt-6 space-x-4 lg:text-[16px] text-[12px]">
            <button className="flex items-center space-x-4 bg-[#fff] text-[#333] px-4 lg:px-10 lg:py-4 py-3 font-semibold rounded-lg">
              <TelIcon />
              <span>Schedule a call</span>
            </button>
            <NavLink
              to="/services/vsd"
              className="flex items-center space-x-4 px-4 lg:px-10 py-4 font-semibold rounded-xl bg-[#E30613] hover:bg-[#c0050f] transition-colors"
            >
              Explore Training
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10">
          {impact.map((item, i) => (
            <div key={item.id} className="flex flex-col lg:items-center">
              <h3 className="text-[60px] font-semibold">
                {counts[i]}
                {counts[i] >= item.value ? item.suffix : ""}
              </h3>
              <p className="text-[18px]">{item.title}</p>
              <p className="text-[16px] text-[#667085] mt-1 lg:text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
