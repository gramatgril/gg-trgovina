import React from "react";
import { graphql } from "gatsby";

import Banner from "./../components/Banner";
import CategoryList from "./../components/Category";
import Hero from "../components/Hero";
import Layout from "./../components/layout";
import SEO from "./../components/seo";

export default ({ data }) => {
  const categories = data.allCategories.edges;
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="Kategorije" />
      <Hero img={heroImg}>
        <Banner
          title="vse kategorije"
          info="Izberite zeljeno kategorijo in si oglejte ponudbo!"
        />
      </Hero>
      <CategoryList categories={categories} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allCategories: allContentfulKategorija {
      edges {
        node {
          id: contentful_id
          title
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    heroImg: file(relativePath: { eq: "categoryBcg.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
