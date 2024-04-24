import { Link } from "react-router-dom";
import profile from "../assets/profile-edited2.png";
import Success from "./Success";

export default function About() {
  return (
    <section className="w-full mx-auto h-fit bg-about py-12 flex flex-col gap-12 justify-start items-center">
        <div className="w-4/5 gap-28 flex justify-between items-center">
            <img src={profile} className="w-2/5" />
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl w-fit">About Me</h1>
                <p className="w-4/5">Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke.</p>
                <Link to={`/about`} className="place-self-center w-fit px-4 py-2 mt-4 bg-red text-white rounded-full hover:bg-red/80 transition-all duration-200 shadow-lg">Read my full story</Link>
            </div>
        </div>
        <Success />
    </section>
  );
}
