// ! Object Methods 

let marker = {
    brand : "camlin",
    price : 50,
    color : "blue",
    canWrite : true
}
console.log(marker)

// ! 1. Object.keys()


let keys = Object.keys(marker)
console.log(keys)

// ! 2. Object.values()

let values = Object.values(marker)
console.log(values)

// ! 3. Object.entries()

let keyvalue = Object.entries(marker)
console.log(keyvalue)



// ! 4. Object.freeze()


let ob1 = {
    obName : "laptop",
    price : 65000,
    color:"black"
}

console.log("before freeze")
console.log(ob1)

Object.freeze(ob1);

console.log("after freeze")

ob1.color = "blue"     // we can't modify
ob1.brand = "hp"      // we can't add 
delete ob1.price;    // we can't delete 

console.log(ob1)


// ! 5. Object.isFrozen()

console.log(Object.isFrozen(ob1))
console.log(Object.isFrozen(marker))


// ! 6. Object.seal()

let ob2 ={
    obName : "projector",
    brand : "epson",
    price : 75000
}


console.log("before seal")
console.log(ob2)

Object.seal(ob2)

console.log("after seal")
ob2.roomNO = 401                // we can't add
delete ob2.price               // we can't delete
ob2.price = 65000             // modification is possible

console.log(ob2)


// ! 7. Object.isSealed()

console.log(Object.isSealed(ob2))  // true
console.log(Object.isSealed(marker))  // false
console.log(Object.isSealed(ob1))   // true


// ! 8. Object.assign()

let ob3 = {
    name : "raja"
}

let ob4 = {
    gf : "rani"
}

let mergedOb = Object.assign({},ob3,ob4)

console.log(mergedOb)  // { name: 'raja', gf: 'rani' }
console.log(ob3)      // { name: 'raja' }


// ! 9. hasOwnProperty()

let stu ={
    sname : "rahul",
    age : 10 
}

console.log(stu.hasOwnProperty("sname"))  // true
console.log(stu.hasOwnProperty("height")) // false