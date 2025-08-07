import Footer from "../../components/defaults/Footer"
import About from "../../components/sections/home/About"
import Hero from "../../components/sections/home/Hero"
import NewsHighlights from "../../components/sections/home/NewsHighlights"
import TrustedClients from "../../components/sections/home/TrustedClients"

const Home = () => {
  return (
    <div className="">
        <Hero />
        <About />
        <NewsHighlights />
        <TrustedClients />
        <Footer />
    </div>
  )
}

export default Home
