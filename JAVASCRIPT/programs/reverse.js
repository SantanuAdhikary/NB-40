

function reverse(num)
{
    let rev = 0 ; 
    while(num > 0)
    {
        let ld = num % 10 ; 
        rev = rev * 10 + ld ; 
        num = Math.floor(num / 10);
    }

    return rev;
}

console.log(reverse(1234))
console.log(reverse(9182))