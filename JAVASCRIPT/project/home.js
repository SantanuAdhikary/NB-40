



let getProducts = async()=>{

    try{

        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json();
        
        displayProducts(data);
    }catch(err)
    {
        console.log(err)
    }
}

getProducts();


let main = document.querySelector("main")

let displayProducts = (products)=>{

    
let loginUser = JSON.parse( localStorage.getItem("loginUser"))
console.log(loginUser)

 if(!loginUser)
    return window.location.href = "login.html"


let username = document.getElementById("username")
username.innerText = loginUser.name;



   products.map((product)=>{

    let div = document.createElement("div")
    div.classList.add("card")

    div.innerHTML = `
                        <img src= ${product.image}>
                        <p> ${product.title}</p>
                        <p>${product.price * 80.} Rs</p>
                        <button> add to cart</button>
                      `

    main.append(div)
   })
}



let logout = document.getElementById("logout")


logout.addEventListener("click",()=>{

    localStorage.removeItem("loginUser")

    window.location.href = "login.html"
})