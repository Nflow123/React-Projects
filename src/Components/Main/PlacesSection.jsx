import React from "react";
import "./places.css";
import MainTitle from "../Layout/MainTitle";
import Container from "./Container2";
function PlacesSection({ content }) {
  return (
    <div className="places">
      <MainTitle content={content} />
      <Container />
    </div>
  );
}

export default PlacesSection;
