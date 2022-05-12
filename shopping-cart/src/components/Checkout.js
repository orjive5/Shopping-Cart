import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductData from "./ProductData";

const Checkout = (props) => {
    const [cartContent, setCartContent] = useState(ProductData);

    const removeFromCart = (event) => {
        setCartContent(prevCartContent => {
            for (let i = 0; i < prevCartContent.length; i++){
                if (prevCartContent[i].id === event.target.parentNode.id) {
                    prevCartContent[i].inTheCart = false
                }
            }
            return [...prevCartContent]
        })
    }

    const displayCart = cartContent.map(element => {
        if (element.inTheCart) {
            return (
                <div key={element.id} id={element.id}>
                    <div className="product-image"></div>
                    <h1>{element.title}</h1>
                    <p>{element.price}</p>
                    <button onClick={removeFromCart}>Remove from cart</button>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    })

    return (
        <div className="checkout">
            <nav>
                <Link to='/'>
                    <h1>HOME</h1>
                </Link>
                <Link to='/shop'>
                    <h1>SHOP</h1>
                </Link>
                <Link to='/contact'>
                    <h1>CONTACT</h1>
                </Link>
            </nav>
            <main>
                <h1>YOUR CART</h1>
                {displayCart}
                <button onClick={() => console.log('BOUGHT!')}>BUY</button>
            </main>
            <footer>
                Made by orjive5
            </footer>
        </div>
    )
}

export default Checkout;