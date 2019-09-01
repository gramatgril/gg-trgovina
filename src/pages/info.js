import React from "react";
import { graphql } from "gatsby";

import Hero from "../components/Hero";
import Layout from "./../components/layout";
import SEO from "./../components/seo";
import Banner from "../components/Banner";
import About from "../components/About/About.js";

const Info = ({ data }) => {
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="O nas" />
      <Hero img={heroImg}>
        <Banner title="o nas" />
      </Hero>
      <About />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "infoBcg.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Info;
