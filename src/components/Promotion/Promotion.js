import React, { Fragment, useReducer, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { AdviceList } from "../Advice";
import ProductList from "./../Product/ProductList";
import SortMenu from "./../SortMenu";
import { productReducer as reducer } from "./../../utils";
import { enhanceProduct } from "./../../utils/enhanceProduct";
import { LOAD_PRODUCTS } from "./../../utils/constants";

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
    initialProducts: [],
    products: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { searchInput, products } = state;

  // Adds discount field to fetched products and sends it to state
  useEffect(() => {
    const enhancedProducts = enhanceProduct(promotedProducts.edges);
    dispatch({ type: LOAD_PRODUCTS, enhancedProducts });
  }, []);

  return (
    <Fragment>
      <SortMenu dispatch={dispatch} searchInput={searchInput} promo />
      <ProductList products={products} />
      <AdviceList embed={true} />
    </Fragment>
  );
};

export default Promotion;
