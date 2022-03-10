import React from "react";

export const Item = ({ Links, title }) => {
  return (
    <div className="link">
      <h3 className="title">{title}</h3>
      <ul>
        {Links.map((link) => (
          <li key={link.name}>
            <a className="" href={link.link} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
