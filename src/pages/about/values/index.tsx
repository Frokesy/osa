import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import {
  ServiceIcon,
  ValueIcon,
  ValueMiniIcon,
} from "../../../components/svgs/Icons";

const CoreValues = () => {
  const items = [
    {
      id: 1,
      title: "Trust",
      description:
        "We build trust through honesty, transparency, and consistency in all we do. Our clients know we deliver on our promises. Trust is the foundation of every lasting partnership we create.",
    },
    {
      id: 2,
      title: "Integrity",
      description:
        "We uphold strong moral and ethical principles, even when no one is watching. Integrity guides our decisions and interactions. It's about doing the right thing—always.",
    },
    {
      id: 3,
      title: "Excellence",
      description:
        "We strive to exceed expectations in every project, big or small. Quality is never compromised. We’re committed to continuous improvement and delivering value that lasts.",
    },
    {
      id: 4,
      title: "Dependability",
      description:
        "Our clients can rely on us to be present, proactive, and solution-driven. We take responsibility and follow through every time. Being dependable is at the heart of our service promise.",
    },
    {
      id: 5,
      title: "Speed",
      description:
        "We respond quickly and work efficiently without sacrificing quality. In today’s fast-paced world, speed matters. We make sure you get timely results that move your business forward.",
    },
  ];
  return (
    <Container>
      <TopNav />
      <div className="w-[90vw] rounded-4xl lg:mt-14 mt-10 lg:mb-10 mx-auto">
        <div data-aos="fade-right" className="flex items-center space-x-3">
          <div className="h-1 rounded-full w-8 bg-[#223D94]"></div>
          <p className="lg:text-[20px] uppercase font-semibold text-[#223D94]">
            About Us
          </p>
        </div>

        <div className="flex items-center justify-between lg:-mt-6 -mt-4">
          <div className="w-[70%]">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:text-[48px] text-[24px] text-[#223D94] font-semibold uppercase"
            >
              Core Values
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="lg:text-[14px] text-[12px] pt-2 text-[#5D5E5F]"
            >
              We are guided and grounded by the following values.{" "}
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-[30%] lg:w-auto lg:scale-100 scale-50"
          >
            <ValueIcon />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-[url('/assets/about-hero.png')] relative lg:h-[80vh] h-[50vh] bg-center bg-cover bg-no-repeat py-10 lg:px-10 flex items-center justify-end"
      >
        <div className="space-y-4 bg-[#fff] lg:p-10 p-6 lg:relative absolute lg:bottom-0 mx-4 lg:mx-0 -bottom-[15vh] shadow-2xl rounded-lg lg:w-[50%]">
          <div className="flex items-center space-x-3">
            <ServiceIcon color="#223D94" size="40" />

            <h2 className="text-[16px] text-[#223D94] font-bold uppercase">
              Onestepahead
            </h2>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="pt-3 lg:text-[48px] text-[24px] font-semibold"
          >
            "Driven by Values. Focused on People. Committed to Results."{" "}
          </h2>
        </div>
      </div>
      <div className="lg:mt-20 mt-[25vh] flex lg:flex-row flex-col items-center justify-between w-[90vw] mx-auto">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="lg:w-[40%]"
        >
          <ValueMiniIcon />
          <h2 className="lg:text-[36px] text-[20px] font-semibold mt-10">
            Our core values
          </h2>
          <p className="lg:text-[20px] text-[14px] pt-3 text-[#1D2939]">
            At 1StepAhead Consult, our values shape every interaction, decision,
            and solution we provide. These principles are the foundation of the
            trust we build with our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-[50%] lg:gap-10 gap-6 mt-10">
          {items.map((item) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={item.id}
              className="space-y-3"
            >
              <h2 className="text-[20px] font-semibold text-[#1D2939]">
                {item.title}
              </h2>
              <p className="text-[#1D2939] lg:text-[16px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export default CoreValues;
