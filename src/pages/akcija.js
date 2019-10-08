import React from "react";
import { graphql } from "gatsby";

import Banner from "./../components/Banner";
import Hero from "../components/Hero";
import Layout from "../styles/layout";
import Promotion from "./../components/Promotion";
import SEO from "../components/seo";

export default ({ data }) => {
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="Akcija" />
      <Hero img={heroImg}>
        <Banner
          title="Akcije in promocije"
          info="Oglejte si izdelke v akciji ter posebne priložnosti"
        />
      </Hero>
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
