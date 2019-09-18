import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";

import ProductList from "./../ProductList";
import Title from "../../Title";

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
    <Fragment>
      <Title title="novi" subtitle="izdelki" />
      <ProductList products={products.edges} />
    </Fragment>
  );
};

export default NewProducts;
