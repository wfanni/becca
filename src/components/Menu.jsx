import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Menu() {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <nav className="w-full">
      <ul className="relative h-12 flex gap-8 justify-center items-center bg-black text-white after:content-[''] after:absolute after:bottom-[-4px] after:w-full after:h-[4px] after:bg-shining">
        <li className="hover:text-gold transition-all duration-200">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="hover:text-gold transition-all duration-200">
          <Link to={`/about`}>About</Link>
        </li>
        <li className="group relative hover:text-gold transition-all duration-200">
          <button onClick={handleDropdown}>
            <span>Work</span>
            <i className="ml-2 fa-solid fa-angle-down"></i>
          </button>

          <ul
            className={`${
              isDropDownOpen ? "block" : "hidden"
            } absolute top-12 w-44 whitespace-nowrap bg-gold/80 p-4 rounded-md shadow-smooth`}
          >
            <li className="rounded-md text-black hover:bg-black/20 hover:font-bold transition-all duration-200">
              <Link to={`/social-media-works`} className="w-full p-2 inline-block">Social Media</Link>
            </li>
            <li className="rounded-md text-black hover:bg-black/20 hover:font-bold transition-all duration-200">
              <Link to={`/advertisement-works`} className="w-full p-2 inline-block">Ads</Link>
            </li>
            <li className="rounded-md text-black hover:bg-black/20 hover:font-bold transition-all duration-200">
              <Link to={`/photography-works`} className="w-full p-2 inline-block">Photography</Link>
            </li>
            <li className="rounded-md text-black hover:bg-black/20 hover:font-bold transition-all duration-200">
              <Link to={`/webdesgn-works`} className="w-full p-2 inline-block">Webdesign</Link>
            </li>
          </ul>
        </li>
        <li className="hover:text-gold transition-all duration-200">
          <Link> to={`/contact`}Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

