import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";


let Home = ()=>{
   return(
    <div className="home">
        <Navbar/>

        <main>
            
           <Card/>
           <Card/>
           <Card/>
        </main>

        <Footer/>
    </div>
   ) 
}

export default Home;