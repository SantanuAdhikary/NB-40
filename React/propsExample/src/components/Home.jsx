import Card from "./Card";

let Home = () => {
  return (
    <>
      <header>
        <h1> this is home component</h1>
      </header>

      <main>
        <Card product={"laptop"} price={70000} rating={4.5} />
        <Card product={"mobile"} price = {50000} rating={4}/>
        <Card product ={"watch"} price={10000} rating={3.5}/>
      </main>
    </>
  )
}

export default Home;
