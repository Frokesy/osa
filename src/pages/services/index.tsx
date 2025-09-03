import { useEffect, useState, type JSX } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import TopNav from "../../components/defaults/TopNav";
import {
  ServiceIcon,
  VSDIcon,
  TMOIcon,
  PCDIcon,
  PMSIcon,
  BPPMIcon,
  WhiteTick,
  ODCIcon,
} from "../../components/svgs/Icons";
import { servicePageQuery } from "../../sanity/servicePage";
import { client } from "../../sanity/client";
import Fallback from "../../components/defaults/Fallback";

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
  icon: string;
  image?: { asset: { url: string } };
  paragraphs: string[];
  items: ServiceItem[];
}

const ICONS: Record<string, JSX.Element> = {
  vsd: <VSDIcon />,
  hra: <TMOIcon />,
  rss: <TMOIcon />,
  pcd: <PCDIcon />,
  rs: <PMSIcon />,
  bppm: <BPPMIcon />,
  odc: <ODCIcon />,
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<ServicePage | null>(null);

  useEffect(() => {
    client.fetch(servicePageQuery, { slug }).then((res) => setData(res));
  }, [slug]);

  if (!data) return <Fallback />;

  return (
    <Container>
      <TopNav />

      <div className="w-[90vw] rounded-4xl lg:mt-14 mt-10 lg:mb-10 mx-auto">
        <div data-aos="fade-right" className="flex items-center space-x-3">
          <div className="h-1 rounded-full w-8 bg-[#223D94]" />
          <p className="lg:text-[20px] uppercase font-semibold text-[#223D94]">
            Services
          </p>
        </div>

        <div className="flex items-center justify-between lg:mt-0 -mt-4">
          <div className="w-[70%]">
            <h2
              data-aos="fade-up"
              className="lg:text-[48px] text-[18px] text-[#223D94] font-semibold uppercase"
            >
              {data.title}
            </h2>
            <p
              data-aos="fade-up"
              className="lg:text-[14px] text-[12px] pt-2 text-[#5D5E5F]"
            >
              {data.subText}
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="w-[30%] lg:w-auto lg:scale-100 scale-50"
          >
            {ICONS[slug || "vsd"]}
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
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
            className="pt-3 lg:text-[48px] text-[24px] font-semibold"
          >
            {data.heroContent}
          </h2>
        </div>
      </div>

      <div className="lg:mt-20 mt-[20vh] w-[90vw] mx-auto">
        {ICONS[slug || "vsd"]}
        <h2
          data-aos="fade-down"
          className="lg:text-[36px] text-[20px] font-semibold mt-10"
        >
          {data.title}
        </h2>
        {data.paragraphs?.map((p, i) => (
          <p
            key={i}
            data-aos="fade-down"
            className="lg:text-[20px] text-[14px] pt-6 text-[#1D2939]"
          >
            {p}
          </p>
        ))}
      </div>

      <div className="w-[90vw] mx-auto mt-20 text-[#fff] space-y-10">
        {data.items?.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            style={{ backgroundColor: item.bg || "#fff" }}
            className={`${
              i % 2 === 1
                ? "lg:flex-row-reverse flex-col text-[#000]"
                : "lg:flex-row flex-col"
            } flex justify-between items-center rounded-2xl ${slug !== "vsd" && "py-10"}`}
          >
            {item.image && (
              <div className="lg:w-[55%]">
                <img
                  src={item.image.asset.url}
                  alt={item.title}
                  className="lg:h-[414px] h-[241px] w-full object-cover rounded-l-2xl"
                />
              </div>
            )}
            <div className="lg:w-[40%] space-y-4 lg:pr-6 lg:pb-0 pb-10 px-6">
              <h2 className="lg:text-[36px] text-[20px] mt-6 lg:mt-0 font-semibold">
                {item.title}
              </h2>
              <p className="lg:text-[16px] text-[14px]">{item.description}</p>

              <div className="space-y-2">
                {item.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <WhiteTick
                      color={item.bg !== "#0E1A3E" ? "#000000" : "#ffffff"}
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

export default ServicePage;
