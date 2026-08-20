

// ! use of for of and for in loop in array 

let arr = [10,20,40,90]

for(let ele of arr)
{
    console.log(ele)
}

console.log("--------------------")

for(let i in arr)
{
    console.log(i, arr[i])
}

// ! use of for of and for in loop in string 


let str = "java"

for(let ch of str)
{
    console.log(ch)
}

console.log("---------------")
for(let i in str)
{
    console.log(i, str[i])
}

console.log("---------------------------------------------")

// !  for of and for in loop in object 

let ob = {
    sname : "miller",
    sage : 10 , 
    isStudent : true
}

for(let key in ob)
{
    console.log(key)
}


// for(let x of ob)
// {
//     console.log(x)  
// }