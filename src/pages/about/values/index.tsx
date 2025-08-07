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
      <div className="bg-[url('/assets/about-hero.png')] lg:min-h-screen h-[80vh] bg-center bg-cover bg-no-repeat">
        <div className="bg-[#000000]/50 lg:min-h-screen h-[80vh] lg:pt-10">
          <TopNav />

          <div className="bg-[#808080]/40 backdrop-blur-xs w-[95vw] lg:p-10 p-6 rounded-4xl mt-[20vh] lg:mt-[25vh] text-[#fff] mx-auto">
            <div className="flex items-center space-x-3">
              <div className="h-0.5 rounded-full w-6 bg-[#ED1C24]"></div>
              <p className="text-[12px] uppercase">About Us</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="">
                <h2 className="lg:text-[48px] text-[20px] font-semibold uppercase">
                  Core Values
                </h2>
                <p className="text-[14px] pt-2">
                  We are guided and grounded by the following values.
                </p>
              </div>
              <ValueIcon />
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
          "Driven by Values. Focused on People. Committed to Results."{" "}
        </h2>
      </div>

      <div className="lg:mt-20 mt-10 w-[95vw] mx-auto">
        <ValueMiniIcon />
        <h2 className="lg:text-[36px] text-[20px] font-semibold mt-10">
          Our core values
        </h2>
        <p className="lg:text-[20px] text-[14px] pt-3 text-[#1D2939]">
          At 1StepAhead Consult, our values shape every interaction, decision,
          and solution we provide. These principles are the foundation of the
          trust we build with our clients.
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-6 mt-10">
          {items.map((item) => (
            <div key={item.id} className="space-y-3">
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
