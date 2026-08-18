

// ! Named Function 


function empDetails()
{
    console.log("miller")
    console.log(101)
}
empDetails()
empDetails()



function add(a, b)
{
    console.log(a + b)
}

add(2,8)
add(25,80)


function sub(a,b)
{
    return a - b ;
}

let res = sub(40,10)
console.log(res)

console.log(sub(100,20))


// ! Arrow Function 


let multiply = (a,b)=>{

    console.log("i am multiply function")
    console.log(a * b)
}

multiply(10,3)



let division = (a, b)=> a / b ;


console.log(division(40,5))

console.log("----------------------------Nested Function-------------------------")




let outer = ()=>{
    console.log("i am outer function")
    let a = 10 ;

    let inner= ()=>{
        let b = 20 ;
        console.log("i am inner function")
        console.log("a value is ",a)  
        console.log("b value is ",b)
    }

    // console.log(b); 
    inner();
}

outer();


console.log("----------higher order funtion--------------")


let wish =()=>{
    console.log("happy birthday")
}

let greetings = (myFunc)=>{
    myFunc()
}
greetings(wish)

greetings( ()=>{
    console.log("I am callback function")
} )