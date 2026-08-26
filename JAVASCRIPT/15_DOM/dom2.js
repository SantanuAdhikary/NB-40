

//! 4. how to add or remove the class from any element 


let container = document.getElementById("container")
console.log(container)

console.log(container.classList)

container.classList.remove("dark")

container.classList.add("green")


// ! 5. how to create any element 


  let para = document.createElement("p")
  para.innerText = "i am paragraph from js "

//   container.append(para)
//   container.prepend(para)
// container.before(para)
container.after(para)

let li = document.createElement("li")
li.innerText = "html"

let ol = document.querySelector("ol")

// ol.append(li)
// ol.prepend(li)
ol.after(li)