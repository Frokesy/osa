import { LoadingIcon, SendIcon } from "../../svgs/Icons";
import { useState } from "react";
import { render } from "@react-email/render";
import Plunk from "@plunk/node";
import { Slide, toast, ToastContainer } from "react-toastify";
import { NewsletterAdminTemplate } from "../../email-templates/newsletter/ToAdmin";
import { NewsletterUserTemplate } from "../../email-templates/newsletter/ToUser";

const NewsletterCard = () => {
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
        to: "akindeleayanfeoluwa@gmail.com",
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
    <div className="min-w-[300px] relative bg-[#E9ECF4] lg:h-full h-[480px] lg:p-6 p-4 rounded-2xl flex flex-col justify-center">
      <ToastContainer />
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
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg bg-[#fff] p-3 text-black mb-3 outline-none"
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg bg-[#fff] p-3 text-black mb-3 outline-none"
      />
      <p className="text-[#1F3887] py-3">Read about our privacy policy</p>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-[#ED1C24] text-[#fff] px-4 py-2 rounded-lg flex items-center justify-center space-x-3 font-semibold"
      >
        {loading ? (
          <>
            <LoadingIcon />
            <span> Subscribing...</span>
          </>
        ) : (
          "Subscribe"
        )}
      </button>
    </div>
  );
};
export default NewsletterCard;
