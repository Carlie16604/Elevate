import React from "react"
import '../index.css'
import Home from "../pages/Home"
import Classes from './Side-Pages/Classes'
import Reviews from '../pages/Reviews'
import Articles from '../pages/Articles'
import Portals from '../pages/Portals'
import About from '../pages/About'

const Main = () => {

  return (
    <>
      <Home />
      <Portals />
      <About />
      {/* <Classes /> */}
      <Reviews />
      <Articles />
    </>
  )
}

export default Main