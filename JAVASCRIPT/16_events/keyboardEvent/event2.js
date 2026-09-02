



let btn1 = document.getElementById("btn1")
console.log(btn1)


btn1.addEventListener("click",()=>{
    alert("this is the example of event listener")
})

console.log("-----------------------------------------------")

let btn2 = document.getElementById("btn2")
console.log(btn2)

btn2.addEventListener("click",(e)=>{

    console.log(e)
    console.log(e.target)
    console.log(e.type)
    console.log("btn2 is clicked")

})

console.log("--------------------------------")


let list = document.querySelectorAll("li")
console.log(list)


list.forEach((li)=>{

   li.addEventListener("click",(e)=>{

         console.log(e.target.innerText)
   })

})


console.log("--------------------------------")


let f1 =()=>{
    console.log("i am f1 click")
}
let f2 =()=>{
    console.log("i am f2 click")
}


let btn4 = document.getElementById("btn4")

btn4.addEventListener("click",()=>{
    console.log("first click")
})
btn4.addEventListener("click",()=>{
    console.log("second click")
})
btn4.addEventListener("click",()=>{
    console.log("third click")
})


console.log("---------------------------------")


let input = document.querySelector("input")
console.log(input)

input.addEventListener("keydown",()=>{

    console.log("key is pressed")
})

let box = document.querySelector('.box')
// console.log(box)

input.addEventListener("keyup",(e)=>{

    console.log("key is up")
    console.log(e.target.value)

    box.innerText = e.target.value
})