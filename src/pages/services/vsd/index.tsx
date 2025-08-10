import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import {
  ServiceIcon,
  SettingsIcon,
  VSDIcon,
  WhiteTick,
} from "../../../components/svgs/Icons";

const VocationalSkillsDevelopment = () => {
  const skillItems = [
    {
      id: 1,
      title: "Solar Technology",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/services-fourteen.png",
      bg: "#0E1A3E",
    },
    {
      id: 2,
      title: "Fashion Designing",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/services-thirteen.png",
      bg: "#ffffff",
    },
    {
      id: 3,
      title: "Auto-mechanics",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/services-four.png",
      bg: "#0E1A3E",
    },
    {
      id: 4,
      title: "Carpentry",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/carpentry.png",
      bg: "#ffffff",
    },
    {
      id: 5,
      title: "Hospitality",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/hospitality.png",
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
              Vocational Skills Development
            </h2>
            <p className="lg:text-[14px] text-[12px] pt-2 text-[#5D5E5F]">
              Empowering individuals with practical, job-ready skills to enhance
              performance and drive career growth{" "}
            </p>
          </div>
          <div className="w-[30%] lg:w-auto lg:scale-100 scale-50">
            <VSDIcon />
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/services-one.png')] relative lg:h-[80vh] h-[50vh] bg-center bg-cover bg-no-repeat py-10 lg:px-10 flex items-center justify-end">
        <div className="space-y-4 bg-[#fff] lg:p-10 p-6 lg:relative absolute lg:bottom-0 mx-4 lg:mx-0 -bottom-[15vh] shadow-2xl rounded-lg lg:w-[50%]">
          <div className="flex items-center space-x-3">
            <ServiceIcon color="#223D94" size="40" />

            <h2 className="text-[16px] text-[#223D94] font-bold uppercase">
              Onestepahead
            </h2>
          </div>

          <h2 className="pt-3 lg:text-[48px] text-[24px] font-semibold">
            "Training individuals for specific job-related competencies."{" "}
          </h2>
        </div>
      </div>

      <div className="lg:mt-20 mt-[20vh] w-[95vw] mx-auto">
        <SettingsIcon />
        <h2 className="lg:text-[36px] text-[20px] font-semibold mt-10">
          Vocational Skills Development
        </h2>
        <p className="lg:text-[20px] text-[14px] pt-6 text-[#1D2939]">
          The world of business is done a great disfavor. It is at a loss of
          great talents and ingenuity that can birth disruptive innovations when
          vocational skills development is given much-deserved attention.{" "}
        </p>
        <p className="lg:text-[20px] text-[14px] pt-6 text-[#1D2939]">
          We are passionate about changing the prevalent narrative that
          vocational skills training is only for individuals who are not
          academically gifted but rather for anyone who may not be opportune to
          be formally educated. Science has proven that academic intelligence
          only accounts for one out of the various forms of intelligence.
        </p>
        <p className="lg:text-[20px] text-[14px] pt-6 text-[#1D2939]">
          Our courses are designed to meet global benchmarks and skilled
          manpower needs. Our faculties are dedicated to equipping young and
          vibrant youths with the much-needed vocational skills to thrive in
          developed and developing economies such as ours.
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
                className={` lg:h-[414px] h-[241px] w-[100%] rounded-l-2xl`}
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

      <Footer />
    </Container>
  );
};

export default VocationalSkillsDevelopment;
