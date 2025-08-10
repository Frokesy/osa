import Container from "../../components/defaults/Container"
import Footer from "../../components/defaults/Footer"
import About from "../../components/sections/home/About"
import Hero from "../../components/sections/home/Hero"
import NewsHighlights from "../../components/sections/home/NewsHighlights"
import Programs from "../../components/sections/home/Programs"
import Services from "../../components/sections/home/Services"
import TrustedClients from "../../components/sections/home/TrustedClients"

const Home = () => {
  return (
    <Container>
        <Hero />
        <About />
        <Services />
        <Programs />
        <NewsHighlights />
        <TrustedClients />
        <Footer />
    </Container>
  )
}

export default Home
