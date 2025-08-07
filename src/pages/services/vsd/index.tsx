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
      title: "Electrical and electronics repair",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/services-two.png",
      bg: "#0E1A3E",
    },
    {
      id: 2,
      title: "Painting and Tilling",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/services-three.png",
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
      image: "/assets/services-five.png",
      bg: "#ffffff",
    },
    {
      id: 5,
      title: "Plumbing",
      description:
        "Our online course are unique and targeted to specific audiences. 1Stepahead being one Step ahead is a great way to learners in the driving sit.",
      features: [
        "Professional tutors to attend to your needs",
        "Flexible billing and workflows",
      ],
      image: "/assets/services-six.png",
      bg: "#0E1A3E",
    },
  ];
  return (
    <div className="">
      <div className="bg-[url('/assets/services-one.png')] lg:min-h-screen h-[80vh] bg-center bg-cover bg-no-repeat">
        <div className="bg-[#000000]/50 lg:min-h-screen h-[80vh] lg:pt-10">
          <TopNav />

          <div className="bg-[#808080]/40 backdrop-blur-xs w-[95vw] lg:p-10 p-6 rounded-4xl mt-[20vh] lg:mt-[25vh] text-[#fff] mx-auto">
            <div className="flex items-center space-x-3">
              <div className="h-0.5 rounded-full w-6 bg-[#ED1C24]"></div>
              <p className="text-[12px] uppercase">Services</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="">
                <h2 className="lg:text-[48px] text-[20px] font-semibold uppercase">
                  VOCATIONAL SKILLS DEVELOPMENT
                </h2>
                <p className="text-[14px] pt-2">
                  Empowering individuals with practical, job-ready skills to
                  enhance performance and drive career growth
                </p>
              </div>
              <VSDIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1F3887] w-[100%] mt-6 text-[#fff] py-14 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="lg:block hidden"><ServiceIcon /></div>
          <h2 className="lg:text-[36px] uppercase font-semibold">
            Onestep<span className="text-[#ED1C24]">ahead</span>
          </h2>
        </div>

        <h2 className="pt-3 lg:text-[48px] text-[24px] lg:w-[60%] text-center font-semibold">
          "Training individuals for specific job-related competencies."
        </h2>
      </div>

      <div className="lg:mt-20 mt-10 w-[95vw] mx-auto">
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
              item.id%2 === 0 ? "lg:flex-row-reverse flex-col text-[#000]" : "lg:flex-row flex-col"
            } flex justify-between items-center rounded-2xl lg:flex-row flex-col`}
          >
            <div className="lg:w-[55%]">
              <img
                src={item.image}
                alt={item.title}
                className={`${item.id%2 === 0 ? 'lg:rounded-l-full lg:rounded-bl-full lg:rounded-b-none rounded-b-full' : 'lg:rounded-r-full lg:rounded-br-full lg:rounded-b-none rounded-b-full'} lg:h-[414px] h-[241px] w-[100%]`}
              />
            </div>

            <div className={`${
              item.id%2 === 0 ? 'px-3' : 'px-6 lg:px-0' } lg:w-[40%] space-y-4 lg:pr-6 lg:pb-0 pb-10`}>
              <h2 className="lg:text-[36px] text-[20px] mt-6 lg:mt-0 font-semibold">{item.title}</h2>
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
    </div>
  );
};

export default VocationalSkillsDevelopment;
