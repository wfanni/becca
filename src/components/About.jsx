import { Link } from "react-router-dom";
import aboutPic from "../assets/about-pic.png";
import Success from "./Success";

export default function About() {
  return (
    <section className="w-full mx-auto h-fit bg-gray-gradient py-12 pt-32 flex flex-col gap-12 justify-start items-center">
      <div className="w-4/5 gap-12 flex justify-center items-center">
        <div className="w-1/2 gap-8 flex flex-col text-justify">
          <h1 className="text-4xl w-fit self-center justify-self-center">
            About Me
          </h1>
          <p>
            As a content creator, I create photos, videos for social media. I
            strive to make my work reflect the personality and brand of my
            clients, thereby also helping them find their online voice.
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="font-playfair text-xl text-red font-semibold">
              Crafting Digital Experiences
            </h2>
            <p>
              I approach every project with a fresh perspective, infusing
              creativity into every aspect of my work. Through captivating
              photos, engaging videos, and compelling content, I help brands
              connect with their audience authentically.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-playfair text-xl text-red font-semibold">
              Personalized Branding
            </h2>
            <p>
              Understanding that each brand has its own unique voice, I
              specialize in creating content that reflects the personality and
              ethos of my clients. By aligning visual aesthetics and messaging,
              I empower brands to find their distinct online identity.
            </p>
          </div>
        </div>
        <img src={aboutPic} className="w-1/2 mt-12" />
      </div>
      <div className="w-4/5 -mt-28 pb-16 flex flex-col gap-8 items-start text-justify">
        <div className="flex flex-col gap-4">
          <h2 className="font-playfair text-xl text-red font-semibold">
            Driving Results
          </h2>
          <p className="w-3/4">
            With over two years of experience in PPC and social media
            management, I have honed my skills in crafting targeted
            advertisements that resonate with diverse audiences. From strategy
            development to execution, I am committed to delivering impactful
            campaigns that drive measurable results.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-playfair text-xl text-red font-semibold">
            Driving Results
          </h2>
          <p className="w-3/4">
            A Proactive Approach: Driven by a keen eye for detail and a passion
            for excellence, I take a proactive approach to every project. By
            staying ahead of industry trends and leveraging data-driven
            insights, I ensure that every campaign achieves optimal performance
            and exceeds expectations.
          </p>
        </div>
        <p>Let's collaborate to unlock the full potential of your digital presence and bring your brand vision to life.</p>
      </div>
      <Link
        to={`/contact`}
        className="place-self-center w-fit -mt-12 py-2 px-12 bg-red rounded-full text-white font-semibold hover:bg-black hover:shadow-md transition-all duration-300"
      >
        Contact me
      </Link>
    </section>
  );
}
