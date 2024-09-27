import React from "react"
import '../index.css'
import Home from "../pages/Home"
import Classes from './Side-Pages/Classes'
import Reviews from '../pages/Reviews'
import Articles from '../pages/Articles'
import Sunrays from "./Components/Sunrays"

const Main = () => {

  return (
    <>
      {/* <Sunrays /> */}
      <Home />
      {/* <Classes /> */}
      <Reviews />
      <Articles />
    </>
  )
}

export default Main