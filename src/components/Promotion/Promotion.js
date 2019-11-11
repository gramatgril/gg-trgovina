import React, { Fragment, useReducer } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { AdviceList } from "../Advice";
import ProductList from "./../Product/ProductList";
import SortMenu from "./../SortMenu";
import { productReducer as reducer } from "./../../utils";

const getPromotedItems = graphql`
  query {
    promotedProducts: allContentfulArtikel(
      filter: { promo: { eq: true } }
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          title
          price
          oldPrice
          priceUnit
          promo
          slug
          id: contentful_id
          category {
            slug
          }
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const Promotion = () => {
  const { promotedProducts } = useStaticQuery(getPromotedItems);

  const initialState = {
    searchInput: "",
    initialProducts: promotedProducts.edges,
    products: promotedProducts.edges,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { searchInput, products } = state;

  return (
    <Fragment>
      <SortMenu dispatch={dispatch} searchInput={searchInput} promo />
      <ProductList products={products} />
      <AdviceList embed={true} />
    </Fragment>
  );
};

export default Promotion;
