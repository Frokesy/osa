import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import {
  BlueDot,
  GreaterThanIcon,
  GreyDot,
  LessThanIcon,
} from "../../svgs/Icons";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  img: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 1.2 } },
  exit: { opacity: 0, transition: { duration: 1.2 } },
};

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current !== null) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    if (testimonials.length > 0) startTimer();
    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, [testimonials]);

  const nextTestimonial = () => {
    if (index < testimonials.length - 1) {
      setIndex((prev) => prev + 1);
      startTimer();
    }
  };

  const prevTestimonial = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      startTimer();
    }
  };

  if (testimonials.length === 0) return null;

  return (
    <div className="w-[85vw] mx-auto mt-20">
      <div className="flex flex-col items-center justify-center pt-10">
        <h2 className="lg:text-[36px] text-[24px] text-[#223D94] font-semibold">
          Testimonials
        </h2>
        <p className="lg:text-[20px] text-[#667085] text-center pt-2">
          What our clients say, based on quality experience at 1Stepahead.
        </p>
      </div>

      <div className="flex flex-col space-y-6 mt-10">
        <div className="flex flex-col items-center space-y-6 h-[400px] lg:min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center space-y-6"
            >
              <h2 className="text-[#000] lg:text-[36px] text-[18px] font-semibold text-center">
                "{testimonials[index].text}"
              </h2>
              <div className="space-y-3 flex flex-col items-center">
                <img
                  src={testimonials[index].img}
                  alt={testimonials[index].name}
                  className="w-[80px] h-[80px] rounded-full object-cover"
                />
                <h3 className="text-[#000] text-[18px] font-semibold">
                  {testimonials[index].name}
                </h3>
                <p className="text-[#667085]">{testimonials[index].role}</p>
                <div className="flex items-center space-x-2 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="#FEC84B" stroke="#FEC84B" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center space-x-10 justify-center mt-10">
          <button
            onClick={prevTestimonial}
            disabled={index === 0}
            className={`bg-[#fff] shadow-xl px-4 py-3 rounded-full ${
              index === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <LessThanIcon color={index === 0 ? "#D7D8D9" : "#1F3887"} />
          </button>

          <div className="flex space-x-3">
            {testimonials.map((_, i) =>
              i === index ? <BlueDot key={i} /> : <GreyDot key={i} />
            )}
          </div>

          <button
            onClick={nextTestimonial}
            disabled={index === testimonials.length - 1}
            className={`bg-[#fff] py-3 px-4 shadow-xl rounded-full ${
              index === testimonials.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <GreaterThanIcon
              color={index === testimonials.length - 1 ? "#D7D8D9" : "#1F3887"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
