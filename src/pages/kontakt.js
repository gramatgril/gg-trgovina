import React from "react";
import { graphql } from "gatsby";

import Banner from "../components/Banner";
import Contact from "./../components/Contact";
import Hero from "../components/Hero";
import Layout from "./../components/layout";
import SEO from "./../components/seo";

export default ({ data }) => {
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="Kontakt" />
      <Hero img={heroImg}>
        <Banner
          title="Obrazec za povpraševanje"
          info="pošljite poizvedbo, vprašanje ali predlog"
        />
      </Hero>
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
