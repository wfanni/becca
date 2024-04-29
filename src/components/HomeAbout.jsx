import { Link } from "react-router-dom";
import profile from "../assets/profile22.png";
import Success from "./Success";
import Splitscreen from "./Splitscreen";

export default function HomeAbout() {
  return (
    <section className="w-full mx-auto h-fit bg-white py-12 flex flex-col gap-12 justify-start items-center">
      <Splitscreen leftWeight={1} rightWeight={1} footer={true} gap={12} width={"4/5"} >
        <img src={profile} className="w-3/5 mx-auto shadow-smooth rounded-full" />

        <div className="gap-28 flex justify-between items-center">
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl w-fit">About Me</h1>
            <p className="w-full">
              With a blend of creativity and strategic insight, I bring brands
              to life in the digital world. As a multifaceted professional, I
              offer social media management, content creation, photography, and
              web design services tailored to elevate your online presence.
            </p>
            <Link
              to={`/about`}
              className="place-self-center w-fit py-2 px-12 bg-red rounded-full text-white font-semibold hover:bg-black hover:shadow-md transition-all duration-300"
            >
              Read my full story
            </Link>
          </div>
        </div>
        <Success />
      </Splitscreen>
    </section>
  );
}
