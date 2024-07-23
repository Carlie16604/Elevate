import React from "react"
import './index.css'
import Home from "./pages/Home"
import NavBar from "./pages/NavBar"

const App = () => {

  return (
    <>
      <NavBar/>
      <div>
        {/* ml-[700px] */}
        <Home/>
      </div>
    </>
  )
}

export default App
