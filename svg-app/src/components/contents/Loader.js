import React from 'react';
import {motion,useCycle } from 'framer-motion';

const loadeVariant = {
    animation1 : {
        x: [-20,20],
        y: [0,-30],
        transition: {
            x: {
                yoyo: Infinity,
                duration : .5
            },
            y: {
                yoyo: Infinity,
                duration : .25,
                ease : "easeOut"
            }
        }
    },
    animation2: {
        x: [-20,20],
        y: 0,
        transition: {
            x: {
                yoyo: Infinity,
                duration : .5,
                ease : "easeOut"
            }
        }
    }
};

const Loader = ()=> {

    const [animation, cycleAnimation] = useCycle("animation1", "animation2");

    return(
        <>
        <motion.div className="loader"
            variants = {loadeVariant}
            animate={animation}
        >

        </motion.div>
        <div onClick={()=> cycleAnimation()}>Click & See</div>
        </>
    );
}

export default Loader;