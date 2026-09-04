

let input = document.querySelector("input")

let generatePassword =()=>{

    let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small = caps.toLowerCase();
    let special = "!@#$%&"
    let numbers = "0123456789"
    let pass = ""

    let first = caps[ Math.floor(Math.random() * caps.length) ]
    let second = small[Math.floor(Math.random() * small.length)]
    let third = special[Math.floor(Math.random() * special.length)]
    let fourth = numbers[Math.floor(Math.random() * numbers.length)]

    pass = first + second + third + fourth
    input.value = pass;
    console.log(pass)

}



let img = document.querySelector("img")
console.log(img)

img.addEventListener("click",()=>{

    if(input.type=="password")
       {
           input.type = "text"
           img.src = "eye-open.png"
        } 
        else
            {
                input.type = "password"
                img.src = "eye-close.png"
        }

    console.log("clicked")
})


let copyText =()=>{

    input.select()
    document.execCommand("copy")
    console.log("copied")
}