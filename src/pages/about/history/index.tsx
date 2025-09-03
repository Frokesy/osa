import { useEffect, useState } from "react";
import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import { HistoryIcon, ServiceIcon } from "../../../components/svgs/Icons";
import Typewriter from "typewriter-effect";
import { historyPageQuery } from "../../../sanity/histroyPage";
import { client } from "../../../sanity/client";

interface HistoryData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: { asset: { url: string } };
  };
  historyText: string[];
  whatWeDo: {
    title: string;
    description: string;
    bullets: string[];
    image?: { asset: { url: string } };
  };
}

const History = () => {
  const [data, setData] = useState<HistoryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(historyPageQuery).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!data) return <p className="text-center py-20">No content found.</p>;

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
              className="lg:text-[48px] text-[24px] text-[#223D94] font-semibold uppercase"
            >
              {data.hero.title}
            </h2>
            <p
              data-aos="fade-up"
              className="lg:text-[14px] text-[12px] pt-2 text-[#5D5E5F]"
            >
              {data.hero.subtitle}
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="w-[30%] lg:w-auto lg:scale-100 scale-50"
          >
            <HistoryIcon />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="relative lg:min-h-[80vh] min-h-[50vh] bg-center bg-cover bg-no-repeat py-10 lg:px-10 flex justify-end"
        style={{
          backgroundImage: `url(${data.hero.backgroundImage?.asset?.url || "/assets/about-hero.png"})`,
        }}
      >
        <div className="space-y-4 bg-[#fff] lg:p-10 p-6 lg:relative absolute lg:bottom-0 mx-4 lg:mx-0 -bottom-[60vh] shadow-2xl rounded-lg lg:w-[50%]">
          <div className="flex items-center space-x-3">
            <ServiceIcon color="#223D94" size="40" />
            <h2 className="text-[16px] text-[#223D94] font-bold">
              OUR COMPANY&apos;S HISTORY
            </h2>
          </div>

          {data.historyText.map((para, i) => (
            <p key={i} className="lg:text-[16px] text-[#333333]">
              {para}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-between lg:flex-row flex-col w-[90vw] mx-auto lg:mt-20 mt-[70vh]">
        <div className="bg-[#E9ECF4] rounded-2xl flex flex-col justify-center lg:py-20 py-10 lg:px-10 px-4 lg:w-[45%]">
          <h2 className="text-[#223D94] lg:text-[36px] text-[24px] font-semibold">
            What we do?
          </h2>
          <p className="mt-1 text-[#333] lg:text-[20px]">
            {data.whatWeDo.title}
          </p>
          <p className="mt-1 text-[#333] lg:text-[20px]">
            {data.whatWeDo.description}
          </p>

          <div className="space-y-4 mt-4 text-[#333] text-[16px]">
            {data.whatWeDo.bullets.map((bullet, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-6 h-0.5 bg-[#333]"></div>
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" className="lg:w-[50%] lg:mt-0 mt-6">
          <img
            src={data.whatWeDo.image?.asset?.url || "/assets/about-six.png"}
            alt="What we do"
            className="w-[100%]"
          />
        </div>
      </div>

      <div className="bg-[url('/assets/about-seven.png')] w-[90vw] lg:mt-20 mt-10 rounded-2xl mx-auto bg-center bg-cover bg-no-repeat">
        <div className="bg-[#000]/60 flex flex-col items-center justify-center lg:py-[10vh] pt-[5vh] rounded-2xl text-center space-y-4">
          <p className="text-[#fff]">Our Approach</p>
          <h2 className="lg:text-[48px] text-[20px] font-bold text-[#fff] lg:w-[70%]">
            <Typewriter
              options={{ loop: true, cursor: "" }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("How do we help you achieve your business goals")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("How do we help you achieve your business goals")
                  .start();
              }}
            />
          </h2>
          <div className="lg:text-[18px] text-[#fff] lg:w-[70%] lg:px-0 px-4 text-[13px] lg:bg-transparent bg-[#0E1A3E] lg:mt-10 mt-4 pt-6 lg:pb-0 lg:pt-0 pb-8 rounded-b-2xl">
            <p data-aos="fade-up">
              We seek to add value to organizations by establishing a
              partnership with you. Through this we can better understand your
              business requirements and tailor a service that will add value to
              your organization. We aim to set exemplary service standards,
              integrity, quality, knowledge and performance in everything we do
              by helping clients plan for the unexpected and protect what
              matters most to them. Our partnership allows you to do what you do
              best - drive your business forward, while leaving your HR
              processes to us.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export default History;
