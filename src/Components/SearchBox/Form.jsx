import React from "react";
import Box from "./Box";
import Button from "./Button";
import searchIcon from "../../assets/search-icon.svg";
import calenderIcon from "../../assets/calender-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [locationInput, setLocationInput] = useState("");

  const [checkInDateInput, setCheckInDateInput] = useState("");
  const [checkOutDateInput, setCheckOutDateInput] = useState("");
  const [functionSubmited, setFunctionSubmited] = useState(false);
  return (
    <form
      action=""
      className="wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (locationInput === "") {
          e.target.classList.add("check");
        } else if (locationInput != "") {
          e.target.classList.remove("check");
          window.location.href += "Places";
          window.localStorage.setItem("locationInputValue", locationInput);
          window.localStorage.setItem("checkInDateInputValue", checkInDateInput);
          window.localStorage.setItem("checkOutDateInputValue", checkOutDateInput);
        }
      }}
    >
      <Box
        name="place"
        label="Where You Wanna Go ?"
        icon={searchIcon}
        placeholder="Search For Location"
        type="text"
        onChange={(e) => {
          setLocationInput(e.target.value);
        }}
      />
      <Box
        name="checkInDate"
        label="Check-in Date !"
        icon={calenderIcon}
        type="date"
        onChange={(e) => {
          setCheckInDateInput(e.target.value);
        }}
      />
      <Box
        label="Check-Out Date !"
        icon={calenderIcon}
        type="date"
        name="checkOutDate"
        onChange={(e) => {
          setCheckOutDateInput(e.target.value);
        }}
      />
      <div className="input-parent">
        <Button title="Explore" type="submit" />
      </div>
    </form>
  );
}

export default Form;
