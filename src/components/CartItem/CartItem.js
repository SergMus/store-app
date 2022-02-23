import React, { Component } from "react";
import s from "./../CartItem/CartItem.module.css";

class CartItem extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.content_wrap}>
          <h2 className={s.title} style={{ fontWeight: 600 }}>
            Apollo
          </h2>
          <h3 className={s.title} style={{ marginTop: 15 }}>
            Running Short
          </h3>
          <p className={s.price}>$50.00</p>
          <div className={s.sizes_wrap}>
            <button className={[s.rectangle, s.disabled].join(" ")}>XS</button>
            <button className={s.rectangle}>S</button>
            <button className={s.rectangle}>M</button>
            <button className={s.rectangle}>L</button>
          </div>
        </div>
        <div className={s.quantity_wrap}>
          <button className={s.control_btn}>
            <span className={s.span}> &mdash;</span>
            &mdash;
          </button>
          <p className={s.quantity_text}>1</p>
          <button className={s.control_btn}>&mdash;</button>
        </div>
        <div className={s.picture_wrap}>
          <button className={s.arrow_left}>&lt;</button>
          <button className={s.arrow_right}>&gt;</button>
        </div>
      </div>
    );
  }
}

export default CartItem;
