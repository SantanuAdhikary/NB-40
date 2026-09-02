

let form = document.querySelector("form")
console.log(form)

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    let stuName = document.getElementById("stuName").value;
    let stuRoll = document.getElementById("stuRoll").value;
    let stuPh = document.getElementById("stuPh").value;

    console.log(stuName);
    console.log(stuRoll);
    console.log(stuPh);

    console.log("register done successfully");
})