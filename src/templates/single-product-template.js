import React from "react";
import { graphql } from "gatsby";

import Layout from "./../components/layout";
import ProductDetails from "../components/Product/ProductDetails";
import SEO from "./../components/seo";
import PromotedProducts from "./../components/PromotedProducts/PromotedProducts";
import Advice from "../components/Advice";

export default ({ data }) => {
  const { title } = data.product;
  const { slug } = data.product.category;

  return (
    <Layout>
      <SEO title={title} />
      <ProductDetails product={data.product} categorySlug={slug} />
      <Advice embed={true} />
      <PromotedProducts />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    product: contentfulArtikel(contentful_id: { eq: $id }) {
      title
      price
      description {
        json
      }
      category {
        slug
      }
      promo
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
