

class student{

    sname ; 
    sid ; 
    sage ; 

    constructor(sname , sid , sage)
    {
          this.sname = sname ; 
          this.sid = sid ; 
          this.sage = sage;
    }
}

let stu1 = new student("dhoni",7,10);
let stu2 = new student("rohit",45,8);
let stu3 = new student("virat",18,6);

console.log(stu1)
console.log(stu2)
console.log(stu3)