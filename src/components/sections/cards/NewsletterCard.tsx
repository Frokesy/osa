import { SendIcon } from "../../svgs/Icons";

const NewsletterCard = () => (
  <div className="min-w-[300px] relative bg-[#E9ECF4] lg:h-full h-[480px] lg:p-6 p-4 rounded-2xl flex flex-col justify-center">
    <div className="absolute top-6 left-6">
      <SendIcon />
    </div>
    <h3 className="text-[24px] text-[#0E1A3E] font-bold mb-2">
      Weekly newsletter
    </h3>
    <p className="text-[16px] text-[#182B69] mb-4">
      No spam. Just the latest releases and tips, interesting articles, and
      exclusive interviews in your inbox every week.
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
);

export default NewsletterCard;
