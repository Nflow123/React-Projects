import React from "react";
import { Link } from "react-router-dom";
function MainLink({ content, link }) {
  return (
    <Link to={link} className="main-link">
      {content}
    </Link>
  );
}

export default MainLink;
