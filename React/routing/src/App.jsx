
import React from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Service from './pages/Service'

const App = () => {


  return (
    <>
       <BrowserRouter>
           <nav>
                <h2>routingExmaple</h2>

                <ul>
                    <Link to="/">home</Link>
                    <Link to="/contact">contact</Link>
                    <Link to="/about">about</Link>
                    <Link to="/service">service</Link>
                </ul>
           </nav>
         <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/contact' element={<Contact/>}></Route>
             <Route path='/service' element={<Service/>}></Route>
             <Route path='*' element={<NotFound/>}></Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


