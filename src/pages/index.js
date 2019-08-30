import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import StyledHero from "../components/StyledHero";

const IndexPage = ({ data }) => {
  const img = data.file.image.fluid;

  return (
    <Layout>
      <SEO title="Home" />
      <StyledHero img={img} />
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
