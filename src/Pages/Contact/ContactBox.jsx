import React from "react";
import Box from "../../Components/SearchBox/Box";
import HashIcon from "../../assets/hash-icon.svg";
import AtIcon from "../../assets/at-icon.svg";
import PhoneIcon from "../../assets/phone-icon.svg";
import Button from "../../Components/SearchBox/Button";
import { useState } from "react";
import {motion} from 'framer-motion'
function ContactBox() {
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [input3Value, setInput3Value] = useState("");

  return (
    <motion.div className="container contact-box" 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <form
        className="wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          if (input1Value != "" && input2Value != "" && input3Value != "") {
            document.querySelector(".contact-box").style.display = "none";
            document.querySelector(".contact-popUp").style.display = "block";
          } else if (
            input1Value == "" ||
            input2Value == "" ||
            input3Value == ""
          ) {
            document.querySelector(".main-desc").innerText =
              "Please Fill All The Inputs To Submit Your Message.";
            document.querySelector(".main-desc").classList.add("pry-color");
          }
        }}
      >
        <Box
          label="Why You Need To Contact Us."
          name="typeOfProblem"
          type="text"
          placeholder="I Need So Because..."
          icon={HashIcon}
          onChange={(e) => {
            setInput1Value(e.target.value);
          }}
        />
        <Box
          label="Your E-mail."
          name="mail"
          type="e-mail"
          placeholder="Example@Mail.Com"
          icon={AtIcon}
          onChange={(e) => {
            setInput2Value(e.target.value);
          }}
        />
        <Box
          label="Your Phone Number."
          name="number"
          type="number"
          placeholder="+1 --------"
          icon={PhoneIcon}
          onChange={(e) => {
            setInput3Value(e.target.value);
          }}
        />
        <div className="input-parent">
          <Button title="Submit" type="submit" />
        </div>
      </form>
    </motion.div>
  );
}

export default ContactBox;
