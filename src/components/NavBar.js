import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { TiThMenuOutline } from "react-icons/ti";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineFeaturedPlayList, MdOutlineScreenshot } from "react-icons/md";
import { GoDeviceMobile } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const NavBar = ({ changeTheme, currentTheme }) => {
  const [navState, setNavState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavState(false));
  return (
    <nav>
      <div className="container py-3 mx-3">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <TiThMenuOutline
                onClick={(e) => {
                  e.stopPropagation();
                  setNavState(true);
                }}
              />
            )}
            <div onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <BsFillSunFill className="sun" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}
            </div>
          </div>
          <div className={`links ${navState ? "responsive-toggle" : ""}`}>
            <ul>
              <li>
                <a href="#home">
                  <BiHomeAlt className="nav-icon" /> Home
                </a>
              </li>
              <li>
                <a href="#features">
                  <MdOutlineFeaturedPlayList className="nav-icon" /> Features
                </a>
              </li>
              <li>
                <a href="#screenshots">
                  <MdOutlineScreenshot className="nav-icon" /> Screenshots
                </a>
              </li>
              <li>
                <a href="#devices">
                  <GoDeviceMobile className="nav-icon" /> Devices
                </a>
              </li>
              <li>
                <a href="#team">
                  <RiTeamFill className="nav-icon" /> Team
                </a>
              </li>
              <li onClick={changeTheme} className="color-mode">
                {currentTheme === "dark" ? (
                  <BsFillSunFill className="sun" />
                ) : (
                  <BsFillMoonFill className="moon" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
