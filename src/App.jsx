import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Main from './pages/Main'
import Booking from './pages/Side-Pages/Booking'
import Classes from './pages/Side-Pages/Classes'
import Contact from './pages/Side-Pages/Contact'
import Social from './pages/Side-Pages/Social'
import Footer from './pages/Components/Footer'

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <Router>
      <>
      {isMobile && (
        <div className='desktopMessage'>
          <p>This is only available on desktop!</p>
        </div>
      )}
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Booking' element={<Booking />}/>
          <Route path='/Classes' element={<Classes />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Social' element={<Social />}/>
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
