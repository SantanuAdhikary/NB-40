
let student = {
    sname : "dhoni",
    age : 7 , 
    isPlayer : true,
    skills : ["math","rhymes","gk","drawing"]
}

console.log(student.sname)
console.log(student["age"])

 
let {sname ,skills,isPlayer,age} = student

console.log(sname)
console.log(age)
console.log(skills)


// !    Rest Parameter  (...)

function f1(a,b,c)
{
  console.log(a); // 10
  console.log(b); // 20
  console.log(c);  // [30,40,50]
}

f1(10,20,30,40,50)

console.log("-------------------------------------")

// ! Spread Operator

let frontend = ["html","css","js","react"]
let backend = ["node","express","mongodb"]

console.log(frontend)      // [ 'html', 'css', 'js', 'react' ]
console.log(...frontend)  // html css js react


// ! merge two arrays by using spread

let fullstack = [...frontend,...backend]
console.log(fullstack) // ['html','css','js','react','node','express','mongodb']


// ! merge two objects by using spread

let ob1 ={
    obname : "pen"
}

let ob2 ={
    price : 30
}

let ob3 = {...ob1,...ob2}
console.log(ob3)
console.log("--------------------------------")

// ! shallow copy  and Deep copy


let subjects = ["java","python","sql"]

let copy = [...subjects];
// let copy = ["java","python","sql"]

copy.push("webtech")

console.log(copy)
console.log(subjects)