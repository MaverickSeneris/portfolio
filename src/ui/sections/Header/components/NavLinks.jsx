import React from "react";

export default function NavLinks({ themeStyles }) {
  const headerLinks = [
    {
      name: "Languages",
      href: "#languages",
    },
    {
      name: "Projects",
      href: "#projects",
    },
  ];
  return (
    <div className="nav-links">
      {headerLinks.map((link, index) => {
        return (
          <a
            key={index}
            style={themeStyles}
            href={link.href}
            className="hidden link-hover-effect link-hover-effect--black"
          >
            {link.name}
          </a>
        );
      })}
      <button className="btn-contact">
        <a href="mailto:maverickseneris@proton.me">Contact</a>
      </button>
    </div>
  );
}
