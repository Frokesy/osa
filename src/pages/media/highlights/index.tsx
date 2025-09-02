import React, { useEffect, useState } from "react";
import TopNav from "../../../components/defaults/TopNav";
import { SearchIcon, ServiceIcon } from "../../../components/svgs/Icons";
import Footer from "../../../components/defaults/Footer";
import Container from "../../../components/defaults/Container";
import { getPostsBySuperCategory } from "../../../sanity/getPostsBySuperCategory";
import NewsletterCard from "../../../components/sections/cards/NewsletterCard";
import PostCard from "../../../components/sections/cards/PostCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type Post = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  author: {
    name: string;
  };
  category: string;
  subtext?: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
};

export interface BlogListingProps {
  superCategory: "news-highlights" | "hr-nugget";
}

const BlogListing: React.FC<BlogListingProps> = ({ superCategory }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = posts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.subtext?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const getPageNumbers = (current: number, total: number) => {
    const delta = 2;
    const range: (number | string)[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta && i <= current + delta)
      ) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l !== undefined) {
        if ((i as number) - l === 2) {
          rangeWithDots.push(l + 1);
        } else if ((i as number) - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i as number;
    }

    return rangeWithDots;
  };

  useEffect(() => {
    getPostsBySuperCategory(superCategory).then((data: Post[]) => {
      setPosts(data);
      setLoading(false);
    });
  }, [superCategory]);

  if (loading) {
    return (
      <Container>
        <TopNav />
        <p className="text-center py-20">Loading posts...</p>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <div className="bg-[url('/assets/nh-hero.png')] lg:min-h-screen h-[80vh] bg-center bg-cover bg-no-repeat">
        <div className="bg-[#000000]/50 lg:min-h-screen h-[80vh]">
          <TopNav />
          <div className="flex-1 flex lg:mt-[25vh] mt-[20vh] items-center justify-center">
            <div className="bg-[#fff] w-[95vw] lg:p-10 p-6 rounded-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-3">
                <ServiceIcon size="36" color="#1F3887" />
                <h2 className="text-[#1F3887] uppercase font-bold lg:text-[20px]">
                  Onestep<span className="text-[#ED1C24]">ahead</span>
                </h2>
              </div>
              <h2 className="lg:text-[48px] text-[20px] text-[#223D94] font-semibold uppercase">
                {superCategory}
              </h2>
              <p className="text-[14px] pt-2 text-[#333]">
                The latest industry news, interviews, technologies, and
                resources.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between w-[90vw] mx-auto mt-10">
        <div className="flex items-center space-x-3 border border-[#ccc] p-3 rounded-lg lg:w-[30%]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="border border-[#ccc] p-3 rounded-lg lg:w-[30%] mt-6 lg:mt-0">
          <select
            className="w-full outline-none"
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value === "oldest" ? "oldest" : "newest")
            }
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-[90vw] mx-auto mt-20">
        {paginatedPosts.map((item, index) => {
          if (index === 3) {
            return (
              <React.Fragment key={item._id}>
                <NewsletterCard />
                <PostCard item={item} />
              </React.Fragment>
            );
          }

          return <PostCard key={item._id} item={item} />;
        })}

        {paginatedPosts.length < 4 && <NewsletterCard />}
      </div>

      <div className="lg:flex hidden justify-between items-center mt-20 w-[90vw] mx-auto">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="bg-[#E9ECF4] flex items-center font-semibold space-x-3 py-3 px-6 text-[#182B69] rounded-lg disabled:opacity-50"
        >
          <ArrowLeft size={18} />
          <span>Previous</span>
        </button>

        <div className="flex items-center space-x-6">
          {getPageNumbers(currentPage, totalPages).map((page, idx) =>
            page === "..." ? (
              <span key={idx} className="text-[#182B69]">
                ...
              </span>
            ) : (
              <button
                key={idx}
                onClick={() => setCurrentPage(page as number)}
                className={`py-2 px-3 rounded-lg ${
                  currentPage === page
                    ? "bg-[#E9ECF4] font-semibold text-[#182B69]"
                    : "text-[#182B69]"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="bg-[#E9ECF4] flex items-center font-semibold space-x-3 py-3 px-6 text-[#182B69] rounded-lg disabled:opacity-50"
        >
          <span>Next</span>
          <ArrowRight size={18} />
        </button>
      </div>

      <Footer />
    </Container>
  );
};

export default BlogListing;
