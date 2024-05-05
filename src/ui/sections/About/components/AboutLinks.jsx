import React from "react";

export default function AboutLinks({darkMode, resumeFile}) {
  const links = [
    {
      href: "https://www.linkedin.com/in/maverick-seneris-50800b275/",
      icon: "fab fa-linkedin-in",
    },
    {
      href: "https://github.com/mavSeneris",
      icon: "fab fa-github",
    },
    {
      href: "mailto:email@email.com",
      icon: "far fa-envelope",
    },
    {
      href: resumeFile,
      icon: "fas fa-file-pdf",
    },
  ];

  return (
    <div className="about-links">
      {links.map((link, index) => {
        return (
          <div key={index}>
            <a style={{ color: darkMode && "white" }} href={link.href}>
              <i className={link.icon}></i>
            </a>
          </div>
        );
      })}
    </div>
  );
}
