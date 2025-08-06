import TopNav from "../../../components/defaults/TopNav";
import {
  BgAttachmentOne,
  HistoryIcon,
  MiniServiceIcon,
} from "../../../components/svgs/Icons";

const History = () => {
  return (
    <div>
      <div className="bg-[url('/assets/team-hero.png')] lg:min-h-screen h-[80vh] bg-center bg-cover bg-no-repeat">
        <div className="bg-[#000000]/50 lg:min-h-screen h-[80vh] lg:pt-10">
          <TopNav />

          <div className="flex-1 flex lg:mt-[25vh] mt-[20vh] items-center justify-center">
            <div className="bg-[#808080]/40 backdrop-blur-xs w-[95vw] lg:p-10 p-6 rounded-4xl text-[#fff] mx-auto">
              <div className="flex items-center space-x-3">
                <div className="h-0.5 rounded-full w-6 bg-[#ED1C24]"></div>
                <p className="text-[12px] uppercase">About Us</p>
              </div>

              <div className="flex items-center justify-between mt-2">
                <div>
                  <h2 className="lg:text-[48px] text-[20px] font-semibold uppercase">
                    Who we are
                  </h2>
                  <p className="text-[14px] pt-2">
                    Our company&apos;s history and the value we provide.
                  </p>
                </div>
                <HistoryIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[100vw] overflow-hidden">
        <div className="flex justify-between lg:flex-row flex-col gap-6 lg:gap-0">
          <div className="lg:w-1/5 lg:block hidden flex-shrink-0 max-w-full">
            <BgAttachmentOne />
          </div>

          <div className="lg:w-3/5 w-full lg:mt-20 mt-10 z-30 text-center space-y-4 px-4 lg:px-0">
            <div className="flex items-center justify-center space-x-3">
              <div className="lg:block hidden"><MiniServiceIcon /></div>
              <h2 className="lg:text-[36px] text-[20px] font-bold">
                OUR COMPANY&apos;S HISTORY
              </h2>
            </div>

            <p className="lg:text-[18px]">
              Founded in 2019 by Mr. John Doe, 1StepAhead Consulting began with
              a clear mission: to empower businesses with strategic, reliable,
              and people-focused HR solutions. What started as a small advisory
              firm has grown into a trusted HR consulting partner for over 120
              businesses across various industries.
            </p>

            <p className="lg:text-[18px]">
              With a commitment to excellence, speed, and integrity, the company
              has helped organizations streamline operations, enhance talent
              acquisition, ensure compliance, and boost overall workforce
              efficiency.
            </p>

            <p className="lg:text-[18px]">
              Over the years, 1StepAhead Consulting has expanded its services,
              team, and client base, earning a strong reputation for delivering
              results-driven solutions tailored to each client&apos;s goals.
              Today, it stands as a go-to resource for companies looking to
              align their people strategy with business success.
            </p>
          </div>

          <div className="lg:w-1/5 rotate-180 lg:block hidden">
            <BgAttachmentOne />
          </div>
        </div>
      </div>

      <div className="bg-[url('/assets/bg-gradient.png')] mt-14 bg-cover bg-no-repeat py-20">
        <div className="text-center lg:w-[40%] w-[90%] pb-10 lg:pb-20 flex flex-col items-center justify-center mx-auto space-y-4">
          <h2 className="lg:text-[48px] text-[24px] font-bold">What we do</h2>
          <p className="lg:text-[18px]">
            OneStepAhead Consulting is your one-stop-shop HR Solutions Provider,
            helping you turn your business goals into reality with our
            comprehensive suite of strategic HR Solutions.
          </p>
        </div>
        <div className="w-[90vw] mx-auto space-y-6">
          <div className="flex lg:flex-row flex-col justify-between gap-6">
            <div className="lg:w-1/2 lg:h-[493px] h-[272px] bg-[#808080]/30 backdrop-blur-sm border border-[#808080] lg:px-10 px-6 rounded-3xl flex items-center justify-center lg:text-[36px] text-[20px] font-bold">
              <h2>Meeting legal policies and requirements.</h2>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/assets/about-img-one.png"
                alt="about-img"
                className="w-full lg:h-[493px] h-[272px] object-cover rounded-3xl"
              />
            </div>
          </div>

          <div className="flex justify-between gap-6 flex-col lg:flex-row-reverse">
            <div className="lg:w-1/2 lg:h-[493px] h-[272px] bg-[#808080]/30 backdrop-blur-sm border border-[#808080] lg:px-10 px-6 rounded-3xl flex items-center justify-center lg:text-[36px] text-[20px] font-bold">
              <h2>Hiring and retaining the best talents to ensure stability</h2>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/assets/about-img-two.png"
                alt="about-img"
                className="w-full lg:h-[493px] h-[272px] object-cover rounded-3xl"
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-6">
            <div className="lg:w-1/2 lg:h-[493px] h-[272px] bg-[#808080]/30 backdrop-blur-sm border border-[#808080] lg:px-10 px-6 rounded-3xl flex items-center justify-center lg:text-[36px] text-[20px] font-bold">
              <h2>Improving business efficiency.</h2>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/assets/about-img-three.png"
                alt="about-img"
                className="w-full lg:h-[493px] h-[272px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/assets/about-img-six.png')] w-[90vw] lg:mt-20 mt-10 rounded-2xl mx-auto bg-center bg-cover bg-no-repeat">
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
    </div>
  );
};

export default History;
