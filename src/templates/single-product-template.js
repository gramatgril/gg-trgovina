import React from "react";
import { graphql } from "gatsby";

import Layout from "./../components/layout";
import ProductDetails from "../components/Product/ProductDetails";
import SEO from "./../components/seo";

export default ({ data }) => {
  const { title } = data.product;
  return (
    <Layout>
      <SEO title={title} />
      <ProductDetails product={data.product} />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    product: contentfulArtikel(contentful_id: { eq: $id }) {
      title
      price
      discount
      promo
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
