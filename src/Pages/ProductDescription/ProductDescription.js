import React, { Component } from "react";
import s from "./../ProductDescription/ProductDescription.module.css";
import small_pic from "./../../assets/images/test.jpg";
import big_pic from "./../../assets/images/test.jpg";

class ProductDescription extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.frames}>
            <img src={small_pic} alt="small" className={s.small_pic} />
            <img src={small_pic} alt="small" className={s.small_pic} />
            <img src={small_pic} alt="small" className={s.small_pic} />
          </div>
          <div className={s.main_picture}>
            <img src={big_pic} alt="big" className={s.big_pic} />
          </div>
          <div className={s.aside_content}>
            <div className={s.heading}>
              <h2>Apollo</h2>
              <h3>Running Short</h3>
            </div>
            <div className={s.size}>
              <h4 className={s.title}>SIZE:</h4>
              <div className={s.sizes_wrap}>
                <button className={[s.rectangle, s.disabled].join(" ")}>
                  XS
                </button>
                <button className={s.rectangle}>S</button>
                <button className={s.rectangle}>M</button>
                <button className={s.rectangle}>L</button>
              </div>
            </div>
            <div className={s.price_wrap}>
              <h4 className={s.title}>PRICE:</h4>
              <p className={s.price}>$50.00</p>
            </div>
            <button className={s.btn}>ADD TO CART</button>
            <p className={s.text}>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
