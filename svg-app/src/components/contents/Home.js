import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariant = {
    visible: {

    },
    hover:{
        scale: 1.05,
        boxShadow: "0px 0px 8px rgb(254,254,254)",
        textShadow: "0px 0px 8px rgb(254,254,254)",
        transition: {
            yoyo: Infinity,
            delay: 0.3
        }
    }
};

const containerVariants = {
  hidden: {
    opacity : .4
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .5
    }
  },
  exit: {
    x: '-100vw',
    transition : {ease : 'easeInOut'}
  }
};

const Home = () => {
  return (
    <motion.div className="home container"
        variants = {containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
            variants={buttonVariant}
            animate="visible"
            whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default Home;
