
let outer = ()=>{
    let a = 20 ; 

    let inner =()=>{
        a = a + 1 ; 
        console.log(a);
    }
    return inner
}

let ans = outer();

ans();
ans();
ans();
ans();
ans();

console.log("---------------------------------")

// ! Function Currying 


function multiply(a,b,c)
{
    return a * b * c ; 
}

let ans2 = multiply(1,2,3);
console.log(ans2)


function add(a)
{
   return function(b)
   {
     return function(c)
     {
        return a + b + c ;
     }
   }
}

let sum = add(1)(2)(3)


// ! function currying with arrow function 


let add2 = a=> b=> c => a + b + c ;

console.log(add2(10)(20)(30))
        
    
