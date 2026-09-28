
const Card = (props) => {

let {title,price ,rating,link} =props
  
return (
    <div className="productCard">
         <img src={link} alt="image" />
          <p>{title}</p>
          <p>{price * 90} /- Rs</p>
          <p>{rating} ⭐</p>
    </div>
  )
}

export default Card