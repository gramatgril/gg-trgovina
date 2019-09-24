import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";

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
    <Fragment>
      <Title title="posebna" subtitle="ponudba" />
      <ProductList products={products.edges} path="/akcija" text="vse akcije" />
    </Fragment>
  );
};

export default PromotedProducts;
