import React, { Component } from "react";
import s from "./../CartModal/CartModal.module.css";
import MiniCartItem from "./MiniCartItem/MiniCartItem";

class CartModal extends Component {
  render() {
    return (
      <div className={s.modal}>
        <div className={s.wrapper}>
          <div className={s.container}>
            <div className={s.title}>
              My Bag
              <span>, 2 Items</span>
            </div>
            <MiniCartItem />
            <MiniCartItem />
            <div className={s.total}>
              <span className={s.total_txt}>Total</span>
              <span className={s.total_price}>$100.00</span>
            </div>
            <div className={s.btns_group}>
              <button className={[s.btn, s.btn_view].join(" ")}>
                view bag
              </button>
              <button className={[s.btn, s.btn_check].join(" ")}>
                check out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartModal;
