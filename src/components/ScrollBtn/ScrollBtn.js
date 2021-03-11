import React from 'react';
import { motion } from 'framer-motion';
import './ScrollBtnStyle.css';

const scrollVariant = {
  visible: {
    y: [0, 5],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 1,
      },
    },
  },
};

const ScrollBtn = () => {
  return (
    <motion.div
      className='icon-scroll'
      variants={scrollVariant}
      animate='visible'
    ></motion.div>
  );
};

export default ScrollBtn;
