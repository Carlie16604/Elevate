import React from "react"
import './index.css'
import Home from "./pages/Home"
import NavBar from "./pages/NavBar"

const App = () => {

  return (
    <>
    <div className='max-w-6xl'>
        <NavBar/>
        <Home/>
    </div>
    </>
  )
}

export default App
