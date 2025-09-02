import { NewspaperIcon } from "lucide-react";
import { DiagArrow, NewsIcon } from "../../svgs/Icons";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Post } from "../../../pages/media/nugget";
import { getPostsBySuperCategory } from "../../../sanity/getPostsBySuperCategory";

const NewsHighlights = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostsBySuperCategory("news-highlights").then((data: Post[]) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading posts...</p>;
  }

  return (
    <div className="w-[90vw] mx-auto mt-[10vh]">
      <h2 className="lg:text-[36px] text-[20px] font-bold">News highlight</h2>
      <p className="text-[#667085] lg:text-[20px] text-[12px] lg:my-6 my-3">
        The latest consultation news, trends and highlights.
      </p>

      <div className="flex space-x-4 mb-6 overflow-x-auto md:grid md:grid-cols-2 md:gap-10">
        {posts.map((news) => (
          <div
            key={news._id}
            className="min-w-[300px] bg-[#E9ECF4] lg:p-6 p-3 rounded-2xl md:min-w-0"
          >
            <div className="relative">
              <img
                src={news.image?.asset?.url}
                alt={news.title}
                className="w-full h-[280px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 flex justify-between bg-[#ccc]/30 backdrop-blur-xs text-[#fff] lg:p-6 p-3 w-[100%]">
                <div className="">
                  <p className="text-[16px] font-bold">{news.author.name}</p>
                  <h3 className="text-[14px]">{news.publishedAt}</h3>
                </div>
                <span className="text-[14px] font-bold">{news.category}</span>
              </div>
            </div>
            <h3 className="lg:text-[24px] text-[18px] font-bold mt-4">
              {news.title}
            </h3>
            <p className="text-[#475467] lg:text-[16px] text-[14px] mt-2">
              {news.subtext}
            </p>
            <NavLink
              to={`/blog/${news.slug}`}
              className="mt-4 mb-6 text-[#182B69] flex items-center space-x-3 font-semibold"
            >
              <span>Read post</span>
              <DiagArrow />
            </NavLink>
          </div>
        ))}
      </div>

      <div className="flex lg:justify-end justify-center border-t border-[#ccc] mt-14 pt-6">
        <NavLink
          to="/media/highlights"
          className="flex items-center space-x-4 lg:text-[#fff] lg:bg-[#E30613] text-[#E30613] px-4 py-4 font-semibold rounded-xl lg:hover:bg-[#c0050f] transition-colors"
        >
          <span>View all posts</span>
          <div className="hidden lg:flex">
            <NewsIcon />
          </div>
          <div className="flex lg:hidden">
            <NewspaperIcon />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NewsHighlights;
