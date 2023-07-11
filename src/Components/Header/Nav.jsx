import React from "react";
import Li from "./Li";
import closeIcon from "../../assets/close.svg";
function Nav() {
  return (
    <ul className="nav mobile-d-none">
      <img
        onClick={() => {
          document.querySelector(".nav").classList.add("mobile-d-none");
        }}
        className="close-icon"
        src={closeIcon}
        alt=""
        srcset=""
      />
      <Li title="home" link="/" />
      <Li title="about" link="/about" />
      <Li title="places" link="/Places" />
      <Li title="contact" link="/Contact" />
    </ul>
  );
}

export default Nav;
