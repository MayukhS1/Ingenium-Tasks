import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Header from './contents/Header';
import Base from './contents/Base';
import Home from './contents/Home';
import Toppings from './contents/Toppings';
import Order from './contents/Order';
import {AnimatePresence} from 'framer-motion';
import Modal from './contents/Modal';
import './App.css';

function App() {
  const location = useLocation();

  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);



  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} setShowModal={setShowModal}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>

    </>
  );
}

export default App;