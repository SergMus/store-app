import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./Pages/ProductList/ProductList";
import { Routes, Route } from "react-router-dom";
import ProductDescription from "./Pages/ProductDescription/ProductDescription";
import Cart from "./Pages/Cart/Cart";
import CartModal from "./components/CartModal/CartModal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="list" element={<ProductList />} />
          <Route path="product" element={<ProductDescription />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <CartModal />
      </div>
    );
  }
}
export default App;
