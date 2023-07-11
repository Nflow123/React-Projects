import React from "react";
import { Link } from "react-router-dom";

function Li({ title, link }) {
  return (
    <li>
      <Link className="a" to={link}>
        {title}
      </Link>
    </li>
  );
}

export default Li;
