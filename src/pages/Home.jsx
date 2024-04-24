import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <HomeAbout />
      <Features />
      <Footer />
    </>
  );
}
