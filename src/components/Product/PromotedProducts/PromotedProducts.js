import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";

import PromotedProductsList from "./PromotedProductsList";

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
          image {
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
      <PromotedProductsList products={products.edges} />
    </Fragment>
  );
};

export default PromotedProducts;
