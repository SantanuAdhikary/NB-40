

let form = document.querySelector("form")

// console.log(form)


form.addEventListener("submit",(e)=>{
    e.preventDefault();


    let email = document.getElementById("email").value ; 
    let password = document.getElementById("password").value ;

    if(!email || !password)
        return alert("fill all the fields");

    let users = JSON.parse( localStorage.getItem("users"))
    console.log(users)

  let loginUser =  users.find((user)=>{
         return user.email === email && user.password === password
    })
    console.log(loginUser)

    
    if(!loginUser)
        return alert("wrong credentials")

 // we are storing the data of the person who is doing the login

    localStorage.setItem("loginUser",JSON.stringify( loginUser))

    alert("login done successfully");

    window.location.href = "home.html"
})