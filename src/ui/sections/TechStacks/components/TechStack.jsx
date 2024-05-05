import html from "../../../../assets/images/html.png";
import css from "../../../../assets/images/css.png";
import javaScript from "../../../../assets/images/javaScript.png";
import react from "../../../../assets/images/react.png";
import typeScript from "../../../../assets/images/ts.png";
import tailwind from "../../../../assets/images/tailwindcss.svg";
import nodejs from "../../../../assets/images/nodejs.svg";
import reactNative from "../../../../assets/images/react-native.svg";




export default function TechStack() {
  const stacks = [
    {
      name: "html",
      imageSrc: html,
    },
    {
      name: "CSS",
      imageSrc: css,
    },
    {
      name: "JavaScript",
      imageSrc: javaScript,
    },
    {
      name: "React",
      imageSrc: react,
    },
    {
      name: "TypeScript",
      imageSrc: typeScript,
    },
    {
      name: "Tailwind",
      imageSrc: tailwind,
    },
    {
      name: "NodeJS", 
      imageSrc: nodejs
    },
    {
      name: "React Native", 
      imageSrc: reactNative
    }
  ];
  return (
    <div className="tech-stack">
      {stacks.map((stack, index) => {
        return (
          <div key={index} className="language">
            <figure className="language-image-wrapper">
              <img className="language-image" src={stack.imageSrc} />
            </figure>
            <span className="language-name">{stack.name}</span>
          </div>
        );
      })}
    </div>
  );
}
