import { Circooles, Famacare, Newrest, Paga, Sudabelt } from "../../svgs/Logos";

const TrustedClients = () => {
  return (
    <div className="lg:w-[80vw] w-[90vw] mx-auto mt-[10vh] overflow-hidden">
      <h2 className="lg:text-[36px] text-[20px] font-bold text-center">
        Our Trusted Clients
      </h2>

      <div className="scroll-wrapper mt-10">
        <div className="scroll-track">
          <div className="flex items-center lg:space-x-20 space-x-10">
            <Famacare />
            <Newrest />
            <Paga />
            <Sudabelt />
            <Circooles />
          </div>
          <div className="flex items-center lg:space-x-20 space-x-10 ml-10">
            <Famacare />
            <Newrest />
            <Paga />
            <Sudabelt />
            <Circooles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedClients;
