

let form = document.querySelector("form")
// console.log(form)


form.addEventListener("submit",(e)=>{

    e.preventDefault();

    //! get all the input value 

    let name = document.getElementById("name").value 
    let email = document.getElementById("email").value 
    let password = document.getElementById("password").value 
    let confirmPassword = document.getElementById("password2").value 

    console.log({name,email,password,confirmPassword})

    // ! checking all inputs are filled or not 

    if(!name || !email || !password || !confirmPassword)
        return alert("fill all the fields")

    // ! checking password and confirm password are mathching or not

    if(password !== confirmPassword)
        return alert("password wrong")

    // ! we are fetching the users from localstorage 

    let users = JSON.parse( localStorage.getItem("users") ) || []
    console.log(users)

    // ! we are creating the new user

    let newuser = {
        id: Date.now(),
        name : name ,
        email : email,
        password : password,
        cart : []
    }

    // ! we are updating the user that we got from localstorage 
    users.push(newuser)

    // ! we are adding the updated users in localstorage 

    localStorage.setItem("users",JSON.stringify(users))

    alert("registration done successfully")

    window.location.href = "login.html"
})




