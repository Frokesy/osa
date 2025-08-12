import { NavLink } from "react-router-dom";
import TopNav from "../../defaults/TopNav";
import { SkillIcon, TelIcon } from "../../svgs/Icons";
import { motion } from "framer-motion";

const contentVariants = {
  hidden: { opacity: 0, y: 500 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 1 },
  }),
};

const Hero = () => {
  return (
    <div className="bg-[url('/assets/hero-img.png')] min-h-screen bg-center bg-cover bg-no-repeat">
      <div className="bg-[#223D94]/20 min-h-screen">
        <TopNav />

        <div className="lg:mt-[10vh] mt-20 flex flex-col justify-center items-center text-white space-y-6">
          <motion.p
            custom={0}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className=""
          >
            Always. 1Step. Ahead.
          </motion.p>
          <motion.div
            custom={0}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="lg:text-[60px] text-[28px] font-bold text-center lg:w-[40%] w-[90%]"
          >
            <span className="uppercase">1stepahead</span> is your one-stop HR
            consultant
          </motion.div>
          <motion.p
            custom={1}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="text-[18px] lg:w-[40%] text-center"
          >
            We provide first-class HR consulting focused on trust, excellence,
            and customer satisfaction—delivered with speed and integrity.
          </motion.p>

          <motion.div
            custom={2}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center space-x-4 w-[90%] justify-center lg:text-[16px] text-[12px]"
          >
            <NavLink
              to="/contact"
              className="flex items-center space-x-4 bg-[#fff] text-[#333] px-4 lg:px-10 py-4 font-semibold rounded-lg"
            >
              <TelIcon />
              <span>Contact us</span>
            </NavLink>
            <NavLink
              to="/services/vsd"
              className="flex items-center space-x-4 px-4 lg:px-10 py-4 font-semibold rounded-xl bg-[#E30613] hover:bg-[#c0050f] transition-colors"
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
        className="absolute -bottom-20 lg:px-20 px-4 w-[100%]"
      >
        <div className="flex justify-center rounded-xl bg-[#fff] text-[#333] ">
          <div className="lg:w-[70%] w-[90%] lg:py-10 py-6">
            <h2 className="text-[14px]">Search skill</h2>
            <div className="flex lg:flex-row flex-col lg:items-center lg:space-x-10">
              <div className="flex items-center mt-2 space-x-3 p-3 border border-[#ccc] lg:w-[75%] rounded-lg">
                <SkillIcon />
                <input
                  type="text"
                  placeholder="What skill do you want to learn?"
                  className="outline-none w-[100%]"
                />
              </div>
              <button className="text-[#fff] lg:mt-0 mt-3 space-x-4 px-4 lg:w-[20%] lg:px-10 py-3 font-semibold rounded-xl bg-[#E30613] hover:bg-[#c0050f] transition-colors">
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
