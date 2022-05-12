import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        <div className="product" id={props.id} price={props.price} title={props.title} okay={props.okay} money={props.money}>
            <div className="product-image">
                <img src={props.image} alt=''/>
            </div>
            <h1>{props.title}</h1>
            <h2>{props.price}</h2>
            <button onClick={props.handleClick}>Add to cart</button>
            <p>{props.description}</p>
            <p>{props.okay}</p>
        </div>
    )
}

export default Product;