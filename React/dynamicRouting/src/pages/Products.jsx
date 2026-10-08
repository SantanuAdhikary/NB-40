import React, { useEffect, useState } from 'react'
const Products = () => {
    let [items,setItems] = useState([])
    let getData = async()=>{
        try{
           let res = await fetch("https://fakestoreapi.com/products/")
           let data = await res.json()
           setItems(data)
        }
        catch(err)
        {
            console.log(err)
        }
    }
    useEffect(()=>{
            getData();
    },[])
  return (
    <main>
       {
           items.map((item)=>{
              return <div key={item.id} className='card'>
                   <p>{item.title}</p>
                   <p>{item.price} Rs</p>
                   <button>more info</button>
              </div>
           })
       }


    </main>
  )
}

export default Products