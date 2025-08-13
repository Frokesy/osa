import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import { DiagArrow, TeamIcon } from "../../../components/svgs/Icons";
import { LinkedIn, Twitter, Website } from "../../../components/svgs/Logos";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "David Eze",
      role: "Product Manager",
      image: "/assets/eze.png",
      bgColor: "#1F3887",
    },
    {
      id: 2,
      name: "Rich Wilson",
      role: "Product Manager",
      image: "/assets/wilson.png",
      bgColor: "#F6F7F7",
    },
    {
      id: 3,
      name: "Rebecca Tuma",
      role: "Product Manager",
      image: "/assets/tuma.png",
      bgColor: "#F6F7F7",
    },
    {
      id: 4,
      name: "Adebisi Iwalewa",
      role: "Product Manager",
      image: "/assets/adebisi.png",
      bgColor: "#D81921",
    },
    {
      id: 5,
      name: "Adebayo Abiodun",
      role: "Product Manager",
      image: "/assets/abiodun.png",
      bgColor: "#1F3887",
    },
    {
      id: 6,
      name: "Elizabeth Ogunleye",
      role: "Product Manager",
      image: "/assets/lizzy.png",
      bgColor: "#F6F7F7",
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
              Our Team
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:text-[14px] text-[12px] pt-2 text-[#5D5E5F]"
            >
              Meet our dedicated team of HR professionals driven by passion,
              expertise, and a shared commitment to helping your business
              thrive.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-[30%] lg:w-auto lg:scale-100 scale-50"
          >
            <TeamIcon />
          </div>
        </div>
      </div>

      <div className="lg:mt-20 mt-10 grid lg:grid-cols-3 grid-cols-1 w-[90vw] lg:gap-20 gap-6 mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative lg:h-[480px] lg:w-[390px] w-[90vw] h-[360px] bg-center rounded-xl bg-cover overflow-hidden"
            style={{
              backgroundImage: `url(${member.image})`,
            }}
          >
            <div
              data-aos="fade-up"
              className="absolute bottom-0 flex flex-col items-end pb-4 mb-6 left-2 lg:left-3 w-[95%] bg-white text-[#333] rounded-xl lg:text-[20px] p-3"
            >
              <div className="flex justify-between items-center w-full">
                <h2 className="lg:text-[24px] text-[20px] font-semibold">
                  {member.name}
                </h2>
                <DiagArrow color="#223D94" />
              </div>
              <div className="flex justify-between items-center w-full mt-4">
                <p className="lg:text-[16px] text-[14px]">{member.role}</p>
                <div className="flex items-center space-x-3">
                  <LinkedIn color="#223D94" />
                  <Twitter color="#223D94" />
                  <Website color="#223D94" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </Container>
  );
};

export default Team;
