import { Link, NavLink } from "react-router-dom";
import logo from "../assets/skibidiflix-logo.png";
import { navigation } from "../constants/navigation";
import { IoIosSearch } from "react-icons/io";
import { TbBellRinging } from "react-icons/tb";
import profileImage from "../assets/ProfileImage.png";
import { GoTriangleDown } from "react-icons/go";
import { useState } from "react";

const Header = () => {
  const [bgColor, setBgColor] = useState("transparent");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll >= 1) {
      setBgColor("black");
    } else {
      setBgColor("transparent");
    }
  });

  return (
    <div
      className={`w-full h-[70px] bg-${bgColor} fixed flex justify-between select-none transition-all duration-500 z-30`}
    >
      <div className="h-full flex">
        <div className="h-full flex justify-center items-center ps-14">
          <Link to="/">
            <img src={logo} className="w-[150px]" />
          </Link>
        </div>
        <div className="h-full px-4 flex gap-5 justify-center items-center">
          <nav className="flex items-center gap-1 ml-5">
            {navigation?.map((nav, index) => {
              return (
                <div key={"header" + index}>
                  <NavLink
                    key={nav.label}
                    to={nav.href}
                    className={({ isActive }) =>
                      `px-2 text-sm text-neutral-200 hover:text-neutral-400 transition-all duration-500 ${
                        isActive &&
                        "text-white font-bold hover:text-white pointer-events-none"
                      }`
                    }
                  >
                    {nav.label}
                  </NavLink>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="h-full flex gap-4">
        <div className="h-full flex items-center">
          <IoIosSearch
            className="text-white text-3xl cursor-pointer"
            onClick={() => console.log("Search...")}
          />
        </div>
        <NavLink
          to="/kids"
          className={({ isActive }) =>
            `h-full flex text-sm text-neutral-200 hover:text-neutral-400 transition-all duration-500 items-center ${
              isActive &&
              "text-white font-bold hover:text-white pointer-events-none"
            }`
          }
        >
          Kids
        </NavLink>
        <div
          className="h-full flex items-center cursor-pointer"
          onClick={() => console.log("New Movie...")}
        >
          <TbBellRinging className="text-white text-2xl relative" />
          <p className=" absolute w-4 h-4 max-h-full max-w-full text-white z-10 bg-red-700 rounded-full text-xs text-center mb-4 ml-3">
            9
          </p>
        </div>
        <div className="h-full w-full flex items-center mr-14">
          <Link to="/profile/1" className="max-h-full w-full flex items-center">
            <img src={profileImage} className="rounded" />
            <GoTriangleDown className="text-white text-lg mx-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
