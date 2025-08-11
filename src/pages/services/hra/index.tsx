import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import {
  ServiceIcon,
  SettingsIcon,
  TMOIcon,
  WhiteTick,
} from "../../../components/svgs/Icons";

const HrAdvisory = () => {
  const skillItems = [
    {
      id: 1,
      title: "Agree on Outstanding scope",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: ["Employee Services", "Compensation, Medicals", "Tax"],
      bg: "#0E1A3E",
    },
    {
      id: 2,
      title: "Launch HR and Payroll administration",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      bg: "#ffffff",
    },
    {
      id: 3,
      title: "Provide HR technical advice and outsourcing reports",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
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

        <div className="flex items-center justify-between lg:-mt-6 -mt-4">
          <div className="w-[70%]">
            <h2 className="lg:text-[48px] text-[18px] text-[#223D94] font-semibold uppercase">
              HR Advisory
            </h2>
            <p className="lg:text-[14px] text-[12px] pt-2 text-[#5D5E5F]">
              Expert guidance on HR strategies, policies, and best practices to
              align people with business goals.
            </p>
          </div>
          <div className="w-[30%] lg:w-auto lg:scale-100 scale-50">
            <TMOIcon />
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/services-seven.png')] relative lg:h-[80vh] h-[50vh] bg-center bg-cover bg-no-repeat py-10 lg:px-10 flex items-center justify-end">
        <div className="space-y-4 bg-[#fff] lg:p-10 p-6 lg:relative absolute lg:bottom-0 mx-4 lg:mx-0 -bottom-[15vh] shadow-2xl rounded-lg lg:w-[50%]">
          <div className="flex items-center space-x-3">
            <ServiceIcon color="#223D94" size="40" />

            <h2 className="text-[16px] text-[#223D94] font-bold uppercase">
              Onestepahead
            </h2>
          </div>

          <h2 className="pt-3 lg:text-[48px] text-[24px] font-semibold">
            "Expert HR Guidance That Moves Your Business Forward"{" "}
          </h2>
        </div>
      </div>

      <div className="lg:mt-20 mt-[20vh] w-[90vw] mx-auto">
        <SettingsIcon />
        <h2 className="lg:text-[36px] text-[20px] font-semibold mt-10">
          HR Advisory
        </h2>
        <p className="lg:text-[20px] text-[14px] pt-6 text-[#1D2939]">
          At 1StepAhead Consulting, our HR Advisory service offers strategic
          support to help organizations align their people strategy with
          business objectives. We work closely with your leadership team to
          identify challenges, optimize HR processes, and implement best
          practices that drive growth and compliance.
        </p>
      </div>

      <div className="w-[95vw] mx-auto mt-20 text-[#fff] space-y-10">
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

export default HrAdvisory;
