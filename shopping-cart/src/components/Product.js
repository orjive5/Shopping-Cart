import React from "react";

const Product = (props) => {
    return (
        <div className="product" id={props.id} price={props.price} title={props.title}>
            <div className="product-image">
                <img src={props.image} alt=''/>
            </div>
            <div className="product-info" id={props.id}>
                <h1>{props.title}</h1>
                <h2>{props.price}</h2>
                <p>{props.description}</p>
                <input type='number' min={1} />
                <button onClick={props.handleClick}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product;