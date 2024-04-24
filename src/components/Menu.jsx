import { useEffect, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo2.svg";

export default function Menu() {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleBlur, true);
    return () => {
      document.removeEventListener("click", handleBlur, true);
    };
  }, []);

  function handleBlur(e) {
    if (dropdownRef && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  }
  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <nav className="w-full z-10 fixed top-0 left-0">
      <ul className="relative h-16 shadow-smooth flex gap-8 justify-center items-center bg-white text-black after:content-[''] after:absolute after:bottom-[-4px] after:w-full after:h-[4px] after:bg-shining">
        <img className="h-8" src={logo} alt="Rebecca Hendel logo" />
        <li className="hover:text-red hover:font-bold w-[100px] text-center transition-all duration-200">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="hover:text-red hover:font-bold w-[100px] text-center transition-all duration-200">
          <Link to={`/about`}>About</Link>
        </li>
        <li
          ref={dropdownRef}
          className="relative hover:text-red hover:font-bold w-[100px] text-center transition-all duration-200"
        >
          <button onClick={handleDropdown}>
            <span>Work</span>
            <i className="ml-2 fa-solid fa-angle-down"></i>
          </button>

        </li>
        <li className="absolute top-0">
          <ul
            className={`${
              isDropDownOpen ? "block" : "hidden"
            } absolute top-20 w-44 whitespace-nowrap bg-gold p-2 rounded-2xl shadow-smooth`}
          >
            <li className="rounded-lg text-black hover:bg-black/20 hover:font-bold transition-all duration-200">
              <Link
                to={`/social-media-works`}
                className="w-full p-2 inline-block"
              >
                Social Media
              </Link>
            </li>
            <li className="rounded-lg text-black hover:bg-black/20 hover:font-bold transition-all duration-200">
              <Link
                to={`/advertisement-works`}
                className="w-full p-2 inline-block"
              >
                Ads
              </Link>
            </li>
            <li className="rounded-lg text-black hover:bg-black/20 hover:font-bold transition-all duration-200">
              <Link
                to={`/photography-works`}
                className="w-full p-2 inline-block"
              >
                Photography
              </Link>
            </li>
            <li className="rounded-lg text-black hover:bg-black/20 hover:font-bold transition-all duration-200">
              <Link to={`/webdesign-works`} className="w-full p-2 inline-block">
                Webdesign
              </Link>
            </li>
          </ul>
          </li>
        <li className="hover:text-red hover:font-bold w-[100px] text-center transition-all duration-200">
          <Link to={`/contact`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
