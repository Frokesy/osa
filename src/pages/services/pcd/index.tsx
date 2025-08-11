import { SettingsIcon } from "lucide-react";
import TopNav from "../../../components/defaults/TopNav";
import {
  PCDIcon,
  ServiceIcon,
  WhiteTick,
} from "../../../components/svgs/Icons";
import Footer from "../../../components/defaults/Footer";
import Container from "../../../components/defaults/Container";

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
    <Container>
      <TopNav />
      <div className="w-[90vw] rounded-4xl lg:mt-14 mt-10 lg:mb-10 mx-auto">
        <div className="flex items-center space-x-3">
          <div className="h-1 rounded-full w-8 bg-[#223D94]"></div>
          <p className="lg:text-[20px] uppercase font-semibold text-[#223D94]">
            Services
          </p>
        </div>

        <div className="flex items-center justify-between lg:mt-0 ">
          <div className="w-[70%]">
            <h2 className="lg:text-[48px] text-[18px] text-[#223D94] font-semibold uppercase">
              Payroll Compensation Development
            </h2>
            <p className="lg:text-[14px] text-[12px] pt-2 text-[#5D5E5F]">
              Empowering individuals with practical, job-ready skills to enhance
              performance and drive career growth
            </p>
          </div>
          <div className="w-[30%] lg:w-auto lg:scale-100 scale-50">
            <PCDIcon />
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/services-nine.png')] relative lg:h-[80vh] h-[50vh] bg-center bg-cover bg-no-repeat py-10 lg:px-10 flex items-center justify-end">
        <div className="space-y-4 bg-[#fff] lg:p-10 p-6 lg:relative absolute lg:bottom-0 mx-4 lg:mx-0 -bottom-[15vh] shadow-2xl rounded-lg lg:w-[50%]">
          <div className="flex items-center space-x-3">
            <ServiceIcon color="#223D94" size="40" />

            <h2 className="text-[16px] text-[#223D94] font-bold uppercase">
              Onestepahead
            </h2>
          </div>

          <h2 className="pt-3 lg:text-[48px] text-[24px] font-semibold">
            "Designing fair, compliant, and efficient employee pay structures."{" "}
          </h2>
        </div>
      </div>

      <div className="lg:mt-20 mt-[23vh] w-[90vw] mx-auto">
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

      <div className="w-[90vw] mx-auto mt-20 text-[#fff] space-y-10">
        {skillItems.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.bg }}
            className={`${
              item.id % 2 === 0
                ? "lg:flex-row flex-col text-[#000]"
                : "lg:flex-row flex-col lg:p-10"
            } flex justify-between items-center rounded-2xl lg:flex-row flex-col`}
          >
            <div
              className={`${
                item.id % 2 === 0 ? "px-3" : "px-6 lg:px-0"
              } lg:w-[70%] space-y-4 lg:pr-6 lg:pb-0 pb-10`}
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

      <Footer />
    </Container>
  );
};

export default PayrollCompensationDevelopment;
