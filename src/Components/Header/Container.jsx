import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import menuBarsIcon from "../../assets/menuBars.svg";

function Container() {
  return (
    <div className="container">
      <Logo />
      <img
        onClick={() => {
          document.querySelector(".nav").classList.remove("mobile-d-none");
        }}
        className="menu-bars-icon"
        src={menuBarsIcon}
      />
      <Nav />
    </div>
  );
}

export default Container;
