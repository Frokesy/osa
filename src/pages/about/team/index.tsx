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
      <div className="bg-[url('/assets/team-hero.png')] lg:min-h-screen h-[80vh] bg-center bg-cover bg-no-repeat">
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
                  Our team
                </h2>
                <p className="text-[14px] pt-2">
                  Meet our dedicated team of HR professionals driven by passion,
                  expertise, and a shared commitment to helping your business
                  thrive.
                </p>
              </div>
              <TeamIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-20 mt-10 grid lg:grid-cols-2 w-[95vw] lg:gap-20 gap-10 mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            style={{ backgroundColor: member.bgColor }}
            className={`${
              member.id % 2 === 0
                ? "flex-row-reverse lg:pl-10 pl-3 pr-10 lg:pr-20 rounded-l-full"
                : "flex-row lg:pl-20 pl-6 pr-3 lg:pr-10 rounded-r-full"
            } py-4 flex justify-between items-center`}
          >
            <div
              className={`${
                member.bgColor === "#F6F7F7" ? "text-[#000]" : "text-[#fff]"
              } flex flex-col space-y-4`}
            >
              <div className="flex justify-between items-center lg:space-x-[2vw] w-[100%]">
                <h2 className="lg:text-[24px] text-[16px] font-semibold">{member.name}</h2>
                <div className="lg:block hidden">
                    <DiagArrow
                  color={member.bgColor === "#F6F7F7" ? "#000000" : "#ffffff"}
                />
                </div>
              </div>
              <p className="lg:text-[16px] text-[14px]">{member.role}</p>
              <div className="flex items-center space-x-3">
                <Twitter
                  color={member.bgColor === "#F6F7F7" ? "#000000" : "#ffffff"}
                />
                <LinkedIn
                  color={member.bgColor === "#F6F7F7" ? "#000000" : "#ffffff"}
                />
                <Website
                  color={member.bgColor === "#F6F7F7" ? "#000000" : "#ffffff"}
                />
              </div>
            </div>

            <div className="lg:w-[240px] lg:h-[240px] w-[100px] h-[100px]">
              <img
                src={member.image}
                alt={member.name}
                className="w-[100%] h-[100%] rounded-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </Container>
  );
};

export default Team;
