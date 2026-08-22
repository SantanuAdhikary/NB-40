
let n = 9 ; 

for(let i=0 ; i< n ; i++)
{
    let str = ""
    for(let j=0 ; j<n ;j++)
    {
           if(i==j || i+j == n-1 || i== Math.floor(n/2) || j== Math.floor(n/2))
             str = str + "* "
          else
            str = str +"  "
    }
    console.log(str)
}