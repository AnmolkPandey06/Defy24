import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {

  const [ConnectWallet,setConnectWallet]=useState(true);
  // let Links = [
  //   { name: "Home", link: "/" },
  //   { name: "SERVICE", link: "/" },
  //   { name: "ABOUT", link: "/" },
  //   { name: "CONTACT", link: "/" },
  // ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-cyan-950 py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <BookOpenIcon className="w-7 h-7 text-blue-600" />
          <span className="text-white">Dashboard</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white rounded-sm md:z-auto z-[4] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >

          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <Link to={"/"} className="text-cyan-950 font-bold hover:text-blue-400 duration-500">
                 Home 
            </Link>
            <Link to={"/"} className="text-cyan-950 font-bold hover:text-blue-400 duration-500">
                 Services 
            </Link>
            <Link to={"/"} className="text-cyan-950 font-bold hover:text-blue-400 duration-500">
                 About 
            </Link>
            <Link to={"/"} className="text-cyan-950 font-bold hover:text-blue-400 duration-500">
                 Contact
            </Link>
          </li>
         
          {/* <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get Started
          </button> */}
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;