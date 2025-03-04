import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Main from './pages/Main'
import Booking from './pages/Side-Pages/Booking'
import Classes from './pages/Side-Pages/Classes'
import Contact from './pages/Side-Pages/Contact'
import Blog from './pages/Side-Pages/Blog'
import Challenge from "./pages/Side-Pages/Challenge"
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
          <Route path='/Blog' element={<Blog />}/>
          <Route path='/Challenge' element={<Challenge />}/>
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
