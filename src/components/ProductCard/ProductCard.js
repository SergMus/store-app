import React, { Component } from "react";
import s from "./ProductCard.module.css";
import img from "./../../assets/images/image1.jpg";
import cart from "./../../assets/icons/cart_white.svg";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let {
      card: { brand, name, gallery, prices, id },
    } = this.props;

    return (
      <div className={s.container} key={id}>
        <div className={s.image_wrapper}>
          <img src={gallery[0]} alt="images" className={s.images} />
          <span className={s.badge}>
            <img src={cart} alt="cart" />
          </span>
        </div>

        <div className={s.text_wrapper}>
          <div className={s.description}>
            {brand} {name}
          </div>
          <div className={s.price}>
            {" "}
            {prices[0].currency.symbol} {prices[0].amount}{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
