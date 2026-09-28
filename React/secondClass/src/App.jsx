

let App = ()=>{

  let ename = "miller"
  let eid = "abc2025"
  let sal = 5000

  let isMarried = undefined;

   return (

    <div>

      <h1>this is app component</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

        <img src="" alt="" />

        <p>Lorem ipsum dolor <br /> 
        sit amet consectetur adipisicing elit.</p>

        <input type="text" />

         <label htmlFor=""></label>

         <div className="box"></div>
        
        <hr />

        <h1>emp name is :  {ename.toUpperCase()} </h1>
        <h2>eid is : {eid}</h2>
        <h3>sal is : {sal + 1}</h3>

         <h4>{isMarried} </h4>
    </div>

  

  
   )
}

export default App;


