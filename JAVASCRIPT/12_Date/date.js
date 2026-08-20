

// ! how to create Date object 

let date = new Date();

console.log(date)


console.log("hour is : ", date.getHours())
console.log("minutes is : ", date.getMinutes())
console.log("second is : ", date.getSeconds())
console.log("milisecond is : ", date.getMilliseconds())
console.log("time is : ", date.toLocaleTimeString())


console.log("year is : ",date.getFullYear())

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

console.log("month is : ",months[ date.getMonth() ])


let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

console.log("today is : ", days[date.getDay()] )

console.log("today date is : ",date.getDate())


console.log("mm / dd / yyyy : ",date.toLocaleDateString())


console.log(Date.now())
console.log("--------------------------------------------------------------")

// !  difference b/2 == and ===



let num1 = 20 ; 
let num2 = "20"; 


console.log(num1 == num2) ;  // true
console.log(num1 === num2) ; // false