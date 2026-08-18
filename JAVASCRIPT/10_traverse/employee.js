const employees = [
  {
    id: 1,
    name: "Arun",
    age: 28,
    department: "IT",
    salary: 60000,
    experience: 4,
    skills: ["JavaScript", "React"],
    isActive: true
  },
  {
    id: 2,
    name: "Priya",
    age: 32,
    department: "HR",
    salary: 55000,
    experience: 7,
    skills: ["Recruitment", "Communication"],
    isActive: true
  },
  {
    id: 3,
    name: "Rahul",
    age: 25,
    department: "IT",
    salary: 45000,
    experience: 2,
    skills: ["JavaScript", "Node.js"],
    isActive: false
  },
  {
    id: 4,
    name: "Sneha",
    age: 30,
    department: "Finance",
    salary: 70000,
    experience: 6,
    skills: ["Excel", "Accounting"],
    isActive: true
  },
  {
    id: 5,
    name: "Vikram",
    age: 35,
    department: "IT",
    salary: 90000,
    experience: 10,
    skills: ["JavaScript", "Node.js", "MongoDB"],
    isActive: true
  },
  {
    id: 6,
    name: "Divya",
    age: 27,
    department: "Marketing",
    salary: 50000,
    experience: 3,
    skills: ["SEO", "Content Writing"],
    isActive: true
  },
  {
    id: 7,
    name: "Karthik",
    age: 29,
    department: "Finance",
    salary: 65000,
    experience: 5,
    skills: ["Excel", "Accounting", "SQL"],
    isActive: false
  },
  {
    id: 8,
    name: "Anjali",
    age: 24,
    department: "IT",
    salary: 40000,
    experience: 1,
    skills: ["HTML", "CSS", "JavaScript"],
    isActive: true
  },
  {
    id: 9,
    name: "Suresh",
    age: 38,
    department: "HR",
    salary: 80000,
    experience: 12,
    skills: ["Recruitment", "Management"],
    isActive: true
  },
  {
    id: 10,
    name: "Meena",
    age: 31,
    department: "Marketing",
    salary: 58000,
    experience: 8,
    skills: ["SEO", "Social Media", "Content Writing"],
    isActive: false
  }
];



// 1. Get an array containing only the names of all employees.

let names = employees.map((emp)=>{
    return emp.name;
})

console.log(names)

// 2. Get all employees whose salary is greater than ₹60,000.


let highPaidEmp = employees.filter((emp)=>{
    return emp.salary > 60000
}).map((emp)=>{
    return emp.name
})

console.log("employee who are getting salaray more than 60000")
console.log(highPaidEmp)

// 3. Get the names of all employees who work in the IT department.

let ITemp = employees.filter((emp)=>{
    return emp.department == "IT"
}).map((emp)=> {
    return emp.name
})

console.log("employees who work in IT dept ")
console.log(ITemp)

// 4. Calculate the total salary of all employees.

let totalSal = employees.reduce((acc,emp)=>{
       return acc + emp.salary;
},0)

console.log("totalSalary is ",totalSal)

// 5. Calculate the average salary of all employees.

let avgSal = totalSal / employees.length

console.log("avg salary is ",avgSal)

// 6. Get all employees who are currently active.

let activeEmp = employees.filter((emp)=>{
    return emp.isActive == true;
})
console.log("active employees are")
console.log(activeEmp)

// 7. Find the employee with id = 7.

let emp7 = employees.filter((emp)=> emp.id == 7)
console.log("id no 7 emp")
console.log(emp7)

// 8. Find the employee who has the highest salary.

// 9. Find the employee who has the most years of experience.

// 10. Get the names of employees who have more than 5 years of experience.

// 11. Get all employees who know JavaScript.

// 12. Find out whether there is at least one employee who earns more than ₹1,00,000.