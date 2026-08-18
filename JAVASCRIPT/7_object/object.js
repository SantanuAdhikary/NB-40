

let student = {
    sname : "miller",
    sid : 101,
    isStudying : false,
    skills : ["sql","java","python","webtech"],
    address : {
                city:"chennai",
                pin:543216
             },
    work : function()
            {
                console.log("love to sleep")
            }
}

console.log(student)


// ! How to access object properties 


console.log("student name is ",student.sname);
console.log("student id is ",student.sid);
console.log("student skills are ",student.skills);
console.log("student's third skill is ",student.skills[2]);
console.log("student's address  is ",student.address);
console.log("student's pin  is ",student.address.pin);
student.work();


// ! how to modify the object value 

student.sid  = 102 ;

console.log(student)

// ! how to add new property 

student.phNo = 9768120101


// ! how to delete 

delete student.isStudying


console.log(student)


// ! accessing object by using []


console.log(student["sname"])


