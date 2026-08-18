
let countDigit =(n)=>{
    let count = 0 ; 
    while(n > 0)
    {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

let isArmStrong =(n)=>{

    let sum = 0 ; 
    let temp = n ;

    let count = countDigit(n);
    // console.log("total digits ",count)

    while(n > 0)
    {
        let ld = n % 10 ; 
        sum = sum + Math.pow(ld , count) ; 
        n = Math.floor(n / 10);
    }

    // console.log("num is ",n)
    // console.log("sum is ",sum)
    // console.log("temp is ",temp)
    return sum == temp
}

console.log(isArmStrong(123))