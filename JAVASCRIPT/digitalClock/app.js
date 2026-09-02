


let display =()=>{

    let now = new Date();

    console.log(now.toLocaleTimeString())
    console.log(now.toLocaleDateString())

    let h2 = document.querySelector("h2")
    h2.innerText = now.toLocaleTimeString()

    let h3 = document.querySelector("h3")
    h3.innerText = now.toLocaleDateString()
}

display()

setInterval(display,1000)