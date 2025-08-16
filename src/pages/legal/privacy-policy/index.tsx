import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import { ServiceIcon } from "../../../components/svgs/Icons";

const PrivacyPolicy = () => {
  return (
    <Container>
      <TopNav />

      <div className="mt-20">
        <div className="flex flex-col items-center justify-center text-center shadow-xl w-[90vw] mx-auto rounded-2xl pb-10">
          <div className="flex items-center space-x-3">
            <ServiceIcon size="36" color="#1F3887" />
            <h2 className="text-[#1F3887] uppercase font-bold lg:text-[20px]">
              Onestep<span className="text-[#ED1C24]">ahead</span>
            </h2>
          </div>
          <div>
            <h2 className="lg:text-[48px] text-[20px] text-[#223D94] font-semibold uppercase">
              Privacy Policy
            </h2>
            <p className="lg:text-[20px] text-[14px] px-4 pt-2 text-[#333]">
              Please read this agreement carefully, as it contains important
              information regarding your legal rights and remedies.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 w-[90vw] mx-auto">
        <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
          Last updated: 01 Aug, 2025.
        </p>
        <p className="text-[#5D5E5F] pt-3 lg:text-[16px] text-[14px]">
          Welcome to 1stepahead. By accessing or using our website, you agree to
          comply with and be bound by these Terms of Use. If you do not agree,
          please do not use our website or services.
        </p>

        <div className="space-y-10 mt-10">
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              1. Information we collect
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              We may collect the following information when you interact with
              us:
            </p>
            <div className="px-3">
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Personal Details: Name, email address, phone number, address,
                CV/resume details, and other information you provide.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Usage Data: Information about your device, browser, IP
                address, and how you interact with our site.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Service Information: Data you provide when applying for
                training, consulting, or advisory services.
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              2. How we use your information
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              We use your information to:
            </p>
            <div className="px-3">
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Respond to inquiries and process service requests.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Facilitate applications for training or recruitment.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Provide, improve, and personalize our services.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Send important updates, offers, or newsletters (if you've
                opted in).
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Comply with legal obligations.
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              3. Sharing your information
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              We do not sell your personal nformation, we may share it with:
            </p>
            <div className="px-3">
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Service providers or partners who assist in delivering our
                services.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Government or regulatory bodies when required by law.
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              4. Data protection
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              We implement reasonable security measures to protect your personal
              data from unauthorized access, disclosure, or loss. However, no
              online transmission is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              5. Cookies
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              Our website may use cookies to enhance your browsing experience.
              You can adjust your browser settings to refuse cookies, but some
              site features may not function properly.
            </p>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              6. Your rights
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              You have the right to:
            </p>
            <div className="px-3">
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Access and request a copy of your personal data.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Request corrections to inaccurate data.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Request deletion of your personal data where legally
                permissible.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Withdraw consent for certain processing activities.
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              7. Third-party links
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              Our website may contain links to external sites. We are not
              responsible for the privacy practices of these third-party
              websites.
            </p>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              8. Updates to this policy
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              We may update this Privacy policy from time to time. Any changes
              will be posted on this page with the updated date.
            </p>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              9. Contact us
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              If you have any questions about these Privacy Policy, please
              contact us at:
            </p>
            <div className="px-3">
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Email: info@1stepaheadgroup.com
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Phone: +234 708 005 5138
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export default PrivacyPolicy;
