import { useEffect, useState } from "react";
import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import {
  ServiceIcon,
  ValueIcon,
  ValueMiniIcon,
} from "../../../components/svgs/Icons";
import { client } from "../../../sanity/client";
import { coreValuesPageQuery } from "../../../sanity/coreValues";
import Fallback from "../../../components/defaults/Fallback";

interface CoreValuesData {
  hero: {
    title: string;
    subtitle: string;
    heroContent: string;
    backgroundImage?: { asset: { url: string } };
  };
  intro: {
    title: string;
    description: string;
  };
  values: {
    title: string;
    description: string;
  }[];
}

const CoreValues = () => {
  const [data, setData] = useState<CoreValuesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(coreValuesPageQuery).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <Fallback />;
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
            <ValueIcon />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="relative lg:h-[80vh] h-[50vh] bg-center bg-cover bg-no-repeat py-10 lg:px-10 flex items-center justify-end"
        style={{
          backgroundImage: `url(${data.hero.backgroundImage?.asset?.url || "/assets/about-hero.png"})`,
        }}
      >
        <div className="space-y-4 bg-[#fff] lg:p-10 p-6 lg:relative absolute lg:bottom-0 mx-4 lg:mx-0 -bottom-[15vh] shadow-2xl rounded-lg lg:w-[50%]">
          <div className="flex items-center space-x-3">
            <ServiceIcon color="#223D94" size="40" />
            <h2 className="text-[16px] text-[#223D94] font-bold uppercase">
              Onestepahead
            </h2>
          </div>
          <h2 className="pt-3 lg:text-[48px] text-[24px] font-semibold">
            {data.hero.heroContent}
          </h2>
        </div>
      </div>

      <div className="lg:mt-20 mt-[25vh] flex lg:flex-row flex-col items-center justify-between w-[90vw] mx-auto">
        <div data-aos="fade-down" className="lg:w-[40%]">
          <ValueMiniIcon />
          <h2 className="lg:text-[36px] text-[20px] font-semibold mt-10">
            {data.intro.title}
          </h2>
          <p className="lg:text-[20px] text-[14px] pt-3 text-[#1D2939]">
            {data.intro.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-[50%] lg:gap-10 gap-6 mt-10">
          {data.values.map((value, i) => (
            <div key={i} data-aos="fade-up" className="space-y-3">
              <h2 className="text-[20px] font-semibold text-[#1D2939]">
                {value.title}
              </h2>
              <p className="text-[#1D2939] lg:text-[16px]">
                {value.description}
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
