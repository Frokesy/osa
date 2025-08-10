import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import { HistoryIcon, ServiceIcon } from "../../../components/svgs/Icons";

const History = () => {
  return (
    <Container>
      <TopNav />
      <div className="w-[90vw] rounded-4xl lg:mt-20 mt-10 lg:mb-10 mx-auto">
        <div className="flex items-center space-x-3">
          <div className="h-1 rounded-full w-8 bg-[#223D94]"></div>
          <p className="lg:text-[20px] uppercase font-semibold text-[#223D94]">
            About Us
          </p>
        </div>

        <div className="flex items-center justify-between lg:mt-0 -mt-4">
          <div className="w-[70%]">
            <h2 className="lg:text-[48px] text-[24px] text-[#223D94] font-semibold uppercase">
              Who we are
            </h2>
            <p className="lg:text-[14px] text-[12px] pt-2 text-[#5D5E5F]">
              Our company&apos;s history and the value we provide.
            </p>
          </div>
          <div className="w-[30%] lg:w-auto lg:scale-100 scale-50">
            <HistoryIcon />
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/about-hero.png')] relative lg:h-[80vh] h-[50vh] bg-center bg-cover bg-no-repeat py-10 lg:px-10 flex justify-end">
        <div className="space-y-4 bg-[#fff] lg:p-10 p-6 lg:relative absolute lg:bottom-0 mx-4 lg:mx-0 -bottom-[60vh] shadow-2xl rounded-lg lg:w-[50%]">
          <div className="flex items-center space-x-3">
            <ServiceIcon color="#223D94" size="40" />

            <h2 className="text-[16px] text-[#223D94] font-bold">
              OUR COMPANY&apos;S HISTORY
            </h2>
          </div>

          <p className="lg:text-[18px] text-[#333333]">
            Founded in 2019 by Mr. John Doe, 1StepAhead Consulting began with a
            clear mission: to empower businesses with strategic, reliable, and
            people-focused HR solutions. What started as a small advisory firm
            has grown into a trusted HR consulting partner for over 120
            businesses across various industries.
          </p>

          <p className="lg:text-[18px] text-[#333333]">
            With a commitment to excellence, speed, and integrity, the company
            has helped organizations streamline operations, enhance talent
            acquisition, ensure compliance, and boost overall workforce
            efficiency.
          </p>

          <p className="lg:text-[18px] text-[#333333]">
            Over the years, 1StepAhead Consulting has expanded its services,
            team, and client base, earning a strong reputation for delivering
            results-driven solutions tailored to each client&apos;s goals.
            Today, it stands as a go-to resource for companies looking to align
            their people strategy with business success.
          </p>
        </div>
      </div>

      <div className="flex justify-between lg:flex-row flex-col w-[90vw] mx-auto lg:mt-20 mt-[70vh]">
        <div className="bg-[#E9ECF4] rounded-2xl flex flex-col justify-center lg:py-20 py-10 lg:px-10 px-4 lg:w-[45%]">
          <h2 className="text-[#223D94] lg:text-[36px] text-[24px] font-semibold">
            What we do?
          </h2>
          <p className="text-[#333] lg:text-[20px] mt-1">
            Here&apos;s an idea of the value we provide to improve efficiency
            and growth in your business.
          </p>

          <p className="mt-4 lg:text-[16px] text-[#333] text-[13px]">
            OneStepAhead Consulting is your one-stop-shop HR Solutions Provider,
            helping you turn your business goals into reality with our
            comprehensive suite of strategic HR Solutions.
          </p>

          <div className="space-y-4 mt-4 text-[#333] text-[16px]">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-0.5 bg-[#333]"></div>
              <p className="">Meeting legal policies and requirements</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-0.5 bg-[#333]"></div>
              <p className="">
                Hiring and retaining the best talents to ensure stability
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-0.5 bg-[#333]"></div>
              <p className="">Improving business efficiency</p>
            </div>
          </div>
        </div>

        <div className="lg:w-[50%] lg:mt-0 mt-6">
          <img src="/assets/about-six.png" alt="img" className="w-[100%]" />
        </div>
      </div>

      <div className="bg-[url('/assets/about-seven.png')] w-[90vw] lg:mt-20 mt-10 rounded-2xl mx-auto bg-center bg-cover bg-no-repeat">
        <div className="bg-[#000]/60 flex flex-col items-center justify-center lg:py-[10vh] py-0 pt-[5vh] rounded-2xl text-center space-y-4">
          <p className="text-[#fff]">Our Approach</p>
          <h2 className="lg:text-[48px] text-[20px] font-bold text-[#fff] lg:w-[70%]">
            How do we help you achieve your business goals?
          </h2>
          <p className="lg:text-[18px] text-[#fff] lg:w-[70%] lg:px-0 px-4 text-[13px] lg:bg-transparent bg-[#0E1A3E] lg:mt-10 mt-4 pt-6 lg:pb-0 lg:pt-0 pb-8 rounded-b-2xl">
            We seek to add value to organizations by establishing a partnership
            with you. Through this we can better understand your business
            requirements and tailor a service that will add value to your
            organization. We aim to set exemplary service standards, integrity,
            quality, knowledge and performance in everything we do by helping
            clients plan for the unexpected and protect what matters most to
            them. Our partnership allows you to do what you do best - drive your
            business forward, while leaving your HR processes to us.
          </p>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default History;
