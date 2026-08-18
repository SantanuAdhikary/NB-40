

let str1 = 'hi'
let str2 = "hi"
let str3 = `hello
how 
are 
you`

console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)

console.log(str3)



let a = 10 ; 
let b = 20 ;
let myName = "santanu"

console.log(`the addition of ${a} and ${b} is : ${a+b}`)

console.log(`my name is : ${myName}`)


// length


console.log(myName.length)


//! 1. toUpperCase()


let str4 = "Hello"

let upper = str4.toUpperCase();
console.log(upper)

console.log(str4.toUpperCase())

console.log(str4)

// ! 2. toLowerCase()

let str5 = "Hello How Are You"
let lower = str5.toLowerCase();
console.log(lower)
console.log(str5.toLowerCase())

console.log(str5)

// ! 3. trim()

let str6 = "  hi  "
let str7 = str6.trim();

console.log(str7.length)
console.log(str6.length)


// ! 4. indexOf()

let str8 = "hello how are you"
console.log(str8.indexOf('o'))
console.log(str8.indexOf('l'))
console.log(str8.indexOf('z'))


// ! 5. lastIndexOf()

console.log(str8.lastIndexOf('o'))
console.log(str8.lastIndexOf('l'))
console.log(str8.lastIndexOf('z'))


// ! 6. charAt()

console.log(str8.charAt(1))  // e

// ! 7. concat()


console.log(str7.concat(" ",str8))


// ! 8. includes()

console.log(str8.includes("me"))     // false
console.log(str8.includes("you"))   // true 


// ! 9. replace()

let sentence = `I am from bangalore, I love bangalore`

console.log(sentence.replace("bangalore","chennai"))


// ! 10. replaceAll()

let password = "hello"

console.log(password.replaceAll("l","$"))

console.log(sentence.replaceAll("bangalore","chennai"))


// ! 11. split()


let greet =  "how are you"

console.log(greet.split(" "))
console.log(greet.split(""))
console.log(greet.split())



// ! 12. slice() 

let msg = "how are you"

console.log(msg.slice(0,2));   // ho

console.log(msg.slice(4))     // are you

console.log(msg.slice(3,0))  // 

console.log(msg.slice(-3))  // you

console.log(msg.slice(0,-1)) // remove the last character from string




// ! 13. substring()


console.log(msg.substring(0,2));   // ho

console.log(msg.substring(4))     // are you

console.log(msg.substring(3,0))  // how 

console.log(msg.substring(-3))  // how are you

