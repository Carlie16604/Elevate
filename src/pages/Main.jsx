import React from "react"
import '../index.css'
import Home from "../pages/Home"
import Classes from './Side-Pages/Classes'
import Reviews from '../pages/Reviews'
import Articles from '../pages/Articles'
import Portals from '../pages/Portals'
import Sunrays from "./Components/Sunrays"

const Main = () => {

  return (
    <>
      {/* <Sunrays /> */}
      <Home />
      {/* <Classes /> */}
      <Portals />
      <Reviews />
      <Articles />
    </>
  )
}

export default Main