import React from "react";
import { graphql } from "gatsby";

import Contact from "./../components/Contact";
import Hero from "../components/Hero";
import Layout from "./../components/layout";
import SEO from "./../components/seo";

export default ({ data }) => {
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="Kontakt" />
      <Hero img={heroImg} />
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "contactBcg.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
