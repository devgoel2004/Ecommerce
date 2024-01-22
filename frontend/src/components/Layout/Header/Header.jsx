import React, { useState } from "react";
import "./Header.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-logo">SwiftBuy</div>
      </Link>
      <div className="navigation-icon">
        <input type="text" className="input-font" placeholder="Search...." />
        <Link to="/search">
          <i className="fa-solid fa-magnifying-glass font-icon"></i>
        </Link>
        <Link to="/">
          <i className="fa-solid fa-cart-shopping font-icon"></i>
        </Link>
        <Link to="/login">
          <i className="fa-solid fa-user font-icon"></i>
        </Link>
      </div>
      <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
        <Link className="link-to" to="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link to="/products" className="link-to">
          <li className="nav-item">Product</li>
        </Link>
        <Link to="/contact" className="link-to">
          <li className="nav-item">Contact</li>
        </Link>
        <Link to="/about" className="link-to">
          <li className="nav-item">About</li>
        </Link>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Header;
