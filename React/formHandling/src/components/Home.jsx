import React, { useEffect, useState } from 'react'

const Home = () => {

    let [products,setProducts] = useState([])
    let [search,setSearch] = useState("")

    let fetchData = async()=>{

        try{

            let res = await fetch("https://fakestoreapi.com/products")
            let data = await res.json()
            console.log(data)
            setProducts(data)
        }
        catch(err)
        {
           console.log(err)
        }
    }

    useEffect(()=>{
           fetchData();
    },[])


    let filteredProducts = products.filter((product)=> product.title.toLowerCase().includes(search.toLowerCase()))

    console.log(filteredProducts)
  return (
    <div className='homePage'>

        <header>
             <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </header>

        <main>
             
             {
                 filteredProducts.length >0 ? 
                  filteredProducts.map((product)=>{
                    return <li key={product.id}>

                         {product.title}
                    </li>
                 })
                 : <h1>no product</h1>
             }
        </main>

    </div>
  )
}

export default Home