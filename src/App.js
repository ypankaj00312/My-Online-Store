import React from "react";
import Header from "./components/header";
import Productlist from "./components/productlist";
import SetSelectedProduct from "./components/setSelectedProduct";
import Cart from "./components/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Productlist />}></Route>
          <Route  path="/product/:productId" element={<SetSelectedProduct />}></Route>
          <Route  path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
