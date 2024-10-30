import Hero from "../components/Hero";
import Header from "../components/Header";
import SectionCards from "../components/SectionCards";
import SectionSpecialists from "../components/SectionSpecialists";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SectionCards />
      <SectionSpecialists />
    </div>
  );
};

export default Home;
