import { useParams } from "react-router-dom";
import Container from "../../components/defaults/Container";
import TopNav from "../../components/defaults/TopNav";
import Footer from "../../components/defaults/Footer";
import { CopyIcon, SendIcon } from "../../components/svgs/Icons";

const Slug = () => {
  const { slug } = useParams();

  console.log(slug);
  return (
    <Container>
      <TopNav />
      <div className="flex flex-col pt-10 w-[90vw] mx-auto">
        <div className="flex">
          <div className="bg-[#E9ECF4] text-[12px] text-[#182B69] flex items-center space-x-3 px-3 py-1 rounded-full">
            <button className="p-2 bg-[#fff] rounded-full">News</button>
            <span>8 min read</span>
          </div>
        </div>
        <h2 className="lg:text-[36px] text-[24px] text-[#223D94] font-semibold">
          Narrow your focus to prevent over analysis
        </h2>
        <p className="lg:text-[20px] text-[#667085] pt-2">
          Feeling stuck in endless decision loops? It might be time to focus
          less—and achieve more.
        </p>
      </div>

      <div className="w-[90vw] mx-auto mt-10">
        <img
          src="/assets/nh-one.png"
          alt="img"
          className="w-[100%] h-[240px] lg:h-[560px]"
        />
        <div className="flex justify-between items-center mt-10">
          <div className="flex space-x-20 lg:space-x-14">
            <div className="space-y-3">
              <h2 className="text-[#223D94] text-[14px] font-semibold">
                Written by
              </h2>
              <span className="text-[18px] text-[#333]">Admin</span>
            </div>
            <div className="space-y-3">
              <h2 className="text-[#223D94] text-[14px] font-semibold">
                Published on
              </h2>
              <span className="text-[18px] text-[#333]">17 Jan 2025</span>
            </div>
          </div>

          <div className="p-3 border border-[#ccc] rounded-lg hidden lg:flex items-center space-x-3">
            <CopyIcon />
            <p className="text-[14px]">Copy link</p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between mt-10 gap-8">
          <div className="lg:w-[50%] space-y-8 leading-relaxed text-[#333]">
            <section>
              <h3 className="text-[20px] font-semibold text-[#223D94] mb-2">
                Introduction
              </h3>
              <p className="italic text-[#555] border-l-4 border-[#223D94] pl-4 mb-4">
                “You can do anything, but not everything.” — David Allen
              </p>
              <p>
                In a world filled with information, choices, and constant
                notifications, it's easy to fall into the trap of overanalyzing
                every decision. While reflection and careful planning are
                important, too much analysis can leave us feeling paralyzed and
                unable to act.
              </p>
            </section>

            <section>
              <h3 className="text-[20px] font-semibold text-[#223D94] mb-2">
                The problem with overanalysis
              </h3>
              <p>
                Overanalysis—often called “analysis paralysis”—occurs when you
                spend so much time weighing options that you delay or avoid
                making a decision entirely. This constant evaluation drains
                energy, creates self-doubt, and ultimately reduces productivity.
              </p>
            </section>

            <section>
              <h3 className="text-[20px] font-semibold text-[#223D94] mb-2">
                Why narrowing focus helps
              </h3>
              <p>
                By reducing the number of variables you consider, you make
                decisions faster and with more confidence. A narrowed focus
                channels your mental energy toward what truly matters, leading
                to better outcomes and less stress.
              </p>
            </section>

            <section>
              <h3 className="text-[20px] font-semibold text-[#223D94] mb-2">
                How to narrow your focus
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Define your top priorities and ignore distractions.</li>
                <li>Set clear boundaries for decision-making time.</li>
                <li>Limit the number of options you consider.</li>
                <li>Rely on trusted frameworks or past experiences.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[20px] font-semibold text-[#223D94] mb-2">
                Real-life example: Hiring
              </h3>
              <p>
                Imagine you’re hiring for a role. If you try to evaluate every
                candidate against dozens of equally weighted criteria, you’ll
                get stuck. Instead, by focusing on the three most important
                qualifications, you can quickly identify the right person for
                the job.
              </p>
            </section>

            <section>
              <h3 className="text-[20px] font-semibold text-[#223D94] mb-2">
                Conclusion
              </h3>
              <p>
                Overanalysis steals time, energy, and confidence. By narrowing
                your focus, you reduce complexity and move forward with clarity.
                The next time you’re stuck in an endless loop of pros and cons,
                remember—progress beats perfection.
              </p>
            </section>
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
