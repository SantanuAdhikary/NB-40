import React, { useState } from 'react'

const Navbar = () => {

    let [isLoggedin, setIsLoggedin] = useState( true);

  return (
    <nav>

         <h1>conditionalRendering</h1>
         <button onClick={()=>setIsLoggedin(!isLoggedin)}>

             {isLoggedin ? "logout" : "login"}
             
         </button>
    </nav>
  )
}

export default Navbar