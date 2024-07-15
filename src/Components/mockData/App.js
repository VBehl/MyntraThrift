// import "./App.css";
// import HomePage from "./components/home/HomePage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ItemDetail from "./components/itemDetail/ItemDetail";
// import Navbar from "./components/navbar/Navbar";
// import Cart from "./components/cart/Cart";
// import Orders from "./components/orders/Orders";
// import Checkout from "./components/checkout/Checkout";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <div>
//           <Navbar />
//         </div>
//         <Routes>
//           <Route path="/item/:id" element={<ItemDetail />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route exact path="/" element={<HomePage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/item/:id" component={ItemDetail} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
