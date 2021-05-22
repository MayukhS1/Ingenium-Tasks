import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
            delay: 0.5,
            mass: .8,
        }
    },
};

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    < motion.div className="base container"
        // initial={{opacity: .4, x: '100vw'}}
        // animate={{opacity: 1, x: 0}}
        variants={containerVarients}
        initial="hidden"
        animate="visible"
        // transition={{delay: .2, duration: .3, transition: 'spring',  stiffness: 150}}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
                whileHover={{
                    scale: 1.2,
                    originX: 0,
                    color: "#f8e113",
                }} 
                transition={{ type:'spring', stiffness: 250 }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
                initial={{y:-20, scale: .2, opacity: .2}}
                animate={{y:0, scale:1, opacity:1 }}
                transition={{duration: .3}}
                whileHover={{
                    boxShadow: "0px 0px 8px rgb(254,254,254)",
                }}
            >Next</motion.button>
          </Link>
        </div>
      )}

    </motion.div>
  )
}

export default Base;