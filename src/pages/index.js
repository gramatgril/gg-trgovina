import React from "react";
import { graphql } from "gatsby";

import { AdviceList } from "../components/Advice/";
import { PromotedProducts, NewProducts } from "./../components/Product";
import Category from "./../components/Category";
import Layout from "../styles/layout";
import SEO from "../components/seo";
import Services from "../components/Services";
import PresentationGramat from "../components/Presentation/";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Doma" />
      <Category />
      <PresentationGramat />
      <PromotedProducts />
      <Services />
      <NewProducts />
      <AdviceList embed={true} />
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
