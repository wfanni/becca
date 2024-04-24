import { Link } from "react-router-dom";
import ad from "../assets/rectangle-ad-solid.svg";
import contentCreation from "../assets/content-creation.jpg";
import advert from "../assets/advertisement.jpg";
import photography from "../assets/photography.jpg";
import webdesign from "../assets/webdesign1.jpg";

export default function Services() {
  return (
    <article className="flex gap-8 justify-center items-center">
      <Link
        to={`/social-media-works`}
        className="group relative w-60 h-60 rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-smooth hover:scale-105 flex flex-col gap-2 items-center text-xl transition-all duration-200"
      >
        <img className="w-full h-1/2 object-cover scale-125" src={contentCreation} alt="content creation photo"/>
        <label className="p-4 font-bold text-center cursor-pointer transition-all duration-200">Content creation</label>
        <button className="flex items-center group-hover:text-red group-hover:font-bold transition-all duration-200">Read more<i className="ml-2 mt-[0.1rem] leading-4 fa-solid fa-angle-right group-hover:animate-slide"></i></button>
      </Link>
      <Link
        to={`/advertisement-works`}
        className="group relative w-60 h-60 rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-smooth hover:scale-105 flex flex-col gap-2 items-center text-xl transition-all duration-200"
      >
        <img className="w-full h-1/2 object-cover scale-125" src={advert} alt="content creation photo"/>
        <label className="p-4 font-bold text-center cursor-pointer transition-all duration-200">Ad management</label>
        <button className="flex items-center group-hover:text-red group-hover:font-bold transition-all duration-200">Read more<i className="ml-2 mt-[0.1rem] leading-4 fa-solid fa-angle-right group-hover:animate-slide"></i></button>
      </Link>
      <Link
        to={`/photography-works`}
        className="group relative w-60 h-60 rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-smooth hover:scale-105 flex flex-col gap-2 items-center text-xl transition-all duration-200"
      >
        <img className="w-full h-1/2 object-cover scale-125" src={photography} alt="content creation photo"/>
        <label className="p-4 font-bold text-center cursor-pointer transition-all duration-200">Photography</label>
        <button className="flex items-center group-hover:text-red group-hover:font-bold transition-all duration-200">Read more<i className="ml-2 mt-[0.1rem] leading-4 fa-solid fa-angle-right group-hover:animate-slide"></i></button>
      </Link>
      <Link
        to={`/webdesign-works`}
        className="group relative w-60 h-60 rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-smooth hover:scale-105 flex flex-col gap-2 items-center text-xl transition-all duration-200"
      >
        <img className="w-full h-1/2 object-cover scale-125" src={webdesign} alt="content creation photo"/>
        <label className="p-4 font-bold text-center cursor-pointer transition-all duration-200">Webdesign</label>
        <button className="flex items-center group-hover:text-red group-hover:font-bold transition-all duration-200">Read more<i className="ml-2 mt-[0.1rem] leading-4 fa-solid fa-angle-right group-hover:animate-slide"></i></button>
      </Link>
    </article>
  );
}
