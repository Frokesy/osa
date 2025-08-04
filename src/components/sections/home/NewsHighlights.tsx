import { NewspaperIcon } from "lucide-react";
import { DiagArrow, NewsIcon } from "../../svgs/Icons";

const NewsHighlights = () => {
  const newsData = [
    {
      id: 1,
      title: "Narrow your focus to prevent over analysis",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      date: "20 Jan 2025",
      author: "Admin",
      category: "Design",
      image: "/assets/nh-one.png",
    },
    {
      id: 2,
      title: "Four steps to consider before you start",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      date: "19 Jan 2025",
      author: "Admin",
      category: "Design",
      image: "/assets/nh-two.png",
    },
    {
      id: 3,
      title: "Eight tips for building a bankable business",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      date: "18 Jan 2025",
      author: "Admin",
      category: "Design",
      image: "/assets/nh-three.png",
    },
    {
      id: 4,
      title: "A digital prescription for the pharma industry",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      date: "17 Jan 2025",
      author: "Admin",
      category: "Design",
      image: "/assets/nh-four.png",
    },
  ];
  return (
    <div className="w-[90vw] mx-auto mt-[10vh]">
      <h2 className="lg:text-[36px] text-[20px] font-bold">News highlight</h2>
      <p className="text-[#667085] lg:text-[20px] text-[12px] lg:my-6 my-3">
        The latest consultation news, trends and highlights.
      </p>

      <div className="flex space-x-4 mb-6 overflow-x-auto md:grid md:grid-cols-2 md:gap-10">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="min-w-[300px] bg-[#E9ECF4] lg:p-6 p-3 rounded-2xl md:min-w-0"
          >
            <div className="relative">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-[280px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 flex justify-between bg-[#ccc]/30 backdrop-blur-xs text-[#fff] lg:p-6 p-3 w-[100%]">
                <div className="">
                  <p className="text-[16px] font-bold">{news.author}</p>
                  <h3 className="text-[14px]">{news.date}</h3>
                </div>
                <span className="text-[14px] font-bold">{news.category}</span>
              </div>
            </div>
            <h3 className="lg:text-[24px] text-[18px] font-bold mt-4">
              {news.title}
            </h3>
            <p className="text-[#475467] lg:text-[16px] text-[14px] mt-2">
              {news.description}
            </p>
            <button className="mt-4 mb-6 text-[#182B69] flex items-center space-x-3 font-semibold">
              <span>Read post</span>
              <DiagArrow />
            </button>
          </div>
        ))}
      </div>

      <div className="flex lg:justify-end justify-center border-t border-[#ccc] mt-14 pt-6">
        <button className="flex items-center space-x-4 lg:text-[#fff] lg:bg-[#E30613] text-[#E30613] px-4 py-4 font-semibold rounded-xl hover:bg-[#c0050f] transition-colors">
          <span>View all posts</span>
          <div className="hidden lg:flex"><NewsIcon /></div>
            <div className="flex lg:hidden"><NewspaperIcon /></div>
        </button>
      </div>
    </div>
  );
};

export default NewsHighlights;
