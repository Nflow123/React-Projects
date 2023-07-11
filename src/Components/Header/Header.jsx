import React from "react";
import "./header.css";
import Container from "./Container";
import {motion} from 'framer-motion'
function Header() {
  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container />
    </motion.div>
  );
}

export default Header;
