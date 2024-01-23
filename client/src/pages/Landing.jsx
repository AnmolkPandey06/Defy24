import Navbar from "../components/LandingComponents/Navbar";
import Hero from "../components/LandingComponents/Hero";
import Analytics from "../components/LandingComponents/Analytics";
import Newsletter from "../components/LandingComponents/Newsletter";
import Cards from "../components/LandingComponents/Cards";
import Footer from "../components/LandingComponents/Footer";

const Landing = () => {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
};

export default Landing;