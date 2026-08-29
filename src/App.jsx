import { HashRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Main from './pages/Main'
import Booking from './pages/Side-Pages/Booking'
import Classes from './pages/Side-Pages/Classes'
import Contact from './pages/Side-Pages/Contact'
import Blog from './pages/Side-Pages/Blog'
import ArticlesHub from './pages/Side-Pages/ArticlesHub'
import Article from './pages/Side-Pages/Article'
import Challenge from "./pages/Side-Pages/Challenge"
import Footer from './pages/Components/Footer'

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Booking' element={<Booking />}/>
          <Route path='/Classes' element={<Classes />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Blog' element={<Blog />}/>
          <Route path='/Articles' element={<ArticlesHub />}/>
          <Route path='/Articles/:slug' element={<Article />}/>
          <Route path='/Challenge' element={<Challenge />}/>
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
