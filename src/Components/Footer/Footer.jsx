import React from "react";
import "./footer.css";
import Twitter from "../../assets/twitter-icon.svg";
import Facebook from "../../assets/facebook-icon.svg";
function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <h2 className="logo">flightZone</h2>
        <ul className="nav">
          <li>
            <a href="/Coming-Soon" className="email">
              flightZone@mail.contact.com
            </a>
          </li>
          <li>
            <a href="/Contact" className="contact">
              Contact
            </a>
          </li>
          <div className="icons-wrapper">
            <li>
              <a href="/Coming-Soon">
                <img src={Twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="/Coming-Soon">
                <img src={Facebook} alt="" />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
