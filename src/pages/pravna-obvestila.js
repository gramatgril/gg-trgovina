import React from "react";
import { graphql } from "gatsby";

import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Legal from "../components/Legal/Legal";
import SEO from "../components/seo";

export default ({ data }) => {
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="Pravna obvestila" />
      <Hero img={heroImg}></Hero>
      <Banner title="Pravna obvestila" />
      <Legal />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "legalBcg.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
