import { ArrowLeft, ArrowRight } from "lucide-react";
import TopNav from "../../../components/defaults/TopNav";
import { DiagArrow, ServiceIcon } from "../../../components/svgs/Icons";
import Footer from "../../../components/defaults/Footer";
import Container from "../../../components/defaults/Container";

const NewsHighlights = () => {
  const newsItems = [
    {
      id: 1,
      title: "Four steps to consider before you start",
      date: "20 Jan 2025",
      author: "1Stepahead Admin",
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
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      image: "/assets/about-img-two.png",
      tags: ["label/tag", "label/tag", "label/tag"],
    },
    {
      id: 5,
      title: "Four steps to consider before you start",
      date: "20 Jan 2025",
      author: "1Stepahead Admin",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      image: "/assets/about-img-three.png",
      tags: ["label/tag", "label/tag", "label/tag"],
    },
    {
      id: 6,
      title: "Four steps to consider before you start",
      date: "20 Jan 2025",
      author: "1Stepahead Admin",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      image: "/assets/about-img-four.png",
      tags: ["label/tag", "label/tag", "label/tag"],
    },
  ];
  return (
    <Container>
      <div className="bg-[url('/assets/nh-hero.png')] lg:min-h-screen h-[80vh] bg-center bg-cover bg-no-repeat">
        <div className="bg-[#000000]/50 lg:min-h-screen h-[80vh] lg:pt-10">
          <TopNav />

          <div className="flex-1 flex lg:mt-[25vh] mt-[20vh] items-center justify-center">
            <div className="bg-[#808080]/40 backdrop-blur-2xl w-[95vw] lg:p-10 p-6 rounded-4xl text-[#fff] mx-auto">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center space-x-3">
                  <ServiceIcon size="36" color="#1F3887" />
                  <h2 className="text-[#1F3887] uppercase font-bold lg:text-[20px]">
                    Onestep<span className="text-[#ED1C24]">ahead</span>
                  </h2>
                </div>
                <div>
                  <h2 className="lg:text-[48px] text-[20px] font-semibold uppercase">
                    News highlight
                  </h2>
                  <p className="text-[14px] pt-2">
                    The latest industry news, interviews, technologies, and
                    resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 w-[90vw] mx-auto">
        <div className="w-[100%] space-y-6">
          <img
            src="/assets/nh-one.png"
            alt="career-img"
            className="w-[100%] lg:h-[410px] rounded-3xl h-[200px]"
          />

          <div className="space-y-3">
            <p className="text-[14px] text-[#182B69] font-semibold">
              1Stepahead Admin • 20 Jan 2025
            </p>
            <div className="flex justify-between">
              <h2 className="lg:text-[30px] text-[20px] font-semibold text-[#101828]">
                UX review presentations
              </h2>
              <DiagArrow />
            </div>
            <p className="text-[#667085]">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button className="bg-[#E9ECF4] text-[#182B69] text-[14px] py-2 px-4 rounded-lg">
              label/tag
            </button>
            <button className="bg-[#E9ECF4] text-[#182B69] text-[14px] py-2 px-4 rounded-lg">
              label/tag
            </button>
            <button className="bg-[#E9ECF4] text-[#182B69] text-[14px] py-2 px-4 rounded-lg">
              label/tag
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-[90vw] mx-auto mt-20">
        {newsItems.map((item) => (
          <div key={item.id} className="space-y-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-[100%] h-[240px] object-cover rounded-t-3xl"
            />
            <p className="text-[14px] text-[#182B69] font-semibold">
              {item.author} • {item.date}
            </p>
            <div className="flex justify-between">
              <h2 className="text-[20px] font-semibold text-[#101828]">
                {item.title}
              </h2>
              <DiagArrow />
            </div>
            <p className="text-[#667085]">{item.description}</p>
            <div className="flex items-center space-x-3">
              {item.tags.map((tag, index) => (
                <button
                  key={index}
                  className="bg-[#E9ECF4] text-[#182B69] text-[14px] py-2 px-4 rounded-lg"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
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
