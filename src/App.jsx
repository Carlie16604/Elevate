import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './index.css'
import NavBar from "./pages/NavBar"
import Home from "./pages/Home"
import Offers from './pages/Offers'
import Reviews from './pages/Reviews'
import Booking from './pages/Booking'

const App = () => {

  return (
    <Router>
    <>
      <NavBar/>
      <Home/>
      <Offers />
      <Reviews />
          
      <Routes>
        <Route path='/Booking' element={<Booking />}/>
      </Routes>
    </>
    </Router>
  )
}

export default App
