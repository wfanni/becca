import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Photography from "../components/Photography";
import workContent from "../workContent";

export default function PhotographyPage() {
  return (
    <>
      <Menu />
      <Photography content={workContent.photography}/>
      <Footer />
    </>
  );
}