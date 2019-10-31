import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import ProductList from "./ProductList";
import Title from "../Title";

const getNewProducts = graphql`
  {
    products: allContentfulArtikel(
      limit: 4
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          category {
            slug
          }
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

const NewProducts = () => {
  const { products } = useStaticQuery(getNewProducts);

  return (
    <Wrapper>
      <Title title="novi" subtitle="izdelki" />
      <ProductList products={products.edges} />
    </Wrapper>
  );
};

export default NewProducts;

const Wrapper = styled.div`
  padding: 3rem 0 0;
`;
