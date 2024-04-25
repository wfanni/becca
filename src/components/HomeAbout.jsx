import { Link } from "react-router-dom";
import profile from "../assets/profile22.png";
import Success from "./Success";

export default function HomeAbout() {
  return (
    <section className="w-full mx-auto h-fit bg-white py-12 flex flex-col gap-12 justify-start items-center">
        <div className="w-4/5 gap-28 flex justify-between items-center">
            <img src={profile} className="w-2/5 shadow-smooth rounded-full" />
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl w-fit">About Me</h1>
                <p className="w-4/5">Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke.</p>
                <Link to={`/about`} className="place-self-center w-fit py-2 px-12 bg-red rounded-full text-white font-semibold hover:bg-black hover:shadow-md transition-all duration-300">Read my full story</Link>
            </div>
        </div>
        <Success />
    </section>
  );
}
