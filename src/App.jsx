
import { useState, useEffect } from "react"
import Header from "./ui/sections/Header/HeaderNav"
import About from "./ui/sections/About/About"
import MyStack from "./ui/sections/TechStacks/MyStack"
import MyProjects from "./ui/sections/Projects/MyProjects"
import Footer from "./ui/sections/Footer/FooterSection"
import './assets/styles/App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false)

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  })

  const toggleDarkMode = () => {
    setDarkMode(isDarkMode => !isDarkMode)
  }

  const darkTheme = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    transition: "background 0.7s ease"
  }

  return (
    <div style={darkTheme} className="App">
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <About 
        darkMode={darkMode}
      />
      <MyStack 
        darkMode={darkMode}
      />
      <MyProjects />
      <Footer />
    </div>
  )
}

export default App
