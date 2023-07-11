import React from "react";
import { useState } from "react";

function Box({ label, name, placeholder, icon, type, onChange, value }) {
  const [inputValue, setInputValue] = useState();
  return (
    <div className="input-parent">
      <label htmlFor="place">{label}</label>
      <div className="input-box">
        <img className="icon" src={icon} alt="" />
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}

export default Box;
