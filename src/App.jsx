import React from "react";
import { Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Offers from './pages/Offers';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

const App = () => {

  return (
    <>
      <Routes>
        <NavBar/>
        <Home/>
        <Offers />
          <Route path='/Contact' element={<Contact />}/>
        <Reviews />
      </Routes>
    </>
  )
}

export default App
