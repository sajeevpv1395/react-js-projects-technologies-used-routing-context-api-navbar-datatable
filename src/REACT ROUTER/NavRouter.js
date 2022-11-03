import React from 'react'
import Home from './Home';

import Shop from './Shop';
import About from './About';
import Nav from './Nav';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function NavRouter() {
  return (
    <div>
          <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={ About} />
          <Route path="/shop" component={ Shop} />
        </Routes>
        
       
       
      </div>
    </Router>
    </div>
  )
}

export default NavRouter
