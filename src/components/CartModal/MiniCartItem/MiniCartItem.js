import React, { Component } from "react";
import s from "./../MiniCartItem/MiniCartItem.module.css";

class MiniCartItem extends Component {
  render() {
    return (
      <>
        <div className={s.section}>
          <div className={s.content_wrap}>
            <p>Apollo</p>
            <p>Running Short</p>
            <p className={s.price}>$50.00</p>
            <div className={s.sizes_wrap}>
              <button className={[s.rectangle, s.disabled].join(" ")}>
                XS
              </button>
              <button className={s.rectangle}>S</button>
              <button className={s.rectangle}>M</button>
              <button className={s.rectangle}>L</button>
            </div>
          </div>
          <div className={s.quantity_wrap}>
            <button className={s.control_btn}>
              <span className={s.span1}> &mdash;</span>
              <span className={s.span2}> &mdash;</span>
            </button>
            <p className={s.quantity_text}>1</p>
            <button className={s.control_btn}>
              <span className={s.span2}> &mdash;</span>
            </button>
          </div>
          <div className={s.picture_wrap}>
            <button className={s.arrow_left}>&lt;</button>
            <button className={s.arrow_right}>&gt;</button>
          </div>
        </div>
      </>
    );
  }
}

export default MiniCartItem;
