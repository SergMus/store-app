import React, { Component } from "react";
import s from "./../Currency/Currency.module.css";
import { Query } from "@apollo/client/react/components";
import { GET_CURRENCY } from "../../graphql/queries";

class Currency extends Component {
  render() {
    return (
      <form className={s.container_list}>
        <select className={s.currency_list} name="usd">
          <Query query={GET_CURRENCY}>
            {({ loading, error, data }) => {
              if (loading) return "loading...";
              if (error) return new Error(error);
              console.log(data);
              return data.currencies.map((currency) => {
                return (
                  <option
                    className={s.currency_item}
                    value={currency.symbol}
                    key={currency.symbol}
                  >
                    {currency.symbol} {currency.label}
                  </option>
                );
              });
            }}
          </Query>
        </select>
      </form>
    );
  }
}

export default Currency;
