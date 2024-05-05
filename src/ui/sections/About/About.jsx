import profileImage from "../../../assets/images/id.jpg";
import waveEmoji from "../../../assets/images/wave-emoji.png";
import heroImage from "../../../assets/images/hero.png";
import heroImageDark from "../../../assets/images/hero-dark.png";
import resumeFile from "../../../assets/Resume/Resume.pdf";
import AboutLinks from "./components/AboutLinks";

export default function About({darkMode}) {
  return (
    <section className="about">
      <div className="about-container container">
        <img className="about-image" src={profileImage} />
        <div className="text-center">
          <h2 className="text-center">
            Hi, my name is <span className="color-accent ff-accent ">Mav</span>
            <img className="wave" src={waveEmoji} />
          </h2>
          <div className="container container--narrow">
            <p>
              I'm a self-taught frontend developer from Manila, Philippines
            </p>
          </div>
          <AboutLinks darkMode={darkMode} resumeFile={resumeFile}/>
          <img
            src={darkMode ? heroImageDark : heroImage}
            className="about-hero_image"
          />
        </div>
      </div>
    </section>
  );
}
