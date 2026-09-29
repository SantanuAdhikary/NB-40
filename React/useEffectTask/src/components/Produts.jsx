import React, { useEffect, useState } from 'react'

const Produts = () => {

    let [items,setItems] = useState([])


    let fetchData = async()=>{
        try{
                 let res = await fetch("https://dummyjson.com/products")
                 let data = await res.json();
                 console.log(data)
                 console.log(data.products)

                 setItems(data.products)
              
        }
        catch(err)
        {
            console.log(err)
        }
    }

    useEffect(()=>{
        
        fetchData()
    },[])


  return (
    <div className='container'>

      {

        items.length > 0 ?
          items.map((item)=>{
              return <div key={item.id}>
                 <img src={item.images[0]} alt="" />
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <p>{item.ratings}</p>
              </div>
          })

          : <h1> no data found</h1>
      }

         
    </div>
  )
}

export default Produts

