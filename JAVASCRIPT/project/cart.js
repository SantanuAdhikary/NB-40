let loginUser = JSON.parse( localStorage.getItem("loginUser"))
console.log(loginUser)

let cartItems = loginUser.cart ; 
console.log(cartItems)


let Display = ()=>{
      
    let main = document.querySelector("main")

    main.innerHTML = ""
    
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
                           <button onclick="handleRemove(${item.id})">remove</button>
                        `
            main.append(div);
        })
    }
}

Display();

let handleRemove=(productId)=>{
    console.log(productId)
  
    //! we are removing the element and getting one new array
    let newItems = cartItems.filter((ele)=> ele.id != productId)
    console.log(newItems)

    //! these new array we are updating with loginusers's cart array 
    cartItems = newItems;
    loginUser.cart = [...cartItems];

    //! loginUser we are updating in localstorage 

    localStorage.setItem("loginUser",JSON.stringify(loginUser));

    let allUsers = JSON.parse(localStorage.getItem("users"))

    let loginId = loginUser.id;

    let currentUser = allUsers.find((u)=> u.id == loginId);
    currentUser.cart = cartItems;

    localStorage.setItem("users",JSON.stringify(allUsers))

    Display()
}