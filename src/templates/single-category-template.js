import React from "react";
import { graphql } from "gatsby";

import Layout from "./../components/layout";
import ProductList from "./../components/Product";
import SEO from "./../components/seo";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";

export default ({ data }) => {
  const { allProducts } = data;

  const { title, description, image } = data.category;

  return (
    <Layout>
      <SEO title={title} />
      <Hero img={image.fluid}>
        <Banner title={title} info={description.description} />
      </Hero>
      <ProductList products={allProducts.edges} />
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
          discount
          promo
          category {
            slug
          }
          image {
            fluid {
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
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
