

// ! how to declare array 

let arr = [10,20,30,40,50]

console.log(arr)
console.log(arr.length)

let arr2 = [10,"hi",true,[20,"bye"]]

console.log(arr2)
console.log(arr2.length)

// ! how to access 

console.log(arr[1]);

// ! how to modify value in any index 

arr[3] = 400 ; 

console.log(arr)

// ! how to traverse Array 

let subjects = ["sql","python","java","webtech"]

for(let i=0 ; i<subjects.length ; i++)
{
    console.log(subjects[i]);
}


// ! traversing by for of loop 


for(let subject of subjects)
{
    console.log(subject)
}


// !  Array Methods 

// ! 1. push()

let marks = [75,80,95,65]
console.log(marks)

marks.push(90)
console.log(marks)


// ! 2. pop()

let food = ["biriyani","maggie","fried rice","umpa"]

food.pop();
console.log(food)

// ! 3. shift()


let movies = ["leo","master","beast","jananayagan"]

movies.shift()

console.log(movies)

// ! 4. unshift()

let series = ["dark","12 monkeys","f.r.i.e.n.d.s"]

series.unshift("money heist")

console.log(series)


// ! 5. indexOf()

let numbers = [50,10,20,40,30,10]

console.log(numbers.indexOf(10))        // 1
console.log(numbers.indexOf(15))       // -1

// ! 6. lastIndexOf()

console.log(numbers.lastIndexOf(10))   // 5

// ! 7. includes()

console.log(numbers.includes(100))   // false
console.log(numbers.includes(30))   // true


// ! 8. concat()

let frontend = ["html","css","react"]
let backend = ["node","express","mongodb"]

let fullstack =  frontend.concat(backend)

console.log(fullstack)  // ['html', 'css', 'react', 'node', 'express', 'mongodb']


// ! 9. join()

let charArr = ['h','e','l','l','o']

let str = charArr.join("")

console.log(str)

// ! 10. reverse()

let arr3 = [1,2,3,4,5]

arr3.reverse()

console.log(arr3)


// ! 11. splice()

let arr4 = [10,20,30,40,50,60]

arr4.splice(1,2)

console.log(arr4)     // [10, 40, 50, 60]

let arr5 = [100,200,300,400,500,600]

arr5.splice(2,2,700) 

console.log(arr5)    // [100, 200, 700, 500, 600]


let arr6 = ["java","node","express","python"]

arr6.splice(2,0,"javascript")

console.log(arr6)