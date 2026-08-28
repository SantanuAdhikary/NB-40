

let addDigits = (digit)=>{

    console.log(digit)
    let input = document.querySelector("input")
    
    if(input.value == 0)
        input.value = digit
    else
        input.value += digit;

}


let calculate =()=>{

    let input = document.querySelector("input")

    let expression = input.value;
    // console.log(expression)

    let ans =  eval(expression)
    // console.log(ans)

    input.value = ans;

    console.log("done")
}

let clean =()=>{

    let input = document.querySelector("input")
    input.value  = ""
}

let back =()=>{
    let input = document.querySelector("input")
    let exp = input.value;
    let updatedExp = exp.slice(0,-1)
    input.value = updatedExp;
}