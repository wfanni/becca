import { Link } from "react-router-dom";
import ad from "../assets/rectangle-ad-solid.svg";

export default function Services() {
  return (
    <article className="flex gap-8 justify-center items-center">
      <Link
        to={`/social-media-works`}
        className="w-48 h-28 p-4 rounded-xl bg-white shadow-xl hover:shadow-smooth hover:scale-105 flex flex-col gap-4 justify-between items-center text-lg transition-all duration-200"
      >
        <i className="text-3xl fa-regular fa-lightbulb"></i>
        <label className="cursor-pointer">Content creation</label>
      </Link>
      <Link
        to={`/advertisement-works`}
        className="w-48 h-28 p-4 rounded-xl bg-white shadow-xl hover:shadow-smooth hover:scale-105 flex flex-col gap-4 justify-between items-center text-lg transition-all duration-200"
      >
        <img className="w-8 h-10" src={ad} alt="ad icon" />
        <label className="cursor-pointer">Ad management</label>
      </Link>
      <Link
        to={`/photography-works`}
        className="w-48 h-28 p-4 rounded-xl bg-white shadow-xl hover:shadow-smooth hover:scale-105 flex flex-col gap-4 justify-between items-center text-lg transition-all duration-200"
      >
        <i className="text-3xl fa-solid fa-camera-retro"></i>
        <label className="cursor-pointer">Photography</label>
      </Link>
      <Link
        to={`/webdesign-works`}
        className="w-48 h-28 p-4 rounded-xl bg-white shadow-xl hover:shadow-smooth hover:scale-105 flex flex-col gap-4 justify-between items-center text-lg transition-all duration-200"
      >
        <i className="text-3xl fa-solid fa-swatchbook"></i>
        <label className="cursor-pointer">Webdesign</label>
      </Link>
    </article>
  );
}
