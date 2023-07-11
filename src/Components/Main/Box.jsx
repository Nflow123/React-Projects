import React from "react";

function Box({ icon, title, desc }) {
  return (
    <div className="box">
      <section className="title-section">
        <img className="icon" src={icon} alt="" />
        <h4 className="title">{title}</h4>
      </section>
      <p className="desc">{desc}</p>
    </div>
  );
}

export default Box;
