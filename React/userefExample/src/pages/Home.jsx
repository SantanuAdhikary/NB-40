import React, { useRef, useState } from 'react'

const Home = () => {

    let [dark,setDark]  = useState(false)
    let a = useRef(20) ;
    let b = 20  
    let increase = ()=>{
        // console.log(a)
        console.log("a value is " ,a.current++)
        console.log("b value is ",b++)
    }


    let h1 = useRef()
    let changeColor =()=>{
        console.log(h1.current)
        h1.current.style.color = "red"
    }
  return (
    <div className='home'>
         <header>
               <button onClick={increase}>increase</button>
               <button onClick={()=>setDark(!dark)}>
                  {dark?"light" : "dark"}
                </button>
         </header>
         <main>    
              <h1 ref={h1}> useRef hook Example </h1>
              <button  onClick={changeColor}> change color </button>
         </main>
    </div>
  )
}

export default Home