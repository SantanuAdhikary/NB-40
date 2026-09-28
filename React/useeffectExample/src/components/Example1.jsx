import React, { use, useEffect, useState } from 'react'

const Example1 = () => {

    let [count , setCount] = useState(10)
    let [dark , setDark] = useState(true)

    useEffect(()=>{
        console.log("i am useEffect 1")
    })

    useEffect(()=>{
        console.log("i am useEffect 2")
    },[])

    useEffect(()=>{
       console.log("i am useEffect 3")
    },[dark])


    useEffect(()=>{
        console.log("i am useEffect 4")
    },[count])


    useEffect(()=>{

    let num = 0 ; 
      let timer =  setInterval(()=>{
            console.log(num++)
        },1000)

        return ()=>{

             clearInterval(timer)
             console.log("it's done bro, please move on")
        }
    })

  return (
    <>
       <h1> useEffect Example </h1>

       <h2>count is {count}</h2>

       <button onClick={()=>setCount(count + 1)}>increase</button>


       <button onClick={()=>setDark(!dark)}>{dark?"light" : "dark"}</button>

    </>
  )
}

export default Example1