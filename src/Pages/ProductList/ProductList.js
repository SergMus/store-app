import React, { Component } from "react";
import s from "./ProductList.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { GET_ONE_CATEGORY_LIST } from "../../graphql/queries";
import { graphql } from "@apollo/client/react/hoc";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { activeCategory: [] };
  }
  componentDidUpdate(prevProps) {
    if (this.props.data.category !== prevProps.data.category) {
      this.setState({ activeCategory: this.props.data.category.products });
    }

    console.log(this.state.activeCategory);
  }
  render() {
    return (
      <div className={s.container}>
        <div className={s.content_wrapper}>
          <h1 className={s.title}>Category name</h1>
          <div className={s.list_wrapper}>
            {this.state.activeCategory.map((card) => {
              return <ProductCard card={card} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(GET_ONE_CATEGORY_LIST)(ProductList);
