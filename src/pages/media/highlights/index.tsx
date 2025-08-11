import { ArrowLeft, ArrowRight } from "lucide-react";
import TopNav from "../../../components/defaults/TopNav";
import {
  DiagArrow,
  SearchIcon,
  SendIcon,
  ServiceIcon,
} from "../../../components/svgs/Icons";
import Footer from "../../../components/defaults/Footer";
import Container from "../../../components/defaults/Container";
import React from "react";
import { NavLink } from "react-router-dom";

const NewsHighlights = () => {
  const newsItems = [
    {
      id: 1,
      title: "Four steps to consider before you start",
      date: "20 Jan 2025",
      author: "1Stepahead Admin",
      category: "Design",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      image: "/assets/nh-two.png",
      tags: ["label/tag", "label/tag", "label/tag"],
    },
    {
      id: 2,
      title: "Eight tips for building a bankable business",
      date: "20 Jan 2025",
      author: "1Stepahead Admin",
      category: "Design",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      image: "/assets/nh-three.png",
      tags: ["label/tag", "label/tag", "label/tag"],
    },
    {
      id: 3,
      title: "A digital prescription for the pharma industry",
      date: "20 Jan 2025",
      author: "1Stepahead Admin",
      category: "Design",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/assets/nh-four.png",
      tags: ["label/tag", "label/tag", "label/tag"],
    },
    {
      id: 4,
      title: "Four steps to consider before you start",
      date: "20 Jan 2025",
      author: "1Stepahead Admin",
      category: "Design",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      image: "/assets/about-two.png",
      tags: ["label/tag", "label/tag", "label/tag"],
    },
    {
      id: 5,
      title: "Four steps to consider before you start",
      date: "20 Jan 2025",
      author: "1Stepahead Admin",
      category: "Design",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      image: "/assets/about-three.png",
      tags: ["label/tag", "label/tag", "label/tag"],
    },
    {
      id: 6,
      title: "Four steps to consider before you start",
      date: "20 Jan 2025",
      author: "1Stepahead Admin",
      category: "Design",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      image: "/assets/about-four.png",
      tags: ["label/tag", "label/tag", "label/tag"],
    },
  ];
  return (
    <Container>
      <div className="bg-[url('/assets/nh-hero.png')] lg:min-h-screen h-[80vh] bg-center bg-cover bg-no-repeat">
        <div className="bg-[#000000]/50 lg:min-h-screen h-[80vh]">
          <TopNav />

          <div className="flex-1 flex lg:mt-[25vh] mt-[20vh] items-center justify-center">
            <div className="bg-[#fff] w-[95vw] lg:p-10 p-6 rounded-4xl mx-auto">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center space-x-3">
                  <ServiceIcon size="36" color="#1F3887" />
                  <h2 className="text-[#1F3887] uppercase font-bold lg:text-[20px]">
                    Onestep<span className="text-[#ED1C24]">ahead</span>
                  </h2>
                </div>
                <div>
                  <h2 className="lg:text-[48px] text-[20px] text-[#223D94] font-semibold uppercase">
                    News highlight
                  </h2>
                  <p className="text-[14px] pt-2 text-[#333]">
                    The latest industry news, interviews, technologies, and
                    resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-[90vw] mx-auto mt-10">
        <div className="flex items-center space-x-3 border border-[#ccc] p-3 rounded-lg w-[30%]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none"
          />
        </div>

        <div className="border border-[#ccc] p-3 rounded-lg w-[30%]">
          <select className="w-full outline-none">
            <option value="">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="popular">Most popular</option>
            <option value="featured">Featured</option>
            <option value="trending">Trending</option>
            <option value="latest">Latest</option>
            <option value="most-viewed">Most viewed</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-[90vw] mx-auto mt-20">
        {newsItems.map((item, index) => {
          if (index === 3) {
            return (
              <React.Fragment key="newsletter">
                <div className="min-w-[300px] relative bg-[#E9ECF4] lg:h-full lg:max-h-full h-[480px] max-h-[500px] lg:p-6 p-4 rounded-2xl flex flex-col justify-center">
                  <div className="absolute top-6 left-6">
                    <SendIcon />
                  </div>
                  <h3 className="text-[24px] text-[#0E1A3E] font-bold mb-2">
                    Weekly newsletter
                  </h3>
                  <p className="text-[16px] text-[#182B69] mb-4">
                    No spam. Just the latest releases and tips, interesting
                    articles, and exclusive interviews in your inbox every week.
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg bg-[#fff] p-3 text-black mb-3 outline-none"
                  />
                  <p className="text-[#1F3887] py-3">
                    Read about our privacy policy
                  </p>
                  <button className="bg-[#ED1C24] text-[#fff] px-4 py-2 rounded-lg font-semibold">
                    Subscribe
                  </button>
                </div>

                <div
                  key={item.id}
                  className="min-w-[300px] bg-[#E9ECF4] lg:p-6 p-3 rounded-2xl md:min-w-0"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[280px] object-cover rounded-2xl"
                    />
                    <div className="absolute bottom-0 flex justify-between bg-[#ccc]/30 backdrop-blur-xs text-[#fff] lg:p-6 p-3 w-[100%]">
                      <div>
                        <p className="text-[16px] font-bold">{item.author}</p>
                        <h3 className="text-[14px]">{item.date}</h3>
                      </div>
                      <span className="text-[14px] font-bold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="lg:text-[20px] text-[18px] font-bold mt-4">
                    {item.title}
                  </h3>
                  <p className="text-[#475467] lg:text-[16px] text-[14px] mt-2">
                    {item.description}
                  </p>
                  <NavLink
                    to={`/blog/${item.id}`}
                    className="mt-4 mb-6 text-[#182B69] flex items-center space-x-3 font-semibold"
                  >
                    <span>Read post</span>
                    <DiagArrow />
                  </NavLink>
                </div>
              </React.Fragment>
            );
          }

          return (
            <div
              key={item.id}
              className="min-w-[300px] bg-[#E9ECF4] lg:p-6 p-3 rounded-2xl md:min-w-0"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[280px] object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 flex justify-between bg-[#ccc]/30 backdrop-blur-xs text-[#fff] lg:p-6 p-3 w-[100%]">
                  <div>
                    <p className="text-[16px] font-bold">{item.author}</p>
                    <h3 className="text-[14px]">{item.date}</h3>
                  </div>
                  <span className="text-[14px] font-bold">{item.category}</span>
                </div>
              </div>
              <h3 className="lg:text-[20px] text-[18px] font-bold mt-4">
                {item.title}
              </h3>
              <p className="text-[#475467] lg:text-[16px] text-[14px] mt-2">
                {item.description}
              </p>
              <NavLink
                to={`/blog/${item.id}`}
                className="mt-4 mb-6 text-[#182B69] flex items-center space-x-3 font-semibold"
              >
                <span>Read post</span>
                <DiagArrow />
              </NavLink>
            </div>
          );
        })}
      </div>

      <div className="lg:flex hidden justify-between items-center mt-20 w-[90vw] mx-auto">
        <button className="bg-[#E9ECF4] flex items-center font-semibold space-x-3 py-3 px-6 text-[#182B69] rounded-lg">
          <ArrowLeft size={18} />
          <span>Previous</span>
        </button>
        <div className="flex items-center space-x-6">
          <button className="bg-[#E9ECF4] py-2 px-3 text-[#182B69] rounded-lg">
            1
          </button>
          <button className=" text-[#182B69] rounded-lg">2</button>
          <button className=" text-[#182B69] rounded-lg">3</button>
          <button className=" text-[#182B69] rounded-lg">....</button>
          <button className=" text-[#182B69] rounded-lg">8</button>
          <button className=" text-[#182B69] rounded-lg">9</button>
          <button className=" text-[#182B69] rounded-lg">10</button>
        </div>
        <button className="bg-[#E9ECF4] flex items-center font-semibold space-x-3 py-3 px-6 text-[#182B69] rounded-lg">
          <span>Next</span>
          <ArrowRight size={18} />
        </button>
      </div>

      <Footer />
    </Container>
  );
};

export default NewsHighlights;
