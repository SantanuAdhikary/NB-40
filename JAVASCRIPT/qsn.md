1. var vs let vs const 
2. undefined vs null 
3. how to know the datatype
4. lexical scopping 
5. higherorder and callback function 
6. what is IIFE 
7. slice() vs substring() in string 
8. string interpolation / template literals 
9. how to convert string into array 
10. slice() VS splice()  in array 
11. how to convert array into string 
12. map() , filter() , reduce() , sort() ,forEach()
13. Object.freeze() vs Object.seal()
14. what is destructure, how to do it 
15. what is rest paramter
16. what is spread operator 
17. what is shallow and deep copy
18. what is json and what are the methods are there ?






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



### qsn 



1. Get an array containing only the names of all employees.

2. Get all employees whose salary is greater than ₹60,000.

3. Get the names of all employees who work in the IT department.

4. Calculate the total salary of all employees.

5. Calculate the average salary of all employees.

6. Get all employees who are currently active.

7. Find the employee with id = 7.

8. Find the employee who has the highest salary.

9. Find the employee who has the most years of experience.

10. Get the names of employees who have more than 5 years of experience.

11. Get all employees who know JavaScript.

12. Find out whether there is at least one employee who earns more than ₹1,00,000.



Find out whether all employees have at least 1 year of experience.
Get the names of all employees who are under 30 years old and have a salary greater than ₹50,000.
Calculate the total salary of IT employees.
Get the employees sorted by salary from highest to lowest.
Get the employees sorted by age from youngest to oldest.
Count how many employees belong to each department.

Expected result:

{
  IT: 4,
  HR: 2,
  Finance: 2,
  Marketing: 2
}

Calculate the total salary for each department.

Expected result:

{
  IT: 235000,
  HR: 135000,
  Finance: 135000,
  Marketing: 108000
}

Find the highest-paid employee in each department.

Expected result should look something like:

{
  IT: {
    name: "...",
    salary: ...
  },
  HR: {
    name: "...",
    salary: ...
  },
  Finance: {
    name: "...",
    salary: ...
  },
  Marketing: {
    name: "...",
    salary: ...
  }
}


Challenge: Try solving all 20 without using traditional for / while loops.