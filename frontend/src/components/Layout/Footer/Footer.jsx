import React from "react";
import playStore from "../../../Images/playstore.png";
import AppStore from "../../../Images/Appstore.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR AP4</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={AppStore} alt="appstore" />
      </div>
      <div className="midFooter">
        <h1>SWIFTBUY</h1>
        <p>High Quality is our first priority</p>
        <p>Copyright 2023 &copy; Dev Goel</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/__dev__goel__/">Instagram</a>
        <a href="https://github.com/devgoel2004">Github</a>
        <a href="https://devgoel2004.github.io/portfolio/">Portfolio</a>
      </div>
    </footer>
  );
};

export default Footer;
