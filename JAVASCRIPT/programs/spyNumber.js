

function isSpyNumber(num)
{
    let sum = 0 ; 
    let mul = 1 ; 

    while(num > 0)
    {
        let ld = num % 10 ; 

        sum = sum + ld ; 
        mul = mul * ld ; 

        num = Math.floor(num / 10);
    }

    return sum == mul ;
}

console.log(isSpyNumber(123))
console.log(isSpyNumber(124))