const NewsLetter = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center pt-10">
        <h2 className="lg:text-[36px] text-[24px] text-[#223D94] text-center font-semibold">
          Sign up for our newsletter
        </h2>
        <p className="lg:text-[20px] text-[#667085] text-center pt-2">
          Be the first to know about updates on training, hiring, funding and so
          much more.
        </p>
      </div>

      <div className="flex justify-between lg:flex-row flex-col items-center lg:w-[60vw] w-[100%] mx-auto mt-6">
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 rounded-lg px-4 py-3 lg:w-[40%] w-[90%] outline-none"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="border border-gray-300 rounded-lg px-4 py-3 lg:w-[40%] w-[90%] lg:mt-0 mt-4 outline-none"
        />
        <button className="bg-[#E30613] text-white px-6 py-3 rounded-lg hover:bg-[#c0050f] font-semibold lg:w-[15%] w-[90%] lg:mt-0 mt-4 transition-colors">
          Subscribe
        </button>
      </div>
      <p className="lg:w-[60vw] w-[90vw] mt-3 lg:text-[16px] text-[14px] mx-auto">We care about your privacy in our privacy policy</p>
    </div>
  );
};

export default NewsLetter;
