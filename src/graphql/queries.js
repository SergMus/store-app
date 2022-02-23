import { gql } from "@apollo/client";

export const GET_CURRENCY = gql`
  query Currency {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      name
    }
  }
`;

export const GET_ONE_CATEGORY_LIST = gql`
  query Category {
    category(input: { title: "all" }) {
      name
      products {
        id
        name
        brand
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        inStock
        description
      }
    }
  }
`;
