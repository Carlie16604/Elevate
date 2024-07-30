import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Offers from './pages/Offers';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

const App = () => {

  return (
    <>
    <Router>
      {/* <NavBar/> */}
        <Routes>
          {/* <Home/>
          <Offers /> */}
          <Reviews />
            <Route path='/Contact' element={<Contact />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App
