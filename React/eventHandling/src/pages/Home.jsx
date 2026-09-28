import React from 'react'

const Home = () => {

    let handleClick = ()=>{
        alert("you are getting a call")
    }

    let add = (a,b)=>{
        alert(a + b)
    }

    let userDetails =(name , age)=>{

        alert(`user name is ${name} and age is ${age}`)
    }

    let hi =(e)=>{

        console.log(e)
    }

    let handleSubmit =(e)=>{
        e.preventDefault();

        console.log("submitted")
    }

  return (
    <div className='homeContainer'>

         <header>
                   <button onClick={handleClick}> call me </button>
                   <button onClick={()=>add(30,60)}>add</button>
                   <button onClick={()=>userDetails("miller",45)}> details</button>

                   <button onClick={hi}>dbl click me</button>
         </header>

         <form action="" onSubmit={handleSubmit}>

            <button>register</button>

         </form>


    </div>
  )
}

export default Home