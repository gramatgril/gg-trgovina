import React from "react";
import { graphql } from "gatsby";

import Layout from "./../components/layout";
import ProductList from "./../components/Product/ProductList";
import SEO from "./../components/seo";

const SingleCategoryTemplate = ({ data }) => {
  const products = data.allProducts.edges;
  const title = data.categoryName.title;

  return (
    <Layout>
      <SEO title={title} />
      <ProductList products={products} />
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
        }
      }
    }
    categoryName: contentfulKategorija(contentful_id: { eq: $id }) {
      title
    }
  }
`;
export default SingleCategoryTemplate;
