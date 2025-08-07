import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import TopNav from "../../components/defaults/TopNav";

const Contact = () => {
  return (
    <Container>
      <div className="py-6 bg-red-700">
        <TopNav />
      </div>
      <div className="flex justify-between">
        <div className="w-[45%] lg:block hidden">
          <img
            src="/assets/contact-img.png"
            alt="contact-img"
            className="h-[120vh] w-[100%]"
          />
        </div>
        <div className="lg:w-[55%] lg:px-10 px-6 mt-20">
          <h2 className="lg:text-[40px] text-[24px] font-bold">
            Need HR support? <br /> We&apos;re here to help
          </h2>
          <p className="lg:text-[18px] mt-2 text-[#808080]">
            You can reach us anytime via 1stepahead@mail.com
          </p>
          <div className="mt-14 lg:w-[80%]">
            <div className="flex justify-between">
              <div className="space-y-2 w-[45%] flex flex-col">
                <label className="text-[14px] text-[#344054]">First name</label>
                <input
                  type="text"
                  className="w-full border border-[#ccc] rounded-lg outline-none px-4 py-2"
                />
              </div>
              <div className="space-y-2 w-[45%] flex flex-col">
                <label className="text-[14px] text-[#344054]">Last name</label>
                <input
                  type="text"
                  className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2"
                />
              </div>
            </div>

            <div className="space-y-2 w-[100%] mt-6 flex flex-col">
              <label className="text-[14px] text-[#344054]">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-3"
              />
            </div>

            <div className="space-y-2 w-[100%] mt-6 flex flex-col">
              <label className="text-[14px] text-[#344054]">Phone number</label>
              <input
                type="number"
                placeholder="8123456789"
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-3"
              />
            </div>

            <div className="space-y-2 w-[100%] mt-6 flex flex-col">
              <label className="text-[14px] text-[#344054]">
                How can we help?
              </label>
              <textarea
                placeholder="Your message to us..."
                rows={5}
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-3"
              />
            </div>

            <div className="space-y-2 w-[100%] mt-6 flex flex-col">
              <label className="text-[14px] text-[#344054]">
                Area of interest
              </label>
              <div className="grid grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <input type="checkbox" name="aoi" id="aoi" />
                    <label className="lg:text-[14px] text-[12px]">
                      Complaint
                    </label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input type="checkbox" name="aoi" id="aoi" />
                    <label className="lg:text-[14px] text-[12px]">
                      Feedback
                    </label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input type="checkbox" name="aoi" id="aoi" />
                    <label className="lg:text-[14px] text-[12px]">
                      Vocational services
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <input type="checkbox" name="aoi" id="aoi" />
                    <label className="lg:text-[14px] text-[12px]">
                      Consulting and advisory
                    </label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input type="checkbox" name="aoi" id="aoi" />
                    <label className="lg:text-[14px] text-[12px]">
                      Training
                    </label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input type="checkbox" name="aoi" id="aoi" />
                    <label className="lg:text-[14px] text-[12px]">
                      Recruitment
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-[#E30613] w-[100%] lg:text-[18px] py-3 mt-10 rounded-lg text-[#fff] font-semibold">
              Submit form
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Contact;
