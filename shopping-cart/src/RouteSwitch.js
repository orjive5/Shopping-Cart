import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/shop' element={<Shop />}/>
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;