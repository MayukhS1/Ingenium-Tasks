import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const containerVarients ={
    hidden:{
        opacity: 0.4,
        x: '100vw'
    },
    visible:{
        opacity: 1,
        x: 0,
        transition:{
            type: 'spring',
            mass: .5,
            dumping: 8,
            when:"beforeChildren",
            staggerChildren: .4,         }
    },
    exit: {
      x: '100vw',
      transition : {ease : 'easeInOut'}
    }
};

const childVarient={
    hidden:{
        opacity: 0,

    },
    visible:{
        opacity: 1,
        transition:{
        }

    }
};

const Order = ({ pizza, setShowModal }) => {

  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true);
    },5000)
  }, [setShowModal]) //it will only run if setShowModal changes

  return (
    <motion.div className="container order"
    variants={containerVarients}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      
      <motion.p
        variants={childVarient}
      >You ordered a {pizza.base} pizza with:</motion.p>
      
      <motion.div
        variants={childVarient}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;