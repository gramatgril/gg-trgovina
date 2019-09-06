import React from "react";
import { graphql } from "gatsby";

import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Ideas from "../components/Ideas";
import Layout from "./../components/layout";
import SEO from "./../components/seo";

export default ({ data }) => {
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="Nasveti in ideje" />
      <Hero img={heroImg}>
        <Banner title="Nasveti in ideje" />
      </Hero>
      <Ideas />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "nasveti.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
