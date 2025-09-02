import { useParams } from "react-router-dom";
import Container from "../../components/defaults/Container";
import TopNav from "../../components/defaults/TopNav";
import Footer from "../../components/defaults/Footer";
import { CopyIcon, SendIcon } from "../../components/svgs/Icons";
import { usePost } from "../../hooks/usePost";
import { PortableText } from "@portabletext/react";
import { useState } from "react";

const Slug = () => {
  const { slug } = useParams();
  const [buttonText, setButtonText] = useState<string>("Copy link");
  const post = usePost("narrow-your-focus-to-prevent-over-analysis");

  if (post === null) {
    return (
      <Container>
        <TopNav />
        <p className="text-center py-20">Loading...</p>
        <Footer />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container>
        <TopNav />
        <p className="text-center py-20">Post not found</p>
        <Footer />
      </Container>
    );
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setButtonText("Link copied!");
      setTimeout(() => {
        setButtonText("Copy link");
      }, 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Container>
      <TopNav />
      <div className="flex flex-col pt-10 w-[90vw] mx-auto">
        <div className="flex">
          <div className="bg-[#E9ECF4] text-[12px] text-[#182B69] flex items-center space-x-3 px-3 py-1 rounded-full">
            <button className="p-2 bg-[#fff] rounded-full">
              {post.superCategory || "General"}
            </button>
            <span>{Math.ceil(post.content.length * 1.5)} min read</span>
          </div>
        </div>
        <h2 className="lg:text-[36px] text-[24px] text-[#223D94] font-semibold">
          {post.title}
        </h2>
        <p className="lg:text-[20px] text-[#667085] pt-2">{post.subtext}</p>
      </div>

      <div className="w-[90vw] mx-auto mt-10">
        {post.image?.asset?.url && (
          <img
            src={post.image.asset.url}
            alt={post.title}
            className="w-[100%] h-[240px] lg:h-[560px] object-cover rounded-xl"
          />
        )}

        <div className="flex justify-between items-center mt-10">
          <div className="flex space-x-20 lg:space-x-14">
            <div className="space-y-3">
              <h2 className="text-[#223D94] text-[14px] font-semibold">
                Written by
              </h2>
              <span className="text-[18px] text-[#333]">
                {post.author?.name || "Unknown"}
              </span>
            </div>
            <div className="space-y-3">
              <h2 className="text-[#223D94] text-[14px] font-semibold">
                Published on
              </h2>
              <span className="text-[18px] text-[#333]">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div
            onClick={() =>
              copyToClipboard(
                `https://localhost:5173/blog/${post.slug.current}`
              )
            }
            className="p-3 border border-[#ccc] cursor-pointer rounded-lg hidden lg:flex items-center space-x-3"
          >
            <CopyIcon />
            <p className="text-[14px] transition-all duration-300 ease-in-out">
              {buttonText}
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between mt-10 gap-8">
          <div className="lg:w-[50%] space-y-8 leading-relaxed text-[#333]">
            {post.content.map((section, i) => (
              <section key={i}>
                <h3 className="text-[20px] font-semibold text-[#223D94] mb-2">
                  {section.subsectionTitle}
                </h3>
                <PortableText value={section.subsectionBody} />
              </section>
            ))}
          </div>

          <div className="lg:w-[45%] lg:mt-0 mt-6 relative bg-[#E9ECF4] h-[480px] max-h-[500px] lg:p-6 p-4 rounded-2xl flex flex-col justify-center">
            <div className="absolute top-6 left-6">
              <SendIcon />
            </div>
            <h3 className="text-[24px] text-[#0E1A3E] font-bold mb-2">
              Weekly newsletter
            </h3>
            <p className="text-[16px] text-[#182B69] mb-4">
              No spam. Just the latest releases and tips, interesting articles,
              and exclusive interviews in your inbox every week.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg bg-[#fff] p-3 text-black mb-3 outline-none"
            />
            <p className="text-[#1F3887] py-3">Read about our privacy policy</p>
            <button className="bg-[#ED1C24] text-[#fff] px-4 py-2 rounded-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Slug;
