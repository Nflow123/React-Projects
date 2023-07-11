import React from "react";
import {motion} from 'framer-motion'
function MainDesc({ content }) {
  return <motion.p
  className="main-desc"
  initial={{ opacity: 0.5, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {content}
</motion.p>
}

export default MainDesc;
