import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact">
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
                <Link to='/shop'>
                    <h1>SHOP</h1>
                </Link>
                <Link to='/'>
                    <h1>HOME</h1>
                </Link>
                <Link to='/checkout' className="checkout-icon">
                    <div>
                        <svg  width="60" height="60" viewBox="0 0 24 24" className="checkout-icon-cart-home"><path fill="currentColor" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" /></svg>
                        <div className="checkout-icon-number-home">
                            <h2>0</h2>
                        </div>
                    </div>
                </Link>
            </nav>
            <main className="main-contact">
                <div className="contact-info">
                    <h1>SEVEN SAMURAI STORE, Inc.</h1>
                    <br/>
                    <p>
                        Naamura 6 building 1F 2-25-6 Kabukicho Shinjuku,
                        <br/>
                        Tokyo 160-0021, Japan
                        <br/>
                        <br/>
                        +81 3-6357-6411
                        <br />
                        <br/>
                        order＠sevensamurai.jp
                    </p>
                </div>
            </main>
            <footer>
                <p>Made by orjive5</p>
                <svg onClick={()=> window.open("https://github.com/orjive5", "_blank")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="github-icon"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </footer>
        </div>
    )
}

export default Contact;