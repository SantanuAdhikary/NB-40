
let emp = {
    ename : "miller",
    age : 10 , 
    isEmp : true
}
console.log(emp)
console.log(typeof emp)      // object

// ! JSON.stringify()

let jsondata = JSON.stringify(emp);
console.log(jsondata)
console.log(typeof jsondata)    // string

// ! JSON.parse()

let emp2 = JSON.parse(jsondata)
console.log(emp2)
console.log(typeof emp2)        // object

// ! JSON methods apply on array 

let arr = [10,20,30,40]
console.log(arr)
console.log(typeof arr)   // object

let arr2 = JSON.stringify(arr)
console.log(arr2)
console.log(typeof arr2)   // string

let arr3 = JSON.parse(arr2)
console.log(arr3)         // object 



// ! deep copy by using JSON methods


let arr10 = [10,20,30]

let copy = JSON.parse(  JSON.stringify(arr10) );

copy.push("html")
arr10.shift()

console.log(copy)
console.log(arr10)