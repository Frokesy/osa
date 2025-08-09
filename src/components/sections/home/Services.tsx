const Services = () => {
  const serviceItems = [
    { title: "HR & Advisory", img: "/assets/services-one.png" },
    { title: "Vocational Training", img: "/assets/services-two.png" },
    { title: "Recognition systems", img: "/assets/services-three.png" },
    { title: "Payroll Management", img: "/assets/services-four.png" },
    { title: "Compliance Support", img: "/assets/services-five.png" },
    { title: "HR Consulting", img: "/assets/services-six.png" },
  ]
  return (
    <div className="mt-20 w-[90vw] mx-auto">
      <h2 className="text-[#223D94] lg:text-[36px] text-[24px] font-semibold">
        Our Services
      </h2>
      <p className="text-[#667085] lg:text-[20px] mt-1">
        Comprehensive HR solutions tailored to empower your workforce and drive
        organizational growth.
      </p>

      <div className="flex space-x-6 mt-10 flex-nowrap overflow-x-auto scrollbar-hide">
        {serviceItems.map((item, idx) => (
          <div
            key={idx}
            className="relative h-[357px] w-[420px] flex-shrink-0 bg-center bg-cover overflow-hidden"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          >
            <div className="absolute bottom-0 flex items-end pb-10 left-0 w-full h-full bg-black/40 text-white lg:text-[20px] p-3">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
