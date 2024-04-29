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
    <nav className="w-[95%] z-10 fixed top-4 left-[50%] translate-x-[-50%]">
      <ul className="relative h-16 w-full rounded-full shadow-smooth flex gap-8 justify-center items-center bg-white text-black ">
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
            <i className={`${isDropDownOpen ? "fa-angle-up" : "fa-angle-down"} ml-2 fa-solid`}></i>
          </button>

        </li>
        <li className="absolute top-0">
          <ul
            className={`${
              isDropDownOpen ? "block" : "hidden"
            } absolute top-[4.5rem] w-44 whitespace-nowrap bg-white p-2 rounded-2xl shadow-smooth`}
          >
            <li className="rounded-lg text-black hover:bg-black/10 hover:font-bold hover:text-red transition-all duration-200">
              <Link
                to={`/works/social-media`}
                className="w-full p-2 inline-block"
              >
                Content Creation
              </Link>
            </li>
            <li className="rounded-lg text-black hover:bg-black/10 hover:font-bold hover:text-red transition-all duration-200">
              <Link
                to={`/works/advertisement`}
                className="w-full p-2 inline-block"
              >
                Marketing
              </Link>
            </li>
            <li className="rounded-lg text-black hover:bg-black/10 hover:font-bold hover:text-red transition-all duration-200">
              <Link
                to={`/works/photography`}
                className="w-full p-2 inline-block"
              >
                Photography
              </Link>
            </li>
            <li className="rounded-lg text-black hover:bg-black/10 hover:font-bold hover:text-red transition-all duration-200">
              <Link to={`/works/webdesign`} className="w-full p-2 inline-block">
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
