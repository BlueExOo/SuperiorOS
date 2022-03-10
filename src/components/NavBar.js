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
                  <BiHomeAlt /> Home
                </a>
              </li>
              <li>
                <a href="#features">
                  {" "}
                  <MdOutlineFeaturedPlayList /> Features
                </a>
              </li>
              <li>
                <a href="#screenshots">
                  <MdOutlineScreenshot /> Screenshots
                </a>
              </li>
              <li>
                <a href="#devices">
                  <GoDeviceMobile /> Devices
                </a>
              </li>
              <li>
                <a href="#team">
                  <RiTeamFill /> Team
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
