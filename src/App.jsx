import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Main from './pages/Main'
import Booking from './pages/Side-Pages/Booking'
import About from './pages/Side-Pages/About'
import Contact from './pages/Side-Pages/Contact'
import Footer from './pages/Components/Footer'

const App = () => {

  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Booking' element={<Booking />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
