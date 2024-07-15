// import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/home/HomePage";
import Checkout from "./Components/checkout/Checkout";
import Cart from "./Components/cart/Cart";
import Orders from "./Components/orders/Orders";
import Navbar from "./Components/navbar/Navbar";
import ItemDetail from "./Components/itemDetails/ItemDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;