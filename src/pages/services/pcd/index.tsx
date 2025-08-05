import { SettingsIcon } from "lucide-react";
import TopNav from "../../../components/defaults/TopNav";
import {
  PCDIcon,
  ServiceIcon,
  WhiteTick,
} from "../../../components/svgs/Icons";

const PayrollCompensationDevelopment = () => {
  const skillItems = [
    {
      id: 1,
      title: "Compensation philosophy",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Employee Services",
        "Compensation, Medicals",
        "Tax",
        "Other benefits",
      ],
      image: "/assets/services-two.png",
      bg: "#0E1A3E",
    },
    {
      id: 2,
      title: "Compensation and benefits survey tools and reports",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/about-img-five.png",
      bg: "#ffffff",
    },
    {
      id: 3,
      title: "Compensation structure",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/about-img-five.png",
      bg: "#0E1A3E",
    },
    {
      id: 4,
      title: "Benefits Practices",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/about-img-five.png",
      bg: "#ffffff",
    },
    {
      id: 5,
      title: "Compensation Cost Analysis",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/about-img-five.png",
      bg: "#0E1A3E",
    },
  ];
  return (
    <div className="">
      <div className="bg-[url('/assets/services-nine.png')] lg:min-h-screen h-[80vh] bg-center bg-cover bg-no-repeat">
        <div className="bg-[#000000]/50 lg:min-h-screen h-[80vh] lg:pt-10">
          <TopNav />

          <div className="bg-[#808080]/40 backdrop-blur-xs w-[95vw] lg:p-10 p-6 rounded-4xl mt-[20vh] lg:mt-[30vh] text-[#fff] mx-auto">
            <div className="flex items-center space-x-3">
              <div className="h-0.5 rounded-full w-6 bg-[#ED1C24]"></div>
              <p className="text-[12px] uppercase">Services</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="">
                <h2 className="lg:text-[48px] text-[20px] font-semibold uppercase">
                  Payroll Compensation Development
                </h2>
                <p className="text-[14px] pt-2">
                  Empowering individuals with practical, job-ready skills to
                  enhance performance and drive career growth
                </p>
              </div>
              <PCDIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1F3887] w-[100%] mt-6 text-[#fff] py-14 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="lg:block hidden">
            <ServiceIcon />
          </div>
          <h2 className="lg:text-[36px] uppercase font-semibold">
            Onestep<span className="text-[#ED1C24]">ahead</span>
          </h2>
        </div>

        <h2 className="pt-3 lg:text-[48px] text-[24px] lg:w-[60%] text-center font-semibold">
          "Designing fair, compliant, and efficient employee pay structures."
        </h2>
      </div>

      <div className="lg:mt-20 mt-10 w-[95vw] mx-auto">
        <SettingsIcon />
        <h2 className="lg:text-[36px] text-[20px] font-semibold mt-10">
          Payroll Compensation Development
        </h2>
        <p className="lg:text-[20px] text-[14px] pt-6 text-[#1D2939]">
          Adequate knowledge of financial and nonfinancial pay practices within
          the industry and across the environment is essential in developing pay
          strategies to effectively retain and motivate staff. The reward is one
          of the reasons why we work. It is important to ensure reward practices
          adequately attracts and retain talent to drive business strategies.
          value.
        </p>
        <p className="lg:text-[20px] text-[14px] pt-6 text-[#1D2939]">
          Our salary and benefits survey obtains compensation details of
          benchmark jobs from participating organizations and fits these jobs
          into the client&apos;s existing grade system. A trend line analysis of
          the actual market pay value is determined in order to develop an
          appropriate pay structure with uniform pay scales.
        </p>
      </div>

      <div className="w-[95vw] mx-auto mt-20 text-[#fff] space-y-10">
        {skillItems.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.bg }}
            className={`${
              item.id % 2 === 0
                ? "lg:flex-row-reverse flex-col text-[#000]"
                : "lg:flex-row flex-col"
            } flex justify-between items-center rounded-2xl lg:flex-row flex-col`}
          >
            <div className="lg:w-[55%]">
              <img
                src={item.image}
                alt={item.title}
                className={`${
                  item.id % 2 === 0
                    ? "lg:rounded-l-full lg:rounded-bl-full lg:rounded-b-none rounded-b-full"
                    : "lg:rounded-r-full lg:rounded-br-full lg:rounded-b-none rounded-b-full"
                } lg:h-[414px] h-[241px] w-[100%]`}
              />
            </div>

            <div
              className={`${
                item.id % 2 === 0 ? "px-3" : "px-6 lg:px-0"
              } lg:w-[40%] space-y-4 lg:pr-6 lg:pb-0 pb-10`}
            >
              <h2 className="lg:text-[36px] text-[20px] mt-6 lg:mt-0 font-semibold">
                {item.title}
              </h2>
              <p className="lg:text-[16px] text-[14px]">{item.description}</p>

              <div className="space-y-2">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <WhiteTick
                      color={item.bg === "#ffffff" ? "#000000" : "#ffffff"}
                    />
                    <p className="lg:text-[16px] text-[14px]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayrollCompensationDevelopment;
