import React from "react";
import "./LandingPage.css";
import logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="footer__logo">
            <a href="#">
              <img src={logo} alt="logo" />
              Power
            </a>
          </div>
          <p>
            Take the first step towards a healthier, stronger you with our
            unbeatable pricing plans. Let's sweat, achieve, and conquer
            together!
          </p>
          <div className="footer__socials">
            <a href="#">
              <i className="ri-facebook-fill"></i>
            </a>

            <a href="#">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
        </div>
        <div class="footer__col">
          <h4>Company</h4>
          <div class="footer__links">
            <a href="#">Business</a>
            <a href="#">Franchise</a>
            <a href="#">Partnership</a>
            <a href="#">Network</a>
          </div>
        </div>
        <div class="footer__col">
          <h4>About Us</h4>
          <div class="footer__links">
            <a href="#">Blogs</a>
            <a href="#">Security</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div class="footer__col">
          <h4>Contact</h4>
          <div class="footer__links">
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">BMI Calculator</a>
          </div>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
