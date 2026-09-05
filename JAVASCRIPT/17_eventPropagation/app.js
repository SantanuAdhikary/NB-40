

let inner = document.querySelector(".inner")
let middle = document.querySelector(".middle")
let outer = document.querySelector(".outer")

inner.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("inner div is clicked")
})

middle.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("middle div is clicked")
})

outer.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("outer div is clicked")
})


// let main = document.querySelector("main")

// main.addEventListener("click",()=>{
//     console.log("main tag is clicked")
// })

// document.body.addEventListener("click",()=>{
//     console.log("body tag is clicked")
// })




// ! what is event delegation 



// let list = document.querySelectorAll("li")

// list.forEach((li)=>{
//     li.addEventListener("click",()=>{
//         console.log(li.innerText)
//     })
// })


let ol = document.querySelector("ol")

ol.addEventListener("click",(e)=>{

    console.log(e.target.innerText)
})