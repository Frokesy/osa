import { WhiteTick } from "../../svgs/Icons";

const About = () => {
  return (
    <>
      <div className="bg-[#1F3887] mt-6">
        {/* <div className="relative lg:h-[55vh] h-[45vh] w-full">
          <div className="absolute inset-0 bg-[#1F3887]/60 backdrop-blur-sm z-0"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-6">
            <h2 className="lg:text-[48px] text-[20px] font-semibold text-[#fff]">About Us</h2>
            <p className="lg:text-[18px] text-[14px] text-center lg:w-[40%] w-[90%] text-[#fff]">
              1StepAhead Consulting is your one-stop-shop HR Solutions Provider,
              helping you turn your business goals into reality with our
              comprehensive suite of strategic HR solutions.
            </p>
          </div>
        </div> */}

        <div className="bg-[url('/assets/bg-gradient.png')] bg-cover bg-no-repeat py-20">
          <div className="w-[90vw] mx-auto space-y-6">
            <div className="flex lg:flex-row flex-col justify-between gap-6">
              <div className="lg:w-1/2 lg:h-[493px] h-[272px] bg-[#808080]/30 backdrop-blur-sm border border-[#808080] lg:px-10 px-6 rounded-3xl flex items-center justify-center lg:text-[36px] text-[20px] font-bold">
                <h2>
                  We support organizations in achieving optimum service
                  delivery.
                </h2>
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
                <h2>
                  We help ensure compliance with legal and regulatory
                  requirements.
                </h2>
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
                <h2>We assist in hiring and retaining top talent.</h2>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="/assets/about-img-three.png"
                  alt="about-img"
                  className="w-full lg:h-[493px] h-[272px] object-cover rounded-3xl"
                />
              </div>
            </div>

            <div className="flex justify-between gap-6 flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2 lg:h-[493px] h-[272px] bg-[#808080]/30 backdrop-blur-sm border border-[#808080] lg:px-10 px-6 rounded-3xl flex items-center justify-center lg:text-[36px] text-[20px] font-bold">
                <h2>
                  We improve overall business efficiency through strategic HR
                  practices.
                </h2>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="/assets/about-img-four.png"
                  alt="about-img"
                  className="w-full lg:h-[493px] h-[272px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90vw] text-[#fff] mx-auto mt-20 rounded-xl bg-[#0E1A3E]">
        <img
          src="/assets/about-img-five.png"
          alt="img"
          className="w-full lg:h-[683px] h-[241px] object-cover rounded-t-xl"
        />

        <div className="pt-10 pb-10 lg:pb-30 w-[90%] mx-auto">
          <h2 className="lg:text-[20px] text-[14px]">Virtual Classroom Live</h2>
          <h1 className="lg:text-[36px] text-[20px] font-bold py-4">
            Our Training and Development
          </h1>

          <p className="lg:text-[16px] text-[14px]">
            Our online course are unique and targeted to specific audiences.
            1Stepahead being one Step ahead is a great way to learners in the
            driving sit.
          </p>

          <div className="mt-10 flex flex-col space-y-3">
            <div className="flex space-x-3 items-center">
              <WhiteTick />
              <p className="lg:text-[14px] text-[12px]">
                Professional tutors to attend to your needs
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <WhiteTick />
              <p className="lg:text-[14px] text-[12px]">Flexible billing and workflow</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
