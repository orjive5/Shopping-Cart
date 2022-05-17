import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import ProductData from "./ProductData";

const Shop = (props) => {

    const [productData, setProductData] = useState(ProductData);

    const [addedToCart, setAddedToCart] = useState([]);

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const addToCart = (event) => {
        setAddedToCart(prevAddedToCart => {
            if (prevAddedToCart.includes(event.target.parentNode.id)) {
                return ([...prevAddedToCart])
            } else {
                return [...prevAddedToCart, event.target.parentNode.id]
            }
        });
        setProductData(prevProductData => {
            for (let i = 0; i < prevProductData.length; i++){
                if (event.target.parentNode.id === prevProductData[i].id) {
                    if (document.getElementById(`${event.target.parentNode.id}quantity`).innerHTML !== '1') {
                                            prevProductData[i].quantity = Number(document.getElementById(
                        `${event.target.parentNode.id}quantity`
                    ).innerHTML)
                    } else {
                        prevProductData[i].quantity = 1;
                    }
                }
            }
            return [...prevProductData];
        })
        toggleModal();
    }

    const removeFromCart = (event) => {
        let newCartContent = [];
        setAddedToCart(prevAddedToCart => {
            if (prevAddedToCart.includes(event.target.parentNode.id)) {
                newCartContent = prevAddedToCart.filter(element => element !== event.target.parentNode.id)
            }
            return [...newCartContent]
        })
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
    }, [addedToCart])

    const displayProducts = productData.map(element => {
        return (
            <Product
                key={element.id}
                title={element.title}
                price={`${element.price}$`}
                description={element.description}
                id={element.id}
                image={element.image}
                handleClick={addToCart}
            />
        )
    })

    const displayCart = productData.map(element => {
        if (addedToCart.includes(element.id)) {
            return (
                <div key={element.id} id={element.id} className='cart-item-info'>
                    <h1>{element.title}</h1>
                    <p>Item price: {element.price}$</p>
                    <p>Quantity: {element.quantity}</p>
                    <h2>For this item: {element.quantity * element.price}$</h2>
                    <button onClick={removeFromCart}>Remove</button>
                </div>
            )
        }
    })

    const totalPrice = () => {
        let itemPrice = []
        itemPrice = productData.map(element => {
            if (addedToCart.includes(element.id)) {
                return Number(element.price*element.quantity)
            } else {
                return 0
            }
        })
        let calculatedPrice = itemPrice.reduce((total, num) => total + num)
        return calculatedPrice;
    }

    const [orderPaid, setOrderPaid] = useState(false)

    const proceedToCheckout = () => {
        setOrderPaid(!orderPaid)
        setModal(false)
        setAddedToCart([]);
        setProductData(ProductData);
    }

    const closePaidMessage = () => {
        setOrderPaid(!orderPaid)
    }

    if (orderPaid) {
        document.body.classList.add('active-payment')
    } else {
        document.body.classList.remove('active-payment')
    }

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
                    <h1 onClick={toggleModal}>YOUR CART</h1>
                <Link to='/contact'>
                    <h1>CONTACT</h1>
                </Link>
                <div className="checkout-icon" onClick={toggleModal}>
                    <svg width="60" height="60" viewBox="0 0 24 24" className="checkout-icon-cart-home"><path fill="white" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" /></svg>
                    <div className="checkout-icon-number-home">
                        <h2>{addedToCart.length}</h2>
                    </div>
                </div>
            </nav>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h1>Shopping Cart</h1>
                        <button onClick={toggleModal} className="close-modal">X</button>
                        <div id="items-info-div">{displayCart}</div>
                        <div className="total-and-checkout">
                            {totalPrice() === 0 ? <h2>Your cart is empty</h2> : <h2>Total price: {totalPrice()}$</h2>}
                            {totalPrice() !== 0 && (
                                <div className="continue-or-checkout">
                                    <button className="checkout-button" onClick={toggleModal}>Continue shopping</button>
                                    <button className="checkout-button" onClick={proceedToCheckout}>Proceed to checkout</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {orderPaid && (
                <div className="successful-payment">
                    <div onClick={closePaidMessage} className="checkout-overlay"></div>
                    <div className="payment-message">
                        <button onClick={closePaidMessage} className="close-paid-message">X</button>
                        <h1>CONGRATULATIONS!</h1>
                        <h2>Your order has been placed</h2>
                        <button onClick={closePaidMessage} className="continue-shopping">Continue shopping</button>
                    </div>
                </div>)}
            <main className="shop-main">
                {displayProducts}
            </main>
            <footer>
                <p>Made by orjive5</p>
                <svg onClick={()=> window.open("https://github.com/orjive5", "_blank")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="github-icon"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </footer>
        </div>
    )
}

export default Shop;