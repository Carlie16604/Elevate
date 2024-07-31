import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import NavBar from "./pages/NavBar"
import Main from './pages/Main'
import Booking from './pages/Booking'

const App = () => {

  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Booking' element={<Booking />}/>
        </Routes>
      </>
    </Router>
  )
}

export default App
