import React, { useReducer } from "react";
import { graphql } from "gatsby";

import { AdviceList } from "./../components/Advice/";
import { ProductList, PromotedProducts } from "./../components/Product";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Layout from "./../styles/layout";
import SEO from "./../components/seo";
import SortMenu from "../components/SortMenu";

import { productReducer as reducer } from "./../utils";

/*
  Displays a page of products belonging to a single category.
*/

export default ({ data }) => {
  const { title, description, image } = data.category;

  const initialState = {
    searchInput: "",
    initialProducts: data.allProducts.edges,
    products: data.allProducts.edges,
  };

  // Reducer handles filtering, sorting and searching
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, searchInput } = state;

  return (
    <Layout>
      <SEO title={title} />
      <Hero img={image.fluid}></Hero>
      <Banner title={title} info={description.description} />
      <SortMenu dispatch={dispatch} searchInput={searchInput} />
      <ProductList products={products} />
      <AdviceList embed={true} />
      <PromotedProducts embed={true} />
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
          priceUnit
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
