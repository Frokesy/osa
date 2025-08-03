import TopNav from "../../defaults/TopNav";
import { PeopleIcon } from "../../svgs/Icons";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/hero-img.png')] min-h-screen bg-center bg-cover bg-no-repeat">
      <div className="bg-[#000000]/50 min-h-screen lg:pt-10">
        <TopNav />

        <div className="lg:mt-[10vh] mt-20 flex flex-col justify-center items-center text-white space-y-6">
          <div className="lg:text-[60px] text-[28px] font-bold text-center w-[70%]">
            <span className="text-[#1F3887] uppercase">1step</span>
            <span className="text-[#ED1C24] uppercase">ahead</span>
            
            <span className="">
              {" "}
              is your one-stop HR consultant
            </span>
          </div>
          <p className="text-[18px] lg:mt-10 lg:w-[40%] text-center">
            We provide first-class HR consulting focused on trust, excellence,
            and customer satisfaction—delivered with speed and integrity.
          </p>
        </div>

        <div className="flex lg:justify-end lg:px-16 px-6 lg:mt-20 mt-30">
          <div className="bg-[#808080]/40 backdrop-blur-xs w-[40%] lg:flex hidden flex-col justify-center items-center space-y-6 p-6 rounded-3xl text-[#fff] text-center">
            <PeopleIcon />
            <p className="text-[30px] font-semibold">
              Organisation Development & Change Management
            </p>
          </div>
          <div className="bg-[#808080]/30 backdrop-blur-xs lg:w-[40%] flex lg:hidden flex-col justify-center space-y-6 p-6 rounded-3xl text-[#fff]">
            <div className="flex items-center space-x-3">
              <div className="h-0.5 rounded-full w-6 bg-[#ED1C24]"></div>
              <p className="text-[12px]">ONE STEPAHEAD GROUP</p>
            </div>
            <div className="flex items-center space-x-4">
              <PeopleIcon />
            <p className="text-[16px] font-semibold">
              Organisation Development & Change Management
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
