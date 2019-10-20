import React from "react";
import { graphql } from "gatsby";

import { AdviceList } from "../components/Advice";
import Layout from "./../styles/layout";
import { ProductDetails } from "../components/Product";
import { PromotedProducts } from "./../components/Product";
import SEO from "./../components/seo";

export default ({ data }) => {
  const { title } = data.product;
  const { slug } = data.product.category;

  return (
    <Layout>
      <SEO title={title} />
      <ProductDetails product={data.product} categorySlug={slug} />
      <AdviceList embed={true} />
      <PromotedProducts />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    product: contentfulArtikel(contentful_id: { eq: $id }) {
      title
      price
      oldPrice
      priceUnit
      description {
        json
      }
      category {
        slug
      }
      promo
      images {
        id: contentful_id
        fluid(maxHeight: 400) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
