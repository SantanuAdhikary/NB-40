import React from 'react'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Produts from './components/Produts'
import Users from './components/Users'

const App = () => {
  return (
    <>
            <BrowserRouter>
               <nav>
                   <h2>useEffect Task</h2>
                   <ul>
                      <Link to="/">products</Link>
                      <Link to="/users">users</Link>

                   </ul>
               </nav>
                <Routes>
                     <Route path='/' element={<Produts/>}></Route>
                     <Route path='/users' element={<Users/>}></Route>
                </Routes>
            </BrowserRouter>
    </>
  )
}

export default App