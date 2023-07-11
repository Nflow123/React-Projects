import React from "react";
import {motion} from 'framer-motion'
function Title({ title }) {
  return <motion.h1 className="title" 
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}>{title}</motion.h1>;
}

export default Title;
