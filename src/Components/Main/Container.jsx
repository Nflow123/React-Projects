import React from "react";
import Box from "./Box";
import DollarSign from "../../assets/dollarSign.svg";
import WorldIcon from "../../assets/WorldIcon.svg";
import LocationIcon from "../../assets/LocationIcon.svg";
function Container() {
  return (
    <div className="container box-wrapper">
      <Box
        icon={DollarSign}
        title="Best Price."
        desc="Pay through our application and Get Best Prices & Promotions"
      />
      <Box
        icon={WorldIcon}
        title="Flexible Payment."
        desc="You can Pay From Any Place On The Earth"
      />
      <Box
        icon={LocationIcon}
        title="Recommendations."
        desc="We Recommend To You Best Places To Explore"
      />
    </div>
  );
}

export default Container;
