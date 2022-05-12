import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import ProductData from "./ProductData";

const Shop = (props) => {

    const [productData, setProductData] = useState(ProductData);

    const [addedToCart, setAddedToCart] = useState([]);


    const addToCart = (event) => {
        setAddedToCart(prevAddedToCart => {
            if (prevAddedToCart.includes(event.target.parentNode.id)) {
                return ([...prevAddedToCart])
            } else {
                return [...prevAddedToCart, event.target.parentNode.id]
            }
        });
        // console.log(productData)
    }

    useEffect(() => {
        setProductData(prevProductData => {
            for (let i = 0; i < prevProductData.length; i++){
                if (addedToCart.includes(prevProductData[i].id)) {
                    prevProductData[i].inTheCart = true
                }
            }
            return [...prevProductData];
        })
        console.log(productData)
    }, [addedToCart])

    const displayProducts = productData.map(element => {
        return (
            <Product
                key={element.id}
                title={element.title}
                price={element.price}
                description={element.description}
                id={element.id}
                image={element.image}
                handleClick={addToCart}
                // addedToCart={addedToCart}
            />
        )
    })

    return (
        <div className="shop">
            <nav>
                <Link to='/' className="samurai-logo">
                    <div className="samurai-logo">
                        <img src="images/samurai-logo.png" alt="samurai logo" />
                        <div>
                            <h1>SEVEN</h1>
                            <h1>SAMURAI</h1>
                        </div>
                    </div>
                </Link>
                <Link to='/'>
                    <h1>HOME</h1>
                </Link>
                <Link to='/contact'>
                    <h1>CONTACT</h1>
                </Link>
                <Link
                    className="checkout-icon"
                    to='/checkout'
                >
                    <h1>CHECKOUT</h1>
                </Link>
            </nav>
            <main className="shop-main">
                {displayProducts}
            </main>
            <footer>
                Made by orjive5
            </footer>
        </div>
    )
}

export default Shop;