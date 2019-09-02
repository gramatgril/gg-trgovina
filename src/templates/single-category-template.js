import React from "react";
import { graphql } from "gatsby";

import Layout from "./../components/layout";
import ProductList from "./../components/Product";
import SEO from "./../components/seo";

export default ({ data }) => {
  const { categoryTitle, categorySlug } = data.category;
  const products = data.allProducts.edges;

  return (
    <Layout>
      <SEO title={categoryTitle} />
      <ProductList products={products} categorySlug={categorySlug} />
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
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    category: contentfulKategorija(contentful_id: { eq: $id }) {
      categoryTitle: title
      categorySlug: slug
    }
  }
`;
