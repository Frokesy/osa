import { Circooles, Famacare, Newrest, Paga, Sudabelt } from "../../svgs/Logos";

const TrustedClients = () => {
  return (
    <div className="w-[80vw] mx-auto mt-[10vh]">
      <h2 className="lg:text-[36px] text-[20px] font-bold text-center">
        Our Trusted Clients
      </h2>

      <div className="grid grid-cols-2 gap-6 mt-10 lg:grid-cols-5">
        <div className="flex justify-center">
          <Famacare />
        </div>

        <div className="flex justify-center">
          <Newrest />
        </div>
        <div className="flex justify-center">
          <Paga />
        </div>

        <div className="flex justify-center">
          <Sudabelt />
        </div>
        <div className="col-span-2 flex justify-center lg:col-span-1 lg:justify-normal">
          <Circooles />
        </div>
      </div>
    </div>
  );
};

export default TrustedClients;
