import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
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
              <GiHamburgerMenu
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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#screenshots">Screenshots</a>
              </li>
              <li>
                <a href="#devices">Devices</a>
              </li>
              <li>
                <a href="#team">Team</a>
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
