import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <>
      <ul className="social-links">
        {Icons.map((icon, index) => (
          <li key={index}>
            <a href={icon.link} target={"_blank"} rel="noreferrer">
              {icon.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialIcons;
