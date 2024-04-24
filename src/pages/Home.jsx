import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <main className="w-full bg-slate-200">
      <Menu />
      <Hero />
      <HomeAbout />
      <Features />
      <Footer />
    </main>
  );
}
