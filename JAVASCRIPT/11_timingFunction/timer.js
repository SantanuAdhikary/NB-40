

console.log("hello ...")

let wish =()=>{
    console.log("Happy Anniversary 💖🥰")
}


let timer1 = setTimeout(wish,5000)


let timer2 = setTimeout(()=>{
    console.log("this is setTimeout")
},7000)


console.log("😊")


clearTimeout(timer1)
clearTimeout(timer2)


let sorry = ()=>{

    console.log("I am very much sorry 😭🙏🏻🙏🏻")
}


let timer3 = setInterval(sorry,1000)

let timer4 = setInterval(()=>{

    console.log("i am setInterval")
},1000)

clearInterval(timer3)
clearInterval(timer4)