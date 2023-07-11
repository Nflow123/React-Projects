import React from "react";
import "./main.css";

import PositivePoints from "./PositivePointsSection";
import PlacesSection from "./PlacesSection";
function Main() {
  return (
    <main className="main">
      <PositivePoints content="Still Not Sure To Trust Us." />
      <PlacesSection content="The Most Visited Places." />
    </main>
  );
}

export default Main;
