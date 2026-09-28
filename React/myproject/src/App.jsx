


let App = ()=>{

   return(
     <div>
          <nav>
               <h2>myReactApp</h2>
               <ul>
                   <li>home</li>
                   <li>about</li>
                   <li>contact</li>
               </ul>
          </nav>
          <main>
              <div className="left">

                     <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" />

                    <h1>Welcome To myReactApp</h1>

                    <p> here you will learn how to create single page application and how to make interactice webpage by react.</p>

                    <button>get started</button>
              </div>

              <div className="right">
                 <img src="https://media.istockphoto.com/id/2154646461/photo/stressed-little-black-boy-reading-book-at-home-and-touching-head.jpg?s=612x612&w=0&k=20&c=hTPMBNP-4FgrpggFa7tXa9q9iSW1XD15nzYXbnD5eJw=" alt="" />
              </div>
          </main>
     </div>
   )
}

export default App