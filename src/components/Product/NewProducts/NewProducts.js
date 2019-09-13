import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";

import NewProductsList from "./NewProductsList";

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

const NewProducts = () => {
  const { products } = useStaticQuery(getNewProducts);

  return (
    <Fragment>
      <NewProductsList products={products.edges} />
    </Fragment>
  );
};

export default NewProducts;
