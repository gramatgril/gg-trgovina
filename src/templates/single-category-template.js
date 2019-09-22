import React from "react";
import { graphql } from "gatsby";

import Layout from "./../styles/layout";
import { ProductList } from "./../components/Product";
import SEO from "./../components/seo";
import Hero from "../components/Hero";
import Banner from "../components/Banner/Banner";
import { AdviceList } from "./../components/Advice/";

export default ({ data }) => {
  const { allProducts } = data;

  const { title, description, image } = data.category;

  return (
    <Layout>
      <SEO title={title} />
      <Hero img={image.fluid}></Hero>
      <Banner title={title} info={description.description} />
      <ProductList products={allProducts.edges} />
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
