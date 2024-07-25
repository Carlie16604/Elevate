import React from "react"
import './index.css'
import NavBar from "./pages/NavBar"
import Home from "./pages/Home"
import Offers from './pages/Offers'
import Reviews from './pages/Reviews'

const App = () => {

  return (
    <>
      <NavBar/>
      <Home/>
      <Offers />
      <Reviews />
    </>
  )
}

export default App
