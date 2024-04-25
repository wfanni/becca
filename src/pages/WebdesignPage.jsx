import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Webdesign from "../components/Webdesign";
import workContent from "../workContent";

export default function WebdesignPage() {
  return (
    <>
      <Menu />
      <Webdesign content={workContent.webdesign} />
      <Footer />
    </>
  );
}