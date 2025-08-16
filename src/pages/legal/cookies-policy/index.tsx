import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import { ServiceIcon } from "../../../components/svgs/Icons";

const CookiesPolicy = () => {
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
              Cookies Policy
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
              1. What are cookies
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              Cookies are small text files stored on your device when you visit
              a website. They help websites remember your actions, preferences,
              and login details for a smoother experience.
            </p>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              2. How we use your cookies
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              We use your cookies to:
            </p>
            <div className="px-3">
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Improve site functionality and navigation.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Remember your preferences and settings.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Analyze website traffic and performance.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Deliver relevant content and services
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              3. Types of cookies we use
            </h2>
            <div className="px-3">
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Essential Cookies: Required for the website to function
                properly.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Performance Cookies: Help us understand how visitors interact
                with our site.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Functional Cookies: Remember your choices and personalize your
                experience.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Government or regulatory bodies when required by law.
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              4. Managing cookies
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              You can adjust your browser settings to block or delete cookies.
              Please note that disabling cookies may affect certain website
              features.
            </p>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              5. Changes to this policy
            </h2>
            <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
              We may update this Cookies Policy from time to time, and any
              changes will be posted here with the updated date.
            </p>
          </div>
          <div className="">
            <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
              6. Contact us
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

export default CookiesPolicy;
