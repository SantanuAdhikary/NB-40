import React from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <nav>
           <h1>eventHandling</h1>

           <ul>
               <Link to='/'>home</Link>
               <Link to='/about'>about</Link>
           </ul>
        </nav>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App