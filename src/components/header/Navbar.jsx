import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ menuDisplayed, setMenuDisplayed }) {
  
  // Add this style to the current i.e active link
  const activeStyles = {
    backgroundColor: "#fffafa"
  }
  
  return (
    <nav className="navbar">
      <ul style={{ left: menuDisplayed ? "0" : "-400px" }}>
        <NavLink 
        to="/" 
        style={({isActive}) => isActive ? activeStyles : null}
        >
          <li onClick={() => setMenuDisplayed(false)}>Home</li>
        </NavLink>
        <NavLink 
        to="Authors"
        style={({isActive}) => isActive ? activeStyles : null}
        >
          <li onClick={() => setMenuDisplayed(false)}>Authors</li>
        </NavLink>
        <NavLink 
        to="About"
        style={({isActive}) => isActive ? activeStyles : null}
        >
          <li onClick={() => setMenuDisplayed(false)}>About us</li>
        </NavLink>
        <NavLink 
        to="Contact"
        style={({isActive}) => isActive ? activeStyles : null}
        >
          <li onClick={() => setMenuDisplayed(false)}>Contact us</li>
        </NavLink>
        <NavLink 
        to="Register"
        style={({isActive}) => isActive ? activeStyles : null}
        >
          <li onClick={() => setMenuDisplayed(false)}>Register</li>
        </NavLink>
      </ul>
    </nav>
  );
}
