import React, {useState} from 'react';
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

const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(()=>{
    setShowTitle(false);
  },4000);

  return (
    <motion.div className="container order"
    variants={containerVarients}
    initial="hidden"
    animate="visible"
    >
      <AnimatePresence>
        {showTitle && (
                <motion.h2
                  exit={{ y:-1000 }}
                >Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>
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