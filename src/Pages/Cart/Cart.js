import React, { Component } from "react";
import CartItem from "../../components/CartItem/CartItem";
import s from "./../Cart/Cart.module.css";

class Cart extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.content_wrapper}>
          <h1 className={s.title}>Cart</h1>
          <div className={s.cart_wrapper}>
            <CartItem />
            <CartItem />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
