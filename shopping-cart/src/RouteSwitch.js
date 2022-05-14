import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/shop' element={<Shop />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;