

let arr = [10,20,30,40]



arr.map((ele,index,array)=>{
  console.log(ele,index,array)
})


console.log('--------------------------------------------')

let price = [1000,750,250,500]

let updatedPrice = price.map((ele)=>{
   return ele + 200;
})

console.log(updatedPrice)  // [ 1200, 950, 450, 700 ]
console.log(price)



let subjects = ['sql','java','node','python']


let upperArr = subjects.map((ele)=>{
    return ele.toUpperCase();
})

console.log(upperArr)



console.log("--------------------------------------------------")



// ! 2. filter()


let marks = [56,75,59,80,65,90,45,88,70]

let highest= marks.filter((ele)=>{

        return ele >= 70
})

console.log(highest)

console.log("-------------------------")

// ! 3. forEach()


let age = [10,20,5,9,65,34]


let m = age.forEach((ele)=>{
   
  return ele ;
})

console.log(m)
console.log("-------------------------------------------")

// ! 4. reduce() 


let nums = [1,2,3,4,5]

let sum = nums.reduce((acc,ele)=>{
   return acc + ele;
},0)

console.log(sum)

let multiply = nums.reduce((acc,ele)=>{
   return acc * ele;
},1)

console.log(multiply)


// ! 5. sort()


let unsorted = [5,1,4,3,2]

let asc = unsorted.sort((a,b)=>{
  return a - b;
})

console.log(unsorted)
console.log(asc)

let dsc = unsorted.sort((a,b)=>{
  return b - a; 
})

console.log(dsc)