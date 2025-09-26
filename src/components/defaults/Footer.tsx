import { useEffect, useState } from "react";
import { render } from "@react-email/render";
import Plunk from "@plunk/node";
import { Slide, toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { PhoneIcon, SubmitIcon, UserIcon } from "../svgs/Icons";

import { ContactAdminTemplate } from "../email-templates/contact/ToAdmin";
import { allServicesQuery } from "../../sanity/servicePage";
import { client } from "../../sanity/client";
import type { Service } from "../sections/dropdowns/ServicesDropdown";
import { LinkedIn } from "../svgs/Logos";
import { Instagram } from "lucide-react";

const Footer = () => {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const plunkSecret = import.meta.env.VITE_PLUNK_SECRET;
  const plunkClient = new Plunk(plunkSecret);

  const handleSubmit = async () => {
    if (!service || !name || !phone) {
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
        <ContactAdminTemplate
          fname={name}
          lname=""
          email="N/A"
          phone={phone}
          message={`Requested consultation about: ${service}`}
          aoi={service}
        />
      );

      await plunkClient.emails.send({
        to: "info@1stepaheadgroup.com",
        subject: "📌 New Free Consultation Request",
        body: await adminEmailHtml,
      });

      toast.success("✅ Consultation details submitted successfully!", {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });

      setService("");
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Error sending consultation emails:", error);
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

  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    client.fetch(allServicesQuery).then((res) => setServices(res));
  }, []);

  return (
    <div className="mt-20 bg-[#F5F5F5]">
      <div className="lg:w-[90vw] mx-auto pt-20">
        <h2 className="lg:text-[36px] text-[24px] font-bold lg:px-0 px-4 text-[#223D94]">
          Free Consultation
        </h2>
        <p className="lg:px-0 px-4 text-[#667085]">
          You deserve a one on one conversation with us to stay One step ahead!
        </p>

        <div className="lg:mt-10 mt-6 lg:px-0 px-4 flex lg:flex-row flex-col justify-between lg:items-center">
          <div className="lg:w-[40%]">
            <img
              src="/assets/footer-img.png"
              alt="footer-img"
              className="w-[100%] h-[250px] lg:h-[300px]"
            />
          </div>

          <div className="lg:w-[55%] lg;mt-0 mt-6 space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="select">I would like to discuss</label>
              <select
                id="select"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#fff] text-[#000]"
              >
                <option value="">-- Select an option --</option>
                {services.map((service) => (
                  <option key={service.slug.current} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex lg:flex-row flex-col space-y-6 lg:space-y-0 justify-between">
              <div className="space-y-2 flex flex-col lg:w-[45%]">
                <label htmlFor="">Name</label>
                <div className="bg-[#fff] text-[#333] p-3 rounded-lg flex items-center space-x-2">
                  <UserIcon />
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2 flex flex-col lg:w-[45%]">
                <label htmlFor="">Phone number</label>
                <div className="bg-[#fff] text-[#333] p-3 rounded-lg flex items-center space-x-2">
                  <PhoneIcon />
                  <input
                    type="number"
                    placeholder="Enter number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-[#fff] text-[#223D94] flex items-center space-x-3 px-6 py-3 rounded-lg disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center space-x-2">
                    <svg
                      className="animate-spin h-5 w-5 text-[#223D94]"
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
                    <span>Submitting...</span>
                  </span>
                ) : (
                  <>
                    <span>Submit details</span>
                    <SubmitIcon />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#fff] py-20 lg:rounded-t-2xl mt-20 px-4 lg:px-10">
          <div className="flex justify-between lg:flex-row flex-col lg:space-x-10 space-y-10 lg:space-y-0">
            <div className="flex flex-col space-y-2">
              <img
                src="/assets/logo.svg"
                alt="logo"
                className="w-[110px] h-[90px]"
              />
              <span>Nigeria office:</span>
              <span>United kingdom office:</span>
              <span>Phone number: +234 906 308 3323</span>
              <span>Email: info@1stepaheadgroup.com</span>
            </div>

            <div className="lg:w-[50%] flex lg:flex-row flex-col space-y-10 lg:space-y-0 justify-between">
              <div className="flex flex-col space-y-4">
                <h2 className="font-semibold">About</h2>
                <NavLink to="/about/history" className="text-[14px]">
                  Who we are
                </NavLink>
                <NavLink to="/about/core-values" className="text-[14px]">
                  Core values
                </NavLink>
                <NavLink to="/about/team" className="text-[14px]">
                  Our team
                </NavLink>
              </div>

              <div className="flex flex-col space-y-4">
                <h2 className="font-semibold">Resources</h2>
                {services.map((item) => (
                  <NavLink
                    key={item.slug.current}
                    to={`/services/${item.slug.current}`}
                    className="text-[14px]"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>

              <div className="flex flex-col space-y-4">
                <h2 className="font-semibold">Legal</h2>
                <NavLink to="/terms" className="text-[14px]">
                  Terms
                </NavLink>
                <NavLink to="/privacy-policy" className="text-[14px]">
                  Privacy Policy
                </NavLink>
                <NavLink to="/cookies-policy" className="text-[14px]">
                  Cookies Policy
                </NavLink>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-between items-center">
            <p className="lg:text-[16px] text-[10px]">
              © 2025 1stepahead All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Instagram />
              <img
                src="/assets/xicon2.avif"
                alt="xicon"
                className="w-[24px] h-[24px] rounded-full"
              />
              <LinkedIn color="#000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
