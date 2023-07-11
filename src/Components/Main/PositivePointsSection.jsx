import React from "react";
import "./positivePoints.css";
import MainTitle from "../Layout/MainTitle";
import Container from "./Container";

function PositivePointsSection({ content }) {
  return (
    <div className="positive-points-section">
      <MainTitle content={content} />
      <Container />
    </div>
  );
}

export default PositivePointsSection;
