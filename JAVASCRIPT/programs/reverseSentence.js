// output => "olleh woh era uoy"


let str = "hello how are you"

let ans = ""

let words = str.split(" ");

// console.log(words);

for(let word of words)
{
    // console.log(word)
    let rev = "";
    for(let i=word.length-1 ;i>=0 ; i--)
    {
        rev = rev + word.charAt(i);
    }
    ans = ans + rev+" " ;
}

console.log(ans.trim())