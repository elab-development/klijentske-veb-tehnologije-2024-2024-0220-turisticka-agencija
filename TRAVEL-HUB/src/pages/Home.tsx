import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import CardContainer from "../components/home/CardContainer";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <section className="w-full pt-17 flex flex-col items-center ">
      <Header />
      <Hero />
      <CardContainer />
      <Footer />
    </section>
  );
};

export default Home;
