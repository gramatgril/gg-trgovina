import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Advice from "../Advice/Advice";
import Banner from "./../Banner";
import PromotionList from "./PromotionList";

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
      <PromotionList products={promotedProducts.edges} />
      <Advice embed={true} />
    </Fragment>
  );
};

export default Promotion;
