

let add =(a,b)=>{
    console.log("addition is ",(a+b))
}
let sub =(a,b)=>{
    console.log("subtraction is ",(a-b))
}
let mul =(a,b)=>{
    console.log("multiplication is ",(a*b))
}
let division =(a,b)=>{
    console.log("division is ",(a/b))
}


let calculator = (task, num1 , num2)=>
{
    task(num1 , num2)
}

calculator(add,10,39)
calculator(sub,100,30)
calculator(mul,19,21)
calculator(division,49,7)