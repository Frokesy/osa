import { useEffect, useState } from "react";
import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import { DiagArrow, TeamIcon } from "../../../components/svgs/Icons";
import { LinkedIn, Twitter, Website } from "../../../components/svgs/Logos";
import { teamPageQuery } from "../../../sanity/team";
import { client } from "../../../sanity/client";
import Fallback from "../../../components/defaults/Fallback";

interface TeamMember {
  name: string;
  role: string;
  bgColor?: string;
  image?: { asset: { url: string } };
}

interface TeamPageData {
  members: TeamMember[];
}

const Team = () => {
  const [data, setData] = useState<TeamPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(teamPageQuery).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <Fallback />;
  if (!data) return <p className="text-center py-20">No team found.</p>;

  return (
    <Container>
      <TopNav />
      {/* Header */}
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
              className="lg:text-[48px] text-[24px] text-[#223D94] font-semibold uppercase"
            >
              Our Team
            </h2>
            <p
              data-aos="fade-up"
              className="lg:text-[14px] text-[12px] pt-2 text-[#5D5E5F]"
            >
              Meet our dedicated team of HR professionals driven by passion,
              expertise, and a shared commitment to helping your business
              thrive.
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="w-[30%] lg:w-auto lg:scale-100 scale-50"
          >
            <TeamIcon />
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="lg:mt-20 mt-10 grid lg:grid-cols-3 grid-cols-1 w-[90vw] lg:gap-20 gap-6 mx-auto">
        {data.members.map((member, i) => (
          <div
            key={i}
            className="relative lg:h-[480px] lg:w-[390px] w-[90vw] h-[360px] bg-center rounded-xl bg-cover overflow-hidden"
            style={{
              backgroundImage: `url(${member.image?.asset?.url || "/assets/default-team.png"})`,
              backgroundColor: member.bgColor || "#F6F7F7",
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
