import React from "react"
import '../index.css'
import Home from "../pages/Home"
import Classes from '../pages/Classes'
import Reviews from '../pages/Reviews'
import Sunrays from "./Components/Sunrays"

const Main = () => {

  return (
    <>
      <Sunrays />
      <Home />
      <Classes />
      <Reviews />
    </>
  )
}

export default Main