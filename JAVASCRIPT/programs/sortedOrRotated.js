
let sortedOrRotated =(arr)=>{

    let count = 0 ; 
    for(let i=0 ;i<arr.length-1; i++)
    {
        if(arr[i] > arr[i+1])
            count++;
    }

    if(arr[arr.length-1] > arr[0])
        count++;

    return count<=1 ;
}

console.log(sortedOrRotated([10,20,40,60]))
console.log(sortedOrRotated([40,50,10,20,30]))
console.log(sortedOrRotated([40,30,50,10,20,25]))
console.log(sortedOrRotated([10,20,30,90,20]))