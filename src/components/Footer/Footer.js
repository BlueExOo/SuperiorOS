import React from "react";
import { BsGithub, BsTelegram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const data = [
    {
      type: "DISCOVER",
      subTypes: ["Overview", "Features", "FAQ"],
    },
    {
      type: "COMMUNITY",
      subTypes: ["GitHub", "Telegram", "Superior OS Walls"],
    },
    {
      type: "DEVELOPERS",
      subTypes: ["Maintainer", "Gerrit", "Crowdin"],
    },
    {
      type: "SUPPORT",
      subTypes: ["Paypal", "UPI", "Paytm"],
    },
  ];
  const socialLinks = [<BsGithub />, <BsTelegram />, <BsTwitter />];

  return (
    <footer className="py-3 mx-3">
      <div className="brand-container">
        <div className="brand">
          <span>#Be</span>
          <span className="title">Superior</span>
        </div>
        <p className="description">
          Find the latest and greatest on the world's most powerful mobile
          Software
        </p>

        <ul className="social-links">
          {socialLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="links">
        {data.map(({ type, subTypes }, index) => {
          return (
            <div className="link" key={index}>
              <h3 className="title">{type}</h3>
              <ul>
                {subTypes.map((type, index) => (
                  <li key={index}>
                    <a href="#">{type}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
