

// ! how to add in localstorage

localStorage.setItem("myName","santanu")
localStorage.setItem("myId",101)
localStorage.setItem("skills",JSON.stringify(["java","python","webtech"]))


// ! how to get data 

let myName = localStorage.getItem("myName")
console.log(myName)

let myId = Number( localStorage.getItem("myId"))
console.log(myId)
console.log(typeof myId)

let skills = JSON.parse( localStorage.getItem("skills"))
console.log(skills)


// ! how to remove data from localstorage 


localStorage.removeItem("myId")

// ! how to remove all the items 

localStorage.clear()