import React from "react";
import { graphql } from "gatsby";

import { AdviceList } from "../components/Advice/";
import { PromotedProducts, NewProducts } from "./../components/Product";
import Category from "./../components/Category";
import Layout from "../styles/layout";
import SEO from "../components/seo";
import Services from "../components/Services";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Doma" />
      <Category />
      <Services />
      <PromotedProducts />
      <AdviceList embed={true} />
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
