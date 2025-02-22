// src/components/IconsSection.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBone, faBowlFood, faBath } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const iconVariants = {
  hover: {
    scale: 1.2,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

const IconsSection = () => {
  return (
    <div className="flex space-x-6">
      <motion.div className="icon text-center" variants={iconVariants} whileHover="hover">
        <FontAwesomeIcon icon={faHeart} size="3x" />
        <p>#adopt pure love</p>
      </motion.div>
      <motion.div className="icon text-center" variants={iconVariants} whileHover="hover">
        <FontAwesomeIcon icon={faBowlFood} size="3x" />
      </motion.div>
      <motion.div className="icon text-center" variants={iconVariants} whileHover="hover">
        <FontAwesomeIcon icon={faBone} size="3x" />
      </motion.div>
      <motion.div className="icon text-center" variants={iconVariants} whileHover="hover">
        <FontAwesomeIcon icon={faBath} size="3x" />
      </motion.div>
    </div>
  );
};

export default IconsSection;