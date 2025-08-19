import { useState } from "react";
import { render } from "@react-email/render";
import Plunk from "@plunk/node";
import { Slide, toast, ToastContainer } from "react-toastify";
import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import TopNav from "../../components/defaults/TopNav";

import { ContactAdminTemplate } from "../../components/email-templates/contact/ToAdmin";
import { ContactUserTemplate } from "../../components/email-templates/contact/ToUser";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
    aoi: "",
  });
  const [loading, setLoading] = useState(false);

  const plunkSecret = import.meta.env.VITE_PLUNK_SECRET;
  const plunkClient = new Plunk(plunkSecret);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!data.fname || !data.email || !data.message) {
      toast.error("Please fill in required fields.", {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });
      return;
    }

    setLoading(true);

    try {
      const adminEmailHtml = await render(<ContactAdminTemplate {...data} />);
      await plunkClient.emails.send({
        to: "ayanfeoluwaakindele24@gmail.com",
        subject: "📩 New Contact Form Submission",
        body: adminEmailHtml,
      });

      const userEmailHtml = await render(
        <ContactUserTemplate firstname={data.fname} />
      );
      await plunkClient.emails.send({
        to: data.email,
        subject: "✅ We received your message",
        body: userEmailHtml,
      });

      toast.success("🎉 Message sent successfully!", {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });

      setData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
        aoi: "",
      });
    } catch (error) {
      console.error("Error sending contact form:", error);
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
    <Container>
      <ToastContainer />
      <TopNav />
      <div className="flex justify-between">
        <div className="lg:w-[45%] lg:block hidden">
          <img
            src="/assets/contact-img.png"
            alt="contact-img"
            className="h-[120vh] w-full"
          />
        </div>

        <div className="lg:w-[55%] w-full lg:px-10 px-6 mt-20">
          <h2 className="lg:text-[40px] text-[24px] font-bold">
            Need HR support? <br /> We&apos;re here to help
          </h2>
          <p className="lg:text-[18px] mt-2 text-[#808080]">
            You can reach us anytime via 1stepahead@mail.com
          </p>

          <div className="mt-14 lg:w-[80%] w-full space-y-6">
            <div className="flex justify-between space-x-4">
              <input
                type="text"
                name="fname"
                placeholder="First name"
                value={data.fname}
                onChange={handleChange}
                className="w-1/2 border border-[#ccc] rounded-lg outline-none px-4 py-2"
              />
              <input
                type="text"
                name="lname"
                placeholder="Last name"
                value={data.lname}
                onChange={handleChange}
                className="w-1/2 border border-[#ccc] outline-none rounded-lg px-4 py-2"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              value={data.email}
              onChange={handleChange}
              className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-3"
            />

            <input
              type="number"
              name="phone"
              placeholder="8123456789"
              value={data.phone}
              onChange={handleChange}
              className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-3"
            />

            <textarea
              name="message"
              placeholder="Your message to us..."
              value={data.message}
              onChange={handleChange}
              rows={5}
              className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-3"
            />

            <select
              name="aoi"
              value={data.aoi}
              onChange={handleChange}
              className="w-full border border-[#ccc] rounded-lg px-4 py-3 outline-none"
            >
              <option value="">Select Area of Interest</option>
              <option value="Complaint">Complaint</option>
              <option value="Feedback">Feedback</option>
              <option value="Vocational Services">Vocational Services</option>
              <option value="Consulting and Advisory">
                Consulting and Advisory
              </option>
              <option value="Training">Training</option>
              <option value="Recruitment">Recruitment</option>
            </select>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#E30613] w-full lg:text-[18px] py-3 mt-4 rounded-lg text-white font-semibold flex items-center justify-center disabled:opacity-50"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit form"
              )}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Contact;
