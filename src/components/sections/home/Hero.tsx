import { NavLink } from "react-router-dom";
import TopNav from "../../defaults/TopNav";
import { SkillIcon, TelIcon } from "../../svgs/Icons";
import { motion } from "framer-motion";

const contentVariants = {
  hidden: { opacity: 0, y: 500 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 1.5 },
  }),
};

const Hero = ({ heroImg, subtext }: { heroImg: string; subtext: string }) => {
  return (
    <div
      className="min-h-screen bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="bg-[#223D94]/20 min-h-screen">
        <TopNav />

        <div className="lg:mt-[10vh] mt-20 flex flex-col justify-center items-center text-white space-y-6">
          <motion.p
            custom={0}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            Always. 1Step. Ahead.
          </motion.p>

          <motion.div
            custom={0}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="font-bold text-center w-[90%] md:w-[70%] lg:w-[40%] text-[28px] md:text-[40px] lg:text-[60px]"
          >
            <span className="uppercase">1stepahead</span> is your one-stop HR
            consultant
          </motion.div>

          <motion.p
            custom={1}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="text-[16px] md:text-[18px] text-center px-4 md:px-6 lg:px-0 w-[90%] md:w-[70%] lg:w-[40%]"
          >
            {subtext}
          </motion.p>

          <motion.div
            custom={2}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center flex-col md:flex-row md:space-x-4 w-[90%] justify-center md:text-[14px] lg:text-[16px] text-[12px]"
          >
            <NavLink
              to="/contact"
              className="flex items-center space-x-4 bg-[#fff] text-[#333] px-4 md:px-6 lg:px-10 py-4 font-semibold rounded-lg"
            >
              <TelIcon />
              <span>Contact us</span>
            </NavLink>
            <NavLink
              to="/services/vsd"
              className="flex items-center space-x-4 px-4 md:px-6 lg:px-10 py-4 font-semibold rounded-xl bg-[#E30613] hover:bg-[#c0050f] transition-colors mt-3 md:mt-0"
            >
              Explore Training
            </NavLink>
          </motion.div>
        </div>
      </div>

      <motion.div
        custom={3}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="absolute -bottom-20 px-4 md:px-10 lg:px-20 w-full"
      >
        <div className="flex justify-center rounded-xl bg-[#fff] text-[#333]">
          <div className="w-[90%] md:w-[80%] lg:w-[70%] py-6 lg:py-10">
            <h2 className="text-[14px]">Search skill</h2>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 lg:space-x-10">
              <div className="flex items-center mt-2 space-x-3 p-3 border border-[#ccc] w-full md:w-[75%] rounded-lg">
                <SkillIcon />
                <input
                  type="text"
                  placeholder="What skill do you want to learn?"
                  className="outline-none w-full"
                />
              </div>
              <button className="text-[#fff] mt-3 md:mt-0 px-4 md:px-6 lg:px-10 py-3 font-semibold rounded-xl bg-[#E30613] hover:bg-[#c0050f] transition-colors w-full md:w-[25%] lg:w-[20%]">
                Search Skill
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
