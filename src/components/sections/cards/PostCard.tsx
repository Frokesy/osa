import { NavLink } from "react-router-dom";
import { DiagArrow } from "../../svgs/Icons";
import type { Post } from "../../../pages/media/highlights";

const PostCard: React.FC<{ item: Post }> = ({ item }) => (
  <div className="min-w-[300px] bg-[#E9ECF4] lg:p-6 p-3 rounded-2xl">
    <div className="relative">
      {item.image?.asset?.url && (
        <img
          src={item.image?.asset?.url}
          alt={item.title}
          className="w-full h-[280px] object-cover rounded-2xl"
        />
      )}
      <div className="absolute bottom-0 flex justify-between bg-[#000]/40 text-[#fff] lg:p-4 p-2 w-full">
        <div>
          <p className="text-[14px] font-bold">{item.author.name}</p>
          <h3 className="text-[12px]">
            {new Date(item.publishedAt).toDateString()}
          </h3>
        </div>
        <span className="text-[12px] font-bold">{item.category}</span>
      </div>
    </div>
    <h3 className="lg:text-[20px] text-[18px] font-bold mt-4">{item.title}</h3>
    {item.subtext && (
      <p className="text-[#475467] lg:text-[16px] text-[14px] mt-2">
        {item.subtext}
      </p>
    )}
    <NavLink
      to={`/blog/${item.slug}`}
      className="mt-4 mb-6 text-[#182B69] flex items-center space-x-3 font-semibold"
    >
      <span>Read post</span>
      <DiagArrow />
    </NavLink>
  </div>
);

export default PostCard;
