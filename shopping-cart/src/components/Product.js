import React, { useState } from "react";

const Product = (props) => {

    const [qty, setQty] = useState(1)

    const increaseQty = () => {
        setQty(prevQty => prevQty + 1);
    }

    const decreaseQty = () => {
        setQty(prevQty => {
            if (prevQty > 1) {
                return prevQty - 1
            } else {
                return prevQty
            }
        })
    }

    return (
        <div className="product" id={props.id} price={props.price} title={props.title} data-testid='product-container'>
            <div className="product-image" data-testid='product-image'>
                <img src={props.image} alt='product'/>
            </div>
            <div className="product-info" id={props.id} data-testid='product-info'>
                <h1>{props.title}</h1>
                <h2>{props.price}</h2>
                <p>{props.description}</p>
                <div className="select-quantity" data-testid='select-quantity'>
                    <h1>Quantity:</h1>
                    <button onClick={decreaseQty} data-testid='decrease-quantity'>-</button>
                    <h1 id={`${props.id}quantity`}>{qty}</h1>
                    <button onClick={increaseQty} data-testid='increase-quantity'>+</button>
                </div>
                <button onClick={props.handleClick} data-testid='add-to-cart'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product;