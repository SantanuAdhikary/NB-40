

let para1 = document.getElementById("para1")
console.log(para1)

para1.style.backgroundColor = "red"
para1.style.color = "white"


let paragraphs = document.getElementsByTagName("p")
console.log(paragraphs)
console.log(paragraphs[2])

paragraphs[2].style.backgroundColor = "purple"


let login = document.querySelector("button")
console.log(login)


let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[1].style.backgroundColor = "green"

let box1 = document.querySelector(".box")
console.log(box1)
box1.style.backgroundColor = "pink"


let firstPara = document.querySelector("#para1")
console.log(firstPara)


let h1 = document.getElementsByTagName("h1")

h1[0].style.backgroundColor = "red"

h1[0].innerText = "hi"


boxes[1].innerHTML = " <h2>i am box2</h2> <p>this is para</p> <button>submit.</button>"


let button = document.createElement("button")
button.innerText = "click"
button.classList.add("btn")
boxes[1].after(button)

button.classList.remove("btn")