import React from "react";
import "./search-box.css";
import From from "./Form";
import {motion} from 'framer-motion'
function SearchBox(button) {
  return (
    <motion.div className="search-box container"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <From />
    </motion.div>
  );
}

export default SearchBox;
