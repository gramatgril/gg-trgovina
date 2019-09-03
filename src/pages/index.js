import React from "react";
import { graphql } from "gatsby";

import Banner from "./../components/Banner/Banner";
import Category from "./../components/Category";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Services from "../components/Services";
import NewProducts from "../components/NewProducts";
import PromotedProducts from "./../components/PromotedProducts";

export default ({ data }) => {
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="Doma" />
      <Hero img={heroImg}>
        <Banner title="Dobrodošli!" info="Oglejte si vse izdelke v akciji" />
      </Hero>
      <Category />
      <Services />
      <PromotedProducts />
      <NewProducts />
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
