import React, { useEffect, useReducer } from "react";
import { graphql } from "gatsby";

import Layout from "./../styles/layout";
import { ProductList } from "./../components/Product";
import SEO from "./../components/seo";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { AdviceList } from "./../components/Advice/";
import SortMenu from "../components/SortMenu";

import { productReducer as reducer, types, sortProducts } from "./../utils";

export default ({ data }) => {
  const { title, description, image } = data.category;

  // Reducers initial state is data pulled from graphQl
  const initialState = {
    inputValue: "",
    sortBy: types.DATE_UP,
    products: data.allProducts.edges,
  };

  // Reducer for sorting and filtering products
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, inputValue, sortBy } = state;

  // Updates product list on sort setting change
  useEffect(() => {
    dispatch({
      type: types.UPDATE_PRODUCTS,
      payload: sortProducts(products, sortBy),
    });
  }, [sortBy]);

  // Shows all products
  const showAllProducts = () => {
    const { products } = initialState;

    dispatch({ type: types.SHOW_ALL, products });
  };

  return (
    <Layout>
      <SEO title={title} />
      <Hero img={image.fluid}></Hero>
      <Banner title={title} info={description.description} />
      <SortMenu
        dispatch={dispatch}
        showAllProducts={showAllProducts}
        inputValue={inputValue}
      />

      <ProductList products={products} />
      <AdviceList embed={true} />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    allProducts: allContentfulArtikel(
      filter: { category: { contentful_id: { eq: $id } } }
    ) {
      edges {
        node {
          title
          price
          id: contentful_id
          slug
          promo
          createdAt
          category {
            slug
          }
          images {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    category: contentfulKategorija(contentful_id: { eq: $id }) {
      title
      description {
        description
      }
      image {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
