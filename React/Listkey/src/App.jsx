import Card from "./component/Card"


function App() {


  let subjects = ["html","css","js","react","java","python"]

  let emp = [
    {
    ename : "miller",
    eid : 101,
    sal : 20000
  },
    {
    ename : "john",
    eid : 102,
    sal : 25000
  },
    {
    ename : "scott",
    eid : 103,
    sal : 15000
  },
    {
    ename : "blake",
    eid : 104,
    sal : 19000
  },
]

  return (
   <>
        <h1>List and Key</h1>
        {
          subjects.map((sub,index)=>{
             return <li key={index}> {sub}</li>
          })
        }

        <main>
           {
            emp.map((ele)=>{
               return <div key={ele.eid}> 
                    <h3> ename is : {ele.ename}</h3>
                    <h4>eid is : {ele.eid}</h4>
                    <h4> sal is : {ele.sal}</h4>
               </div>
               
            })
           }
        </main>

        <hr />

        <h1>displaying array element by using props</h1>

        <section>
             {
              emp.map((ele)=>{
                return <Card 
                    ename = {ele.ename}
                    sal ={ele.sal} 
                    eid = {ele.eid}
                    key={ele.eid}
                  />
              })
             }
        </section>
    </>
  
)}

export default App
