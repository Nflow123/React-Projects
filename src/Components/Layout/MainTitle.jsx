import React from "react";
import {motion} from 'framer-motion'
function MainTitle({ content }) {
  return <motion.h2
  className="main-title"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {content}
</motion.h2>
}

export default MainTitle;
