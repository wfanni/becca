import { Link } from "react-router-dom";
import profile from "../assets/profile-edited2.png";
import Success from "./Success";

export default function About() {
  return (
    <section className="w-3/5 mx-auto h-fit bg-white py-12 flex flex-col gap-12 justify-start items-center">
        <div className="flex gap-12 justify-start items-center">
            <img src={profile} className="w-2/5" />
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl ">About Me</h1>
                <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke.</p>
                <Link to={`/about`} className="place-self-end px-4 py-2 mt-4 bg-red text-white rounded-full hover:bg-red/80 transition-all duration-200 shadow-lg">Read my full story</Link>
            </div>
        </div>
        <Success />
    </section>
  );
}
