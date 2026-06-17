import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import { useParams } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import Info from "../components/details/Info";

const Details = () => {
  const { id } = useParams();
  const { arrangements } = useAppContext();

  const targetArrangement = arrangements.find(
    (arrangement) => arrangement.id === Number(id),
  );

  return (
    <section className="w-full pt-17 flex flex-col items-center">
      <Header />
      <Info key={targetArrangement?.id} arrangement={targetArrangement} />
      <Footer />
    </section>
  );
};

export default Details;
