import Footer from "../components/Footer";
import Menu from "../components/Menu";
import SocialMedia from "../components/SocialMedia";
import workContent from "../workContent";

export default function SocialMediaPage() {
  return workContent ? (
    <>
      <Menu />
      <SocialMedia content={workContent.social}/>
      <Footer />
    </>
  ) : <h1>Loading...</h1>;
}