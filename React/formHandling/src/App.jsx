import React from 'react'
import Signup from './components/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>

    <BrowserRouter>
       <Routes>

          <Route path='/' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
       </Routes>
          <ToastContainer />
    </BrowserRouter>

       
    </>
  )
}

export default App