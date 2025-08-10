import { TelIcon } from "../../svgs/Icons";

const Impact = () => {
  const items = [
    {
      id: 1,
      title: "Trainees",
      desc: "We've helped train over 100 amazing professionals",
      value: "100+",
    },
    {
      id: 2,
      title: "Placement rate",
      desc: "Achieved a 100% placement rate for potential employees",
      value: "100%",
    },
    {
      id: 3,
      title: "Placement rate",
      desc: "Achieved a 100% placement rate for potential employees",
      value: "100%",
    },
    {
      id: 4,
      title: "Training hubs",
      desc: "Over 40 training hubs across the Nation",
      value: "40",
    },
    {
      id: 5,
      title: "Trusted Partners",
      desc: "We're proud to have 50+ trusted partners",
      value: "50+",
    },
  ];
  return (
    <div className="bg-[#0E1A3E] text-[#fff] mt-20 py-10">
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
            <button className="flex items-center space-x-4 px-4 lg:px-10 lg:py-4 py-3 font-semibold rounded-xl bg-[#E30613] hover:bg-[#c0050f] transition-colors">
              Explore Training
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col lg:items-center">
              <h3 className="text-[60px] font-semibold">{item.value}</h3>
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
