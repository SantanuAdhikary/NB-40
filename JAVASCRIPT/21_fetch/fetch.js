

let fetchedData = fetch("https://fakestoreapi.com/products")

console.log(fetchedData)  // promise


fetchedData.then((data)=>{
    console.log(data)    // response 

    let jsondata = data.json();
    console.log(jsondata)        // promise 

    jsondata.then((data)=>{
        console.log(data)     // original data
    })
    .catch((err)=>{
        console.log(err)
    })

})
.catch((err)=>{
    console.log(err)
})


let ol = document.querySelector("ol")

let getProducts = async ()=>{

    try{

        let res =await fetch("https://fakestoreapi.com/products")
        console.log(res)
    
        let data =  await res.json();
        console.log(data)


        data.map((ele)=>{
            
            let li  = document.createElement("li")
            li.innerText = ele.title
            ol.append(li)
        })

      
    }
    catch(err)
    {
        console.log(err)
    }
}

getProducts();