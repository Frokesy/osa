import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-[90vw] lg:space-x-10 mx-auto mt-30">
      <div className="bg-[#E9ECF4] rounded-2xl lg:py-20 py-10 lg:px-10 px-4 lg:w-[45%]">
        <h2
          data-aos="fade-up"
          className="text-[#223D94] lg:text-[36px] text-[24px] font-semibold"
        >
          About Us
        </h2>
        <p data-aos="fade-up" className="text-[#667085] lg:text-[20px] mt-1">
          Get to know about our values, mission and history.
        </p>

        <p data-aos="fade-up" className="mt-4 lg:text-[16px] text-[13px]">
          1StepAhead Consulting is your one-stop-shop HR Solutions Provider,
          helping you turn your business goals into reality with our
          comprehensive suite of strategic HR Solutions. We have identified the
          need to support organizations to ensure optimum service delivery which
          includes meeting legal requirements, hiring and retaining the best
          talents, and improving business efficiency.
        </p>
        <NavLink to="/about/history" className="flex">
          <div className="flex text-[#fff] items-center mt-6 space-x-4 bg-[#E30613] px-4 py-3 lg:py-4 font-semibold rounded-lg hover:bg-[#c0050f] transition-colors">
            <span>Learn more</span>
            <ArrowRight color="#fff" />
          </div>
        </NavLink>
      </div>

      <div className="space-y-3 w-full flex-nowrap overflow-x-auto scrollbar-hide lg:w-auto mt-10 lg:mt-0">
        <div className="flex items-baseline justify-center gap-3">
          <img
            src="/assets/about-one.png"
            alt="about-img"
            data-aos="fade-down"
            data-aos-duration="800"
            className="lg:w-[240px] lg:h-[180px] w-[80px] h-[80px] flex-shrink-0"
          />
          <img
            src="/assets/about-two.png"
            alt="about-img"
            data-aos="fade-down"
            data-aos-duration="900"
            className="lg:w-[240px] lg:h-[260px] w-[80px] h-[120px] flex-shrink-0"
          />
        </div>
        <div className="flex gap-3">
          <img
            src="/assets/about-three.png"
            alt="about-img"
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:w-[240px] lg:h-[150px] w-[32%] h-[68px]"
          />
          <img
            src="/assets/about-four.png"
            alt="about-img"
            data-aos="fade-up"
            data-aos-duration="1100"
            className="lg:w-[240px] lg:h-[260px] w-[32%] h-[120px]"
          />
          <img
            src="/assets/about-five.png"
            alt="about-img"
            data-aos="fade-left"
            data-aos-duration="1200"
            className="lg:w-[240px] lg:h-[150px] w-[32%] h-[68px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
