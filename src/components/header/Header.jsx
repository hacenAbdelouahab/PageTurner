import React, { useContext, useState } from "react";
import "./header.css";
import logo from "../../images/logo.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function Header() {

  const context = useContext(CartContext)

  const [menuDisplayed, setMenuDisplayed] = useState(false);

  return (
    
    <header className="header">
      <div className="header-top">
        <div className="menu">
          {menuDisplayed ? (
            <i onClick={() => setMenuDisplayed(prev => !prev )} className="bi bi-x-lg shake"></i>
          ) : (
            <i onClick={() => setMenuDisplayed(prev => !prev )} className="bi bi-list"></i>
          )}
        </div>
        <div className="phone">
          <i className="bi bi-telephone-fill"></i>
          (+213) 795044400
        </div>
        <div className="text">
          <h1>Welcome to Pageturner: Your Gateway to Remarkable Books! </h1>
        </div>
        <Link to="login" className="login">
          <i className="bi bi-person-fill"></i>
          Login
        </Link >
      </div>
      <div className="header-middle">
        <Link to="/"><div className="logo">
          <img src={logo} />
        </div></Link>
        <div className="form">
          <input type="text" placeholder="Search in Pageturner" />
          <i className="bi bi-search"></i>
        </div>
        <Link to="/cart" className="cart">
        {context.cartItems.length > 0 && <span className="items-on-cart">{context.cartItems.length}</span> }
        <i className="bi bi-cart2"></i>
        </Link>
      </div>
      <Navbar  menuDisplayed={menuDisplayed} setMenuDisplayed={setMenuDisplayed}/>
    </header>
  );
}
