import React from "react";
import { graphql } from "gatsby";

import Hero from "../components/Hero";
import Layout from "../styles/layout";
import SEO from "../components/seo";
import Promotion from "./../components/Promotion";

export default ({ data }) => {
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="Akcija" />
      <Hero img={heroImg} />
      <Promotion />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "akcijaBcg.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
