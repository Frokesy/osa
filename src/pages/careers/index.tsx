import { ArrowLeft, ArrowRight } from "lucide-react";
import TopNav from "../../components/defaults/TopNav";
import {
  BriefcaseIcon,
  ClockIcon,
  DollarIcon,
  LocationIcon,
  MiniCalendarIcon,
  ServiceIcon,
} from "../../components/svgs/Icons";

const Careers = () => {
  const openRoles = [
    {
      id: 1,
      category: "Design",
      catDesc: "Open positions in our design team",
      roles: [
        {
          id: 1,
          title: "Product Designer",
          description:
            "We are looking for a mid-level product designer to join our team.",
          location: "Remote",
          type: "Full-time",
          salary: "80k - 100k",
          postedDate: "17th January, 2025",
        },
        {
          id: 2,
          title: "UX Designer",
          description:
            "We are looking for a mid-level UX designer to join our team.",
          location: "Melbourne, Australia",
          type: "Full-time",
          salary: "80k - 100k",
          postedDate: "17th January, 2025",
        },
      ],
    },
    {
      id: 2,
      category: "Software Development",
      catDesc: "Open positions in our software team",
      roles: [
        {
          id: 1,
          title: "Engineering Manager",
          description:
            "We are looking for an experienced engineering manager to join our team.",
          location: "Remote",
          type: "Full-time",
          salary: "80k - 100k",
          postedDate: "18th January, 2025",
        },
        {
          id: 2,
          title: "Frontend Developer",
          description:
            "We are looking for an experienced frontend developer to join our team.",
          location: "Lagos, Nigeria",
          type: "Full-time",
          salary: "82k - 150k",
          postedDate: "20th January, 2025",
        },
        {
          id: 3,
          title: "Backend Developer",
          description:
            "We are looking for an experienced backend developer to join our team.",
          location: "Oyo, Nigeria",
          type: "Full-time",
          salary: "42k - 50k",
          postedDate: "20th January, 2025",
        },
      ],
    },
    {
      id: 3,
      category: "Customer Success",
      catDesc: "Open positions in our CX team",
      roles: [
        {
          id: 1,
          title: "Customer Success Manager",
          description:
            "We are looking for a mid-level product designer to join our team.",
          location: "Remote",
          type: "Full-time",
          salary: "80k - 100k",
          postedDate: "17th January, 2025",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="bg-[url('/assets/career-hero.png')] lg:min-h-screen h-[80vh] bg-center bg-cover bg-no-repeat">
        <div className="bg-[#000000]/50 lg:min-h-screen h-[80vh] lg:pt-10">
          <TopNav />

          <div className="flex-1 flex lg:mt-[25vh] mt-[20vh] items-center justify-center">
            <div className="bg-[#808080]/40 backdrop-blur-2xl w-[95vw] lg:p-10 p-6 rounded-4xl text-[#fff] mx-auto">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center space-x-3">
                  <ServiceIcon size="36" color="#1F3887" />
                  <h2 className="text-[#1F3887] uppercase font-bold lg:text-[20px]">
                    Onestep<span className="text-[#ED1C24]">ahead</span>
                  </h2>
                </div>
                <div>
                  <h2 className="lg:text-[48px] text-[20px] font-semibold uppercase">
                    Careers
                  </h2>
                  <p className="text-[14px] pt-2">
                    The latest industry news, interviews, technologies, and
                    resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 w-[90vw] mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-start">
          <div className="space-y-4 lg:w-[50%]">
            <h2 className="lg:text-[36px] text-[30px] font-bold">
              Open positions
            </h2>
            <p className="text-[#667085] lg:text-[20px]">
              Recruiting the right candidates, for the right job at the right
              time also involves using the right tools. Our recruitment services
              ensure that the organization adopts best practice assessment tools
              and interviews techniques that address the business needs and
              obtains value
            </p>
          </div>

          <div className="lg:w-[35%] w-[100%] flex items-center space-x-3 mt-10">
            <label htmlFor="location" className="lg:block hidden">
              Location:
            </label>
            <div className="border border-[#D0D5DD] rounded-lg py-4 px-3 w-full flex items-center space-x-2">
              <LocationIcon />
              <select id="location" className="w-[100%]">
                <option value="all">All Locations</option>
                <option value="remote">Remote</option>
                <option value="onsite">Onsite</option>
              </select>
            </div>
          </div>

          <div className="lg:hidden w-[100%] flex items-center space-x-3 mt-4">
            <div className="border border-[#D0D5DD] rounded-lg py-4 px-3 w-full flex items-center space-x-2">
              <BriefcaseIcon />
              <select id="location" className="w-[100%]">
                <option value="all">View all openings</option>
                <option value="design">Design</option>
                <option value="software">Software Engineering</option>
                <option value="customer-success">Customer Success</option>
                <option value="sales">Sales</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80vw] mx-auto lg:flex hidden text-[#667085] justify-center space-x-6 mt-20">
        <button className="bg-[#E9ECF4] py-3 px-6 text-[#182B69] rounded-lg">
          View all
        </button>
        <button className="">Design</button>
        <button className="">Software Engineering</button>
        <button className="">Customer Success</button>
        <button className="">Sales</button>
        <button className="">Marketing</button>
      </div>

      <div className="mt-20 space-y-6 w-[90vw] mx-auto">
        {openRoles.map((role) => (
          <div
            key={role.id}
            className="lg:border-y-2 border-[#ccc] py-10 flex lg:flex-row flex-col justify-between"
          >
            <div className="lg:w-[35%]">
              <h2 className="text-[20px] font-semibold">{role.category}</h2>
              <p className="text-[#667085]">{role.catDesc}</p>
            </div>

            <div className="lg:w-[60%] space-y-6">
              {role.roles.map((job) => (
                <div
                  key={job.id}
                  className="border border-[#ccc] rounded-2xl lg:p-10 p-4 mt-6 lg:mt-0"
                >
                  <div className="flex lg:flex-row flex-col items-start justify-between">
                    <div className="lg:space-y-1 space-y-3 flex flex-col items-start">
                      <h2 className="text-[18px] font-semibold">{job.title}</h2>
                      <div className="flex lg:hidden items-center space-x-2 lg:mt-0 bg-[#E9ECF4] font-semibold py-2 px-4 rounded-lg">
                        <LocationIcon />
                        <p className="text-[#667085] text-[14px]">{job.location}</p>
                      </div>
                      <p className="text-gray-500">{job.description}</p>
                    </div>
                    <div className="lg:flex hidden items-center space-x-2 mt-3 lg:mt-0 bg-[#E9ECF4] font-semibold py-2 px-4 rounded-lg">
                      <LocationIcon />
                      <p className="text-[#667085]">{job.location}</p>
                    </div>
                  </div>

                  <div className="flex lg:flex-row flex-col justify-between lg:items-center space-y-3 lg:space-y-0 mt-10">
                    <div className="flex items-center space-x-10">
                      <div className="flex items-center space-x-3">
                        <ClockIcon />
                        <p className="text-[#78797B]">{job.type}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <DollarIcon />
                        <p className="text-[#78797B]">{job.salary}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MiniCalendarIcon />
                      <p className="text-[#78797B]">{job.postedDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="lg:flex hidden justify-between items-center mt-10 w-[100%]">
          <button className="bg-[#E9ECF4] flex items-center font-semibold space-x-3 py-3 px-6 text-[#182B69] rounded-lg">
            <ArrowLeft size={18} />
            <span>Previous</span>
          </button>
          <div className="flex items-center space-x-6">
            <button className="bg-[#E9ECF4] py-2 px-3 text-[#182B69] rounded-lg">
              1
            </button>
            <button className=" text-[#182B69] rounded-lg">2</button>
            <button className=" text-[#182B69] rounded-lg">3</button>
            <button className=" text-[#182B69] rounded-lg">....</button>
            <button className=" text-[#182B69] rounded-lg">8</button>
            <button className=" text-[#182B69] rounded-lg">9</button>
            <button className=" text-[#182B69] rounded-lg">10</button>
          </div>
          <button className="bg-[#E9ECF4] flex items-center font-semibold space-x-3 py-3 px-6 text-[#182B69] rounded-lg">
            <span>Next</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="lg:mt-30 mt-10 w-[90vw] mx-auto">
        <img
          src="/assets/career.png"
          alt="career-img"
          className="w-[100%] lg:h-[400px] h-[200px]"
        />
      </div>
    </div>
  );
};

export default Careers;
