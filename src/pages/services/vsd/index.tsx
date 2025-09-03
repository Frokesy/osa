import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import {
  ServiceIcon,
  SettingsIcon,
  VSDIcon,
  WhiteTick,
} from "../../../components/svgs/Icons";
import { client } from "../../../sanity/client";
import { servicePageQuery } from "../../../sanity/servicePage";

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  bg?: string;
  image?: { asset: { url: string } };
}

interface ServicePage {
  title: string;
  subText: string;
  heroContent: string;
  image?: { asset: { url: string } };
  paragraphs: string[];
  items: ServiceItem[];
}

const VocationalSkillsDevelopment = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<ServicePage | null>(null);

  useEffect(() => {
    client.fetch(servicePageQuery, { slug: slug || "vsd" }).then((res) => {
      setData(res);
    });
  }, [slug]);

  if (!data) return <p className="p-10">Loading...</p>;

  return (
    <Container>
      <TopNav />
      <div className="w-[90vw] rounded-4xl lg:mt-14 mt-10 lg:mb-10 mx-auto">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex items-center space-x-3"
        >
          <div className="h-1 rounded-full w-8 bg-[#223D94]" />
          <p className="lg:text-[20px] uppercase font-semibold text-[#223D94]">
            Services
          </p>
        </div>

        <div className="flex items-center justify-between lg:-mt-6 -mt-4">
          <div className="w-[70%]">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:text-[48px] text-[18px] text-[#223D94] font-semibold uppercase"
            >
              {data.title}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="lg:text-[14px] text-[12px] pt-2 text-[#5D5E5F]"
            >
              {data.subText}
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-[30%] lg:w-auto lg:scale-100 scale-50"
          >
            <VSDIcon />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="bg-center bg-cover bg-no-repeat relative lg:h-[80vh] h-[50vh] py-10 lg:px-10 flex items-center justify-end"
        style={{
          backgroundImage: `url(${data.image?.asset.url || "/assets/services-one.png"})`,
        }}
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
            data-aos-duration="2500"
            className="pt-3 lg:text-[48px] text-[24px] font-semibold"
          >
            {data.heroContent}
          </h2>
        </div>
      </div>

      <div className="lg:mt-20 mt-[20vh] w-[95vw] mx-auto">
        <SettingsIcon />
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="lg:text-[36px] text-[20px] font-semibold mt-10"
        >
          {data.title}
        </h2>
        {data.paragraphs?.map((p, i) => (
          <p
            key={i}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:text-[20px] text-[14px] pt-6 text-[#1D2939]"
          >
            {p}
          </p>
        ))}
      </div>

      <div className="w-[90vw] mx-auto mt-20 text-[#fff] space-y-10">
        {data.items?.map((item, i) => {
          const reversed = i % 2 === 1;
          const bg = item.bg || "#ffffff";
          const isLight = bg.toLowerCase() === "#ffffff";

          return (
            <div
              key={i}
              style={{ backgroundColor: bg }}
              data-aos="fade-up"
              data-aos-duration="800"
              className={`${
                reversed
                  ? "lg:flex-row-reverse flex-col text-[#000]"
                  : "lg:flex-row flex-col"
              } flex justify-between items-center rounded-2xl`}
            >
              <div className="lg:w-[55%]">
                {item.image && (
                  <img
                    src={item.image.asset.url}
                    alt={item.title}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className={`lg:h-[414px] h-[241px] w-full object-cover ${
                      reversed ? "rounded-r-2xl" : "rounded-l-2xl"
                    }`}
                  />
                )}
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className={`${reversed ? "px-3" : "px-6 lg:px-0"} lg:w-[40%] space-y-4 lg:pr-6 lg:pb-0 pb-10`}
              >
                <h2 className="lg:text-[36px] text-[20px] mt-6 lg:mt-0 font-semibold">
                  {item.title}
                </h2>
                <p className="lg:text-[16px] text-[14px]">{item.description}</p>

                <div className="space-y-2">
                  {item.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <WhiteTick color={isLight ? "#000000" : "#ffffff"} />
                      <p className="lg:text-[16px] text-[14px]">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </Container>
  );
};

export default VocationalSkillsDevelopment;
