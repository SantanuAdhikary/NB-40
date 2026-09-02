

let add =()=>{
    console.log(10 + 20)
}


let changeColor = ()=>{

    let card1 = document.querySelector(".card1")
    // console.log(card1)

    card1.style.backgroundColor = "red" 


    console.log("color changed")
}



let updateText = ()=>{

  let h1 = document.querySelector("h1")
  console.log(h1)

  h1.style.color = "blue"
  h1.style.textAlign = "center"
}


let copyText =()=>{

  let card2 = document.querySelector(".card2")
  let card2Content = card2.innerHTML 
  console.log(card2Content)

  let card3 = document.querySelector(".card3")
  card3.innerHTML = card2Content

  card2.innerHTML = ""
}



let changeColor2 =()=>{

    let card2 = document.querySelector(".card2")
    card2.style.backgroundColor = "pink"
}
let changeColor3 =()=>{

    let card2 = document.querySelector(".card2")
    card2.style.backgroundColor = "white"
}


let count = 0 ;
let increase =()=>{
   
    let card4 = document.querySelector(".card4")
    count++;
    card4.innerText = count;
}