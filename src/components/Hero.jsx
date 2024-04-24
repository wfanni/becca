import { useEffect, useRef, useState } from "react";
import hi from "../assets/hi.svg";
import heroImg from "../assets/new-hero1.svg";
import Typed from "typed.js";

export default function Hero() {
  const typingText = useRef();
  //   const [delayTitle, setDelayTitle] = useState("translate-x-[-200%]");

  useEffect(() => {
    const typed = new Typed(typingText.current, {
      strings: [
        "Social Media Manager",
        "PPC Specialist",
        "Photographer",
        "Webdesigner",
      ],
      typeSpeed: 40,
      startDelay: 500,
      backSpeed: 15,
      backdelay: 700,
      loop: true,
      loopCount: Infinity,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  setTimeout(() => {
    setDelayBecca("translate-x-0");
  }, 1800);

  return (
    <section className="relative w-full h-screen bg-hero bg-cover flex flex-col justify-center items-center">
      <div className="w-4/5 flex flex-col gap-4 justify-center items-start">
        <h1 className="text-5xl font-light font-['Raleway']">Hi, I'm Rebecca Hendel</h1>
        <h3
          ref={typingText}
          className="h-4 w-fit text-3xl font-semibold text-red indent-1"
        ></h3>
      </div>
    </section>
  );
}
