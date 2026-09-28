
import products from '../data.json'
import Card from './Card';

const Home = () => {
  console.log(products);
  return (
    <>
      <nav>
           <h1>productTask</h1>
      </nav>
      <main>
          {
             products.map((product)=>{
                return <Card 
                            title={product.title}
                            price ={product.price}
                            rating = {product.rating.rate}
                            link = {product.image}
                            key={product.id}
                        />
             })
          }
      </main>

    </>
  )
}

export default Home