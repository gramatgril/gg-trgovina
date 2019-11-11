import React, { useReducer } from "react";
import { graphql } from "gatsby";

import { AdviceList } from "./../components/Advice/";
import { ProductList, PromotedProducts } from "./../components/Product";
import Banner from "../components/Banner";
import ColorMix from "../components/ColorMix";
import Hero from "../components/Hero";
import Layout from "./../styles/layout";
import SEO from "./../components/seo";
import SortMenu from "../components/SortMenu";

import { productReducer as reducer } from "./../utils";

/*
  Displays a page of products belonging to a single category.
*/

export default ({ data }) => {
  // Category information based on graphql query
  const { title, description, image, slug } = data.category;

  // Initial state for sort menu reducer
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
      <Hero img={image.fluid}>
        <Banner title={title} info={description.description} />
      </Hero>
      <SortMenu dispatch={dispatch} searchInput={searchInput} />
      <ProductList products={products} />
      {/* ColorMixing promotional component visible only on "Barve in Fasade page" */}
      {slug === "barve-in-fasade" && <ColorMix />}
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
          oldPrice
          priceUnit
          id: contentful_id
          slug
          promo
          createdAt(formatString: "D M YYYY")
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
      slug
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
