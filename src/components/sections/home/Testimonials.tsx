import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="w-[85vw] mx-auto mt-20">
      <div className="flex flex-col items-center justify-center pt-10">
        <h2 className="lg:text-[36px] text-[24px] text-[#223D94] font-semibold">
          Testimonials
        </h2>
        <p className="lg:text-[20px] text-[#667085] text-center pt-2">
          What our clients say, based on quality experience at 1Stepahead.
        </p>
      </div>

      <div className="flex flex-col space-y-6 mt-10">
        <h2 className="text-[#000] lg:text-[36px] text-[18px] font-semibold text-center">
          "Working with this HR firm as a vocational trainer has been a
          rewarding experience. They provided the structure, support, and
          resources needed to teach effectively. I&apos;ve seen real growth in
          my trainees, and that&apos;s the most fulfilling part."
        </h2>
        <div className="space-y-3 flex flex-col items-center">
          <img
            src="/assets/aisha.png"
            alt="aisha"
            className="w-[80px] h-[80px] rounded-full"
          />
          <h3 className="text-[#000] text-[18px] font-semibold">Aisha Bello</h3>
          <p className="text-[#667085]">Fashion Design Trainer</p>
          <div className="flex items-center space-x-2 mt-2">
            <Star fill="#FEC84B" stroke="#FEC84B" />
            <Star fill="#FEC84B" stroke="#FEC84B" />
            <Star fill="#FEC84B" stroke="#FEC84B" />
            <Star fill="#FEC84B" stroke="#FEC84B" />
            <Star fill="#FEC84B" stroke="#FEC84B" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
