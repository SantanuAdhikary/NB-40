
let players = [
    {
        name : "virat",
        jerseyNo : 18, 
        age : 36
    },
    {
        name : "rohi",
        jerseyNo : 45, 
        age : 39
    },
    {
        name : "dhoni",
        jerseyNo : 7, 
        age : 41
    },
    {
        name : "dk",
        jerseyNo : 19, 
        age : 40
    }
]

console.log(players)

players.map((player)=>{
    console.log(player)
})


console.log("------------------------------------------")

players.map((player)=>{
    console.log(player.name)
})

console.log("--------------------------------")


let totalAge = players.reduce((acc,player)=>{

      return acc + player.age
},0)

let avgAge = totalAge / players.length

console.log(totalAge)
console.log(avgAge)