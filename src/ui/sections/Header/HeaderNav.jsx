import DarkModebButton from "./components/DarkModeButton";
import NavLinks from "./components/NavLinks";

export default function Header({ darkMode, toggleDarkMode }) {
  const themeStyles = {
    color: darkMode && "white",
  };

  return (
    <section className="Header">
      <div className="nav-flex-container container">
        <h1 className="logo ff-accent">Mav Seneris</h1>
        <DarkModebButton toggleDarkMode={toggleDarkMode} />
        <NavLinks darkMode={darkMode} themeStyles={themeStyles} />
      </div>
    </section>
  );
}
