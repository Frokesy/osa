import { useRef, useState, useEffect } from "react";

const Services = () => {
  const serviceItems = [
    {
      title: "HR & Advisory",
      desc: "Our expert HR advisory services provide strategic guidance on talent management, compliance, and organizational development.",
      img: "/assets/services-nine.png",
    },
    {
      title: "Vocational Training",
      desc: "We offer hands-on vocational training programs to equip individuals with practical skills for today's evolving job market.",
      img: "/assets/services-one.png",
    },
    {
      title: "Recognition systems",
      img: "/assets/services-ten.png",
      desc: "We design and implement performance-based recognition programs that boost employee morale, productivity, and retention.",
    },
    {
      title: "Consulting for Govt. & NGOs.",
      desc: "We partner with government bodies and NGOs to develop workforce solutions, policy frameworks, and capacity-building initiatives.",
      img: "/assets/services-twelve.png",
    },
    {
      title: "Recruitment & Selection Services",
      desc: "We help you attract, assess, and hire the right talent to drive your business forward.",
      img: "/assets/services-eight.png",
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector("div");
      if (firstCard) {
        const styles = window.getComputedStyle(firstCard);
        const gap = parseFloat(styles.marginRight || "0");
        setCardWidth(firstCard.clientWidth + gap);
      }
    }
  }, []);

  const updateButtonState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setDisablePrev(scrollLeft <= 0);
      setDisableNext(scrollLeft + clientWidth >= scrollWidth - 5);
    }
  };

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
      setTimeout(updateButtonState, 300);
    }
  };

  return (
    <div className="mt-20 w-[90vw] mx-auto">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[#223D94] lg:text-[36px] text-[20px] font-semibold">
            Our Services
          </h2>
          <p className="text-[#667085] lg:text-[20px] text-[12px] mt-1">
            Comprehensive HR solutions tailored to empower your workforce and
            drive organizational growth.
          </p>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => scrollByAmount(-cardWidth)}
            disabled={disablePrev}
            className={`bg-[#fff] shadow px-4 py-2 rounded-full ${
              disablePrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            ◀
          </button>
          <button
            onClick={() => scrollByAmount(cardWidth)}
            disabled={disableNext}
            className={`bg-[#fff] shadow px-4 py-2 rounded-full ${
              disableNext ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            ▶
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateButtonState}
        className="flex space-x-6 mt-10 flex-nowrap overflow-x-hidden"
      >
        {serviceItems.map((item, idx) => (
          <div
            key={idx}
            className="group relative h-[357px] lg:w-[420px] w-[90vw] flex-shrink-0 bg-center bg-cover overflow-hidden"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          >
            <div className="absolute bottom-0 flex items-end pb-10 left-0 w-full h-full bg-black/40 text-white lg:text-[20px] p-3 z-10">
              {item.title}
            </div>

            <div className="absolute inset-0 bg-[#E9ECF4] translate-y-full group-hover:translate-y-0 z-30 transition-transform duration-500 ease-out flex items-center p-6 lg:p-10 text-black">
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[#667085]">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
