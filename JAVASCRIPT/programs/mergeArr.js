

let merge=()=>
{

      let a = [5,9,13]
      let b = [7,8,12,18,25,45,50]

      let c = []

      let i=0 , j=0;

      while(i<a.length && j < b.length)
      {
        if(a[i] < b[j])
            c.push(a[i]);
        else 
            c.push(b[j])
      }

      while(i<a.length)
      {
        c.push[a[i]]
      }
      while(j<b.length)
      {
        c.push[b[j]]
      }

      console.log(c)
}

merge()