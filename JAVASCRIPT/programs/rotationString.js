


function isRotation(s1,s2)
{
    if(s1.length != s2.length)
        return false;

    return (s1+s1).includes(s2);
}


let s1 = "javascript"
let s2 = "scriptjava"
console.log(isRotation(s1,s2))
