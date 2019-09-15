import React from "react";
import { graphql } from "gatsby";

import Advice from "../components/Advice/";
import Category from "./../components/Category";
import Layout from "../components/layout";
import NewProducts from "../components/Product/NewProducts";
import PromotedProducts from "./../components/Product/PromotedProducts";
import SEO from "../components/seo";
import Services from "../components/Services";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Ponudba" />
      <Category />
      <Services />
      <PromotedProducts />
      <Advice embed={true} />
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
