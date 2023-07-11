import React from "react";
import MainTitle from "../../Components/Layout/MainTitle";
import MainDesc from "../../Components/Layout/MainDesc";
import { positivePoints } from "./Main";
function Container({ titleContent, descContent, linkSectionContent }) {
  return (
    <div className="parent-container">
      <MainTitle content={titleContent} />
      <div className="container content-container">
        <MainDesc content={descContent} />
        {positivePoints.map((point, index) => {
          return (
            <div className="mini-wrapper">
              <h2 className="mini-title">{point.title}</h2>
              <p className="mini-desc">{point.desc}</p>
            </div>
          );
        })}
        <MainDesc
          content="At FlightZone, we are committed to making flight booking an enjoyable experience. We are here to simplify your travel planning, help you discover new horizons, and create lasting memories. Join us on this exhilarating journey as we take flight together, exploring the world one destination at a time.

Let's soar to new heights with FlightZone!"
        />
      </div>
    </div>
  );
}

export default Container;
