import { useState } from "react";
import { render } from "@react-email/render";
import Plunk from "@plunk/node";
import { Slide, toast, ToastContainer } from "react-toastify";
import { NewsletterAdminTemplate } from "../../email-templates/newsletter/ToAdmin";
import { NewsletterUserTemplate } from "../../email-templates/newsletter/ToUser";
import { LoadingIcon } from "../../svgs/Icons";

const NewsLetter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const plunkSecret = import.meta.env.VITE_PLUNK_SECRET;
  const plunkClient = new Plunk(plunkSecret);

  const handleSubmit = async () => {
    if (!name || !email) {
      toast.error("Please enter both name and email.", {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });
      return;
    }

    setLoading(true);

    try {
      const userEmailHtml = render(<NewsletterUserTemplate firstname={name} />);

      await plunkClient.emails.send({
        to: email,
        subject: "You're subscribed to Onestepahead Newsletter 🎉",
        body: await userEmailHtml,
      });

      const adminEmailHtml = render(
        <NewsletterAdminTemplate name={name} email={email} />
      );

      await plunkClient.emails.send({
        to: "info@1stepaheadgroup.com",
        subject: "New Newsletter Signup 📩",
        body: await adminEmailHtml,
      });

      toast.success("🎉 Subscription successful! Please check your inbox.", {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });

      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error sending newsletter emails:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 lg:w-[40%] w-[90%] outline-none"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 lg:w-[40%] w-[90%] lg:mt-0 mt-4 outline-none"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-[#E30613] text-white px-6 py-3 space-x-3 rounded-lg hover:bg-[#c0050f] font-semibold lg:w-[15%] w-[90%] lg:mt-0 mt-4 transition-colors disabled:opacity-50 flex items-center justify-center"
        >
          {loading ? (
            <>
              <LoadingIcon />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>

      <p className="lg:w-[60vw] w-[90vw] mt-3 lg:text-[16px] text-[14px] mx-auto">
        We care about your privacy in our privacy policy
      </p>
    </div>
  );
};

export default NewsLetter;
