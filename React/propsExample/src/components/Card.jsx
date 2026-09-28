

let Card = (props)=>{
    console.log(props)

    let {product , price , rating} = props

    return(
        <div className="card">

                <h1>product name : {product} </h1>
                <h2>price : {price} /- Rs</h2>
                <h3>rating : {rating}</h3>
        </div>
    )
}

export default Card;