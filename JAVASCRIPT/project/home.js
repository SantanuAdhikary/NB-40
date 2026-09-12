

let products = [];

let getProducts = async()=>{

    try{

        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json();
        products = data ; 

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
                        <button onclick="addToCart(${product.id})"> add to cart</button>
                      `

    main.append(div)
   })
}



let logout = document.getElementById("logout")


logout.addEventListener("click",()=>{

    localStorage.removeItem("loginUser")

    window.location.href = "login.html"
})



let addToCart =(productId)=>{

    //  console.log(productId)

    // console.log(products)

    let item = products.find((product)=> product.id == productId)
    console.log(item)


    let users = JSON.parse(localStorage.getItem("users"))  || []

    // console.log(users)

    let loginUser = JSON.parse( localStorage.getItem("loginUser"))
    // console.log(loginUser)

    let user = users.find((u)=> u.id == loginUser.id);

    // console.log(user)

    user.cart.push(item);


    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("loginUser",JSON.stringify(user))

    alert("product added to the cart")
}