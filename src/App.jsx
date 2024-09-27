import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Main from './pages/Main'
import Booking from './pages/Side-Pages/Booking'
import Classes from './pages/Side-Pages/Classes'
import Contact from './pages/Side-Pages/Contact'
import Footer from './pages/Components/Footer'

const App = () => {

  // useEffect(() => {
  //   function checkscreenHeight() {
  //     const screenHeight = window.innerHeight;
  //     const messageElement = document.getElementById("desktopMessage");

  //     if (screenHeight > 700) {
  //       messageElement.classList.remove("hidden");
  //     } else {
  //       messageElement.classList.add("hidden");
  //     }
  //   }

  //   checkscreenHeight();
  //   window.addEventListener('resize', checkscreenHeight);

  //   return () => {
  //     window.removeEventListener('resize', checkscreenHeight);
  //   };
  // }, []);

  return (
    <Router>
      <>
        {/* <div id="desktopMessage" className="hidden">
          <div className="message-content">
            <p>This is only available on desktop!</p>
          </div>
        </div> */}
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Booking' element={<Booking />}/>
          <Route path='/Classes' element={<Classes />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
