import { useEffect, useRef, useState } from "react";
import hi from "../assets/hi.svg";
import becca from "../assets/becca.svg";
import heroMobile from "../assets/hero-mobile1.png";
import Typed from "typed.js";

export default function Hero() {
  const typingText = useRef();
  const [delayBecca, setDelayBecca] = useState("translate-x-[-200%]");
  const [delayTitle, setDelayTitle] = useState("translate-x-[-200%]");

  useEffect(() => {
    const typed = new Typed(typingText.current, {
      strings: [
        "Social Media Manager",
        "PPC Specialist",
        "Photographer",
        "Webdesigner",
      ],
      typeSpeed: 40,
      startDelay: 2800,
      backSpeed: 15,
      backdelay: 700,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
      onComplete: (self) => {
        self.startDelay = 1;
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  setTimeout(() => {
    setDelayBecca("translate-x-0");
  }, 1800);
  setTimeout(() => {
    setDelayTitle("translate-x-0");
  }, 2800);

  return (
    <section className="relative w-full h-screen flex justify-center items-center bg-hero bg-cover bg-center cursor-default">
      {/* <img className="" src={heroMobile} /> */}
      <div className="w-1/2 h-1/2 flex flex-col gap-20 justify-start items-start">
        <div className="  ">
          <img src={hi} className="h-32 -ml-8 animate-bounceInLeft" />
          <img
            src={becca}
            className={`h-32 -mt-6 animate-[bounceInLeft_0.8s_ease-in-out_1s] ${delayBecca}`}
          />
          <h3
            className={`h-32 w-full -ml-12 -mt-6 relative bg-typing bg-[length:100%] bg-no-repeat animate-[bounceInLeft_0.8s_ease-in-out_2s] ${delayTitle}`}
          >
            {" "}
            <span
              className="absolute w-full text-2xl top-[0.8rem] left-[2.4rem]"
              ref={typingText}
            ></span>
          </h3>
        </div>
      </div>
    </section>
  );
}
