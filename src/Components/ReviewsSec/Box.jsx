import React from "react";
import QuoteSign1 from "../../assets/quote-sign1.svg";
import QuoteSign2 from "../../assets/quote-sign2.svg";
function Box({ content }) {
  return (
    <div className="box">
      <img src={QuoteSign1} className="quote-sign quote-sign1" />
      <p className="review">{content}</p>
      <img src={QuoteSign2} className="quote-sign quote-sign2" />
    </div>
  );
}

export default Box;
