import React from "react";
import { graphql } from "gatsby";

import Banner from "./../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SecondaryButton } from "./../components/Button";

export default ({ data }) => {
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="Doma" />
      <Hero img={heroImg}>
        <Banner title="Dobrodošli!" info="Oglejte si vse izdelke v akciji">
          <SecondaryButton text="Vsi izdelki" />
        </Banner>
      </Hero>
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
