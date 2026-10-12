import React from 'react'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import DisplayStudents from './components/DisplayStudents'
import AddStudent from './components/AddStudent'

const App = () => {
  return (
    <>

     <BrowserRouter>

       <nav>
          <h1>SMS</h1>
          <ul>
            <Link to="/">students</Link>
            <Link to="/add">add student</Link>
          </ul>
       </nav>
          <Routes>
              <Route path='/' element={<DisplayStudents/>}></Route>
              <Route path='/add' element={<AddStudent/>}></Route>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App