

let p1 = new Promise((resolve,reject)=>{

    let flag = false;

    if(flag)
        resolve("resolved 1")
    else
        reject("rejected 1")
})


let p2 = new Promise((resolve,reject)=>{

    let flag = true;

    if(flag)
        resolve("resolved 2")
    else
        reject("rejected 2")
})


let p3 = new Promise((resolve,reject)=>{

    let flag = false;

    if(flag)
        resolve("resolved 3")
    else
        reject("rejected 3")
})


let p4 = new Promise((resolve,reject)=>{

    let flag = true;

    if(flag)
        resolve("resolved 4")
    else
        reject("rejected 4")
})



// ! 1. Promise.all()


Promise.all([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

// ! 2. Promise.any()


Promise.any([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

// ! 3. Promise.allSetteled()


Promise.allSettled([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

// ! 4. Promise.race()


Promise.race([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})