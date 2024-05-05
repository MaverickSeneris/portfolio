import React from 'react'

export default function DarkModeButton({toggleDarkMode}) {
  return (
    <div className="toggler">
    <input type="checkbox" id="checkbox" className="checkbox" />
    <label
      htmlFor="checkbox"
      className="toggle-theme"
      onClick={toggleDarkMode}
    >
      <i className="fas fa-moon"></i>
      <i className="fas fa-sun"></i>
    </label>
  </div>
  )
}
