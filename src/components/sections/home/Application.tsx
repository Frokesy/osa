import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast, Slide } from "react-toastify";
import { render } from "@react-email/components";
import ApplicationUserTemplate from "../../email-templates/application/ToUser";
import ApplicationAdminTemplate from "../../email-templates/application/ToAdmin";
import Plunk from "@plunk/node";

const plunkSecret = import.meta.env.VITE_PLUNK_SECRET;
const plunkClient = new Plunk(plunkSecret);

const Application = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    expertise: "",
    experience: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleApplicationSubmit = async () => {
    const { firstName, lastName, email, phone, expertise, experience } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !expertise ||
      !experience
    ) {
      toast.error("Please fill all fields before submitting.", {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });
      return;
    }

    setLoading(true);

    try {
      const adminEmailHtml = render(
        <ApplicationAdminTemplate
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          expertise={expertise}
          experience={experience}
        />
      );

      await plunkClient.emails.send({
        to: "info@1stepaheadgroup.com",
        subject: "📌 New Trainer Application Submitted",
        body: await adminEmailHtml,
      });

      const userEmailHtml = render(
        <ApplicationUserTemplate firstName={firstName} expertise={expertise} />
      );

      await plunkClient.emails.send({
        to: email,
        subject: "✅ Your Application Was Received",
        body: await userEmailHtml,
      });

      toast.success("Application submitted successfully!", {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        expertise: "",
        experience: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
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
    <div className="bg-[#0E1A3E] text-[#fff] mt-20">
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        className="flex flex-col items-center justify-center pt-10"
      >
        <h2 className="lg:text-[36px] text-[24px] font-semibold">
          Become a Trainer
        </h2>
        <p className="lg:text-[20px] text-center pt-2">
          Invitation for skilled professionals to join as vocational
          facilitators/trainers.
        </p>
      </div>

      <div className="bg-[url('/assets/application-hero.png')] bg-cover bg-center pb-10 lg:py-10 mt-10">
        <div className="flex items-center justify-center mt-10">
          <div
            data-aos="fade-up"
            className="border border-[#ccc] bg-[#fff] lg:w-auto w-[90vw] text-[#333] rounded-2xl lg:p-10 p-4 mt-6 lg:mt-0"
          >
            <form className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0E1A3E]"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0E1A3E]"
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0E1A3E]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0E1A3E]"
                />
              </div>

              <input
                type="text"
                name="expertise"
                placeholder="Area of Expertise (e.g. Carpentry, Solar Tech)"
                value={formData.expertise}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0E1A3E]"
              />

              <input
                type="number"
                name="experience"
                placeholder="Years of Experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0E1A3E]"
              />

              <button
                type="button"
                onClick={handleApplicationSubmit}
                disabled={loading}
                className="w-full flex justify-center items-center space-x-3 bg-[#E30613] text-white py-3 rounded-lg font-semibold hover:bg-[#c0050f] transition-colors disabled:opacity-70"
              >
                <span>{loading ? "Submitting..." : "Apply Now"}</span>
                <ArrowRight color="#fff" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
