import React from 'react'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import Products from './pages/Products'
import Home from './pages/Home'
const App = () => {
  return (
    <>
           <BrowserRouter>

             <nav>
                <Link to='/'>home</Link>
                <Link to='/products'>products</Link>
             </nav>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/products' element={<Products/>}></Route>
                </Routes>
           </BrowserRouter>
    </>
  )
}

export default App