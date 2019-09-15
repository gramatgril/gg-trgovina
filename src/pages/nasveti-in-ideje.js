import React from "react";
import { graphql } from "gatsby";

import Advice from "../components/Advice/Advice";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({ data }) => {
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="Nasveti" />
      <Hero img={heroImg} />
      <Banner
        title="Nasveti in ideje"
        info="Vas zanimajo koraki do obnove, novosti na tržišču ali zgolj dober nasvet mojstra? Boste sam svoj mojster pa vam manjka nekaj tehničnih podatkov? Tu boste lahko prebirali med različnimi članki in izvedeli veliko dobrih nasvetov."
      />
      <Advice embed={false} />
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
