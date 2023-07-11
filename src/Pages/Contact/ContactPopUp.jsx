import React from "react";
function ContactPopUp({ content }) {
  return (
    <div className="container contact-popUp">
      <h2>Thank You For Contacting Us.</h2>
      <p className="desc">{content}</p>
    </div>
  );
}

export default ContactPopUp;
