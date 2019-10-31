import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import ProductList from "./ProductList";
import Title from "../Title";

const getPromoItems = graphql`
  {
    products: allContentfulArtikel(
      filter: { promo: { eq: true } }
      limit: 4
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          price
          oldPrice
          priceUnit
          promo
          category {
            slug
          }
          id: contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const PromotedProducts = () => {
  const { products } = useStaticQuery(getPromoItems);

  return (
    <Wrapper>
      <Title title="Promocije" subtitle="in akcije" />
      <ProductList products={products.edges} path="/akcija" text="vse akcije" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem 0 0;
`;

export default PromotedProducts;
