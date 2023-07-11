import React from "react";
import "./landing.css";
import Container from "./Container.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
function Landing() {
  return (
    <div className="landing">
      <Container />
      <SearchBox />
    </div>
  );
}

export default Landing;
