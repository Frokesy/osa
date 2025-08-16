import Container from "../../../components/defaults/Container";
import Footer from "../../../components/defaults/Footer";
import TopNav from "../../../components/defaults/TopNav";
import { ServiceIcon } from "../../../components/svgs/Icons";

const Terms = () => {
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
              Terms of Use
            </h2>
            <p className="lg:text-[20px] text-[14px] px-4 pt-2 text-[#333]">
              Please read this agreement carefully, as it contains important
              information regarding your legal rights and remedies.{" "}
            </p>
          </div>
        </div>

        <div className="mt-20 w-[90vw] mx-auto">
          <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
            Last updated: 01 Aug, 2025.
          </p>
          <p className="text-[#5D5E5F] pt-3 lg:text-[16px] text-[14px]">
            Welcome to 1stepahead. By accessing or using our website, you agree
            to comply with and be bound by these Terms of Use. If you do not
            agree, please do not use our website or services.
          </p>

          <div className="space-y-10 mt-10">
            <div className="">
              <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
                1. Use of website
              </h2>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Our website and its content are provided for informational
                purposes only.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - You may not use the site for any unlawful purpose or in a way
                that may damage our reputation.
              </p>
            </div>
            <div className="">
              <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
                2. Intellectual property
              </h2>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - All content, logos, graphics, and materials on this site are
                owned by 1STEPAHEAD or licensed to us.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - You may not reproduce, distribute, or modify any content
                without our written permission.
              </p>
            </div>
            <div className="">
              <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
                3. Services & Information
              </h2>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Information provided about our HR consulting, vocational
                training, or advisory services is subject to change without
                notice.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - Enrolment in any training or consulting service is subject to
                separate agreements or contracts.
              </p>
            </div>
            <div className="">
              <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
                4. User submissions
              </h2>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - If you submit any application forms, inquiries, or documents
                through our website, you grant us the right to use that
                information to process your request.
              </p>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                - We will handle personal data in line with our Privacy Policy.
              </p>
            </div>
            <div className="">
              <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
                5. Third-party links
              </h2>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                Our site may contain links to other websites. We are not
                responsible for the content, policies, or practices of these
                external sites.
              </p>
            </div>
            <div className="">
              <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
                6. Limitation of liability
              </h2>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                We are not liable for any direct, indirect, or incidental
                damages resulting from the use or inability to use our website
                or services.
              </p>
            </div>
            <div className="">
              <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
                7. Changes to terms
              </h2>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                We may update these Terms of Use from time to time. Changes will
                be posted on this page with the updated date.
              </p>
            </div>
            <div className="">
              <h2 className="text-[#333] mb-2 font-semibold lg:text-[36px] text-[20px]">
                8. Contact us
              </h2>
              <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                If you have any questions about these Terms of Use, please
                contact us at:
              </p>
              <div className="px-3">
                <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                  - All content, logos, graphics, and materials on this site are
                  owned by 1STEPAHEAD or licensed to us.
                </p>
                <p className="text-[#5D5E5F] lg:text-[16px] text-[14px]">
                  - You may not reproduce, distribute, or modify any content
                  without our written permission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export default Terms;
