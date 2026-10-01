import React from 'react'
import Signup from './components/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/Login'

const App = () => {
  return (
    <>

    <BrowserRouter>
       <Routes>

          <Route path='/' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
       </Routes>
         
    </BrowserRouter>

       
    </>
  )
}

export default App