import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import workContent from "../workContent";

export default function AdsPage() {
  return (
    <>
      <Menu />
      <Advertisement content={workContent.marketing}/>
      <Footer />
    </>
  );
}