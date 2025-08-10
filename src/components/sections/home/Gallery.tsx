import { ArrowRight } from "lucide-react";

const Gallery = () => {
  return (
    <div className="w-[90vw] mx-auto mt-20 flex lg:flex-row flex-col justify-between lg:items-end">
      <div className="lg:w-[45%]">
        <h2 className="lg:text-[36px] text-[24px] text-[#223D94] font-semibold">Gallery</h2>
        <p className="lg:text-[20px] pt-2 text-[#667085]">
          Photos/videos from past trainings, graduations, visits, and fieldwork.
        </p>
        <button className="flex text-[#fff] mt-4 lg:mt-10 items-center space-x-4 bg-[#E30613] px-4 py-4 font-semibold rounded-lg hover:bg-[#c0050f] transition-colors">
          <span>View Gallery</span>
          <ArrowRight color="#fff" />
        </button>
      </div>

      <div className="lg:w-[50%] lg:flex grid grid-cols-2 lg:gap-0 gap-4 space-x-3 items-start lg:mt-0 mt-10">
        <img src="/assets/gallery-img-one.png" alt="gallery-img" className="w-[320px] h-[356px] rounded-xl col-span-2" />
        <img src="/assets/gallery-img-two.png" alt="gallery-img" />
        <img src="/assets/gallery-img-three.png" alt="gallery-img" className="lg:mt-28 mt-16" />
      </div>
    </div>
  );
};

export default Gallery;
