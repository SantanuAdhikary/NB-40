

let Display = ()=>{
    
    
    let loginUser = JSON.parse( localStorage.getItem("loginUser"))
    console.log(loginUser)
    
    let cartItems = loginUser.cart ; 
    console.log(cartItems)
     
    let main = document.querySelector("main")
    
    if(cartItems.length == 0)
    {
        main.innerHTML = `<h1>Cart is Empty</h1>`
    }
    else{

        cartItems.map((item)=>{
            let div = document.createElement("div")
            div.classList.add("card");
            div.innerHTML = `
                            <img src=${item.image}>
                            <p>${item.title}</p>
                            <p>${item.price*80} /- Rs</p>
                           <button>remove</button>
                        `
            main.append(div);
        })
    }
}


Display();