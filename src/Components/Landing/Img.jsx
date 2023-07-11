import React from "react";
import {motion } from 'framer-motion'
function img({ src }) {
  return <motion.img src={src}  
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }} />;
}

export default img;
