import React from 'react';
import { Link } from "react-router-dom";
import {motion, AnimatePresence} from 'framer-motion';

const backdropVaraiant = {
    hidden: {
        opacity: 0,
    },
    visible:{
        opacity: 1,      
    },
};

const modalVariant ={
    hidden : {
        y: "-110vh",
        opacity: 0
    },
    visible: {
        y: "250px",
        opacity : 1,
        transition: {
            delay : 0.5
        },
    }
};

const Modal = ( {showModal, setShowModal}) => {
    return(
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className="backdrop"
                    variants ={backdropVaraiant}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div className="modal"
                        variants = {modalVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <p>Want to make another Pizza?</p>
                        <Link to="/">
                            <button onClick={()=> setShowModal(false)}>Back to Home</button>
                        </Link>
                        
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;