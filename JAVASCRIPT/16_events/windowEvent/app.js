

// ! load 


window.addEventListener("load",()=>{

    console.log("page is loaded")

    let h2 = document.createElement("h2")
    h2.innerText = "welcome to this page"
    let h1 = document.querySelector("h1")
    h1.after(h2)

   setTimeout(()=>{
       h2.remove()
   },3000)

})

console.log(window)

// ! scroll 

let count =0 

window.addEventListener("scroll",()=>{

    console.log("user is scrolling",count++)
})


// ! resize


window.addEventListener("resize",()=>{

    console.log("window size changed ",window.innerWidth)
})




// mouse event 
// keyboard event 
// form event 
// window 