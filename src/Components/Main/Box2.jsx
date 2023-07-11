import React from "react";

function Box2({
  img,
  title,
  desc,
  price,
  tripNights,
  distance,
  icon1,
  icon2,
  icon3,
  link,
}) {
  return (
    <div className="box">
      <img src={img} alt="" />
      <div className="details">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
        <div className="data-wrapper">
          <div className="icons-parent">
            <img src={icon1} className="icon" alt="" />
            <img src={icon2} className="icon" alt="" />
            <img src={icon3} className="icon" alt="" />
          </div>
          <h5 className="price">{price} $</h5>
        </div>
        <div className="data-wrapper">
          <h5 className="distance">{distance} Km</h5>
          <h4 className="trip-nights">{tripNights} nights Trip</h4>
        </div>
        <a href={link} className="explore">
          Explore
        </a>
      </div>
    </div>
  );
}

export default Box2;
