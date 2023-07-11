import React from "react";
import Title from "./Title";
import Img from "./Img";
import LandingImg from "../../assets/landing.svg";
function Container() {
  return (
    <div className="container">
      <Title title="Let's Fly, and Make Memories Around The World Together." />
      <Img src={LandingImg} />
    </div>
  );
}

export default Container;
