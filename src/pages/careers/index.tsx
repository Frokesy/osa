import { useEffect, useState } from "react";
import TopNav from "../../components/defaults/TopNav";
import {
  BriefcaseIcon,
  ClockIcon,
  LocationIcon,
  MiniCalendarIcon,
  NairaIcon,
  ServiceIcon,
} from "../../components/svgs/Icons";
import Footer from "../../components/defaults/Footer";
import Container from "../../components/defaults/Container";
import { client } from "../../sanity/client";
import { motion } from "framer-motion";

type Role = {
  title: string;
  description: string;
  location: string;
  type: string;
  salary: string;
  postedDate: string;
};

type CareerCategory = {
  _id: string;
  category: string;
  catDesc: string;
  roles: Role[];
};

const Careers = () => {
  const [openRoles, setOpenRoles] = useState<CareerCategory[]>([]);
  const [filteredRoles, setFilteredRoles] = useState<CareerCategory[]>([]);
  const [locationFilter, setLocationFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "careerCategory"]{
          _id,
          category,
          catDesc,
          roles[]{
            title,
            description,
            location,
            type,
            salary,
            postedDate
          }
        }
      `);
      setOpenRoles(data);
      setFilteredRoles(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...openRoles];

    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (cat) =>
          cat.category.toLowerCase().replace(/\s+/g, "-") === categoryFilter
      );
    }

    if (locationFilter !== "all") {
      filtered = filtered
        .map((cat) => ({
          ...cat,
          roles: cat.roles.filter((role) =>
            locationFilter === "remote"
              ? role.location.toLowerCase().includes("remote")
              : !role.location.toLowerCase().includes("remote")
          ),
        }))
        .filter((cat) => cat.roles.length > 0);
    }

    setFilteredRoles(filtered);
  }, [locationFilter, categoryFilter, openRoles]);

  return (
    <Container>
      <div className="bg-[url('/assets/career-hero.png')] lg:min-h-screen h-[80vh] bg-center bg-cover bg-no-repeat">
        <div className="bg-[#000000]/50 lg:min-h-screen h-[80vh]">
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
              <select
                id="location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-[100%]"
              >
                <option value="all">All Locations</option>
                <option value="remote">Remote</option>
                <option value="onsite">Onsite</option>
              </select>
            </div>
          </div>

          <div className="lg:hidden w-[100%] flex items-center space-x-3 mt-4">
            <div className="border border-[#D0D5DD] rounded-lg py-4 px-3 w-full flex items-center space-x-2">
              <BriefcaseIcon />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-[100%]"
              >
                <option value="all">View all openings</option>
                {openRoles.map((cat) => (
                  <option
                    key={cat._id}
                    value={cat.category.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {cat.category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80vw] mx-auto lg:flex hidden text-[#667085] justify-center space-x-6 mt-20">
        <button
          className={`py-3 px-6 rounded-lg ${
            categoryFilter === "all"
              ? "bg-[#E9ECF4] text-[#182B69] font-semibold"
              : ""
          } cursor-pointer transition-all ease-in-out duration-300`}
          onClick={() => setCategoryFilter("all")}
        >
          View all
        </button>
        {openRoles.map((cat) => (
          <button
            key={cat._id}
            className={`py-3 px-6 rounded-lg ${
              categoryFilter === cat.category.toLowerCase().replace(/\s+/g, "-")
                ? "bg-[#E9ECF4] text-[#182B69] font-semibold"
                : ""
            } cursor-pointer transition-all ease-in-out duration-300`}
            onClick={() =>
              setCategoryFilter(cat.category.toLowerCase().replace(/\s+/g, "-"))
            }
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="mt-20 space-y-6 w-[90vw] mx-auto">
        {filteredRoles.length === 0 ? (
          <p className="text-center text-gray-500">No roles found.</p>
        ) : (
          filteredRoles.map((roleCategory) => (
            <motion.div
              key={roleCategory._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:border-y-2 border-[#ccc] py-10 flex lg:flex-row flex-col justify-between"
            >
              <div className="lg:w-[35%]">
                <h2 className="text-[20px] font-semibold">
                  {roleCategory.category}
                </h2>
                <p className="text-[#667085]">{roleCategory.catDesc}</p>
              </div>

              <div className="lg:w-[60%] space-y-6">
                {roleCategory.roles?.map((job, idx) => (
                  <div
                    key={idx}
                    className="border border-[#ccc] rounded-2xl lg:p-10 p-4 mt-6 lg:mt-0"
                  >
                    <div className="flex lg:flex-row flex-col items-start justify-between">
                      <div className="lg:space-y-1 space-y-3 flex flex-col items-start">
                        <h2 className="text-[18px] font-semibold">
                          {job.title}
                        </h2>
                        <div className="flex lg:hidden items-center space-x-2 lg:mt-0 bg-[#E9ECF4] font-semibold py-2 px-4 rounded-lg">
                          <LocationIcon />
                          <p className="text-[#667085] text-[14px]">
                            {job.location}
                          </p>
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
                          <NairaIcon />
                          <p className="text-[#78797B]">{job.salary}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MiniCalendarIcon />
                        <p className="text-[#78797B]">
                          {new Date(job.postedDate).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </div>

      <div className="lg:mt-30 mt-10 w-[90vw] mx-auto">
        <img
          src="/assets/career.png"
          alt="career-img"
          className="w-[100%] lg:h-[400px] h-[200px]"
        />
      </div>

      <Footer />
    </Container>
  );
};

export default Careers;
