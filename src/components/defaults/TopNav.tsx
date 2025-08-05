import { NavLink } from "react-router-dom";
import { CaretDown, Hamburger, TelIcon } from "../svgs/Icons";

const TopNav = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About" },
    { name: "Our services" },
    { name: "Media room" },
    { name: "Career", path: "/career" },
  ];
  return (
      <div className="lg:w-[95vw] z-20 bg-[#808080]/40 backdrop-blur-xs flex justify-between items-center text-[#fff] py-4 lg:px-10 px-6 mx-auto lg:rounded-4xl">
        <div className="flex items-center space-x-20">
          <img src="/assets/logo.svg" alt="logo" />
          <div className="lg:flex hidden items-center space-x-10">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path || "#"}
                className={`text-[16px] flex items-center space-x-3`}
              >
                <span>{item.name}</span>
                {!item.path && <CaretDown />}
              </NavLink>
            ))}
          </div>
        </div>
        <NavLink to="/contact" className="lg:flex hidden items-center space-x-4 bg-[#E30613] px-4 py-4 font-semibold rounded-xl hover:bg-[#c0050f] transition-colors">
          <span>Contact us</span>
          <TelIcon />
        </NavLink>
        <div className="lg:hidden">
          <Hamburger />
        </div>
      </div>
  );
};

export default TopNav;
