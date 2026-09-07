

let players = ["rohit","gill","virat","iyer","rahul","jadeja","bumrah"]

let ol = document.querySelector("ol")

players.map((player)=>{
    // console.log(player)

    let li = document.createElement("li")
    li.innerText = player
    ol.append(li)
})

// --------------------------------------------------------------------------


const employees = [
  { id: 1, name: "John", age: 28, department: "IT", salary: 50000 },
  { id: 2, name: "Priya", age: 25, department: "HR", salary: 45000 },
  { id: 3, name: "Rahul", age: 30, department: "Finance", salary: 60000 },
  { id: 4, name: "Ananya", age: 27, department: "Marketing", salary: 55000 },
  { id: 5, name: "Arun", age: 32, department: "IT", salary: 70000 },
  { id: 6, name: "Sneha", age: 26, department: "HR", salary: 48000 },
  { id: 7, name: "Vikram", age: 29, department: "Sales", salary: 52000 },
  { id: 8, name: "Divya", age: 31, department: "Finance", salary: 65000 },
  { id: 9, name: "Karthik", age: 24, department: "Sales", salary: 42000 },
  { id: 10, name: "Meena", age: 33, department: "Marketing", salary: 62000 }
];

let main = document.querySelector("main")

employees.map((emp)=>{

    console.log(emp)

    let div = document.createElement("div")
    div.classList.add("card")

    div.innerHTML = `
                     <h2>ename is : ${emp.name} </h2>
                     <h2>eid is : ${emp.id} </h2>
                     <h2>age is : ${emp.age} </h2>
                     <h2>department is : ${emp.department} </h2>
                     <h2>salary is : ${emp.salary} </h2>
                    `
    main.append(div)
})