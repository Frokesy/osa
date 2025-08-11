import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import TopNav from "../../components/defaults/TopNav";

const Gallery = () => {
  return (
    <Container>
      <TopNav />

      <div className="flex flex-col items-center justify-center pt-10">
        <h2 className="lg:text-[36px] text-[24px] text-[#223D94] font-semibold">
          Gallery
        </h2>
      </div>

      <div className="w-[90vw] mx-auto mt-10">
        <img
          src="/assets/services-two.png"
          alt="img"
          className="w-[100%] lg:h-[480px] h-[300px] object-cover"
        />
        <div className="my-6 grid lg:grid-cols-4 grid-cols-1 gap-4">
          <img
            src="/assets/services-three.png"
            alt="img"
            className="w-[100%] h-[300px] object-cover"
          />
          <img
            src="/assets/services-five.png"
            alt="img"
            className="w-[100%] h-[300px] object-cover"
          />
          <img
            src="/assets/services-four.png"
            alt="img"
            className="w-[100%] h-[300px] object-cover"
          />
          <img
            src="/assets/services-six.png"
            alt="img"
            className="w-[100%] h-[300px] object-cover"
          />
        </div>
        <div className="my-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <img
            src="/assets/services-one.png"
            alt="img"
            className="w-[100%] lg:h-[480px] h-[300px] object-cover"
          />
          <img
            src="/assets/services-eight.png"
            alt="img"
            className="w-[100%] lg:h-[480px] h-[300px] object-cover"
          />
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Gallery;
