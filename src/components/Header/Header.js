import React, { Component } from "react";
import s from "./Header.module.css";
import { Query } from "@apollo/client/react/components";
import logo from "./../../assets/images/logo.png";
import cart from "./../../assets/icons/EmptyCart.svg";
import dollar from "./../../assets/icons/dollar.svg";
import { Link } from "react-router-dom";
import Currency from "../Currency/Currency";
import { GET_CATEGORIES } from "../../graphql/queries";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    this.toggler = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.content}>
          <ul className={s.navigation_menu}>
            <Query query={GET_CATEGORIES}>
              {({ loading, error, data }) => {
                if (loading) return "loading...";
                if (error) return new Error(error);
                return data.categories.map((category) => {
                  return (
                    <li className={s.menu_item} key={category.name}>
                      {category.name}
                    </li>
                  );
                });
              }}
            </Query>
          </ul>
          <div className={s.logo}>
            <Link to="/product">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={s.actions}>
            <div className={s.action_currency} onClick={() => this.toggler()}>
              {this.state.isOpen ? (
                <span className={s.arrow_down}>&#8744;</span>
              ) : (
                <span className={s.arrow_up}>&#8743;</span>
              )}
              <Currency active={this.state.isOpen} />
            </div>
            <div className={s.action_cart}>
              <img src={cart} alt="empty cart" />
              <span className={s.quantity}>2</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
