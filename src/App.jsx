import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import NavBar from "./pages/NavBar"
import Main from './pages/Main'
import Booking from './pages/Booking'
import Contact from './pages/Contact'

const App = () => {

  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Booking' element={<Booking />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
      </>
    </Router>
  )
}

export default App
