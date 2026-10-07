import React from 'react'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>

     <BrowserRouter>
       <nav>
          <h2>useRef</h2>
          <ul>
              <Link to="/">home</Link>
              <Link to="/about">about</Link>
              <Link to="/contact">contact</Link>
          </ul>
       </nav>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
     </BrowserRouter>

    </>
  )
}

export default App