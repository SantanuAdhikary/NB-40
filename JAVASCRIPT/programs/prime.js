

let isPrime = function(n)
{
    let count = 0 ; 

    for(let i=1 ; i<= n ;i++)
    {
        if(n % i == 0 ) 
            count++;
    }
    return count == 2 ;
}

console.log(isPrime(9))
console.log(isPrime(13))


console.log("---- prime in range----")


for(let i=2 ; i<=20 ; i++)
{
   if(isPrime(i)) 
     console.log(i)
}