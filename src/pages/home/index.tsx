/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import About from "../../components/sections/home/About";
import Application from "../../components/sections/home/Application";
import Gallery from "../../components/sections/home/Gallery";
import Hero from "../../components/sections/home/Hero";
import Impact from "../../components/sections/home/Impact";
import NewsHighlights from "../../components/sections/home/NewsHighlights";
import NewsLetter from "../../components/sections/home/NewsLetter";
import Programs from "../../components/sections/home/Programs";
import Services from "../../components/sections/home/Services";
import Testimonials from "../../components/sections/home/Testimonials";
import TrustedClients from "../../components/sections/home/TrustedClients";
import { client } from "../../sanity/client";
import Fallback from "../../components/defaults/Fallback";

const query = `*[_type == "homepage"][0]{
  hero {
    "heroImg": heroImage.asset->url,
    subtext
  },
  about {
    title,
    description,
    "images": images[].asset->url
  },
  services[] {
    title,
    desc,
    "img": img.asset->url
  },
  programs[] {
    title,
    icon,
    subtext
  },
  applications[] {
    id,
    title,
    icon,
    description,
    location,
    type,
    salary,
    postedDate
  },
  "gallery": gallery[].asset->url,
  impact[] {
    id,
    title,
    desc,
    value,
    suffix
  },
  testimonials[] {
    text,
    name,
    role,
    "img": img.asset->url
  }
}`;

const Home = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    client.fetch(query).then(setData);
  }, []);

  if (!data) return <Fallback />;
  return (
    <Container>
      <Hero heroImg={data.hero.heroImg} subtext={data.hero.subtext} />
      <About
        title={data.about.title}
        description={data.about.description}
        images={data.about.images}
      />
      <Services items={data.services} />
      <Programs items={data.programs} />
      <Application roles={data.applications} />
      <Gallery images={data.gallery} />
      <Impact impact={data.impact} />
      <Testimonials testimonials={data.testimonials} />
      <TrustedClients />
      <NewsHighlights />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Home;
