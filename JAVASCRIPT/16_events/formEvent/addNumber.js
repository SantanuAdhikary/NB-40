

let form = document.querySelector("form")
console.log(form)

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let num1 = Number( document.getElementById("num1").value )
    let num2 = Number( document.getElementById("num2").value )
    let sum = num1 + num2

    console.log(num1,num2, sum)

    let h1 = document.getElementById("result")
    h1.innerText = `The addition of ${num1} and ${num2} is ${sum}`

    console.log("addition done")
})
