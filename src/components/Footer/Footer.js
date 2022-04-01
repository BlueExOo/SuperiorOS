import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="py-3 mx-3" data-aos="fade-up">
      <div className="brand-container">
        <div className="brand">
          <span>#Be</span>
          <span className="title">Superior</span>
        </div>
        <p className="description">
          Find the latest and greatest on the world's most powerful mobile
          Software
        </p>

        <SocialIcons Icons={Icons} />

        <span className="copy-right">
          CopyRight &copy; 2022
          <span> SuperiorOS Project </span> <br />
          All Rights Reserved Ahmed
          <a
            href="https://github.com/BlueExOo"
            target={"_blank"}
            rel="noreferrer"
          >
            (BlueExOo)
          </a>
        </span>
      </div>
      <div className="links">
        <ItemsContainer />
      </div>
    </footer>
  );
};

export default Footer;
