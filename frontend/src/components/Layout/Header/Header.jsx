import React, { useState } from "react";
import "./Header.css"; // Import your CSS file for styling

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">SwiftBuy</div>
      <div className="navigation-icon">
        <input type="text" className="input-font" placeholder="Search...." />
        <i className="fa-solid fa-magnifying-glass font-icon"></i>
        <i className="fa-solid fa-cart-shopping font-icon"></i>
        <i className="fa-solid fa-user font-icon"></i>
      </div>
      <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">Home</li>
        <li className="nav-item">Product</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">About</li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Header;
