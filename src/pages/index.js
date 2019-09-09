import React from "react";
import { graphql } from "gatsby";

import Category from "./../components/Category";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Services from "../components/Services";
import NewProducts from "../components/NewProducts";
import PromotedProducts from "./../components/PromotedProducts";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Kategorije" />
      <Category />
      <Services />
      <PromotedProducts />
      <NewProducts />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
