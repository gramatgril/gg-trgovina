import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { AdviceList } from "../Advice";
import Banner from "./../Banner";
import ProductList from "./../Product/ProductList";

const getPromotedItems = graphql`
  query {
    promotedProducts: allContentfulArtikel(
      filter: { promo: { eq: true } }
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          title
          price
          priceUnit
          promo
          slug
          id: contentful_id
          category {
            slug
          }
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

const Promotion = () => {
  const { promotedProducts } = useStaticQuery(getPromotedItems);
  return (
    <Fragment>
      <Banner
        title="Akcije in promocije"
        info="Oglejte si izdelke v akciji ter posebne priložnosti"
      />
      <ProductList products={promotedProducts.edges} />
      <AdviceList embed={true} />
    </Fragment>
  );
};

export default Promotion;
