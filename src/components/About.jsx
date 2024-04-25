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
          <p className="row-start-2 self-center">
            Normally, both your asses would be dead as fucking fried chicken,
            but you happen to pull this shit while I'm in a transitional period
            so I don't wanna kill you, I wanna help you. But I can't give you
            this case, it don't belong to me. Besides, I've already been through
            too much shit this morning over this case to hand it over to your
            dumb ass.
          </p>
          <p className="row-start-3">
            My money's in that office, right? If she start giving me some
            bullshit about it ain't there, and we got to go someplace else and
            get it, I'm gonna shoot you in the head then and there. Then I'm
            gonna shoot that bitch in the kneecaps, find out where my goddamn
            money is. She gonna tell me too. Hey, look at me when I'm talking to
            you, motherfucker. You listen: we go in there, and that nigga
            Winston or anybody else is in there, you the first motherfucker to
            get shot. You understand?
          </p>
          <p className="row-start-4">
            You think water moves fast? You should see ice. It moves like it has
            a mind. Like it knows it killed the world once and got a taste for
            murder. After the avalanche, it took us a week to climb out. Now, I
            don't know exactly when we turned on each other, but I know that
            seven of us survived the slide... and only five made it out. Now we
            took an oath, that I'm breaking now. We said we'd say it was the
            snow that killed the other two, but it wasn't. Nature is lethal but
            it doesn't hold a candle to man.
          </p>

        </div>
          <img
            src={aboutPic}
            className="w-1/2 mt-12"
          />
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
