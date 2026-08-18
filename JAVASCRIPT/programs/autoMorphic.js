
let isAutoMorphic = (num)=>{

    let sq = num * num ; 

    while(num > 0)
    {
        let numLd = num % 10 ; 
        let sqLd = sq % 10 ; 

        if(numLd != sqLd) 
            return false;

        num = Math.floor(num / 10);
        sq = Math.floor(sq / 10);
    }

    return true;
}

console.log(isAutoMorphic(25))
console.log(isAutoMorphic(76))
console.log(isAutoMorphic(10))